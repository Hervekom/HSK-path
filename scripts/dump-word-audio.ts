// Prints the HSK words (and the neutral-tone example) to record, with the tone of each syllable,
// for generate-word-audio.py.
// Run: npx tsx scripts/dump-word-audio.ts > /tmp/word-audio.json
import { HSK30_WORDS } from '../src/data/hsk30Words';
import { HSK_LESSONS_DATA } from '../src/data/lessons';
import { NEUTRAL_EXAMPLE, toneKey } from '../src/data/toneDrills';
import { splitPinyin } from '../src/utils/pinyinTones';

// Words whose reading the voice would get wrong when read alone (polyphones, neutral particles):
// a homophone, or a pseudo-character defined in scripts/lexicon-hsk-extra.txt.
const SPOKEN: Record<number, string> = {
  181: '㐂', // 谁 shéi
  287: '知', // 只 zhī
  314: '常', // 长 cháng
  332: '的', // 得 de
  333: '的', // 地 de
  351: '㐁', // 过 guo
  367: '交', // 教 jiāo
  587: '㐀', // 得 děi
  678: '环', // 还 huán
};

/** Tone of each syllable as written in the syllabus (0 = neutral; erhua 儿 joins the syllable before). */
function wordTones(hanzi: string, py: string): number[] {
  const sylls = splitPinyin(hanzi, py);
  if (!sylls) throw new Error(`pinyin of ${hanzi} (${py}) not understood`);
  return sylls.map((s) => s.tone);
}

const items = [
  ...HSK30_WORDS.map(([id, , hanzi, py]) => ({ key: `w${id}`, text: hanzi, say: SPOKEN[id] ?? hanzi, tones: wordTones(hanzi, py) })),
  { key: toneKey('ma', 0), text: NEUTRAL_EXAMPLE[0], say: NEUTRAL_EXAMPLE[0], tones: [0] },
];

// Lesson words outside the official list (您好, 中国人…): keyed "v:<hanzi>" like on the Pronunciation page.
const official = new Set(HSK30_WORDS.map((r) => r[2]));
const extra = new Map<string, string>();
for (const l of HSK_LESSONS_DATA) for (const v of l.vocabulary) if (!official.has(v.hanzi) && !extra.has(v.hanzi)) extra.set(v.hanzi, v.pinyin);
for (const [hanzi, py] of extra) items.push({ key: `v:${hanzi}`, text: hanzi, say: hanzi, tones: wordTones(hanzi, py) });
process.stdout.write(JSON.stringify(items, null, 1));
