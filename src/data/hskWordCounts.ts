// Word counts per HSK level, computed from the official HSK 3.0 list (hsk30Words.ts)
// so the numbers shown on the site always match the words students actually study.
import { HSK30_WORDS } from './hsk30Words';

export type CoreLevel = 'hsk1' | 'hsk2' | 'hsk3';
export const CORE_LEVELS: CoreLevel[] = ['hsk1', 'hsk2', 'hsk3'];
const LEVEL_NUM: Record<CoreLevel, 1 | 2 | 3> = { hsk1: 1, hsk2: 2, hsk3: 3 };

/** New words introduced at each level: 300 / 200 / 500. */
export const NEW_WORDS: Record<CoreLevel, number> = {
  hsk1: HSK30_WORDS.filter((w) => w[1] === 1).length,
  hsk2: HSK30_WORDS.filter((w) => w[1] === 2).length,
  hsk3: HSK30_WORDS.filter((w) => w[1] === 3).length,
};

/** Words required to pass each level (cumulative): 300 / 500 / 1,000. */
export const TOTAL_WORDS: Record<CoreLevel, number> = {
  hsk1: NEW_WORDS.hsk1,
  hsk2: NEW_WORDS.hsk1 + NEW_WORDS.hsk2,
  hsk3: NEW_WORDS.hsk1 + NEW_WORDS.hsk2 + NEW_WORDS.hsk3,
};

/** True when a word of `wordLevel` is part of what `target` requires (its level or below). */
export const isRequiredFor = (wordLevel: CoreLevel, target: CoreLevel) => LEVEL_NUM[wordLevel] <= LEVEL_NUM[target];

/** Official cumulative totals of the next levels (HSK 3.0 syllabus, November 2025). */
export const FUTURE_TOTAL_WORDS = { hsk4: 2000, hsk5: 3600, hsk6: 5400 } as const;

const WORD_LEVEL = new Map<string, number>();
for (const w of HSK30_WORDS) if (!WORD_LEVEL.has(w[2]) || WORD_LEVEL.get(w[2])! > w[1]) WORD_LEVEL.set(w[2], w[1]);

/** True when `hanzi` is a word of the official HSK 3.0 list at `level` or below. */
export const isSyllabusWord = (hanzi: string, level: CoreLevel) => {
  const l = WORD_LEVEL.get(hanzi);
  return l !== undefined && l <= LEVEL_NUM[level];
};

/** Lesson words split into syllabus words (counted) and extra words (bonus, not counted). */
export function lessonWordCounts(words: Array<{ hanzi: string }>, level: CoreLevel) {
  const syllabus = words.filter((w) => isSyllabusWord(w.hanzi, level)).length;
  return { syllabus, extra: words.length - syllabus };
}

/** "300 words" for HSK 1, "200 new words · 500 in total" above (English template, translate with tr). */
export function levelWordTemplate(level: CoreLevel): { key: string; vars: Record<string, number> } {
  return level === 'hsk1'
    ? { key: '{total} words', vars: { total: TOTAL_WORDS.hsk1 } }
    : { key: '{new} new words · {total} in total', vars: { new: NEW_WORDS[level], total: TOTAL_WORDS[level] } };
}
