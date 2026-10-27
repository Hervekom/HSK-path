// POST /api/tutor — one message to Laoshi. Shared by the Vercel function and the local Express server.
// Order: sign-in check → input check → quota check (shared key only) → model → count the message.
import { createClient } from '@supabase/supabase-js';
import { chat, ProviderError, serverProviderConfig, userProviderConfig, type ProviderConfig } from './ai/provider.js';
import {
  buildEvaluationPrompt,
  buildSystemPrompt,
  buildTurns,
  EVAL_LIMITS,
  LIMITS,
  parseEvaluation,
  parseEvaluationInput,
  parseTutorInput,
  parseTutorReply,
  replyToHistory,
} from './tutor.js';

export interface TutorHttpResult {
  status: number;
  body: Record<string, unknown>;
}

type Headers = Record<string, string | string[] | undefined>;

function header(headers: Headers, name: string): string {
  const v = headers[name] ?? headers[name.toLowerCase()];
  return (Array.isArray(v) ? v[0] : v || '').trim();
}

const fail = (status: number, error: string, extra: Record<string, unknown> = {}): TutorHttpResult => ({
  status,
  body: { ok: false, error, ...extra },
});

export async function handleTutor(body: unknown, headers: Headers): Promise<TutorHttpResult> {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) return fail(503, 'not_configured');

  // 1. Signed-in students only (keeps the endpoint from being used as an open proxy).
  const token = header(headers, 'authorization').replace(/^Bearer\s+/i, '');
  if (!token) return fail(401, 'auth_required');
  const db = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: `Bearer ${token}` } },
  });
  const { data: userData, error: userError } = await db.auth.getUser(token);
  if (userError || !userData?.user) return fail(401, 'auth_required');

  // 2. Input: a chat message, or a check of the lesson's speaking task.
  const evaluating = (body as { mode?: unknown } | null)?.mode === 'evaluate';
  const evalInput = evaluating ? parseEvaluationInput(body) : null;
  if (evalInput && 'error' in evalInput) return fail(400, evalInput.error);
  const input = evaluating ? null : parseTutorInput(body);
  if (input && 'error' in input) return fail(400, input.error, { maxChars: LIMITS.messageChars });

  // 3. Whose key: the student's own (not counted) or the shared server key (counted).
  const ownKey = header(headers, 'x-laoshi-key');
  let cfg: ProviderConfig | null;
  const usingOwnKey = Boolean(ownKey);
  if (usingOwnKey) {
    cfg = userProviderConfig(header(headers, 'x-laoshi-provider'), ownKey);
    if (!cfg) return fail(400, 'own_key_invalid');
  } else {
    cfg = serverProviderConfig();
    if (!cfg) return fail(503, 'not_configured');
    const { data: status, error } = await db.rpc('tutor_quota_status');
    if (error || !status) {
      console.error('[laoshi] quota status unavailable', error?.code || '');
      return fail(503, 'quota_unavailable');
    }
    const s = status as { used: number; limit: number; globalUsed: number; globalLimit: number };
    if (s.used >= s.limit) return fail(429, 'quota_user', { used: s.used, limit: s.limit });
    if (s.globalUsed >= s.globalLimit) return fail(429, 'quota_global', { used: s.used, limit: s.limit });
  }

  // 4. Model call.
  let result;
  try {
    result =
      evalInput && !('error' in evalInput)
        ? await chat(cfg, {
            system: buildEvaluationPrompt(evalInput),
            turns: [{ role: 'user', content: evalInput.messages.map((m, i) => `${i + 1}. ${m}`).join('\n') }],
            maxTokens: EVAL_LIMITS.maxTokens,
            temperature: 0.2,
          })
        : await chat(cfg, {
            system: buildSystemPrompt(input as Exclude<typeof input, null | { error: string }>),
            turns: buildTurns(input as Exclude<typeof input, null | { error: string }>),
            maxTokens: LIMITS.maxTokens,
            temperature: 0.5,
          });
  } catch (err) {
    const code = err instanceof ProviderError ? err.code : 'unavailable';
    // Log the error kind only: never the key or the conversation.
    console.error('[laoshi] provider error', cfg.provider, code, err instanceof ProviderError ? err.status ?? '' : '');
    if (code === 'rate_limited') return fail(429, usingOwnKey ? 'own_key_rate_limited' : 'provider_busy');
    if (code === 'invalid_key') return usingOwnKey ? fail(400, 'own_key_rejected') : fail(503, 'not_configured');
    if (code === 'timeout') return fail(504, 'timeout');
    return fail(502, 'provider_error');
  }

  const evaluation = evaluating ? parseEvaluation(result.text) : null;
  if (evaluating && !evaluation) return fail(502, 'provider_error');
  const reply = evaluating ? null : parseTutorReply(result.text);
  if (reply && !reply.reply) return fail(502, 'provider_error');

  // 5. Count the message on the shared key once the student actually got an answer.
  let quota: { used: number; limit: number } | null = null;
  if (!usingOwnKey) {
    const { data } = await db.rpc('consume_tutor_quota');
    const q = data as { used?: number; limit?: number } | null;
    if (q && typeof q.used === 'number' && typeof q.limit === 'number') quota = { used: q.used, limit: q.limit };
  }
  console.log('[laoshi] reply', result.provider, result.model, 'tokens', result.totalTokens ?? '?', usingOwnKey ? 'own-key' : 'shared');

  if (evaluation) return { status: 200, body: { ok: true, evaluation, quota, ownKey: usingOwnKey } };
  return {
    status: 200,
    body: { ok: true, ...reply!, history: replyToHistory(reply!), quota, ownKey: usingOwnKey },
  };
}
