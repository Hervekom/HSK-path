// Splits a word's written pinyin into syllables with their tones, following the characters.
// The syllabus pinyin is authoritative (neutral tones, 不/一 changes), so it is read as written;
// pinyin-pro only tells where each character's syllable starts.
import { pinyin } from 'pinyin-pro';

const MARKS: Record<string, [string, number]> = {};
const GROUPS: Record<string, string> = { a: 'āáǎà', e: 'ēéěè', i: 'īíǐì', o: 'ōóǒò', u: 'ūúǔù', ü: 'ǖǘǚǜ' };
for (const [b, m] of Object.entries(GROUPS)) [...m].forEach((c, i) => (MARKS[c] = [b, i + 1]));

export interface PinyinSyllable {
  /** Written form, with its tone mark (erhua "r" included). */
  text: string;
  /** 1–4, or 0 for the neutral tone. */
  tone: number;
}

/** Syllables of a word, or null when the pinyin does not line up with the characters. */
export function splitPinyin(hanzi: string, py: string): PinyinSyllable[] | null {
  const written = py.split('/')[0].normalize('NFC').replace(/[\s’'·-]/g, '');
  const lower = written.toLowerCase();
  let plain = '';
  const toneAt: number[] = [];
  for (const ch of lower) {
    const m = MARKS[ch];
    plain += m ? m[0] : ch;
    toneAt.push(m ? m[1] : 0);
  }
  const chars = [...hanzi];
  if (chars.length === 1) return [{ text: written, tone: toneAt.find((t) => t > 0) ?? 0 }];
  const sylls = pinyin(hanzi, { toneType: 'none', type: 'array' }).map((s) => s.replace(/v/g, 'ü'));
  const out: PinyinSyllable[] = [];
  let pos = 0;
  for (let i = 0; i < sylls.length; i++) {
    if (chars[i] === '儿' && i > 0 && plain[pos] === 'r' && !plain.startsWith('er', pos) && out.length) {
      out[out.length - 1].text += written[pos];
      pos += 1;
      continue;
    }
    const s = sylls[i];
    if (!plain.startsWith(s, pos)) return null;
    out.push({ text: written.slice(pos, pos + s.length), tone: toneAt.slice(pos, pos + s.length).find((x) => x > 0) ?? 0 });
    pos += s.length;
  }
  return pos === plain.length ? out : null;
}

/** Tone colours used across the Pronunciation page (1 red, 2 amber, 3 green, 4 blue, neutral grey). */
export const TONE_COLORS = ['#78716C', '#C52828', '#C2700A', '#15803D', '#1D4ED8'];
