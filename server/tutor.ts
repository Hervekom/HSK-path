// Laoshi (老师): HSK Path's AI Chinese tutor. Builds the teaching prompt from the
// project's own HSK data and turns the model output into a fixed shape for the app.
import { HSK30_WORDS } from '../src/data/hsk30Words.js';
import { HSK_LESSONS_DATA } from '../src/data/lessons.js';
import type { ChatTurn } from './ai/provider.js';

export type TutorLevel = 'hsk1' | 'hsk2' | 'hsk3';
export type TutorLanguage = 'en' | 'fr' | 'zh';

export const LIMITS = {
  messageChars: 300,
  historyTurns: 20,
  historyChars: 600,
  knownWords: 30,
  vocabSample: 40,
  maxTokens: 1500,
};

export interface TutorInput {
  message: string;
  history: ChatTurn[];
  level: TutorLevel;
  language: TutorLanguage;
  knownWords: string[];
  /** Speaking task from a lesson that the student is working on, if any. */
  mission: string;
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
  // Some providers reject two turns in a row from the same side (e.g. after a failed reply): merge them.
  for (let i = history.length - 1; i > 0; i--) {
    if (history[i].role === history[i - 1].role) {
      history[i - 1] = { role: history[i].role, content: `${history[i - 1].content}\n${history[i].content}` };
      history.splice(i, 1);
    }
  }

  const knownWords = (Array.isArray(body?.knownWords) ? body.knownWords : [])
    .map((w: unknown) => clip(w, 8))
    .filter((w: string) => w && CJK.test(w) && !/[^㐀-鿿·]/.test(w))
    .slice(0, LIMITS.knownWords);

