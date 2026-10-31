import React, { useEffect, useMemo, useRef, useState } from 'react';
import { tr } from '../../locales/tr';
import { useI18n } from '../../locales';
import { CheckCircle2, Ear, Microphone, Play, RotateCcw, Volume2, XCircle } from '../icons';
import { audioEngine } from '../../utils/audio';
import { decodeUrl, playSamples, type Recording } from '../../utils/recorder';
import { judgeFourTones, type ToneVerdict } from '../../utils/pitch';
import { NEUTRAL_EXAMPLE, TONE_SYLLABLES, toneKey, type ToneSyllable } from '../../data/toneDrills';
import { TONE_COLORS } from '../../utils/pinyinTones';
import { recordTones } from '../../utils/pronProgress';
import { PitchChart, ToneShape } from './PitchChart';
import { RecordButton } from './RecordButton';
import { MicNotice } from './MicNotice';
import { useRecorder } from './useRecorder';

type Voice = '' | '-f';

const TONE_NAMES = ['Neutral tone', '1st tone', '2nd tone', '3rd tone', '4th tone'];
const TONE_HINTS = ['Short and light', 'High and level', 'Rising, like a surprised “what?”', 'Low: dips, then rises', 'Falling sharply, like a firm “no!”'];

const fileFor = (base: string, tone: number, voice: Voice) => `/audio/words/${toneKey(base, tone)}${voice}.mp3`;

interface ToneTrainerProps {
  onProgress: () => void;
}

