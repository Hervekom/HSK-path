// Provider-independent chat interface used by Laoshi (the AI tutor).
// Only the server imports this file: API keys and model ids never reach the browser.

export type ProviderName = 'groq' | 'gemini';

export interface ChatTurn {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatRequest {
  system: string;
  turns: ChatTurn[];
  maxTokens: number;
  temperature?: number;
}

export interface ChatResult {
  text: string;
  provider: ProviderName;
  model: string;
  totalTokens?: number;
}

export type ProviderErrorCode = 'rate_limited' | 'invalid_key' | 'bad_request' | 'timeout' | 'unavailable';

export class ProviderError extends Error {
  constructor(public code: ProviderErrorCode, public status?: number) {
    super(code);
  }
}

export interface ProviderConfig {
  provider: ProviderName;
  apiKey: string;
  model: string;
  fallbackModel?: string;
  timeoutMs?: number;
}

export const DEFAULT_MODELS: Record<ProviderName, { model: string; fallback?: string }> = {
  groq: { model: 'qwen/qwen3.8-27b', fallback: 'openai/gpt-oss-120b' },
  gemini: { model: 'gemini-3.8-flash', fallback: 'gemini-3.5-flash-lite' },
};

/** Shared server key + model, from environment variables only. */
export function serverProviderConfig(): ProviderConfig | null {
  const provider = (process.env.TUTOR_PROVIDER || 'groq') as ProviderName;
  const apiKey = provider === 'gemini' ? process.env.TUTOR_GEMINI_API_KEY : process.env.GROQ_API_KEY;
  if (!apiKey || !(provider in DEFAULT_MODELS)) return null;
  return {
    provider,
    apiKey,
    model: process.env.TUTOR_MODEL || DEFAULT_MODELS[provider].model,
    fallbackModel: process.env.TUTOR_FALLBACK_MODEL || DEFAULT_MODELS[provider].fallback,
  };
}

/** A student's own key (bring your own key). Model choice stays on the server. */
export function userProviderConfig(provider: string, apiKey: string): ProviderConfig | null {
  if (provider !== 'groq' && provider !== 'gemini') return null;
  if (!/^[\w.-]{20,200}$/.test(apiKey)) return null;
  return { provider, apiKey, model: DEFAULT_MODELS[provider].model, fallbackModel: DEFAULT_MODELS[provider].fallback };
}

function statusToCode(status: number): ProviderErrorCode {
  if (status === 429) return 'rate_limited';
  if (status === 401 || status === 403) return 'invalid_key';
  if (status === 400 || status === 404 || status === 422) return 'bad_request';
  return 'unavailable';
}

async function withTimeout<T>(ms: number, run: (signal: AbortSignal) => Promise<T>): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await run(controller.signal);
  } catch (err: any) {
    if (err?.name === 'AbortError') throw new ProviderError('timeout');
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

/** Remove hidden reasoning some models print before the answer. */
export function stripReasoning(text: string): string {
  return text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
}

async function callGroq(cfg: ProviderConfig, model: string, req: ChatRequest, signal: AbortSignal): Promise<ChatResult> {
  const body: Record<string, unknown> = {
    model,
    messages: [{ role: 'system', content: req.system }, ...req.turns],
    max_tokens: req.maxTokens,
    temperature: req.temperature ?? 0.5,
  };
  // gpt-oss models think before answering; keep that short to save tokens.
  if (model.startsWith('openai/gpt-oss')) body.reasoning_effort = 'low';
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${cfg.apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  });
  if (!res.ok) throw new ProviderError(statusToCode(res.status), res.status);
  const data: any = await res.json();
  const text = data?.choices?.[0]?.message?.content;
  if (typeof text !== 'string' || !text.trim()) throw new ProviderError('unavailable');
  return { text: stripReasoning(text), provider: 'groq', model, totalTokens: data?.usage?.total_tokens };
}

async function callGemini(cfg: ProviderConfig, model: string, req: ChatRequest, signal: AbortSignal): Promise<ChatResult> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'x-goog-api-key': cfg.apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: req.system }] },
      contents: req.turns.map((t) => ({ role: t.role === 'assistant' ? 'model' : 'user', parts: [{ text: t.content }] })),
      generationConfig: { maxOutputTokens: req.maxTokens, temperature: req.temperature ?? 0.5, responseMimeType: 'application/json' },
    }),
    signal,
  });
  if (!res.ok) throw new ProviderError(statusToCode(res.status), res.status);
  const data: any = await res.json();
  const text = (data?.candidates?.[0]?.content?.parts || []).map((p: any) => p?.text || '').join('');
  if (!text.trim()) throw new ProviderError('unavailable');
  return { text: stripReasoning(text), provider: 'gemini', model, totalTokens: data?.usageMetadata?.totalTokenCount };
}

/**
 * Send one chat request. Tries the main model, then the fallback model of the same
 * provider and the same key when the main one is unknown or overloaded.
 * Never switches to another provider or to a paid key.
 */
export async function chat(cfg: ProviderConfig, req: ChatRequest): Promise<ChatResult> {
  const call = cfg.provider === 'gemini' ? callGemini : callGroq;
  const models = [cfg.model, ...(cfg.fallbackModel && cfg.fallbackModel !== cfg.model ? [cfg.fallbackModel] : [])];
  let lastError: unknown;
  for (const model of models) {
    try {
      return await withTimeout(cfg.timeoutMs ?? 25000, (signal) => call(cfg, model, req, signal));
    } catch (err) {
      lastError = err;
      const code = err instanceof ProviderError ? err.code : 'unavailable';
      // A bad key or a timeout will not get better with another model.
      if (code === 'invalid_key' || code === 'timeout') break;
    }
  }
  if (lastError instanceof ProviderError) throw lastError;
  throw new ProviderError('unavailable');
}
