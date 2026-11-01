// What the learner has practised on the Pronunciation page, kept in this browser only.
import { earn } from '../game/engine';
const KEY = 'hskpath_pron_v1';

/** Set by other pages (e.g. a vocabulary card) to open one word on the Pronunciation page. */
export const PRON_FOCUS_KEY = 'hskpath_pron_focus';

export function focusWord(hanzi: string, pinyin: string) {
  try {
    sessionStorage.setItem(PRON_FOCUS_KEY, JSON.stringify({ hanzi, pinyin }));
  } catch {
    // the page opens on its default tab
  }
}

export interface ItemProgress {
  best: number;
  last: number;
  n: number;
  /** Last practice, ms since epoch. */
  t: number;
}

export interface PronProgress {
  items: Record<string, ItemProgress>;
  listen: { ok: number; n: number };
  say: { ok: number; n: number };
}

const empty = (): PronProgress => ({ items: {}, listen: { ok: 0, n: 0 }, say: { ok: 0, n: 0 } });

export function loadProgress(): PronProgress {
  try {
    const raw = localStorage.getItem(KEY);
    const v = raw ? (JSON.parse(raw) as Partial<PronProgress>) : null;
    return { ...empty(), ...(v || {}) };
  } catch {
    return empty();
  }
}

function save(p: PronProgress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // storage full or blocked: progress just isn't remembered
  }
}

export function recordScore(key: string, score: number): PronProgress {
  const p = loadProgress();
  const prev = p.items[key];
  p.items[key] = { best: Math.max(prev?.best ?? 0, score), last: score, n: (prev?.n ?? 0) + 1, t: Date.now() };
  save(p);
  earn('pron', { stats: score >= 90 ? { pronGreat: 1 } : {} });
  return p;
}

export function recordTones(kind: 'listen' | 'say', ok: number, n: number): PronProgress {
  const p = loadProgress();
  p[kind] = { ok: p[kind].ok + ok, n: p[kind].n + n };
  save(p);
  earn('tones');
  return p;
}
