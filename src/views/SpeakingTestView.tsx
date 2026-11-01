import React, { useEffect, useMemo, useRef, useState } from 'react';
import { pinyin as toPinyin } from 'pinyin-pro';
import { tr } from '../locales/tr';
import { useI18n } from '../locales';
import { ArrowLeft, ArrowRight, Check, Clock, Info, Microphone, Play, RotateCcw, Volume2, X } from '../components/icons';
import { audioEngine } from '../utils/audio';
import { loadSpeakAudio } from '../utils/speakAudio';
import { playSamples, type Recording } from '../utils/recorder';
import { transcribeLong, type TranscribeError } from '../utils/pronounceApi';
import { evaluateAnswer, type EvalError, type LaoshiEvaluation } from '../utils/laoshiEval';
import { loadProgress, recordScore } from '../utils/pronProgress';
import { SpeakCard } from '../components/pronunciation/SpeakCard';
import { RecordButton } from '../components/pronunciation/RecordButton';
import { MicNotice } from '../components/pronunciation/MicNotice';
import { useRecorder } from '../components/pronunciation/useRecorder';
import { useCanTranscribe } from '../components/pronunciation/SpeakSheet';
import {
  PICTURE_PROMPT,
  PICTURE_TASKS,
  QUESTION_TASKS,
  REPEAT_SENTENCES,
  SPEAKING_FORMAT,
  type PictureTask,
  type QuestionTask,
} from '../data/speakingTest';
import type { AppState } from '../types';

type Part = 'repeat' | 'picture' | 'question';
type Phase = 'intro' | Part | 'results';

interface OpenResult {
  transcript: string | null;
  evaluation: LaoshiEvaluation | null;
  note: TranscribeError | EvalError | null;
}

const shuffle = <T,>(a: readonly T[]): T[] => [...a].sort(() => Math.random() - 0.5);
const py = (t: string) => toPinyin(t, { toneType: 'symbol', nonZh: 'consecutive' });

const PART_INFO: Record<Part, { n: string; zh: string; title: string; hint: string }> = {
  repeat: { n: '1', zh: '听后重复', title: 'Listen and repeat', hint: 'Listen to each sentence once, then say it again exactly.' },
  picture: { n: '2', zh: '看图说话', title: 'Describe a picture', hint: 'Look at the picture and say what the people are doing, in two or three sentences.' },
  question: { n: '3', zh: '回答问题', title: 'Answer a question', hint: 'Listen to the question and answer it in three to five sentences.' },
};

const NOTE: Record<string, string> = {
  auth_required: 'Sign in to have your answer transcribed and checked by Laoshi.',
  quota_user: 'Daily checks used up: your answer could not be checked today (or add your own free Groq key in Laoshi’s settings).',
  quota_global: 'Checks are busy for today: your answer could not be checked.',
  provider_busy: 'The checking service is busy: try again in a minute.',
  offline: 'Offline: your answer could not be checked.',
  failed: 'The check failed: try again.',
  not_configured: 'Checking is not available right now.',
};

interface Props {
  onNavigate: (view: AppState['currentView']) => void;
}

