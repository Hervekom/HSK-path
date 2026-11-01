// Asks Laoshi (the AI tutor, /api/tutor in "evaluate" mode) to judge a spoken answer.
// Used by the speaking test; counts as one Laoshi message on the shared key.
import { supabase } from '../lib/supabase';

export interface LaoshiEvaluation {
  passed: boolean;
  feedback: string;
  advice: string[];
  example: string;
}

export type EvalError = 'auth_required' | 'quota_user' | 'quota_global' | 'provider_busy' | 'not_configured' | 'offline' | 'failed';

export async function evaluateAnswer(opts: {
  mission: string;
  answer: string;
  level: 'hsk1' | 'hsk2' | 'hsk3';
  language: string;
}): Promise<LaoshiEvaluation> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) throw 'offline' as EvalError;
  if (!supabase) throw 'not_configured' as EvalError;
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw 'auth_required' as EvalError;
  const headers: Record<string, string> = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
  try {
    const own = JSON.parse(localStorage.getItem('laoshi_own_key_v1') || 'null');
    if (own?.key && own?.provider) {
      headers['X-Laoshi-Key'] = own.key;
      headers['X-Laoshi-Provider'] = own.provider;
    }
  } catch {
    // no own key
  }
  let res: Response;
  try {
    res = await fetch('/api/tutor', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        mode: 'evaluate',
        mission: opts.mission,
        messages: [opts.answer],
        level: opts.level,
        language: ['en', 'fr', 'zh'].includes(opts.language) ? opts.language : 'en',
      }),
    });
  } catch {
    throw 'offline' as EvalError;
  }
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body?.ok || !body.evaluation) {
    const code = String(body?.error || '');
    const known: EvalError[] = ['auth_required', 'quota_user', 'quota_global', 'provider_busy', 'not_configured'];
    throw (known.includes(code as EvalError) ? code : 'failed') as EvalError;
  }
  return body.evaluation as LaoshiEvaluation;
}