  return { message, history, level, language, knownWords, mission: clip(body?.mission, 300) };
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

BE A REAL TEACHER (老师), NOT A CHAT PARTNER
- You lead the lesson. Each conversation has a clear thread: a small everyday topic (greetings, age, family, food, hobbies, school, weather, shopping…) that you explore step by step, then you move to the next topic.
- Every reply teaches something: react to what the student said, correct it if needed, then make them practise one useful word or structure from their level (for example: after "我十八岁", teach "你呢？" or "我今年…岁" and ask them to use it).
- Be warm, encouraging and patient like a good classroom teacher: praise real progress briefly and precisely ("很好！你用了…"), never over-praise a wrong answer.
- When the student is stuck, says "I don't know", or answers in another language, help them: give the model sentence in Chinese in "tip" and ask them to repeat or adapt it. Do not just change the subject.
- Every few exchanges, check understanding with a tiny exercise (fill the blank, answer a question with a given word, translate a short sentence) related to what was just practised.
- Keep the teaching consistent with the HSK level: short sentences, known words first, one new word at a time.

STUDENT LEVEL: ${LEVEL_STYLE[input.level]}
EXPLANATION LANGUAGE: ${lang}.

HOW TO TEACH
- Hold a natural conversation in Chinese (simplified characters) at the student's level. Keep your Chinese short.
- This is ONE continuous conversation: read the whole history before answering and continue from the student's LAST message. Remember everything the student already told you (name, age, country, likes, family…) and reuse it. Greet only in your very first reply, never again.
- Never ask a question the student has already answered. After you correct a sentence, accept the answer it gives (e.g. their age) and move on with a NEW question on a new small topic.
- If the student answers in another language, treat the meaning as their answer, react to it in Chinese, continue the conversation, and show in "tip" how to say it in Chinese.
- Always end your Chinese reply with ONE simple question or prompt so the student answers in Chinese. Do not answer for them.
- If the student's last message contains real mistakes (grammar, word choice, word order, measure word, wrong character, an unnecessary or missing word such as 是 or 了), fill "correction": quote the wrong part, give the fully corrected sentence, and explain EVERY mistake you fixed, one short sentence each, in the explanation language. Add one extra example only if it helps. Never fix something without explaining it.
- Only correct real errors. Many Chinese phrasings are acceptable: never call a natural, correct sentence wrong and never invent rules. If the sentence is correct, "correction" is null (you may praise briefly in "tip").
- If the student writes in another language, encourage them gently and show how to say it in Chinese in "tip".
- If the student asks for an exercise, give ONE short exercise in "reply" (for example: translate a sentence, fill in a blank, reorder words) and wait for the answer before correcting it.
- Reuse the student's known words when you can. Avoid words above their level; if one is necessary, explain it in "tip".
- Do not write pinyin in "reply" or "corrected": the app adds it. In "explanation" and "tip", a new word may be followed by its pinyin with tone marks, e.g. 坐 (zuò).

${askedBefore(input)}${input.mission ? `CURRENT SPEAKING TASK (from the student's lesson): "${input.mission}". Steer the conversation so the student can complete this task: ask the questions that lead them to say what the task requires. Do not do the task for them.\n\n` : ''}Student's known words: ${known}
Words from this level you can use: ${sampleVocabulary(input.level).join('、')}
Grammar points studied in HSK Path at this level: ${grammarForLevel(input.level).join(' | ') || '(none)'}

OUTPUT FORMAT
Answer with ONE JSON object only, no markdown, no text before or after:
{"correction": null or {"original": "the student's wrong part", "corrected": "the full corrected sentence in Chinese", "explanation": "short rule in the explanation language"}, "reply": "your Chinese reply ending with a question", "translation": "translation of your reply in the explanation language (for Chinese, a simpler paraphrase)", "tip": null or "one short helpful note in the explanation language"}`;
}

/** Questions Laoshi already asked in this chat, so the model does not loop on them. */
function askedBefore(input: TutorInput): string {
  const asked = input.history
    .filter((t) => t.role === 'assistant')
    .map((t) => t.content.replace(/^\[correction:[^\]]*\]\s*/, ''))
    .map((t) => (t.match(/[^。！？!?]*[？?]/g) || []).pop()?.trim() || '')
    .filter(Boolean);
  const facts = input.history.filter((t) => t.role === 'user').map((t) => t.content.trim()).filter(Boolean);
  if (!asked.length && !facts.length) return '';
  const last = asked.pop();
  const earlier = [...new Set(asked)].filter((q) => q !== last);
  return `CONVERSATION SO FAR
${earlier.length ? `Questions already asked and answered (never ask them again): ${earlier.join(' | ')}\n` : ''}${last ? `Your last question, which the student's new message answers: ${last}\n` : ''}What the student already said, in order: ${facts.join(' | ')}

`;
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
      // fall through to the lenient reader below
    }
  }
  // Broken or cut-off JSON (e.g. the model hit its token limit): read the fields one by one
  // so the student never sees raw JSON.
  if (/^\s*\{?\s*"(correction|reply)"/.test(cleaned.slice(start === -1 ? 0 : start))) {
    const reply = clip(looseField(cleaned, 'reply'), 600);
    if (reply) {
      const corrected = looseField(cleaned, 'corrected');
      return {
        reply,
        translation: clip(looseField(cleaned, 'translation'), 600),
        correction: corrected
          ? { original: clip(looseField(cleaned, 'original'), 300), corrected: clip(corrected, 300), explanation: clip(looseField(cleaned, 'explanation'), 500) }
          : null,
        tip: clip(looseField(cleaned, 'tip'), 400) || null,
      };
    }
    return { reply: '', translation: '', correction: null, tip: null };
  }
  return { reply: clip(cleaned, 600), translation: '', correction: null, tip: null };
}

/** Read one string field from possibly invalid or truncated JSON text. */
function looseField(text: string, key: string): string {
  const m = new RegExp(`"${key}"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)("|$)`).exec(text);
  if (!m) return '';
  const cut = m[2] !== '"';
  const raw = m[1].replace(/\\$/, '');
  try {
    return JSON.parse(`"${raw}"`).trim() + (cut ? '…' : '');
  } catch {
    return raw.replace(/\\n/g, ' ').replace(/\\"/g, '"').trim();
  }
}

/** Compact text of a tutor turn, sent back as history on the next message. */
export function replyToHistory(r: TutorReply): string {
  return r.correction ? `[correction: ${r.correction.corrected}] ${r.reply}` : r.reply;
}

// ---------------------------------------------------------------------------
// Mission check: did the student complete the lesson's speaking task?

export interface EvaluationInput {
  mission: string;
  starter: string;
  messages: string[];
  level: TutorLevel;
  language: TutorLanguage;
}

export interface Evaluation {
  passed: boolean;
  feedback: string;
  advice: string[];
  example: string;
}

export const EVAL_LIMITS = { messages: 12, maxTokens: 1200 };

export function parseEvaluationInput(body: any): EvaluationInput | { error: string } {
  const mission = clip(body?.mission, 300);
  if (!mission) return { error: 'empty_message' };
  const messages = (Array.isArray(body?.messages) ? body.messages : [])
    .map((m: unknown) => clip(m, LIMITS.messageChars))
    .filter(Boolean)
    .slice(-EVAL_LIMITS.messages);
  if (!messages.length) return { error: 'empty_message' };
  const level: TutorLevel = ['hsk1', 'hsk2', 'hsk3'].includes(body?.level) ? body.level : 'hsk1';
  const language: TutorLanguage = ['en', 'fr', 'zh'].includes(body?.language) ? body.language : 'en';
  return { mission, starter: clip(body?.starter, 120), messages, level, language };
}

export function buildEvaluationPrompt(input: EvaluationInput): string {
  return `You are Laoshi (老师), a kind but honest Mandarin teacher in HSK Path. A student at level ${input.level.toUpperCase()} (${LEVEL_STYLE[input.level]}) was given this speaking task: "${input.mission}".${input.starter ? ` Suggested opening: "${input.starter}".` : ''}

Judge ONLY the student's own Chinese messages (given by the user). The task is PASSED when the student, in Chinese, actually did what the task asks (all its parts), with sentences understandable to a native speaker at this level. Small mistakes are fine if the meaning is clear. It is NOT passed if a part of the task is missing, if the student mostly wrote in another language, only copied the suggested opening without completing it, or if the Chinese is not understandable.

Write in ${EXPLANATION_LANGUAGE[input.language]}. Answer with ONE JSON object only, no markdown:
{"passed": true or false, "feedback": "1–2 short sentences: what the student did well and, if not passed, what is missing", "advice": ["0 to 3 short, concrete tips to succeed (empty if passed)"], "example": "one or two model Chinese sentences that would complete the task at this level"}`;
}

export function parseEvaluation(text: string): Evaluation | null {
  const cleaned = text.replace(/```(?:json)?/gi, '').trim();
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end <= start) return null;
  try {
    const d = JSON.parse(cleaned.slice(start, end + 1));
    if (typeof d?.passed !== 'boolean') return null;
    const advice = (Array.isArray(d.advice) ? d.advice : []).map((a: unknown) => clip(a, 240)).filter(Boolean).slice(0, 3);
    return { passed: d.passed, feedback: clip(d.feedback, 400), advice: d.passed ? [] : advice, example: clip(d.example, 200) };
  } catch {
    return null;
  }
}
