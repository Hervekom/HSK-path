// Laoshi (老师): HSK Path's AI Chinese tutor. Builds the teaching prompt from the
// project's own HSK data and turns the model output into a fixed shape for the app.
import { HSK30_WORDS } from '../src/data/hsk30Words.js';
import { HSK_LESSONS_DATA } from '../src/data/lessons.js';
import type { ChatTurn } from './ai/provider.js';

export type TutorLevel = 'hsk1' | 'hsk2' | 'hsk3';
export type TutorLanguage = 'en' | 'fr' | 'zh';

export const LIMITS = {
  messageChars: 300,
  historyTurns: 6,
  historyChars: 600,
  knownWords: 30,
  vocabSample: 40,
  maxTokens: 700,
};

export interface TutorInput {
  message: string;
  history: ChatTurn[];
  level: TutorLevel;
  language: TutorLanguage;
  knownWords: string[];
}

export interface TutorReply {
  reply: string;
  translation: string;
  correction: { original: string; corrected: string; explanation: string } | null;
  tip: string | null;
}

const LEVEL_NUMBER: Record<TutorLevel, 1 | 2 | 3> = { hsk1: 1, hsk2: 2, hsk3: 3 };

const LEVEL_STYLE: Record<TutorLevel, string> = {
  hsk1: 'Absolute beginner (HSK 1, ~300 words). Use only very common HSK 1 words, 1 short sentence (under 12 characters), simple patterns such as 我是…, 你叫什么名字, 我喜欢…, 有/没有.',
  hsk2: 'Elementary (HSK 2, ~500 words). Use HSK 1–2 words, 1–2 short sentences (under 18 characters each), patterns such as 因为…所以…, 要/想, 了, 过, comparisons with 比.',
  hsk3: 'Pre-intermediate (HSK 3, ~1,000 words). Use HSK 1–3 words, 1–3 sentences, patterns such as 把, 被, 越来越, 一边…一边…, 虽然…但是…, result and direction complements.',
};

const EXPLANATION_LANGUAGE: Record<TutorLanguage, string> = {
  fr: 'French (use "vous", never "tu")',
  en: 'English',
  zh: 'simple Chinese that a learner at this level can follow',
};

const CJK = /[㐀-鿿]/;

function clip(text: unknown, max: number): string {
  return typeof text === 'string' ? text.replace(/\s+/g, ' ').trim().slice(0, max) : '';
}

/** Validate and trim what the browser sent. Returns an error code or the clean input. */
export function parseTutorInput(body: any): TutorInput | { error: string } {
  const message = clip(body?.message, LIMITS.messageChars + 1);
  if (!message) return { error: 'empty_message' };
  if (message.length > LIMITS.messageChars) return { error: 'message_too_long' };

  const level: TutorLevel = ['hsk1', 'hsk2', 'hsk3'].includes(body?.level) ? body.level : 'hsk1';
  const language: TutorLanguage = ['en', 'fr', 'zh'].includes(body?.language) ? body.language : 'en';

  const rawHistory = Array.isArray(body?.history) ? body.history : [];
  const history: ChatTurn[] = rawHistory
    .filter((t: any) => (t?.role === 'user' || t?.role === 'assistant') && typeof t?.content === 'string')
    .slice(-LIMITS.historyTurns)
    .map((t: any) => ({ role: t.role, content: clip(t.content, LIMITS.historyChars) }))
    .filter((t: ChatTurn) => t.content);
  // The conversation sent to the model must start with the student.
  while (history.length && history[0].role !== 'user') history.shift();

  const knownWords = (Array.isArray(body?.knownWords) ? body.knownWords : [])
    .map((w: unknown) => clip(w, 8))
    .filter((w: string) => w && CJK.test(w) && !/[^㐀-鿿·]/.test(w))
    .slice(0, LIMITS.knownWords);

  return { message, history, level, language, knownWords };
}

function sampleVocabulary(level: TutorLevel): string[] {
  const max = LEVEL_NUMBER[level];
  const atLevel = HSK30_WORDS.filter((w) => w[1] === max);
  const below = HSK30_WORDS.filter((w) => w[1] < max);
  const pick = <T,>(list: T[], n: number) => [...list].sort(() => Math.random() - 0.5).slice(0, n);
  const chosen = max === 1 ? pick(atLevel, LIMITS.vocabSample) : [...pick(atLevel, 28), ...pick(below, 12)];
  return chosen.map((w) => w[2]);
}

