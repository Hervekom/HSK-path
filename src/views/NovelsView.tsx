import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowLeft, ArrowRight, BookOpenText, CheckCircle, Clock, Eye, EyeSlash, ListBullets, Question, SpeakerHigh, Stop, TextAa, Trophy, X, XCircle,
} from '@phosphor-icons/react';
import { tr } from '../locales/tr';
import { useI18n } from '../locales';
import { audioEngine } from '../utils/audio';
import { earn, setStat, type GameState } from '../game/engine';
import NOVELS from '../data/novels/index.json';

// ------------------------------------------------------------------------------------------
// Data (src/data/novels, built by scripts/build-novels.ts)

type L2 = { fr: string; en: string };
type Tok = { h: string; p: string; name?: 1 };
interface NovelMeta {
  id: string;
  order: number;
  category: 'legend' | 'history';
  era?: L2;
  hanzi: string;
  titlePinyin: string;
  title: L2;
  level: string;
  summary: L2;
  chars: number;
  chapters: number;
  questions: number;
}
interface Novel extends NovelMeta {
  chapters: never;
  chapterList: Array<{ title: Tok[]; paragraphs: Tok[][] }>;
  glossary: Array<{ w: string; p: string; fr: string; en: string }>;
  questions: never;
  quiz: Array<{ q: L2; options: L2[]; answer: number; why: L2 }>;
}

const LIST = NOVELS as NovelMeta[];
const loaders = import.meta.glob('../data/novels/*.json');

async function loadNovel(id: string): Promise<Novel> {
  const mod = (await loaders[`../data/novels/${id}.json`]()) as { default: Record<string, unknown> };
  const raw = mod.default as Record<string, any>;
  return { ...(raw as object), chapterList: raw.chapters, quiz: raw.questions } as Novel;
}

/** Reading speed of a beginner in pinyin: about 70 syllables a minute. */
const minutesOf = (chars: number) => Math.max(5, Math.round(chars / 70));

const OPENING = new Set(['“', '(', '«']);
type Word = { pre: string; h: string; p: string; post: string; name?: boolean };

/** Glues punctuation to the neighbouring word so lines never start with a comma. */
function words(tokens: Tok[]): Word[] {
  const out: Word[] = [];
  let pending = '';
  for (const t of tokens) {
    const zh = /[㐀-鿿0-9]/.test(t.h);
    if (!zh) {
      if (OPENING.has(t.p)) pending += t.p;
      else if (out.length) out[out.length - 1].post += t.p;
      else pending += t.p;
      continue;
    }
    out.push({ pre: pending, h: t.h, p: t.p, post: '', name: Boolean(t.name) });
    pending = '';
  }
  if (pending && out.length) out[out.length - 1].post += pending;
  return out;
}

const plainHanzi = (tokens: Tok[]) => tokens.map((t) => t.h).join('');

// ------------------------------------------------------------------------------------------
// Saved state (reading position per story; best score lives in the game state)

const POS_KEY = 'hskpath_novel_pos';
function readPos(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(POS_KEY) || '{}');
  } catch {
    return {};
  }
}
function savePos(id: string, chapter: number) {
  try {
    localStorage.setItem(POS_KEY, JSON.stringify({ ...readPos(), [id]: chapter }));
  } catch {
    /* storage unavailable */
  }
}

const PREF_KEY = 'hskpath_novel_prefs';
function readPrefs(): { size: number; hanzi: boolean } {
  try {
    return { size: 1, hanzi: false, ...JSON.parse(localStorage.getItem(PREF_KEY) || '{}') };
  } catch {
    return { size: 1, hanzi: false };
  }
}

// ------------------------------------------------------------------------------------------

interface Props {
  game: GameState;
}

