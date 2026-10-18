import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Bicycle, Phone, AirplaneTilt, BookOpen as PhBookOpen, ForkKnife, Umbrella, Television, Basketball, Coffee,
  ShoppingCart, Bed, Bus, Pill, Gift, Camera, Dog, EnvelopeSimple, SoccerBall, MusicNotes, Cake, Car, CloudRain,
  Pause, Play as PhPlay, SpeakerHigh, Lock as PhLock,
} from '@phosphor-icons/react';
import { ArrowLeft, ArrowRight, Check, X, Clock, Headphones, BookOpen, PenTool, RotateCcw, Info } from '../components/icons';
import { tr } from '../locales/tr';
import { Button } from '../components/ui/Button';
import { SpeechButton } from '../components/ui/SpeechButton';
import { audioEngine } from '../utils/audio';
import {
  HSK3_EXAMS, loadHsk3Exam, isH3Correct, scoreH3, H3_SECTIONS,
  type H3Exam, type H3Question, type H3Group,
} from '../data/hsk3';
import type { TestResult } from '../types';

const ICONS: Record<string, React.ComponentType<any>> = {
  Bicycle, Phone, AirplaneTilt, BookOpen: PhBookOpen, ForkKnife, Umbrella, Television, Basketball, Coffee,
  ShoppingCart, Bed, Bus, Pill, Gift, Camera, Dog, EnvelopeSimple, SoccerBall, MusicNotes, Cake, Car, CloudRain,
};

type Phase = 'intro' | 'listening' | 'reading' | 'writing' | 'results' | 'review';
type Mode = 'exam' | 'practice';
type SectionId = 'listening' | 'reading' | 'writing';

const PARTS: Array<{ section: SectionId; range: [number, number]; title: string; hint: string }> = [
  { section: 'listening', range: [1, 10], title: 'Part 1', hint: 'Listen to each dialogue and choose the matching picture.' },
  { section: 'listening', range: [11, 20], title: 'Part 2', hint: 'Listen to the passage, then decide whether the sentence is true (√) or false (×).' },
  { section: 'listening', range: [21, 30], title: 'Part 3', hint: 'Listen to the short dialogue and the question, then choose the answer.' },
  { section: 'listening', range: [31, 40], title: 'Part 4', hint: 'Listen to the longer dialogue and the question, then choose the answer.' },
  { section: 'reading', range: [41, 50], title: 'Part 1', hint: 'Match each sentence with the sentence that answers or follows it.' },
  { section: 'reading', range: [51, 60], title: 'Part 2', hint: 'Fill in each blank with a word from the list.' },
  { section: 'reading', range: [61, 70], title: 'Part 3', hint: 'Read the passage and choose the right answer.' },
  { section: 'writing', range: [71, 75], title: 'Part 1', hint: 'Put the words in order to make a sentence. Tap the words one by one.' },
  { section: 'writing', range: [76, 80], title: 'Part 2', hint: 'Write the character that matches the pinyin.' },
];

const SECTION_LABEL: Record<SectionId, string> = { listening: 'Listening', reading: 'Reading', writing: 'Writing' };
const SECTION_ICON: Record<SectionId, React.ComponentType<{ className?: string }>> = {
  listening: Headphones,
  reading: BookOpen,
  writing: PenTool,
};

const fmt = (s: number) => {
  const m = Math.floor(Math.max(0, s) / 60);
  const r = Math.max(0, s) % 60;
  return `${m}:${String(r).padStart(2, '0')}`;
};
/** Text for speech synthesis: drop speaker labels and the ★ statement line. */
const speakable = (t: string) =>
  t
    .split('\n')
    .filter((l) => !l.trim().startsWith('★'))
    .map((l) => l.replace(/^\s*(男|女|问)：/, ''))
    .join('。');

interface Props {
  examId: string;
  isProUser: boolean;
  onExit: () => void;
  onFinish: (result: TestResult) => void;
}

