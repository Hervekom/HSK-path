// Sends a learner's recording to /api/pronounce for transcription (speech recognition).
// The recording leaves the browser only for this; nothing is kept on the server.
import { supabase } from '../lib/supabase';
import { toWavBase64, type Recording } from './recorder';

export type TranscribeError =
  | 'offline'
  | 'auth_required'
  | 'quota_user'
  | 'quota_global'
  | 'provider_busy'
  | 'own_key_rejected'
  | 'own_key_rate_limited'
  | 'not_configured'
  | 'too_long'
  | 'failed';

export interface TranscribeResult {
  text: string;
  quota: { used: number; limit: number } | null;
  ownKey: boolean;
}

const OWN_KEY = 'laoshi_own_key_v1'; // the key a learner saved in Laoshi's settings (Groq works here)

function ownKey(): { provider: string; key: string } | null {
  try {
    const raw = localStorage.getItem(OWN_KEY);
    const v = raw ? JSON.parse(raw) : null;
    return v?.provider === 'groq' && typeof v.key === 'string' ? v : null;
  } catch {
    return null;
  }
}

export async function transcribe(rec: Recording): Promise<TranscribeResult> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) throw 'offline' as TranscribeError;
  if (!supabase) throw 'not_configured' as TranscribeError;
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw 'auth_required' as TranscribeError;
  if (rec.samples.length / rec.sampleRate > 14.5) throw 'too_long' as TranscribeError;

  const headers: Record<string, string> = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
  const own = ownKey();
  if (own) {
    headers['X-Laoshi-Key'] = own.key;
    headers['X-Laoshi-Provider'] = own.provider;
  }
  let res: Response;
  try {
    res = await fetch('/api/pronounce', {
      method: 'POST',
      headers,
      body: JSON.stringify({ audio: toWavBase64(rec.samples, rec.sampleRate) }),
      signal: AbortSignal.timeout ? AbortSignal.timeout(25000) : undefined,
    });
  } catch {
    throw 'offline' as TranscribeError;
  }
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body?.ok) {
    const code = String(body?.error || '');
    const known: TranscribeError[] = ['auth_required', 'quota_user', 'quota_global', 'provider_busy', 'own_key_rejected', 'own_key_rate_limited', 'not_configured'];
    throw (known.includes(code as TranscribeError) ? code : code === 'audio_too_long' ? 'too_long' : 'failed') as TranscribeError;
  }
  return { text: String(body.text || ''), quota: body.quota ?? null, ownKey: Boolean(body.ownKey) };
}