export const ToneTrainer: React.FC<ToneTrainerProps> = ({ onProgress }) => {
  const { language } = useI18n();
  const [base, setBase] = useState('ma');
  const [voice, setVoice] = useState<Voice>(() => {
    try {
      return (localStorage.getItem('hskpath_pron_voice') as Voice) || '';
    } catch {
      return '';
    }
  });
  const syl = TONE_SYLLABLES.find((s) => s.base === base) || TONE_SYLLABLES[0];
  const meaning = (t: ToneSyllable['tones'][number]) => (language === 'fr' ? t[3] : t[2]);

  useEffect(() => {
    try {
      localStorage.setItem('hskpath_pron_voice', voice);
    } catch {
      // not remembered
    }
  }, [voice]);

  const [playingTone, setPlayingTone] = useState<number | null>(null);
  const play = (tone: number) => {
    setPlayingTone(tone);
    const file = tone === 0 ? `/audio/words/${toneKey('ma', 0)}${voice}.mp3` : fileFor(syl.base, tone, voice);
    audioEngine.playFiles(file, 1, () => setPlayingTone(null));
  };

  return (
    <div className="space-y-6">
      {/* Syllable + voice */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">{tr('Syllable')}</p>
          <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:thin]">
            {TONE_SYLLABLES.map((s) => (
              <button
                key={s.base}
                type="button"
                onClick={() => setBase(s.base)}
                aria-pressed={s.base === base}
                className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-bold border cursor-pointer transition-colors ${
                  s.base === base ? 'bg-stone-900 border-stone-900 text-white' : 'bg-white border-[#E2D9CC] text-stone-700 hover:bg-[#FAF8F5]'
                }`}
              >
                {s.base}
              </button>
            ))}
          </div>
        </div>
        <div className="shrink-0">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">{tr('Model voice')}</p>
          <div className="inline-flex rounded-xl border border-[#E2D9CC] bg-white p-0.5">
            {(['', '-f'] as Voice[]).map((v) => (
              <button
                key={v || 'm'}
                type="button"
                onClick={() => setVoice(v)}
                aria-pressed={voice === v}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${voice === v ? 'bg-[#C52828] text-white' : 'text-stone-600'}`}
              >
                {v ? tr('Female') : tr('Male')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* The four tones */}
      <section aria-labelledby="tone-chart" className="space-y-3">
        <h2 id="tone-chart" className="text-base font-extrabold text-stone-950">
          {tr('The four tones')}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {syl.tones.map((t, i) => {
            const tone = i + 1;
            return (
              <button
                key={tone}
                type="button"
                onClick={() => play(tone)}
                className={`flex flex-col justify-start text-left p-3 sm:p-4 rounded-2xl border bg-white transition-all cursor-pointer hover:shadow-sm ${
                  playingTone === tone ? 'border-[#C52828] ring-2 ring-rose-200' : 'border-[#E8E2D8]'
                }`}
              >
                <div className="w-full flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: TONE_COLORS[tone] }}>
                      {tr(TONE_NAMES[tone])}
                    </p>
                    <p lang="zh-CN" className="font-hanzi text-3xl font-bold text-stone-950 mt-1">
                      {t[0]}
                    </p>
                  </div>
                  <ToneShape tone={tone} className="w-10 h-8 shrink-0" color={TONE_COLORS[tone]} />
                </div>
                <p className="text-lg font-bold" style={{ color: TONE_COLORS[tone] }}>
                  {t[1]}
                </p>
                <p className="text-xs text-stone-500 truncate">{meaning(t)}</p>
                <p className="text-[11px] text-stone-400 mt-1 leading-snug">{tr(TONE_HINTS[tone])}</p>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => play(0)}
          className={`w-full flex items-center gap-3 p-3 rounded-2xl border bg-white text-left cursor-pointer ${
            playingTone === 0 ? 'border-[#C52828] ring-2 ring-rose-200' : 'border-[#E8E2D8]'
          }`}
        >
          <ToneShape tone={0} className="w-8 h-6 shrink-0" color={TONE_COLORS[0]} />
          <span lang="zh-CN" className="font-hanzi text-xl font-bold text-stone-900">
            {NEUTRAL_EXAMPLE[0]}
          </span>
          <span className="font-bold text-stone-500">{NEUTRAL_EXAMPLE[1]}</span>
          <span className="text-xs text-stone-500">
            {tr(TONE_NAMES[0])} — {tr(TONE_HINTS[0])}
          </span>
        </button>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ListenQuiz voice={voice} onDone={onProgress} />
        <SayFourTones syl={syl} voice={voice} onDone={onProgress} />
      </div>
    </div>
  );
};

// ------------------------------------------------------------------------------------------------
// Hear a syllable, pick its tone.

const QUIZ_LENGTH = 10;

function randomQuestion(prev?: { base: string; tone: number }) {
  for (;;) {
    const s = TONE_SYLLABLES[Math.floor(Math.random() * TONE_SYLLABLES.length)];
    const tone = 1 + Math.floor(Math.random() * 4);
    if (!prev || prev.base !== s.base || prev.tone !== tone) return { base: s.base, tone };
  }
}

const ListenQuiz: React.FC<{ voice: Voice; onDone: () => void }> = ({ voice, onDone }) => {
  const [round, setRound] = useState(0); // 0 = not started
  const [q, setQ] = useState(() => randomQuestion());
  const [answer, setAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const finished = round > QUIZ_LENGTH;

  const hear = (question = q) => audioEngine.playFiles(fileFor(question.base, question.tone, voice));

  const start = () => {
    const first = randomQuestion();
    setQ(first);
    setRound(1);
    setScore(0);
    setAnswer(null);
    hear(first);
  };

  const choose = (tone: number) => {
    if (answer !== null) return;
    setAnswer(tone);
    const ok = tone === q.tone;
    if (ok) setScore((s) => s + 1);
    audioEngine.playFeedback(ok);
  };

  const next = () => {
    if (round >= QUIZ_LENGTH) {
      recordTones('listen', score, QUIZ_LENGTH);
      onDone();
      setRound(QUIZ_LENGTH + 1);
      return;
    }
    const n = randomQuestion(q);
    setQ(n);
    setAnswer(null);
    setRound((r) => r + 1);
    setTimeout(() => hear(n), 150);
  };

  const syl = TONE_SYLLABLES.find((s) => s.base === q.base)!;

  return (
    <section className="p-4 sm:p-5 rounded-2xl border border-[#E8E2D8] bg-white space-y-4" aria-labelledby="tone-listen">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#F4EFE8] border border-[#E6DED2] grid place-items-center shrink-0">
          <Ear className="w-5 h-5 text-stone-800" />
        </div>
        <div>
          <h2 id="tone-listen" className="text-base font-extrabold text-stone-950">
            {tr('Which tone do you hear?')}
          </h2>
          <p className="text-xs text-stone-500">{tr('10 syllables. Train your ear first: you say tones better once you hear them.')}</p>
        </div>
      </div>

      {round === 0 && (
        <button type="button" onClick={start} className="w-full py-3 rounded-xl bg-stone-900 text-white text-sm font-bold hover:bg-stone-800 cursor-pointer">
          {tr('Start')}
        </button>
      )}

      {round > 0 && !finished && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-stone-500">
            <span>
              {round} / {QUIZ_LENGTH}
            </span>
            <span>
              {tr('Score')}: {score}
            </span>
          </div>
          <button
            type="button"
            onClick={() => hear()}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-dashed border-[#E2D9CC] text-stone-700 font-bold hover:bg-[#FAF8F5] cursor-pointer"
          >
            <Volume2 className="w-5 h-5" /> {tr('Play again')}
          </button>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((tone) => {
              const isAnswer = answer !== null && tone === q.tone;
              const isWrong = answer === tone && tone !== q.tone;
              return (
                <button
                  key={tone}
                  type="button"
                  onClick={() => choose(tone)}
                  disabled={answer !== null}
                  className={`flex flex-col items-center gap-1 py-2.5 rounded-xl border-2 font-bold cursor-pointer disabled:cursor-default transition-colors ${
                    isAnswer ? 'border-emerald-500 bg-emerald-50' : isWrong ? 'border-rose-400 bg-rose-50' : 'border-[#E8E2D8] bg-white hover:border-stone-400'
                  }`}
                  aria-label={tr(TONE_NAMES[tone])}
                >
                  <ToneShape tone={tone} className="w-9 h-7" color={TONE_COLORS[tone]} />
                  <span className="text-sm" style={{ color: TONE_COLORS[tone] }}>
                    {tone}
                  </span>
                </button>
              );
            })}
          </div>
          {answer !== null && (
            <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#FAF8F5]">
              <p className="text-sm">
                {answer === q.tone ? (
                  <span className="font-bold text-emerald-700">{tr('Right!')}</span>
                ) : (
                  <span className="font-bold text-rose-700">{tr(TONE_NAMES[q.tone])}</span>
                )}{' '}
                <span lang="zh-CN" className="font-hanzi font-bold text-stone-900">
                  {syl.tones[q.tone - 1][0]}
                </span>{' '}
                <span className="font-semibold" style={{ color: TONE_COLORS[q.tone] }}>
                  {syl.tones[q.tone - 1][1]}
                </span>
              </p>
              <button type="button" onClick={next} className="shrink-0 px-4 py-2 rounded-xl bg-[#C52828] text-white text-sm font-bold cursor-pointer">
                {round >= QUIZ_LENGTH ? tr('See my score') : tr('Next')}
              </button>
            </div>
          )}
        </div>
      )}

      {finished && (
        <div className="text-center space-y-3">
          <p className="text-3xl font-extrabold text-stone-950">
            {score} / {QUIZ_LENGTH}
          </p>
          <p className="text-sm text-stone-500">
            {score >= 9 ? tr('Excellent ear!') : score >= 7 ? tr('Good: a few more rounds and it will be automatic.') : tr('Keep going: listen to the four tones above, then try again.')}
          </p>
          <button type="button" onClick={start} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-sm font-bold cursor-pointer">
            <RotateCcw className="w-4 h-4" /> {tr('Play again')}
          </button>
        </div>
      )}
    </section>
  );
};

// ------------------------------------------------------------------------------------------------
// Say the four tones in a row: one recording, judged with the learner's own pitch range.

const SayFourTones: React.FC<{ syl: ToneSyllable; voice: Voice; onDone: () => void }> = ({ syl, voice, onDone }) => {
  const mic = useRecorder();
  const [busy, setBusy] = useState(false);
  const [verdicts, setVerdicts] = useState<ToneVerdict[] | null>(null);
  const [splitFailed, setSplitFailed] = useState(false);
  const lastRec = useRef<Recording | null>(null);
  const files = useMemo(() => [1, 2, 3, 4].map((t) => fileFor(syl.base, t, voice)), [syl.base, voice]);

  useEffect(() => {
    setVerdicts(null);
    setSplitFailed(false);
    lastRec.current = null;
  }, [syl.base, voice]);

  const record = async () => {
    const rec = await mic.start({ maxSec: 8, silenceSec: 1.3, waitSec: 6 });
    if (!rec) return;
    lastRec.current = rec;
    setBusy(true);
    try {
      const refs = await Promise.all(files.map((f) => decodeUrl(f)));
      const v = judgeFourTones(rec, refs);
      setVerdicts(v);
      setSplitFailed(!v);
      if (v) {
        recordTones('say', v.filter((x) => x.heard === x.intended).length, 4);
        onDone();
      }
    } catch {
      setSplitFailed(true);
      setVerdicts(null);
    } finally {
      setBusy(false);
    }
  };

  const ok = verdicts ? verdicts.filter((v) => v.heard === v.intended).length : 0;

  return (
    <section className="p-4 sm:p-5 rounded-2xl border border-[#E8E2D8] bg-white space-y-4" aria-labelledby="tone-say">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#F4EFE8] border border-[#E6DED2] grid place-items-center shrink-0">
          <Microphone className="w-5 h-5 text-stone-800" />
        </div>
        <div>
          <h2 id="tone-say" className="text-base font-extrabold text-stone-950">
            {tr('Say the four tones')}
          </h2>
          <p className="text-xs text-stone-500">{tr('Say the four syllables in order, with a short pause between them. Your own voice range is taken into account.')}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 sm:gap-5">
        {syl.tones.map((t, i) => (
          <div key={i} className="text-center">
            <p lang="zh-CN" className="font-hanzi text-2xl font-bold text-stone-900">
              {t[0]}
            </p>
            <p className="text-sm font-bold" style={{ color: TONE_COLORS[i + 1] }}>
              {t[1]}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => audioEngine.playFiles(files)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-700 hover:bg-[#FAF8F5] cursor-pointer"
        >
          <Volume2 className="w-4 h-4" /> {tr('Listen to the model')}
        </button>
      </div>

      <div className="flex flex-col items-center gap-3">
        <RecordButton
          state={mic.state}
          level={mic.level}
          busy={busy}
          disabled={mic.error === 'unsupported' || mic.error === 'insecure'}
          onStart={record}
          onStop={mic.stop}
          idleLabel={verdicts ? tr('Tap to try again') : undefined}
        />
        <MicNotice error={mic.error} />
        {splitFailed && (
          <p role="status" className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 max-w-md">
            {tr('I could not hear four separate syllables. Leave a short pause between each one and try again.')}
          </p>
        )}
      </div>

      {verdicts && (
        <div className="space-y-3 animate-in fade-in duration-200">
          <p className="text-center text-sm font-bold text-stone-900">
            {ok === 4 ? tr('All four tones are right!') : `${ok} / 4 ${tr('tones recognised')}`}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {verdicts.map((v) => {
              const right = v.heard === v.intended;
              return (
                <div key={v.intended} className={`rounded-xl border p-2 ${right ? 'border-emerald-200 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/50'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold" style={{ color: TONE_COLORS[v.intended] }}>
                      {syl.tones[v.intended - 1][1]}
                    </span>
                    {right ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                  </div>
                  <PitchChart
                    height={64}
                    span={9}
                    ariaLabel={tr('Pitch of the model and of your voice')}
                    series={[
                      { contour: v.ref, color: '#A8A29E', dashed: true },
                      { contour: v.user, color: right ? '#15803D' : '#C52828' },
                    ]}
                  />
                  {!right && (
                    <p className="text-[11px] text-rose-800 leading-snug">
                      {tr('Sounds like a')} {tr(TONE_NAMES[v.heard]).toLowerCase()}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => lastRec.current && playSamples(lastRec.current.samples, lastRec.current.sampleRate)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-700 hover:bg-[#FAF8F5] cursor-pointer"
            >
              <Play className="w-4 h-4" /> {tr('My voice')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