function grammarForLevel(level: TutorLevel): string[] {
  const max = LEVEL_NUMBER[level];
  return HSK_LESSONS_DATA.filter((l) => LEVEL_NUMBER[l.level as TutorLevel] <= max)
    .flatMap((l) => l.grammarPoints || [])
    .map((g) => `${g.title.en}: ${g.structure}`)
    .slice(0, 8);
}

export function buildSystemPrompt(input: TutorInput): string {
  const lang = EXPLANATION_LANGUAGE[input.language];
  const known = input.knownWords.length ? input.knownWords.join('、') : '(none recorded yet)';
  return `You are Laoshi (老师), the patient Mandarin Chinese teacher inside HSK Path, a website that prepares students for the HSK exam (HSK 3.0 syllabus, levels 1–3). You are a teacher, not a general chatbot: politely bring off-topic requests back to practising Chinese.

STUDENT LEVEL: ${LEVEL_STYLE[input.level]}
EXPLANATION LANGUAGE: ${lang}.

HOW TO TEACH
- Hold a natural conversation in Chinese (simplified characters) at the student's level. Keep your Chinese short.
- Always end your Chinese reply with ONE simple question or prompt so the student answers in Chinese. Do not answer for them.
- If the student's last message contains real mistakes (grammar, word choice, word order, measure word, wrong character, an unnecessary or missing word such as 是 or 了), fill "correction": quote the wrong part, give the fully corrected sentence, and explain EVERY mistake you fixed, one short sentence each, in the explanation language. Add one extra example only if it helps. Never fix something without explaining it.
- Only correct real errors. Many Chinese phrasings are acceptable: never call a natural, correct sentence wrong and never invent rules. If the sentence is correct, "correction" is null (you may praise briefly in "tip").
- If the student writes in another language, encourage them gently and show how to say it in Chinese in "tip".
- If the student asks for an exercise, give ONE short exercise in "reply" (for example: translate a sentence, fill in a blank, reorder words) and wait for the answer before correcting it.
- Reuse the student's known words when you can. Avoid words above their level; if one is necessary, explain it in "tip".
- Do not write pinyin in "reply" or "corrected": the app adds it. In "explanation" and "tip", a new word may be followed by its pinyin with tone marks, e.g. 坐 (zuò).

Student's known words: ${known}
Words from this level you can use: ${sampleVocabulary(input.level).join('、')}
Grammar points studied in HSK Path at this level: ${grammarForLevel(input.level).join(' | ') || '(none)'}

OUTPUT FORMAT
Answer with ONE JSON object only, no markdown, no text before or after:
{"correction": null or {"original": "the student's wrong part", "corrected": "the full corrected sentence in Chinese", "explanation": "short rule in the explanation language"}, "reply": "your Chinese reply ending with a question", "translation": "translation of your reply in the explanation language (for Chinese, a simpler paraphrase)", "tip": null or "one short helpful note in the explanation language"}`;
}

export function buildTurns(input: TutorInput): ChatTurn[] {
  return [...input.history, { role: 'user', content: input.message }];
}

/** Turn the model text into the fixed reply shape, tolerating small format slips. */
export function parseTutorReply(text: string): TutorReply {
  const cleaned = text.replace(/```(?:json)?/gi, '').trim();
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start !== -1 && end > start) {
    try {
      const data = JSON.parse(cleaned.slice(start, end + 1));
      const reply = clip(data?.reply, 600);
      if (reply) {
        const c = data?.correction;
        const correction =
          c && typeof c === 'object' && clip(c.corrected, 300)
            ? { original: clip(c.original, 300), corrected: clip(c.corrected, 300), explanation: clip(c.explanation, 500) }
            : null;
        return { reply, translation: clip(data?.translation, 600), correction, tip: clip(data?.tip, 400) || null };
      }
    } catch {
      // fall through to plain text
    }
  }
  return { reply: clip(cleaned, 600), translation: '', correction: null, tip: null };
}

/** Compact text of a tutor turn, sent back as history on the next message. */
export function replyToHistory(r: TutorReply): string {
  return r.correction ? `[correction: ${r.correction.corrected}] ${r.reply}` : r.reply;
}
