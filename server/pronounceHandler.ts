// POST /api/pronounce — transcribes a short recording of the learner (Pronunciation page).
// Order: sign-in check → audio check → quota (shared key only) → Groq Whisper → count it.
// The audio is sent to the speech model and forgotten: nothing is stored or logged.
import { createClient } from '@supabase/supabase-js';

export interface PronounceHttpResult {
  status: number;
  body: Record<string, unknown>;
}

type Headers = Record<string, string | string[] | undefined>;

export const PRONOUNCE_LIMITS = {
  /** Decoded WAV size (16 kHz mono 16-bit ≈ 32 kB per second): 15 s. */
  maxBytes: 16000 * 2 * 15 + 44,
  minBytes: 16000 * 2 * 0.2,
  timeoutMs: 20000,
};

const GROQ_URL = 'https://api.groq.com/openai/v1/audio/transcriptions';
const MODELS = ['whisper-large-v3', 'whisper-large-v3-turbo'];
// Steers the model to simplified characters and Mandarin; not a hint of what was said.
const PROMPT = '以下是普通话。';
// Phrases Whisper is known to invent on silence or noise (video-subtitle credits).
const HALLUCINATIONS = /字幕|订阅|訂閱|点赞|點贊|打赏|明镜|明鏡|感谢观看|感謝觀看|谢谢观看|謝謝觀看|Amara|请不吝|請不吝/;

function header(headers: Headers, name: string): string {
  const v = headers[name] ?? headers[name.toLowerCase()];
  return (Array.isArray(v) ? v[0] : v || '').trim();
}

const fail = (status: number, error: string, extra: Record<string, unknown> = {}): PronounceHttpResult => ({
  status,
  body: { ok: false, error, ...extra },
});

/** Base64 WAV → bytes, or an error code. */
export function parseAudio(body: unknown): Buffer | { error: string } {
  const b64 = (body as { audio?: unknown } | null)?.audio;
  if (typeof b64 !== 'string' || !b64) return { error: 'audio_missing' };
  if (b64.length > Math.ceil(PRONOUNCE_LIMITS.maxBytes / 3) * 4 + 8) return { error: 'audio_too_long' };
  const bytes = Buffer.from(b64, 'base64');
  if (bytes.length < PRONOUNCE_LIMITS.minBytes) return { error: 'audio_too_short' };
  if (bytes.length > PRONOUNCE_LIMITS.maxBytes) return { error: 'audio_too_long' };
  if (bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WAVE') return { error: 'audio_format' };
  return bytes;
}

class SttError extends Error {
  constructor(public code: 'rate_limited' | 'invalid_key' | 'timeout' | 'unavailable', public status?: number) {
    super(code);
  }
}

async function transcribe(apiKey: string, wav: Buffer, model: string): Promise<string> {
  const form = new FormData();
  form.append('file', new Blob([new Uint8Array(wav)], { type: 'audio/wav' }), 'speech.wav');
  form.append('model', model);
  form.append('language', 'zh');
  form.append('prompt', PROMPT);
  form.append('temperature', '0');
  form.append('response_format', 'json');
  let res: Response;
  try {
    res = await fetch(GROQ_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}` },
      body: form,
      signal: AbortSignal.timeout(PRONOUNCE_LIMITS.timeoutMs),
    });
  } catch (err) {
    throw new SttError((err as { name?: string })?.name === 'TimeoutError' ? 'timeout' : 'unavailable');
  }
  if (res.status === 429) throw new SttError('rate_limited', 429);
  if (res.status === 401 || res.status === 403) throw new SttError('invalid_key', res.status);
  if (!res.ok) throw new SttError('unavailable', res.status);
  const data = (await res.json().catch(() => null)) as { text?: unknown } | null;
  const text = typeof data?.text === 'string' ? data.text.trim() : '';
  return HALLUCINATIONS.test(text) ? '' : text.slice(0, 200);
}

export async function handlePronounce(body: unknown, headers: Headers): Promise<PronounceHttpResult> {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) return fail(503, 'not_configured');

  // 1. Signed-in learners only.
  const token = header(headers, 'authorization').replace(/^Bearer\s+/i, '');
  if (!token) return fail(401, 'auth_required');
  const db = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: `Bearer ${token}` } },
  });
  const { data: userData, error: userError } = await db.auth.getUser(token);
  if (userError || !userData?.user) return fail(401, 'auth_required');

  // 2. Audio.
  const wav = parseAudio(body);
  if ('error' in wav) return fail(400, wav.error);

  // 3. Key: the learner's own Groq key (the one saved for Laoshi, not counted) or the shared one.
  const ownKey = header(headers, 'x-laoshi-provider') === 'groq' ? header(headers, 'x-laoshi-key') : '';
  const usingOwnKey = /^[\w.-]{20,200}$/.test(ownKey);
  const apiKey = usingOwnKey ? ownKey : process.env.GROQ_API_KEY;
  if (!apiKey) return fail(503, 'not_configured');
  let quotaReady = true;
  if (!usingOwnKey) {
    const { data: status, error } = await db.rpc('pronounce_quota_status');
    if (error) {
      // The quota script (supabase/pronunciation.sql) not run yet: allow, Groq's own limits still apply.
      quotaReady = false;
      if (error.code !== 'PGRST202' && error.code !== '42883') {
        console.error('[pronounce] quota status unavailable', error.code || '');
        return fail(503, 'quota_unavailable');
      }
      console.warn('[pronounce] quota functions missing: run supabase/pronunciation.sql');
    } else {
      const s = status as { used: number; limit: number; globalUsed: number; globalLimit: number };
      if (s.used >= s.limit) return fail(429, 'quota_user', { used: s.used, limit: s.limit });
      if (s.globalUsed >= s.globalLimit) return fail(429, 'quota_global', { used: s.used, limit: s.limit });
    }
  }

  // 4. Speech model (second model when the first one is busy: each has its own rate limit).
  let text = '';
  let lastError: SttError | null = null;
  for (const model of MODELS) {
    try {
      text = await transcribe(apiKey, wav, model);
      lastError = null;
      break;
    } catch (err) {
      lastError = err instanceof SttError ? err : new SttError('unavailable');
      if (lastError.code !== 'rate_limited' && lastError.code !== 'unavailable') break;
    }
  }
  if (lastError) {
    console.error('[pronounce] provider error', lastError.code, lastError.status ?? '', usingOwnKey ? 'own-key' : 'shared');
    if (lastError.code === 'rate_limited') return fail(429, usingOwnKey ? 'own_key_rate_limited' : 'provider_busy');
    if (lastError.code === 'invalid_key') return usingOwnKey ? fail(400, 'own_key_rejected') : fail(503, 'not_configured');
    if (lastError.code === 'timeout') return fail(504, 'timeout');
    return fail(502, 'provider_error');
  }

  // 5. Count it on the shared key.
  let quota: { used: number; limit: number } | null = null;
  if (!usingOwnKey && quotaReady) {
    const { data } = await db.rpc('consume_pronounce_quota');
    const q = data as { used?: number; limit?: number } | null;
    if (q && typeof q.used === 'number' && typeof q.limit === 'number') quota = { used: q.used, limit: q.limit };
  }
  return { status: 200, body: { ok: true, text, quota, ownKey: usingOwnKey } };
}
