// Full-format HSK 3 exams (80 questions: listening 40, reading 30, writing 10).

export type H3QuestionType =
  | 'l-img' // 1-10: match the dialogue to a picture
  | 'l-tf' // 11-20: true / false statement
  | 'l-mc' // 21-40: dialogue + question, 3 options
  | 'r-match' // 41-50: match sentences
  | 'r-bank' // 51-60: fill in with a word bank
  | 'r-mc' // 61-70: short passage, 3 options
  | 'w-order' // 71-75: put the words in order
  | 'w-char'; // 76-80: write the character from pinyin

export interface H3Group {
  id: string;
  range: [number, number];
  /** image: options are image URLs; icon: options are icon names; text / word: options are text */
  kind: 'image' | 'icon' | 'text' | 'word';
  options: Record<string, string>;
  example?: { letter: string; text: string };
}

export interface H3Question {
  n: number;
  type: H3QuestionType;
  group?: string;
  statement?: string;
  text?: string;
  passage?: string;
  question?: string;
  options?: string[];
  words?: string[];
  pinyin?: string;
  answer: string;
  alts?: string[];
  /** Listening script (spoken in the recording) */
  transcript?: string;
}

export interface H3Exam {
  id: string;
  code: string;
  title: string;
  source: 'official' | 'original';
  isPro: boolean;
  /** Single recording for the whole listening section (official papers). */
  audioUrl?: string;
  /**
   * Folder of one recording per listening item (original exams): `${itemAudioBase}01.mp3` … `40.mp3`.
   * Without either, each item is read by the browser's speech synthesis.
   */
  itemAudioBase?: string;
  groups: H3Group[];
  questions: H3Question[];
}

export interface H3ExamMeta {
  id: string;
  code: string;
  title: string;
  source: 'official' | 'original';
  isPro: boolean;
}

export const H3_SECTIONS = [
  { id: 'listening' as const, range: [1, 40] as [number, number], minutes: 35 },
  { id: 'reading' as const, range: [41, 70] as [number, number], minutes: 30 },
  { id: 'writing' as const, range: [71, 80] as [number, number], minutes: 15 },
];

const normalize = (s: string) => s.replace(/[\s，。？！、,.?!“”"'：:；;]/g, '');

export function isH3Correct(q: H3Question, given: string | undefined): boolean {
  if (!given) return false;
  if (q.type === 'w-order' || q.type === 'w-char') {
    const g = normalize(given);
    return [q.answer, ...(q.alts || [])].some((a) => normalize(a) === g);
  }
  return given === q.answer;
}

/** Official HSK 3 scoring: each section is worth 100 points, 300 in total, 180 to pass. */
export function scoreH3(exam: H3Exam, answers: Record<number, string>) {
  return H3_SECTIONS.map((s) => {
    const qs = exam.questions.filter((q) => q.n >= s.range[0] && q.n <= s.range[1]);
    const correct = qs.filter((q) => isH3Correct(q, answers[q.n])).length;
    return { section: s.id, correct, total: qs.length, score: Math.round((correct / qs.length) * 100) };
  });
}