export const NovelsView: React.FC<Props> = ({ game }) => {
  const { language } = useI18n();
  const L = (t: L2) => (language === 'fr' ? t.fr : t.en);
  const [openId, setOpenId] = useState<string | null>(() => {
    try {
      return sessionStorage.getItem('hskpath_novel_open');
    } catch {
      return null;
    }
  });
  useEffect(() => {
    try {
      if (openId) sessionStorage.setItem('hskpath_novel_open', openId);
      else sessionStorage.removeItem('hskpath_novel_open');
    } catch {
      /* ignore */
    }
  }, [openId]);

  const [tab, setTab] = useState<'history' | 'legend'>(() => {
    try {
      return (localStorage.getItem('hskpath_novel_tab') as 'history' | 'legend') || 'history';
    } catch {
      return 'history';
    }
  });
  const pickTab = (t: 'history' | 'legend') => {
    setTab(t);
    try {
      localStorage.setItem('hskpath_novel_tab', t);
    } catch {
      /* ignore */
    }
  };

  if (openId) return <NovelReader id={openId} onBack={() => setOpenId(null)} best={game.stats[`novelScore:${openId}`]} L={L} />;

  const pos = readPos();
  const done = LIST.filter((n) => game.stats[`novelScore:${n.id}`] !== undefined).length;
  const shown = LIST.filter((n) => n.category === tab);

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">{tr('Stories in pinyin')}</h1>
          <p className="text-sm sm:text-base text-stone-500 mt-1 max-w-2xl">
            {tr('Chinese stories written only in pinyin. Read the whole story, then answer the questions to check that you really understood it.')}
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border border-[#E4DCCE] text-sm font-bold text-stone-700 self-start sm:self-auto">
          <Trophy className="w-4 h-4 text-amber-500" weight="fill" /> {done} / {LIST.length} {tr('stories read')}
        </div>
      </div>

      <div className="flex gap-1 p-1 rounded-2xl bg-[#EFE8DE] w-full sm:w-auto sm:inline-flex">
        {(['history', 'legend'] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => pickTab(t)}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-sm font-bold cursor-pointer ${tab === t ? 'bg-white text-stone-950 shadow-sm' : 'text-stone-600'}`}
          >
            {t === 'history' ? tr('True stories') : tr('Legends')}
            <span className="ml-1.5 text-xs font-semibold text-stone-400">{LIST.filter((n) => n.category === t).length}</span>
          </button>
        ))}
      </div>
      <p className="text-sm text-stone-500 -mt-2">
        {tab === 'history'
          ? tr('Real people who shaped Chinese culture, from Confucius to today. Long stories (25 to 40 minutes): you can stop and continue later.')
          : tr('The great myths and legends every Chinese person knows. Short stories (7 to 15 minutes).')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {shown.map((n) => {
          const best = game.stats[`novelScore:${n.id}`];
          const started = pos[n.id] !== undefined;
          return (
            <button
              key={n.id}
              type="button"
              onClick={() => setOpenId(n.id)}
              className="text-left p-5 rounded-3xl bg-white border border-[#E4DCCE] hover:border-[#C52828] hover:shadow-md transition-all cursor-pointer flex flex-col gap-3"
            >
              <div className="flex items-start gap-3">
                <span className="w-14 h-14 rounded-2xl bg-[#1C1917] text-white grid place-items-center text-lg font-black shrink-0 leading-none text-center p-1">
                  {n.hanzi.slice(0, 2)}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#C52828]">
                    {n.era ? L(n.era) : `${String(n.order).padStart(2, '0')} · ${n.level.toUpperCase().replace('HSK', 'HSK ')}`}
                  </div>
                  <div className="text-lg font-extrabold text-stone-950 leading-tight">{n.titlePinyin}</div>
                  <div className="text-sm text-stone-500">{L(n.title)}</div>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">{L(n.summary)}</p>
              <div className="mt-auto pt-3 border-t border-[#EFE8DE] flex items-center justify-between gap-2 text-xs text-stone-500">
                <span className="inline-flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {minutesOf(n.chars)} min
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <ListBullets className="w-3.5 h-3.5" /> {n.chapters} {tr('chapters')}
                  </span>
                </span>
                {best !== undefined ? (
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
                    <CheckCircle className="w-4 h-4" weight="fill" /> {best}/{n.questions}
                  </span>
                ) : started ? (
                  <span className="font-bold text-[#C52828]">{tr('Continue')} →</span>
                ) : (
                  <span className="font-bold text-stone-800">{tr('Read')} →</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ------------------------------------------------------------------------------------------

const SIZES = ['text-lg leading-[2.1]', 'text-xl leading-[2.15]', 'text-2xl leading-[2.2]'];

const NovelReader: React.FC<{ id: string; onBack: () => void; best?: number; L: (t: L2) => string }> = ({ id, onBack, best, L }) => {
  const [novel, setNovel] = useState<Novel | null>(null);
  const [chapter, setChapter] = useState(() => readPos()[id] ?? 0);
  const [mode, setMode] = useState<'read' | 'quiz'>('read');
  const [prefs, setPrefs] = useState(readPrefs);
  const [picked, setPicked] = useState<Word | null>(null);
  const [glossary, setGlossary] = useState(false);
  const [playing, setPlaying] = useState<number | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadNovel(id).then(setNovel);
    return () => audioEngine.stop();
  }, [id]);
  useEffect(() => {
    try {
      localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
    } catch {
      /* ignore */
    }
  }, [prefs]);
  useEffect(() => {
    savePos(id, chapter);
    audioEngine.stop();
    setPlaying(null);
    setPicked(null);
    topRef.current?.scrollIntoView({ block: 'start' });
    window.scrollTo({ top: 0 });
  }, [chapter, id]);

  if (!novel) {
    return <div className="py-20 text-center text-stone-400">{tr('Loading…')}</div>;
  }

  const total = novel.chapterList.length;
  const ch = novel.chapterList[chapter];

  const speak = (i: number, text: string) => {
    if (playing === i) {
      audioEngine.stop();
      setPlaying(null);
      return;
    }
    audioEngine.stop();
    setPlaying(i);
    audioEngine.speak(text, 0.8, () => setPlaying(null), () => setPlaying(null));
  };

  if (mode === 'quiz') {
    return <NovelQuiz novel={novel} best={best} L={L} onBack={() => setMode('read')} onList={onBack} />;
  }

  return (
    <div ref={topRef} className="max-w-3xl mx-auto space-y-5 animate-in fade-in duration-150 pb-24">
      {/* header */}
      <div className="flex items-center justify-between gap-2">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-1.5 text-sm font-bold text-stone-600 hover:text-stone-950 cursor-pointer py-2">
          <ArrowLeft className="w-4 h-4" /> {tr('All stories')}
        </button>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setPrefs((p) => ({ ...p, hanzi: !p.hanzi }))}
            className={`inline-flex items-center gap-1.5 h-10 px-3 rounded-xl border text-sm font-bold cursor-pointer ${prefs.hanzi ? 'bg-[#1C1917] text-white border-[#1C1917]' : 'bg-white border-[#E2D9CC] text-stone-700'}`}
            aria-pressed={prefs.hanzi}
          >
            {prefs.hanzi ? <Eye className="w-4 h-4" /> : <EyeSlash className="w-4 h-4" />} 汉字
          </button>
          <button
            type="button"
            onClick={() => setPrefs((p) => ({ ...p, size: (p.size + 1) % SIZES.length }))}
            className="w-10 h-10 rounded-xl border border-[#E2D9CC] bg-white grid place-items-center cursor-pointer"
            aria-label={tr('Text size')}
          >
            <TextAa className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setGlossary(true)}
            className="w-10 h-10 rounded-xl border border-[#E2D9CC] bg-white grid place-items-center cursor-pointer"
            aria-label={tr('Useful words')}
          >
            <BookOpenText className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* title */}
      <div className="text-center space-y-1">
        <div className="text-xs font-bold uppercase tracking-wider text-[#C52828]">
          {tr('Chapter')} {chapter + 1} / {total}
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950">{words(ch.title).map((w) => w.pre + w.p + w.post).join(' ')}</h1>
        {chapter === 0 && <p className="text-sm text-stone-500">{novel.titlePinyin} · {L(novel.title)}</p>}
        <div className="flex justify-center gap-1 pt-2">
          {novel.chapterList.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setChapter(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${i === chapter ? 'w-8 bg-[#C52828]' : i < chapter ? 'w-4 bg-[#C52828]/40' : 'w-4 bg-stone-200'}`}
              aria-label={`${tr('Chapter')} ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* text */}
      <article className="p-5 sm:p-8 rounded-3xl bg-[#FFFDF8] border border-[#EDE4D3] space-y-6">
        {ch.paragraphs.map((para, pi) => (
          <div key={pi} className="flex gap-3">
            <p className={`flex-1 min-w-0 text-stone-900 ${SIZES[prefs.size]}`}>
              {words(para).map((w, wi) => (
                <React.Fragment key={wi}>
                  <button
                    type="button"
                    onClick={() => {
                      setPicked(w);
                      audioEngine.speak(w.h, 0.8);
                    }}
                    className={`inline-flex flex-col items-center align-top rounded-md px-0.5 -mx-0.5 cursor-pointer hover:bg-amber-100 ${picked === w ? 'bg-amber-200' : ''}`}
                  >
                    <span>
                      {w.pre}
                      <span className={w.name ? 'text-[#A11D1D] font-semibold' : undefined}>{w.p}</span>
                      {w.post}
                    </span>
                    {prefs.hanzi && <span className="text-[0.7em] leading-none text-stone-500 font-normal -mt-1">{w.h}</span>}
                  </button>{' '}
                </React.Fragment>
              ))}
            </p>
            <button
              type="button"
              onClick={() => speak(pi, plainHanzi(para))}
              className={`w-9 h-9 rounded-xl border shrink-0 grid place-items-center cursor-pointer mt-1 ${playing === pi ? 'bg-[#C52828] text-white border-[#C52828]' : 'bg-white border-[#E2D9CC] text-stone-500'}`}
              aria-label={tr('Listen')}
            >
              {playing === pi ? <Stop className="w-4 h-4" weight="fill" /> : <SpeakerHigh className="w-4 h-4" />}
            </button>
          </div>
        ))}
      </article>
      <p className="text-xs text-center text-stone-400">{tr('Tap a word to hear it and see its characters.')}</p>

      {/* chapter navigation */}
      <div className="flex gap-2">
        <button
          type="button"
          disabled={chapter === 0}
          onClick={() => setChapter((c) => c - 1)}
          className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-2xl border border-[#E2D9CC] bg-white font-bold text-stone-700 disabled:opacity-40 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> {tr('Previous')}
        </button>
        {chapter < total - 1 ? (
          <button
            type="button"
            onClick={() => setChapter((c) => c + 1)}
            className="flex-[2] inline-flex items-center justify-center gap-2 h-12 rounded-2xl bg-[#1C1917] text-white font-bold cursor-pointer"
          >
            {tr('Next chapter')} <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setMode('quiz')}
            className="flex-[2] inline-flex items-center justify-center gap-2 h-12 rounded-2xl bg-[#C52828] text-white font-bold cursor-pointer"
          >
            <Question className="w-5 h-5" /> {tr('Answer the questions')}
          </button>
        )}
      </div>

      {/* word popup */}
      {picked &&
        createPortal(
          <div className="fixed inset-x-0 bottom-[72px] lg:bottom-0 z-[60] p-3 lg:pb-4 lg:left-[256px]">
            <div className="max-w-md mx-auto flex items-center gap-3 p-3 pl-4 rounded-2xl bg-[#1C1917] text-white shadow-xl animate-in slide-in-from-bottom-4 duration-150">
              <div className="flex-1 min-w-0">
                <div className="text-2xl font-bold">{picked.h}</div>
                <div className="text-sm text-stone-300">{picked.p}</div>
              </div>
              <button type="button" onClick={() => audioEngine.speak(picked.h, 0.7)} className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center cursor-pointer" aria-label={tr('Listen')}>
                <SpeakerHigh className="w-5 h-5" />
              </button>
              <button type="button" onClick={() => setPicked(null)} className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center cursor-pointer" aria-label={tr('Close')}>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>,
          document.body,
        )}

      {/* glossary */}
      {glossary &&
        createPortal(
          <div className="fixed inset-0 z-[80] bg-stone-950/50 flex items-end sm:items-center justify-center sm:p-4" onClick={() => setGlossary(false)}>
            <div
              role="dialog"
              aria-modal="true"
              className="w-full sm:max-w-md max-h-[85vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] animate-in slide-in-from-bottom-4 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-extrabold text-stone-950">{tr('Useful words')}</h2>
                <button type="button" onClick={() => setGlossary(false)} className="w-10 h-10 rounded-xl bg-stone-100 grid place-items-center cursor-pointer" aria-label={tr('Close')}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ul className="divide-y divide-[#EFE8DE]">
                {novel.glossary.map((g) => (
                  <li key={g.w} className="py-2.5 flex items-center gap-3">
                    <button type="button" onClick={() => audioEngine.speak(g.w.replace(' / ', '，'), 0.7)} className="w-9 h-9 rounded-xl border border-[#E2D9CC] grid place-items-center shrink-0 cursor-pointer" aria-label={tr('Listen')}>
                      <SpeakerHigh className="w-4 h-4 text-stone-500" />
                    </button>
                    <div className="min-w-0">
                      <div className="text-base font-bold text-stone-900">
                        {g.p} <span className="text-stone-400 font-normal ml-1">{g.w}</span>
                      </div>
                      <div className="text-sm text-stone-600">{L(g)}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

// ------------------------------------------------------------------------------------------

const NovelQuiz: React.FC<{ novel: Novel; best?: number; L: (t: L2) => string; onBack: () => void; onList: () => void }> = ({ novel, best, L, onBack, onList }) => {
  const [i, setI] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const q = novel.quiz[i];
  const total = novel.quiz.length;

  // options shuffled once per question, so the answer is not always in the same place
  const order = useMemo(() => {
    const idx = q.options.map((_, k) => k);
    for (let k = idx.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [idx[k], idx[j]] = [idx[j], idx[k]];
    }
    return idx;
  }, [i, q]);

  const answer = (k: number) => {
    if (choice !== null) return;
    setChoice(k);
    if (k === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (i < total - 1) {
      setI(i + 1);
      setChoice(null);
      window.scrollTo({ top: 0 });
      return;
    }
    setFinished(true);
    const final = score;
    const passed = final / total >= 0.6;
    earn('novel', { key: `novel:${novel.id}`, amount: passed ? undefined : 10 });
    if (best === undefined || final > best) setStat(`novelScore:${novel.id}`, final);
  };

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const passed = pct >= 60;
    return (
      <div className="max-w-md mx-auto py-6 text-center space-y-5 animate-in fade-in duration-200">
        <div className={`w-24 h-24 mx-auto rounded-full grid place-items-center ${passed ? 'bg-emerald-100' : 'bg-amber-100'}`}>
          {passed ? <Trophy className="w-12 h-12 text-emerald-600" weight="fill" /> : <BookOpenText className="w-12 h-12 text-amber-600" />}
        </div>
        <div>
          <div className="text-5xl font-black text-stone-950 tabular-nums">
            {score}/{total}
          </div>
          <h2 className="text-xl font-extrabold text-stone-900 mt-2">
            {pct === 100 ? tr('Perfect: you understood everything!') : passed ? tr('Well done, you understood the story!') : tr('Read the story again and try once more.')}
          </h2>
          <p className="text-sm text-stone-500 mt-1">
            {novel.titlePinyin} · {L(novel.title)}
          </p>
        </div>
        <div className="space-y-2">
          {!passed && (
            <button type="button" onClick={onBack} className="w-full h-12 rounded-2xl bg-[#C52828] text-white font-bold cursor-pointer">
              {tr('Read it again')}
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setI(0);
              setChoice(null);
              setScore(0);
              setFinished(false);
            }}
            className="w-full h-12 rounded-2xl border border-[#E2D9CC] bg-white font-bold text-stone-700 cursor-pointer"
          >
            {tr('Retry the questions')}
          </button>
          <button type="button" onClick={onList} className={`w-full h-12 rounded-2xl font-bold cursor-pointer ${passed ? 'bg-[#1C1917] text-white' : 'border border-[#E2D9CC] bg-white text-stone-700'}`}>
            {tr('Choose another story')}
          </button>
        </div>
      </div>
    );
  }

  const correct = choice !== null && choice === q.answer;
  return (
    <div className="max-w-2xl mx-auto space-y-5 animate-in fade-in duration-150 pb-10">
      <div className="flex items-center justify-between gap-2">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-1.5 text-sm font-bold text-stone-600 hover:text-stone-950 cursor-pointer py-2">
          <ArrowLeft className="w-4 h-4" /> {tr('Back to the story')}
        </button>
        <span className="text-sm font-bold text-stone-500 tabular-nums">
          {i + 1} / {total}
        </span>
      </div>
      <div className="h-2 rounded-full bg-stone-200 overflow-hidden">
        <div className="h-full bg-[#C52828] rounded-full transition-all" style={{ width: `${(i / total) * 100}%` }} />
      </div>

      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-wider text-[#C52828]">{tr('Did you understand?')}</p>
        <h2 className="text-xl sm:text-2xl font-extrabold text-stone-950 leading-snug">{L(q.q)}</h2>
      </div>

      <div className="space-y-2">
        {order.map((k) => {
          const isAnswer = k === q.answer;
          const isPicked = k === choice;
          const cls =
            choice === null
              ? 'bg-white border-[#E2D9CC] hover:border-stone-900'
              : isAnswer
                ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                : isPicked
                  ? 'bg-rose-50 border-rose-400 text-rose-900'
                  : 'bg-white border-[#EFE8DE] opacity-60';
          return (
            <button
              key={k}
              type="button"
              onClick={() => answer(k)}
              className={`w-full min-h-14 px-4 py-3 rounded-2xl border-2 text-left text-base font-semibold flex items-center gap-3 cursor-pointer transition-colors ${cls}`}
            >
              <span className="flex-1">{L(q.options[k])}</span>
              {choice !== null && isAnswer && <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" weight="fill" />}
              {choice !== null && isPicked && !isAnswer && <XCircle className="w-6 h-6 text-rose-500 shrink-0" weight="fill" />}
            </button>
          );
        })}
      </div>

      {choice !== null && (
        <div className={`p-4 rounded-2xl border animate-in fade-in duration-150 ${correct ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
          <p className={`font-bold ${correct ? 'text-emerald-800' : 'text-amber-900'}`}>{correct ? tr('Correct!') : tr('Not quite.')}</p>
          <p className="text-sm text-stone-700 mt-1 leading-relaxed">{L(q.why)}</p>
        </div>
      )}

      {choice !== null && (
        <button type="button" onClick={next} className="w-full h-12 rounded-2xl bg-[#1C1917] text-white font-bold inline-flex items-center justify-center gap-2 cursor-pointer">
          {i < total - 1 ? tr('Next question') : tr('See my score')} <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