export const Hsk3ExamView: React.FC<Props> = ({ examId, isProUser, onExit, onFinish }) => {
  const meta = HSK3_EXAMS.find((e) => e.id === examId);
  const [exam, setExam] = useState<H3Exam | null>(null);
  const [phase, setPhase] = useState<Phase>('intro');
  const [mode, setMode] = useState<Mode>('exam');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [orderSel, setOrderSel] = useState<Record<number, number[]>>({});
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [plays, setPlays] = useState<Record<number, number>>({});
  const [audioState, setAudioState] = useState<'idle' | 'playing' | 'paused' | 'ended'>('idle');
  const [audioPos, setAudioPos] = useState({ t: 0, d: 0 });
  const [errorsOnly, setErrorsOnly] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startRef = useRef<number>(0);
  const finishedRef = useRef(false);

  useEffect(() => {
    loadHsk3Exam(examId).then(setExam);
    return () => audioEngine.stop();
  }, [examId]);

  const locked = Boolean(meta?.isPro && !isProUser);
  const inSection = phase === 'listening' || phase === 'reading' || phase === 'writing';

  // Timer
  useEffect(() => {
    if (!inSection) return;
    const id = window.setInterval(() => {
      setElapsed((e) => e + 1);
      if (mode === 'exam') setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [inSection, mode]);

  useEffect(() => {
    if (mode === 'exam' && inSection && secondsLeft <= 0 && elapsed > 0) nextSection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  const groupOf = (q: H3Question): H3Group | undefined => exam?.groups.find((g) => g.id === q.group);

  const startSection = (s: SectionId) => {
    const def = H3_SECTIONS.find((x) => x.id === s)!;
    // Official listening: 35 minutes of recording + 5 minutes to check answers
    setSecondsLeft((s === 'listening' ? def.minutes + 5 : def.minutes) * 60);
    setPhase(s);
    window.scrollTo({ top: 0 });
  };

  const startExam = (m: Mode) => {
    setMode(m);
    setAnswers({});
    setOrderSel({});
    setPlays({});
    setElapsed(0);
    setAudioState('idle');
    finishedRef.current = false;
    startRef.current = Date.now();
    startSection('listening');
  };

  const finish = () => {
    if (!exam || finishedRef.current) return;
    finishedRef.current = true;
    audioRef.current?.pause();
    audioEngine.stop();
    const parts = scoreH3(exam, answers);
    const total = parts.reduce((a, p) => a + p.score, 0);
    const correct = parts.reduce((a, p) => a + p.correct, 0);
    const userAnswers: Record<string, string> = {};
    Object.entries(answers).forEach(([k, v]) => (userAnswers[`${exam.id}-${k}`] = String(v)));
    onFinish({
      id: `res-${exam.id}-${Date.now()}`,
      testId: exam.id,
      testTitle: exam.title,
      level: 'hsk3',
      hskLevel: 'hsk3',
      totalQuestions: 80,
      correctCount: correct,
      score: total,
      totalScore: 300,
      maxScore: 300,
      passingScore: 180,
      isPassed: total >= 180,
      passed: total >= 180,
      date: new Date().toISOString(),
      completedAt: new Date().toISOString(),
      timeSpentSeconds: Math.round((Date.now() - startRef.current) / 1000),
      sectionScores: parts.map((p) => ({ section: p.section, score: p.score, maxScore: 100 })),
      userAnswers,
      incorrectQuestionIds: exam.questions.filter((q) => !isH3Correct(q, answers[q.n])).map((q) => `${exam.id}-${q.n}`),
    });
    setPhase('results');
    window.scrollTo({ top: 0 });
  };

  function nextSection() {
    if (phase === 'listening') {
      audioRef.current?.pause();
      audioEngine.stop();
      startSection('reading');
    } else if (phase === 'reading') startSection('writing');
    else if (phase === 'writing') finish();
  }

  const setAnswer = (n: number, v: string) => setAnswers((a) => ({ ...a, [n]: v }));

  // ---------- Audio (official single recording) ----------
  const playOfficial = () => {
    const a = audioRef.current;
    if (!a) return;
    if (audioState === 'playing') {
      if (mode === 'practice') a.pause();
      return;
    }
    a.play().catch(() => undefined);
  };

  const playItem = (q: H3Question) => {
    if (!q.transcript) return;
    const used = plays[q.n] || 0;
    if (mode === 'exam' && used >= 2) return;
    setPlays((p) => ({ ...p, [q.n]: used + 1 }));
    audioEngine.speak(speakable(q.transcript), 0.85);
  };

  if (!meta) return null;

  // ---------- Locked (Pro) ----------
  if (locked) {
    return (
      <div className="max-w-xl mx-auto py-10 text-center space-y-4">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1C1917] text-white flex items-center justify-center">
          <PhLock className="w-7 h-7" weight="fill" />
        </div>
        <h1 className="text-2xl font-extrabold text-stone-950">{meta.title}</h1>
        <p className="text-sm text-stone-600">
          {tr('This full exam written by HSK Path is part of the Pro plan. The five official practice papers remain free.')}
        </p>
        <Button variant="outline" onClick={onExit} icon={<ArrowLeft className="w-4 h-4" />}>
          {tr('Back to mock exams')}
        </Button>
      </div>
    );
  }

  if (!exam) {
    return <div className="py-20 text-center text-sm text-stone-500">{tr('Loading…')}</div>;
  }

  const isOfficial = exam.source === 'official';

  // ---------- Intro ----------
  if (phase === 'intro') {
    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-150">
        <button onClick={onExit} className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> {tr('Back to mock exams')}
        </button>
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4DCCE] space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-[#C52828]">HSK 3</span>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${isOfficial ? 'bg-stone-900 text-white border-stone-900' : 'bg-amber-50 text-amber-800 border-amber-200'}`}>
                {isOfficial ? tr('Official practice paper') : tr('Original HSK Path exam')}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">{exam.code}</h1>
            <p className="text-sm text-stone-600">
              {isOfficial
                ? tr('Practice paper published by Hanban / Chinese Testing International, with its original recording.')
                : tr('Written by HSK Path in the exact format of the official paper, using HSK 1–3 vocabulary. The listening is read by a synthetic voice.')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {H3_SECTIONS.map((s) => {
              const Icon = SECTION_ICON[s.id];
              return (
                <div key={s.id} className="p-3 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DE]">
                  <Icon className="w-5 h-5 text-[#C52828]" />
                  <div className="mt-2 text-sm font-bold text-stone-900">{tr(SECTION_LABEL[s.id])}</div>
                  <div className="text-[11px] sm:text-xs text-stone-600">
                    {s.range[1] - s.range[0] + 1} {tr('questions')}<span className="hidden sm:inline"> · </span><br className="sm:hidden" />{s.minutes} min
                  </div>
                </div>
              );
            })}
          </div>

          <p className="flex items-start gap-2 text-xs text-stone-600">
            <Info className="w-4 h-4 shrink-0 text-stone-500" />
            {tr('Each section is scored out of 100 (300 in total). You need 180 to pass.')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => startExam('exam')}
              className="text-left p-4 rounded-2xl border-2 border-[#1C1917] bg-[#1C1917] text-white hover:bg-stone-800 cursor-pointer"
            >
              <div className="text-sm font-bold flex items-center gap-2"><Clock className="w-4 h-4" /> {tr('Real exam conditions')}</div>
              <div className="text-xs text-stone-300 mt-1">
                {isOfficial
                  ? tr('Timed sections, the recording plays once without pause.')
                  : tr('Timed sections, each recording can be played twice.')}
              </div>
            </button>
            <button
              onClick={() => startExam('practice')}
              className="text-left p-4 rounded-2xl border-2 border-[#E4DCCE] bg-white hover:border-stone-900 cursor-pointer"
            >
              <div className="text-sm font-bold text-stone-900 flex items-center gap-2"><RotateCcw className="w-4 h-4" /> {tr('Practice mode')}</div>
              <div className="text-xs text-stone-600 mt-1">{tr('No time limit, pause and replay the audio as often as you like.')}</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Results ----------
  if (phase === 'results') {
    const parts = scoreH3(exam, answers);
    const total = parts.reduce((a, p) => a + p.score, 0);
    const passed = total >= 180;
    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-150">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4DCCE] space-y-6">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500">{exam.code}</div>
            <div className="text-6xl font-black text-stone-950 tabular-nums">
              {total}
              <span className="text-2xl text-stone-400"> / 300</span>
            </div>
            <span className={`inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full ${passed ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'}`}>
              {passed ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
              {passed ? tr('Passed') : tr('Not passed yet (180 needed)')}
            </span>
          </div>
          <div className="space-y-3">
            {parts.map((p) => {
              const Icon = SECTION_ICON[p.section];
              return (
                <div key={p.section} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 font-bold text-stone-900"><Icon className="w-4 h-4 text-[#C52828]" /> {tr(SECTION_LABEL[p.section])}</span>
                    <span className="tabular-nums text-stone-700"><b>{p.score}</b> / 100 <span className="text-stone-400 text-xs">({p.correct}/{p.total})</span></span>
                  </div>
                  <div className="h-2 rounded-full bg-stone-100 overflow-hidden">
                    <div className={`h-full rounded-full ${p.score >= 60 ? 'bg-emerald-500' : 'bg-[#C52828]'}`} style={{ width: `${p.score}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button variant="primary" onClick={() => { setErrorsOnly(true); setPhase('review'); window.scrollTo({ top: 0 }); }}>
              {tr('Review my answers')}
            </Button>
            <Button variant="outline" onClick={() => setPhase('intro')} icon={<RotateCcw className="w-4 h-4" />}>
              {tr('Take it again')}
            </Button>
            <Button variant="ghost" onClick={onExit}>{tr('Back to mock exams')}</Button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Review ----------
  if (phase === 'review') {
    const list = exam.questions.filter((q) => !errorsOnly || !isH3Correct(q, answers[q.n]));
    return (
      <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in duration-150">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button onClick={() => setPhase('results')} className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> {tr('Back to my score')}
          </button>
          <div className="inline-flex p-1 bg-[#EFE8DE] rounded-xl border border-[#E0D7CB]">
            {[true, false].map((v) => (
              <button
                key={String(v)}
                onClick={() => setErrorsOnly(v)}
                className={`px-3 py-1 text-xs font-bold rounded-lg cursor-pointer ${errorsOnly === v ? 'bg-[#1C1917] text-white' : 'text-stone-600'}`}
              >
                {v ? tr('Mistakes only') : tr('All questions')}
              </button>
            ))}
          </div>
        </div>
        {list.length === 0 && <div className="p-8 text-center text-sm text-stone-600 bg-white rounded-2xl border border-[#E4DCCE]">{tr('No mistakes. Well done!')}</div>}
        {list.map((q) => (
          <ReviewCard key={q.n} q={q} group={groupOf(q)} given={answers[q.n]} />
        ))}
      </div>
    );
  }

  // ---------- Section ----------
  const section = phase as SectionId;
  const def = H3_SECTIONS.find((s) => s.id === section)!;
  const secQs = exam.questions.filter((q) => q.n >= def.range[0] && q.n <= def.range[1]);
  const answered = secQs.filter((q) => (answers[q.n] || '').trim()).length;
  const SecIcon = SECTION_ICON[section];
  const lowTime = mode === 'exam' && secondsLeft <= 60;

  return (
    <div className="max-w-3xl mx-auto space-y-5 pb-10">
      {/* Sticky exam bar */}
      <div className="sticky top-16 z-20 -mx-4 sm:mx-0 px-4 sm:px-4 py-3 bg-[#FAF8F5]/95 backdrop-blur border-b sm:border sm:rounded-2xl border-[#E4DCCE] flex items-center gap-3">
        <span className="w-9 h-9 rounded-xl bg-[#1C1917] text-white flex items-center justify-center shrink-0">
          <SecIcon className="w-4 h-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-bold text-stone-900 truncate">{tr(SECTION_LABEL[section])} · {exam.code}</div>
          <div className="text-[11px] text-stone-500 font-semibold">{answered}/{secQs.length} {tr('answered')}</div>
        </div>
        <span className={`tabular-nums text-sm font-bold px-2.5 py-1 rounded-lg ${lowTime ? 'bg-rose-100 text-rose-800' : 'bg-white border border-[#E4DCCE] text-stone-800'}`}>
          {mode === 'exam' ? fmt(secondsLeft) : fmt(elapsed)}
        </span>
        <Button variant="primary" size="sm" onClick={nextSection} iconRight={<ArrowRight className="w-3.5 h-3.5" />}>
          <span className="hidden sm:inline">{section === 'writing' ? tr('Finish the exam') : tr('Next section')}</span>
          <span className="sm:hidden">{section === 'writing' ? tr('Finish') : tr('Next')}</span>
        </Button>
      </div>

      {/* Official recording */}
      {section === 'listening' && isOfficial && exam.audioUrl && (
        <div className="p-4 rounded-2xl bg-white border border-[#E4DCCE] space-y-3">
          <audio
            ref={audioRef}
            src={exam.audioUrl}
            preload="metadata"
            onPlay={() => setAudioState('playing')}
            onPause={() => setAudioState((s) => (s === 'ended' ? s : 'paused'))}
            onEnded={() => setAudioState('ended')}
            onTimeUpdate={(e) => setAudioPos({ t: e.currentTarget.currentTime, d: e.currentTarget.duration || 0 })}
            onLoadedMetadata={(e) => setAudioPos({ t: 0, d: e.currentTarget.duration || 0 })}
          />
          <div className="flex items-center gap-3">
            <button
              onClick={playOfficial}
              disabled={audioState === 'ended' && mode === 'exam'}
              className="w-12 h-12 rounded-full bg-[#C52828] text-white flex items-center justify-center shrink-0 disabled:opacity-40 cursor-pointer"
              aria-label={tr('Play the recording')}
            >
              {audioState === 'playing' && mode === 'practice' ? <Pause className="w-5 h-5" weight="fill" /> : audioState === 'playing' ? <SpeakerHigh className="w-5 h-5" weight="fill" /> : <PhPlay className="w-5 h-5" weight="fill" />}
            </button>
            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="text-sm font-bold text-stone-900">
                {audioState === 'idle'
                  ? tr('Start the recording')
                  : audioState === 'ended'
                  ? tr('Recording finished — check your answers')
                  : tr('Recording in progress')}
              </div>
              {mode === 'practice' ? (
                <input
                  type="range"
                  min={0}
                  max={audioPos.d || 0}
                  step={1}
                  value={audioPos.t}
                  onChange={(e) => { if (audioRef.current) audioRef.current.currentTime = Number(e.target.value); }}
                  className="w-full accent-[#C52828]"
                />
              ) : (
                <div className="h-1.5 rounded-full bg-stone-100 overflow-hidden">
                  <div className="h-full bg-[#C52828]" style={{ width: `${audioPos.d ? (audioPos.t / audioPos.d) * 100 : 0}%` }} />
                </div>
              )}
              <div className="text-[11px] text-stone-500 tabular-nums">{fmt(Math.floor(audioPos.t))} / {fmt(Math.floor(audioPos.d))}</div>
            </div>
          </div>
          {mode === 'exam' && audioState === 'idle' && (
            <p className="text-xs text-stone-500">{tr('As on exam day, the recording plays once and cannot be paused. Each item is read twice.')}</p>
          )}
        </div>
      )}

      {PARTS.filter((p) => p.section === section).map((part) => {
        const qs = exam.questions.filter((q) => q.n >= part.range[0] && q.n <= part.range[1]);
        const groupIds = Array.from(new Set(qs.map((q) => q.group).filter(Boolean))) as string[];
        return (
          <section key={part.range[0]} className="space-y-3">
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C52828]">
                {tr(part.title)} · {tr('Questions')} {part.range[0]}–{part.range[1]}
              </div>
              <p className="text-sm text-stone-600">{tr(part.hint)}</p>
            </div>
            {groupIds.length > 0
              ? groupIds.map((gid) => {
                  const g = exam.groups.find((x) => x.id === gid)!;
                  const gqs = qs.filter((q) => q.group === gid);
                  return (
                    <div key={gid} className="space-y-3">
                      <GroupPanel group={g} />
                      <div className={g.kind === 'image' || g.kind === 'icon' ? 'rounded-2xl bg-white border border-[#E4DCCE] divide-y divide-[#EFE8DE]' : 'space-y-3'}>
                      {gqs.map((q) => (
                        <QuestionCard key={q.n} q={q} group={g} value={answers[q.n]} onAnswer={setAnswer}
                          orderSel={orderSel[q.n] || []} setOrderSel={(v) => { setOrderSel((o) => ({ ...o, [q.n]: v })); setAnswer(q.n, v.map((i) => q.words![i]).join('')); }}
                          compact={g.kind === 'image' || g.kind === 'icon'}
                          speech={!isOfficial ? { plays: plays[q.n] || 0, limit: mode === 'exam' ? 2 : 99, onPlay: () => playItem(q) } : undefined} />
                      ))}
                      </div>
                    </div>
                  );
                })
              : (
                <div className={qs[0]?.type === 'l-tf' ? 'rounded-2xl bg-white border border-[#E4DCCE] divide-y divide-[#EFE8DE]' : 'space-y-3'}>
                {qs.map((q) => (
                  <QuestionCard key={q.n} q={q} value={answers[q.n]} onAnswer={setAnswer} compact={q.type === 'l-tf'}
                    orderSel={orderSel[q.n] || []} setOrderSel={(v) => { setOrderSel((o) => ({ ...o, [q.n]: v })); setAnswer(q.n, v.map((i) => q.words![i]).join('')); }}
                    speech={!isOfficial && q.transcript ? { plays: plays[q.n] || 0, limit: mode === 'exam' ? 2 : 99, onPlay: () => playItem(q) } : undefined} />
                ))}
                </div>
              )}
          </section>
        );
      })}

      <div className="flex justify-end">
        <Button variant="primary" onClick={nextSection} iconRight={<ArrowRight className="w-4 h-4" />}>
          {section === 'writing' ? tr('Finish the exam') : tr('Next section')}
        </Button>
      </div>
    </div>
  );
};

// ======================================================================
// Sub-components
// ======================================================================

const GroupPanel: React.FC<{ group: H3Group }> = ({ group }) => {
  const letters = Object.keys(group.options);
  if (group.kind === 'image' || group.kind === 'icon') {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-3 rounded-2xl bg-white border border-[#E4DCCE]">
        {letters.map((L) => {
          const Icon = group.kind === 'icon' ? ICONS[group.options[L]] : null;
          const isEx = group.example?.letter === L;
          return (
            <div key={L} className={`relative rounded-xl border ${isEx ? 'border-dashed border-stone-300 opacity-60' : 'border-[#EFE8DE]'} bg-[#FAF8F5] aspect-square flex items-center justify-center overflow-hidden`}>
              <span className="absolute top-1 left-1.5 text-xs font-black text-stone-900">{L}</span>
              {Icon ? <Icon className="w-1/2 h-1/2 text-stone-800" weight="duotone" /> : <img src={group.options[L]} alt={L} className="max-w-[85%] max-h-[85%] object-contain mix-blend-multiply" loading="lazy" />}
              {isEx && <span className="absolute bottom-1 text-[9px] font-bold text-stone-500">{tr('example')}</span>}
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="p-3 sm:p-4 rounded-2xl bg-white border border-[#E4DCCE] space-y-2">
      <div className={group.kind === 'word' ? 'flex flex-wrap gap-2' : 'space-y-1.5'}>
        {letters.map((L) => {
          const isEx = group.example?.letter === L;
          return group.kind === 'word' ? (
            <span key={L} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-sm ${isEx ? 'border-dashed border-stone-300 text-stone-400' : 'border-[#E4DCCE] text-stone-900'}`}>
              <b className="text-xs">{L}</b> <span className="font-hanzi-serif">{group.options[L]}</span>
            </span>
          ) : (
            <div key={L} className={`flex gap-2 text-sm ${isEx ? 'text-stone-400' : 'text-stone-900'}`}>
              <b className="text-xs w-4 pt-0.5 shrink-0">{L}</b>
              <span className="font-hanzi-serif">{group.options[L]}</span>
            </div>
          );
        })}
      </div>
      {group.example && group.kind !== 'image' && group.kind !== 'icon' && (
        <p className="text-xs text-stone-500 border-t border-[#EFE8DE] pt-2">
          {tr('Example')}: <span className="font-hanzi-serif">{group.example.text.replace(/\n/g, ' ')}</span> → <b>{group.example.letter}</b>
        </p>
      )}
    </div>
  );
};

const choiceCls = (active: boolean) =>
  `min-w-10 h-10 px-3 rounded-xl border text-sm font-bold transition-colors cursor-pointer ${
    active ? 'bg-[#1C1917] border-[#1C1917] text-white' : 'bg-white border-[#E0D7CB] text-stone-800 hover:border-stone-900'
  }`;

interface QCProps {
  q: H3Question;
  group?: H3Group;
  value?: string;
  onAnswer: (n: number, v: string) => void;
  orderSel: number[];
  setOrderSel: (v: number[]) => void;
  speech?: { plays: number; limit: number; onPlay: () => void };
  compact?: boolean;
}

const QuestionCard: React.FC<QCProps> = ({ q, group, value, onAnswer, orderSel, setOrderSel, speech, compact }) => {
  const letters = group ? Object.keys(group.options).filter((L) => L !== group.example?.letter) : [];
  return (
    <div className={compact ? 'px-4 py-3' : 'p-4 rounded-2xl bg-white border border-[#E4DCCE] space-y-3'}>
      <div className={`flex items-start gap-3 ${compact ? 'sm:items-center' : ''}`}>
        <span className="w-7 h-7 rounded-lg bg-stone-100 text-stone-800 text-xs font-black flex items-center justify-center shrink-0">{q.n}</span>
        <div className={`flex-1 min-w-0 ${compact ? 'flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4' : 'space-y-2'}`}>
          {speech && (
            <button
              onClick={speech.onPlay}
              disabled={speech.plays >= speech.limit}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-[#C52828] text-xs font-bold disabled:opacity-40 cursor-pointer"
            >
              <SpeakerHigh className="w-4 h-4" weight="fill" /> {tr('Listen')}
              {speech.limit < 99 && <span className="text-rose-400">({speech.plays}/{speech.limit})</span>}
            </button>
          )}
          {q.type === 'l-tf' && <div className="font-hanzi-serif text-base text-stone-900 sm:flex-1">★ {q.statement}</div>}
          {(q.type === 'r-match' || q.type === 'r-bank') && <div className="font-hanzi-serif text-base text-stone-900 leading-relaxed">{q.text}</div>}
          {q.type === 'r-mc' && (
            <div className="space-y-2">
              <p className="font-hanzi-serif text-base text-stone-900 leading-relaxed">{q.passage}</p>
              <p className="font-hanzi-serif text-sm font-bold text-stone-900">★ {q.question}</p>
            </div>
          )}
          {q.type === 'w-char' && (
            <div className="font-hanzi-serif text-base text-stone-900 leading-relaxed">
              {q.text!.split('（　）').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="inline-flex flex-col items-center align-bottom mx-1">
                      <span className="text-xs text-[#C52828] font-sans font-semibold">{q.pinyin}</span>
                      <input
                        value={value || ''}
                        onChange={(e) => onAnswer(q.n, e.target.value.trim().slice(0, 2))}
                        className="w-12 h-10 text-center text-lg border-b-2 border-stone-900 bg-[#FAF8F5] rounded-t-md outline-none focus:bg-rose-50"
                        aria-label={`${q.n}`}
                        lang="zh"
                      />
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Answer controls */}
          {(q.type === 'l-img' || q.type === 'r-match' || q.type === 'r-bank') && (
            <div className="flex flex-wrap gap-1.5">
              {letters.map((L) => (
                <button key={L} onClick={() => onAnswer(q.n, L)} className={choiceCls(value === L)}>{L}</button>
              ))}
            </div>
          )}
          {q.type === 'l-tf' && (
            <div className="flex gap-2">
              {['√', '×'].map((v) => (
                <button key={v} onClick={() => onAnswer(q.n, v)} className={`${choiceCls(value === v)} w-14 text-lg`}>{v}</button>
              ))}
            </div>
          )}
          {(q.type === 'l-mc' || q.type === 'r-mc') && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {q.options!.map((o, i) => {
                const L = 'ABC'[i];
                return (
                  <button
                    key={L}
                    onClick={() => onAnswer(q.n, L)}
                    className={`text-left p-2.5 rounded-xl border text-sm flex items-center gap-2 cursor-pointer transition-colors ${
                      value === L ? 'bg-[#1C1917] border-[#1C1917] text-white' : 'bg-white border-[#E0D7CB] text-stone-900 hover:border-stone-900'
                    }`}
                  >
                    <b className="text-xs">{L}</b> <span className="font-hanzi-serif">{o}</span>
                  </button>
                );
              })}
            </div>
          )}
          {q.type === 'w-order' && (
            <div className="space-y-2">
              <div className="min-h-12 p-2 rounded-xl border-2 border-dashed border-[#E0D7CB] bg-[#FAF8F5] flex flex-wrap gap-1.5 items-center">
                {orderSel.length === 0 && <span className="text-xs text-stone-400 px-1">{tr('Tap the words below in the right order')}</span>}
                {orderSel.map((i, k) => (
                  <button key={k} onClick={() => setOrderSel(orderSel.filter((_, j) => j !== k))} className="px-2.5 py-1.5 rounded-lg bg-[#1C1917] text-white font-hanzi-serif text-base cursor-pointer">
                    {q.words![i]}
                  </button>
                ))}
                {orderSel.length === q.words!.length && <span className="font-hanzi-serif text-base">。</span>}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {q.words!.map((w, i) => (
                  <button
                    key={i}
                    disabled={orderSel.includes(i)}
                    onClick={() => setOrderSel([...orderSel, i])}
                    className="px-2.5 py-1.5 rounded-lg border border-[#E0D7CB] bg-white font-hanzi-serif text-base text-stone-900 disabled:opacity-25 cursor-pointer hover:border-stone-900"
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ReviewCard: React.FC<{ q: H3Question; group?: H3Group; given?: string }> = ({ q, group, given }) => {
  const ok = isH3Correct(q, given);
  const label = (v?: string) => {
    if (!v) return '—';
    if (q.type === 'l-mc' || q.type === 'r-mc') {
      const i = 'ABC'.indexOf(v);
      return i >= 0 ? `${v} ${q.options![i]}` : v;
    }
    if ((q.type === 'r-match' || q.type === 'r-bank') && group) return `${v} ${group.options[v] || ''}`;
    return v;
  };
  const prompt =
    q.type === 'l-tf' ? `★ ${q.statement}` :
    q.type === 'r-mc' ? `${q.passage}\n★ ${q.question}` :
    q.type === 'w-order' ? q.words!.join(' / ') :
    q.type === 'w-char' ? `${q.text}（${q.pinyin}）` :
    q.text || '';
  return (
    <div className={`p-4 rounded-2xl bg-white border space-y-2 ${ok ? 'border-emerald-200' : 'border-rose-200'}`}>
      <div className="flex items-center gap-2">
        <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center ${ok ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>{q.n}</span>
        {ok ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-rose-600" />}
        {q.type === 'l-img' && group && (group.kind === 'image'
          ? <img src={group.options[q.answer]} alt={q.answer} className="h-12 rounded-md ml-auto" loading="lazy" />
          : null)}
      </div>
      {prompt && <p className="font-hanzi-serif text-sm text-stone-900 whitespace-pre-line">{prompt}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        <div className={`px-3 py-2 rounded-xl ${ok ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
          <span className="text-[11px] font-bold uppercase tracking-wider opacity-70">{tr('Your answer')}</span>
          <div className="font-hanzi-serif">{label(given)}</div>
        </div>
        {!ok && (
          <div className="px-3 py-2 rounded-xl bg-emerald-50 text-emerald-900">
            <span className="text-[11px] font-bold uppercase tracking-wider opacity-70">{tr('Correct answer')}</span>
            <div className="font-hanzi-serif">{label(q.answer)}{q.alts?.length ? ` / ${q.alts.join(' / ')}` : ''}</div>
          </div>
        )}
      </div>
      {q.transcript && (
        <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFE8DE] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">{tr('Listening script')}</span>
            <SpeechButton text={speakable(q.transcript)} size="sm" allowSpeedToggle />
          </div>
          <p className="font-hanzi-serif text-sm text-stone-800 whitespace-pre-line">{q.transcript}</p>
        </div>
      )}
    </div>
  );
};

