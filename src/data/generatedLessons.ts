import type { HskLesson, QuizQuestion } from '../types';
import { HSK30_WORDS, type Hsk30Row } from './hsk30Words.js';
import { GENERATED_LESSON_PLAN } from './lessonPlan.js';
import type { CoreLevel } from './hskWordCounts.js';
import { LESSON_CONTENT } from './lessonContent.js';

const BY_ID = new Map<number, Hsk30Row>(HSK30_WORDS.map((r) => [r[0], r]));
const LEVEL_NUM: Record<CoreLevel, number> = { hsk1: 1, hsk2: 2, hsk3: 3 };

/** Short gloss for quiz prompts: first sense only. */
const firstSense = (s: string) => s.split(';')[0].trim();

type QuizWord = { hanzi: string; pinyin: string; en: string; fr: string };

/** Vocabulary quiz from a lesson's word list: “which word means …?”, options from the same lesson. */
export function buildVocabQuiz(level: CoreLevel, lessonId: string, words: QuizWord[]): QuizQuestion[] {
  const rows = words.map((w) => [0, 1, w.hanzi, w.pinyin, '', w.en, w.fr] as unknown as Hsk30Row);
  return buildQuiz(level, lessonId, rows);
}

function buildQuiz(level: CoreLevel, lessonId: string, rows: Hsk30Row[]): QuizQuestion[] {
  const count = Math.min(5, rows.length);
  const step = rows.length / count;
  const quiz: QuizQuestion[] = [];
  for (let q = 0; q < count; q++) {
    const idx = Math.floor(q * step);
    const target = rows[idx];
    // Three distractors from the same lesson, spread out so they differ from the target.
    const others = rows.filter((r) => r !== target && r[5] !== target[5]);
    const picks: Hsk30Row[] = [];
    for (let k = 1; picks.length < 3 && k <= others.length; k++) {
      const r = others[(idx * 7 + k * 5) % others.length];
      if (!picks.includes(r)) picks.push(r);
    }
    for (const r of others) if (picks.length < 3 && !picks.includes(r)) picks.push(r);
    const correctPos = (idx + q) % (picks.length + 1);
    const ordered = [...picks];
    ordered.splice(correctPos, 0, target);
    const ids = ['A', 'B', 'C', 'D'];
    const en = firstSense(target[5]);
    const fr = firstSense(target[6]);
    quiz.push({
      id: `${lessonId}-q${q + 1}`,
      level,
      skill: 'vocabulary',
      prompt: {
        en: `Which word means “${en}”?`,
        fr: `Quel mot signifie « ${fr} » ?`,
        zh: `哪个词的意思是“${en}”？`,
      },
      options: ordered.map((r, i) => ({ id: ids[i], text: `${r[2]} (${r[3]})` })),
      correctAnswerId: ids[correctPos],
      explanation: {
        en: `${target[2]} (${target[3]}) means “${target[5]}”.`,
        fr: `${target[2]} (${target[3]}) signifie « ${target[6]} ».`,
        zh: `${target[2]}（${target[3]}）：${target[5]}`,
      },
      points: 10,
    } as QuizQuestion);
  }
  return quiz;
}

/**
 * Lessons that, together with the hand-written ones, teach every word of the official
 * HSK 3.0 list for each level. `startNumber` is the number of the first generated lesson.
 */
export function buildGeneratedLessons(level: CoreLevel, startNumber: number, freeFrom: boolean): HskLesson[] {
  const n = LEVEL_NUM[level];
  return GENERATED_LESSON_PLAN[level].map((plan, i) => {
    const num = startNumber + i;
    const id = `lesson-${level}-${String(num).padStart(2, '0')}`;
    const rows = plan.ids.map((wid) => {
      const r = BY_ID.get(wid);
      if (!r) throw new Error(`Unknown HSK word id ${wid}`);
      return r;
    });
    const sample = rows.slice(0, 4).map((r) => r[2]).join('、');
    return {
      id,
      level,
      lessonNumber: num,
      isFree: freeFrom,
      estimatedMinutes: Math.max(15, Math.round(rows.length * 1.5 / 5) * 5),
      wordCount: rows.length,
      title: {
        en: `Lesson ${num}: ${plan.title.en}`,
        fr: `Leçon ${num} : ${plan.title.fr}`,
        zh: `第${num}课：${plan.title.zh}`,
      },
      subtitle: {
        en: `${rows.length} words from the official HSK ${n} list`,
        fr: `${rows.length} mots de la liste officielle HSK ${n}`,
        zh: `HSK ${n} 官方词表中的 ${rows.length} 个词`,
      },
      description: {
        en: `Learn ${sample}… and the other words of this theme, then check yourself with a quick quiz.`,
        fr: `Apprenez ${sample}… et les autres mots de ce thème, puis vérifiez vos acquis avec un quiz.`,
        zh: `学习${sample}等本主题词语，并完成随堂小测验。`,
      },
      vocabulary: rows.map((r) => ({ hanzi: r[2], pinyin: r[3], meaning: { en: r[5], fr: r[6], zh: r[2] } })),
      grammarPoints: LESSON_CONTENT[id]?.grammarPoints ?? [],
      dialogue: LESSON_CONTENT[id]?.dialogue ?? [],
      quickQuiz: buildQuiz(level, id, rows),
    } as HskLesson;
  });
}