export const SpeakingTestView: React.FC<Props> = ({ onNavigate }) => {
  const { language, getLocalized } = useI18n();
  const canTranscribe = useCanTranscribe();
  const [phase, setPhase] = useState<Phase>('intro');
  const [full, setFull] = useState(true);
  const [repeatSet, setRepeatSet] = useState<string[]>([]);
  const [pictureSet, setPictureSet] = useState<PictureTask[]>([]);
  const [questionSet, setQuestionSet] = useState<QuestionTask[]>([]);
  const [idx, setIdx] = useState(0);
  const [repeatScores, setRepeatScores] = useState<Record<number, number>>({});
  const [openResults, setOpenResults] = useState<Record<string, OpenResult>>({});
  const [recorded, setRecorded] = useState<Record<string, string>>({});
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    void loadSpeakAudio().then(setRecorded);
    return () => audioEngine.stop();
  }, []);

  const start = (part: Part | 'all') => {
    setRepeatSet(shuffle(REPEAT_SENTENCES).slice(0, SPEAKING_FORMAT.repeat.count));
    setPictureSet(shuffle(PICTURE_TASKS).slice(0, SPEAKING_FORMAT.picture.count));
    setQuestionSet(shuffle(QUESTION_TASKS).slice(0, SPEAKING_FORMAT.question.count));
    setRepeatScores({});
    setOpenResults({});
    setIdx(0);
    setFull(part === 'all');
    setPhase(part === 'all' ? 'repeat' : part);
    window.scrollTo({ top: 0 });
  };

  const nextPart = () => {
    audioEngine.stop();
    setIdx(0);
    window.scrollTo({ top: 0 });
    if (!full) return setPhase('results');
    setPhase(phase === 'repeat' ? 'picture' : phase === 'picture' ? 'question' : 'results');
  };

  const count = phase === 'repeat' ? repeatSet.length : phase === 'picture' ? pictureSet.length : phase === 'question' ? questionSet.length : 0;
  const goNext = () => (idx < count - 1 ? (setIdx(idx + 1), window.scrollTo({ top: 0 })) : nextPart());

  // ---------------------------------------------------------------- intro
  if (phase === 'intro') {
    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-150">
        <button type="button" onClick={() => onNavigate('pronunciation')} className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> {tr('Pronunciation')}
        </button>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#C52828]">HSK 3.0 · {tr('New')}</div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">{tr('HSK 3 speaking test')}</h1>
          <p className="text-sm sm:text-base text-stone-600 mt-1">
            {tr('Since HSK 3.0, level 3 includes a speaking test. Practise its three tasks: your voice is transcribed and Laoshi tells you what to improve.')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(['repeat', 'picture', 'question'] as Part[]).map((p) => {
            const info = PART_INFO[p];
            const f = SPEAKING_FORMAT[p];
            return (
              <button
                key={p}
                type="button"
                onClick={() => start(p)}
                className="text-left p-4 rounded-2xl bg-white border border-[#E4DCCE] hover:border-stone-900 cursor-pointer space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#C52828]">{tr('Task')} {info.n}</span>
                  <span lang="zh-CN" className="text-xs font-bold text-stone-500 font-hanzi">{info.zh}</span>
                </div>
                <div className="text-sm font-bold text-stone-900">{tr(info.title)}</div>
                <p className="text-xs text-stone-600 leading-relaxed">{tr(info.hint)}</p>
                <div className="text-[11px] font-semibold text-stone-500">
                  {f.count} × {'answerSec' in f ? `${f.answerSec}s` : tr('1 sentence')}
                </div>
              </button>
            );
          })}
        </div>
        <button type="button" onClick={() => start('all')} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#C52828] text-white font-bold cursor-pointer hover:bg-[#A82020]">
          <Microphone className="w-5 h-5" /> {tr('Take the whole test (about 10 minutes)')}
        </button>
        <p className="flex items-start gap-2 text-xs text-stone-500 leading-relaxed">
          <Info className="w-4 h-4 shrink-0 mt-px" />
          {canTranscribe
            ? tr('The whole test uses about 15 of your daily speech checks and 5 Laoshi messages. Recordings are never kept.')
            : tr('Sign in to have your answers transcribed and checked by Laoshi. Without an account you can still record and listen to yourself.')}
        </p>
      </div>
    );
  }

  // ---------------------------------------------------------------- results
  if (phase === 'results') {
    const rs = Object.values(repeatScores) as number[];
    const repeatAvg = rs.length ? Math.round(rs.reduce((a, b) => a + b, 0) / rs.length) : null;
    const opens = Object.entries(openResults) as [string, OpenResult][];
    const passed = opens.filter(([, r]) => r.evaluation?.passed).length;
    const judged = opens.filter(([, r]) => r.evaluation).length;
    return (
      <div className="max-w-3xl mx-auto space-y-5 animate-in fade-in duration-150">
        <div className="p-6 rounded-3xl bg-white border border-[#E4DCCE] space-y-4">
          <h1 className="text-2xl font-extrabold text-stone-950">{tr('Your speaking test')}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DE]">
              <div className="text-xs font-bold text-stone-500">{tr('Listen and repeat')}</div>
              <div className="text-3xl font-black text-stone-950">{repeatAvg === null ? '—' : `${repeatAvg}%`}</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DE]">
              <div className="text-xs font-bold text-stone-500">{tr('Pictures and questions passed')}</div>
              <div className="text-3xl font-black text-stone-950">{judged ? `${passed} / ${judged}` : '—'}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => start('all')} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C52828] text-white text-sm font-bold cursor-pointer">
              <RotateCcw className="w-4 h-4" /> {tr('New test')}
            </button>
            <button type="button" onClick={() => setPhase('intro')} className="px-4 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-700 cursor-pointer">
              {tr('Choose a task')}
            </button>
          </div>
        </div>
        {opens.map(([k, r]) =>
          r.evaluation ? (
            <div key={k} className={`p-4 rounded-2xl bg-white border ${r.evaluation.passed ? 'border-emerald-200' : 'border-amber-200'} space-y-1.5`}>
              <p className="text-sm font-bold text-stone-900">{r.evaluation.passed ? '✓' : '•'} {r.evaluation.feedback}</p>
              {r.transcript && (
                <p lang="zh-CN" className="text-sm font-hanzi text-stone-600">
                  {r.transcript}
                </p>
              )}
            </div>
          ) : null,
        )}
      </div>
    );
  }

  // ---------------------------------------------------------------- tasks
  const info = PART_INFO[phase];
  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-in fade-in duration-150">
      <div className="flex items-center justify-between gap-3">
        <button type="button" onClick={() => (audioEngine.stop(), setPhase('intro'))} className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer">
          <X className="w-4 h-4" /> {tr('Stop')}
        </button>
        <span className="text-xs font-bold text-stone-500">
          {idx + 1} / {count}
        </span>
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-[#C52828]">
          {tr('Task')} {info.n} · <span lang="zh-CN">{info.zh}</span>
        </div>
        <h2 className="text-xl font-extrabold text-stone-950">{tr(info.title)}</h2>
        <p className="text-sm text-stone-600">{tr(info.hint)}</p>
      </div>
      <div className="h-1.5 rounded-full bg-stone-200 overflow-hidden">
        <div className="h-full bg-[#C52828] transition-all" style={{ width: `${((idx + 1) / Math.max(1, count)) * 100}%` }} />
      </div>

      {phase === 'repeat' && repeatSet[idx] && (
        <>
          <SpeakCard
            item={{
              key: `s:${repeatSet[idx]}`,
              hanzi: repeatSet[idx],
              pinyin: py(repeatSet[idx]),
              audio: recorded[repeatSet[idx]],
              best: progress.items[`s:${repeatSet[idx]}`]?.best,
            }}
            kind="sentence"
            canTranscribe={canTranscribe}
            hideText
            autoPlay
            onScored={(key, score) => {
              setProgress(recordScore(key, score));
              setRepeatScores((s) => ({ ...s, [idx]: score }));
            }}
          />
          <NextButton onClick={goNext} last={idx === count - 1} answered={repeatScores[idx] !== undefined} />
        </>
      )}

      {phase === 'picture' && pictureSet[idx] && (
        <OpenTask
          key={pictureSet[idx].id}
          speakText={PICTURE_PROMPT}
          prompt={
            <figure className="space-y-1">
              <img src={pictureSet[idx].photo} alt="" className="w-full max-h-72 object-contain rounded-2xl bg-white border border-[#E4DCCE]" />
              <figcaption className="text-[10px] text-stone-400">
                {tr('Photo')}: {pictureSet[idx].credit.author} · {pictureSet[idx].credit.license}
              </figcaption>
              <p lang="zh-CN" className="text-base font-hanzi font-bold text-stone-900 pt-1">{PICTURE_PROMPT}</p>
            </figure>
          }
          words={pictureSet[idx].words}
          prepSec={SPEAKING_FORMAT.picture.prepSec}
          answerSec={SPEAKING_FORMAT.picture.answerSec}
          mission={`Speaking test, describe a picture: say in Chinese what the people in the picture are doing, in two or three sentences. The picture shows ${pictureSet[idx].scene}.`}
          canTranscribe={canTranscribe}
          language={language}
          onResult={(r) => setOpenResults((o) => ({ ...o, [pictureSet[idx].id]: r }))}
          onNext={goNext}
          last={idx === count - 1}
        />
      )}

      {phase === 'question' && questionSet[idx] && (
        <OpenTask
          key={questionSet[idx].id}
          speakText={questionSet[idx].question}
          prompt={
            <div className="p-4 rounded-2xl bg-white border border-[#E4DCCE] space-y-1">
              <p lang="zh-CN" className="text-xl font-hanzi font-bold text-stone-950">{questionSet[idx].question}</p>
              <p className="text-sm text-[#C52828] font-semibold">{py(questionSet[idx].question)}</p>
              <p className="text-sm text-stone-600">{getLocalized(questionSet[idx].meaning)}</p>
            </div>
          }
          words={questionSet[idx].words}
          prepSec={SPEAKING_FORMAT.question.prepSec}
          answerSec={SPEAKING_FORMAT.question.answerSec}
          mission={`Speaking test, answer a question: answer "${questionSet[idx].question}" in Chinese with three to five connected sentences at HSK 3 level.`}
          canTranscribe={canTranscribe}
          language={language}
          onResult={(r) => setOpenResults((o) => ({ ...o, [questionSet[idx].id]: r }))}
          onNext={goNext}
          last={idx === count - 1}
        />
      )}
    </div>
  );
};

