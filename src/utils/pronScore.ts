// Compares what the speech recogniser heard with the expected Chinese text, syllable by syllable.
// Both sides are turned into pinyin with tone numbers (pinyin-pro, same tone-sandhi rules), so a
// homophone written with another character still counts as right, and simplified/traditional
// characters compare equal. The recogniser chooses characters with the help of context, so the
// tone verdict is indicative; the melody curve is the other half of the feedback.
import { pinyin } from 'pinyin-pro';

export type SyllableStatus = 'ok' | 'tone' | 'sound' | 'missing';

export interface SyllableResult {
  char: string;
  /** Expected pinyin with tone number, e.g. "ma3" (0 = neutral). */
  expected: string;
  /** What was heard in its place, if anything. */
  heard?: string;
  status: SyllableStatus;
}

export interface TranscriptScore {
  syllables: SyllableResult[];
  /** Syllables heard that were not in the text. */
  extra: number;
  /** 0–100. */
  accuracy: number;
  /** False when nothing Chinese was recognised. */
  understood: boolean;
}

// Variant characters the recogniser sometimes writes (the pinyin library reads 妳 as nǎi).
const VARIANTS: Record<string, string> = { 妳: '你', 祢: '你', 牠: '它' };
const cjk = (s: string) =>
  [...s.replace(/[^\u3400-\u9fff\uf900-\ufaff]/g, '')].map((c) => VARIANTS[c] || c).join('');
const base = (p: string) => p.replace(/[0-5]$/, '');
const tone = (p: string) => Number(p.slice(-1)) || 0;

export function syllablesOf(text: string): { char: string; py: string }[] {
  const chars = [...cjk(text)];
  if (!chars.length) return [];
  const py = pinyin(chars.join(''), { toneType: 'num', type: 'array' });
  return chars.map((char, i) => ({ char, py: (py[i] || '').toLowerCase().replace(/v/g, 'ü') }));
}

function subCost(a: string, b: string): number {
  if (a === b) return 0;
  if (base(a) !== base(b)) return 1;
  // Same sound, different tone. A neutral tone on either side is not counted as an error.
  return tone(a) === 0 || tone(b) === 0 ? 0 : 0.4;
}

export function scoreTranscript(target: string, heardText: string): TranscriptScore {
  const t = syllablesOf(target);
  const h = syllablesOf(heardText);
  if (!h.length || !t.length) {
    return {
      syllables: t.map((s) => ({ char: s.char, expected: s.py, status: 'missing' })),
      extra: 0,
      accuracy: 0,
      understood: h.length > 0,
    };
  }
  const n = t.length;
  const m = h.length;
  const INS = 0.8;
  const DEL = 1;
  const cost = Array.from({ length: n + 1 }, (_, i) => Array.from({ length: m + 1 }, (_, j) => (i === 0 ? j * INS : j === 0 ? i * DEL : 0)));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      cost[i][j] = Math.min(cost[i - 1][j - 1] + subCost(t[i - 1].py, h[j - 1].py), cost[i - 1][j] + DEL, cost[i][j - 1] + INS);
    }
  }
  const out: SyllableResult[] = new Array(n);
  let extra = 0;
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && cost[i][j] === cost[i - 1][j - 1] + subCost(t[i - 1].py, h[j - 1].py)) {
      const c = subCost(t[i - 1].py, h[j - 1].py);
      out[i - 1] = {
        char: t[i - 1].char,
        expected: t[i - 1].py,
        heard: h[j - 1].py,
        status: c === 0 ? 'ok' : c < 1 ? 'tone' : 'sound',
      };
      i--;
      j--;
    } else if (i > 0 && (j === 0 || cost[i][j] === cost[i - 1][j] + DEL)) {
      out[i - 1] = { char: t[i - 1].char, expected: t[i - 1].py, status: 'missing' };
      i--;
    } else {
      extra++;
      j--;
    }
  }
  const points = out.reduce((s, r) => s + (r.status === 'ok' ? 1 : r.status === 'tone' ? 0.5 : 0), 0);
  const accuracy = Math.max(0, Math.round((100 * (points - extra * 0.25)) / n));
  return { syllables: out, extra, accuracy, understood: true };
}

/** Overall score: what was understood counts most, the melody refines it. */
export function overallScore(accuracy: number | null, melody: number | null): number {
  if (accuracy === null) return melody ?? 0;
  if (melody === null) return accuracy;
  return Math.round(accuracy * 0.7 + melody * 0.3);
}

export function scoreLabel(score: number): 'excellent' | 'good' | 'close' | 'again' {
  if (score >= 85) return 'excellent';
  if (score >= 70) return 'good';
  if (score >= 50) return 'close';
  return 'again';
}