const NextButton: React.FC<{ onClick: () => void; last: boolean; answered: boolean }> = ({ onClick, last, answered }) => (
  <div className="flex justify-end">
    <button type="button" onClick={onClick} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C52828] text-white text-sm font-bold cursor-pointer hover:bg-[#A82020]">
      {!answered ? tr('Skip') : last ? tr('Next task') : tr('Next')} <ArrowRight className="w-4 h-4" />
    </button>
  </div>
);

// ------------------------------------------------------------------------------------------------

interface OpenTaskProps {
  prompt: React.ReactNode;
  speakText: string;
  words: string[];
  prepSec: number;
  answerSec: number;
  mission: string;
  canTranscribe: boolean;
  language: string;
  onResult: (r: OpenResult) => void;
  onNext: () => void;
  last: boolean;
}

/** One open answer: preparation time, recording (with a time limit), transcript and Laoshi's verdict. */
const OpenTask: React.FC<OpenTaskProps> = ({ prompt, speakText, words, prepSec, answerSec, mission, canTranscribe, language, onResult, onNext, last }) => {
  const mic = useRecorder();
  const [stage, setStage] = useState<'prep' | 'answer' | 'checking' | 'done'>('prep');
  const [left, setLeft] = useState(prepSec);
  const [elapsed, setElapsed] = useState(0);
  const [showWords, setShowWords] = useState(false);
  const [result, setResult] = useState<OpenResult | null>(null);
  const rec = useRef<Recording | null>(null);
  const stopMine = useRef<(() => void) | null>(null);
  const [playingMine, setPlayingMine] = useState(false);

  // read the question / instruction aloud once at the start
  useEffect(() => {
    const t = window.setTimeout(() => audioEngine.speak(speakText, 0.95), 400);
    return () => {
      window.clearTimeout(t);
      audioEngine.stop();
      stopMine.current?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // preparation countdown
  useEffect(() => {
    if (stage !== 'prep') return;
    if (left <= 0) {
      setStage('answer');
      return;
    }
    const t = window.setTimeout(() => setLeft((l) => l - 1), 1000);
    return () => window.clearTimeout(t);
  }, [stage, left]);

  // answer timer while recording
  useEffect(() => {
    if (mic.state !== 'recording') return;
    setElapsed(0);
    const t = window.setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => window.clearInterval(t);
  }, [mic.state]);

  const record = async () => {
    audioEngine.stop();
    setStage('answer');
    const r = await mic.start({ maxSec: answerSec, silenceSec: 5, waitSec: 10 });
    if (!r) return;
    rec.current = r;
    if (!canTranscribe) {
      const res: OpenResult = { transcript: null, evaluation: null, note: 'auth_required' };
      setResult(res);
      onResult(res);
      setStage('done');
      return;
    }
    setStage('checking');
    let res: OpenResult;
    try {
      const t = await transcribeLong(r);
      const text = t.text.trim();
      if (!text) {
        res = { transcript: '', evaluation: null, note: null };
      } else {
        try {
          const evaluation = await evaluateAnswer({ mission, answer: text, level: 'hsk3', language });
          res = { transcript: text, evaluation, note: null };
        } catch (e) {
          res = { transcript: text, evaluation: null, note: (typeof e === 'string' ? e : 'failed') as EvalError };
        }
      }
    } catch (e) {
      res = { transcript: null, evaluation: null, note: (typeof e === 'string' ? e : 'failed') as TranscribeError };
    }
    setResult(res);
    onResult(res);
    setStage('done');
  };

  const playMine = () => {
    if (playingMine) {
      stopMine.current?.();
      setPlayingMine(false);
      return;
    }
    const r = rec.current;
    if (!r) return;
    setPlayingMine(true);
    stopMine.current = playSamples(r.samples, r.sampleRate, () => setPlayingMine(false));
  };

  const chars = result?.transcript ? [...result.transcript.replace(/[^一-鿿]/g, '')].length : 0;

  return (
    <div className="space-y-4">
      {prompt}
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => audioEngine.speak(speakText, 0.95)} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-700 cursor-pointer">
          <Volume2 className="w-4 h-4" /> {tr('Listen')}
        </button>
        <button type="button" onClick={() => setShowWords((v) => !v)} className="px-3 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-700 cursor-pointer">
          {showWords ? tr('Hide the helpful words') : tr('Helpful words')}
        </button>
        {showWords && (
          <span lang="zh-CN" className="flex flex-wrap gap-1.5">
            {words.map((w) => (
              <span key={w} className="px-2 py-1 rounded-lg bg-amber-50 border border-amber-200 text-sm font-hanzi text-amber-900">
                {w}
              </span>
            ))}
          </span>
        )}
      </div>

      <div className="p-5 rounded-2xl bg-white border border-[#E4DCCE] flex flex-col items-center gap-3">
        {stage === 'prep' && (
          <>
            <div className="flex items-center gap-2 text-sm font-bold text-stone-700">
              <Clock className="w-4 h-4" /> {tr('Preparation')}: <span className="tabular-nums">{left}s</span>
            </div>
            <button type="button" onClick={() => setStage('answer')} className="text-xs font-semibold text-[#C52828] underline underline-offset-2 cursor-pointer">
              {tr('I am ready')}
            </button>
          </>
        )}
        {(stage === 'answer' || stage === 'checking' || stage === 'done') && (
          <>
            <RecordButton
              state={mic.state}
              level={mic.level}
              busy={stage === 'checking'}
              onStart={record}
              onStop={mic.stop}
              idleLabel={stage === 'done' ? tr('Tap to try again') : tr('Tap and answer')}
            />
            {mic.state === 'recording' && (
              <div className="text-sm font-bold tabular-nums text-stone-700">
                {elapsed}s / {answerSec}s
              </div>
            )}
            {stage === 'checking' && <p className="text-sm text-stone-500">{tr('Laoshi is listening to your answer…')}</p>}
            <MicNotice error={mic.error} />
          </>
        )}
      </div>

      {stage === 'done' && result && (
        <div className="space-y-3 animate-in fade-in duration-200">
          {result.transcript !== null && (
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DD] space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                {tr('What we heard')} {chars ? `· ${chars} ${tr('characters')}` : ''}
              </div>
              <p lang="zh-CN" className="font-hanzi text-base text-stone-900">{result.transcript || '—'}</p>
            </div>
          )}
          {result.evaluation && (
            <div className={`p-4 rounded-2xl border space-y-2 ${result.evaluation.passed ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
              <p className="text-sm font-bold text-stone-900 flex items-start gap-2">
                {result.evaluation.passed ? <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" /> : <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />}
                {result.evaluation.feedback}
              </p>
              {result.evaluation.advice.length > 0 && (
                <ul className="text-sm text-stone-700 list-disc pl-5 space-y-0.5">
                  {result.evaluation.advice.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              )}
              {result.evaluation.example && (
                <div className="pt-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">{tr('Model answer')}</div>
                  <div className="flex items-start gap-2">
                    <p lang="zh-CN" className="font-hanzi text-base text-stone-900 flex-1">{result.evaluation.example}</p>
                    <button type="button" onClick={() => audioEngine.speak(result.evaluation!.example, 0.95)} className="shrink-0 w-8 h-8 rounded-lg bg-white border border-[#E2D9CC] grid place-items-center cursor-pointer" aria-label={tr('Listen')}>
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          {result.note && (
            <p className="flex items-start gap-2 text-xs text-stone-500">
              <Info className="w-4 h-4 shrink-0 mt-px" /> {tr(NOTE[result.note] || NOTE.failed)}
            </p>
          )}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button type="button" onClick={playMine} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-700 cursor-pointer">
              <Play className="w-4 h-4" /> {playingMine ? tr('Stop') : tr('My voice')}
            </button>
            <button type="button" onClick={onNext} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C52828] text-white text-sm font-bold cursor-pointer">
              {last ? tr('Next task') : tr('Next')} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      {stage !== 'done' && (
        <div className="flex justify-end">
          <button type="button" onClick={onNext} className="text-xs font-semibold text-stone-500 hover:text-stone-800 cursor-pointer">
            {tr('Skip')} →
          </button>
        </div>
      )}
    </div>
  );
};
