import React, { useEffect, useMemo, useState } from 'react';
import { tr } from '../locales/tr';
import { useI18n } from '../locales';
import { Info, Lock, Waveform, BookOpen, ChatsCircle } from '../components/icons';
import { HSK_LESSONS_DATA } from '../data/lessons';
import type { AppState, HskLesson, LessonScene } from '../types';
import { loadWordAudio, wordId } from '../utils/wordAudio';
import { loadProgress, recordScore, PRON_FOCUS_KEY, type PronProgress } from '../utils/pronProgress';
import { micSupport } from '../utils/recorder';
import { ToneTrainer } from '../components/pronunciation/ToneTrainer';
import { SpeakCard, type SpeakItem } from '../components/pronunciation/SpeakCard';
import { MicNotice } from '../components/pronunciation/MicNotice';
import { ProUpgradeModal } from '../components/ui/ProUpgradeModal';

type Tab = 'tones' | 'words' | 'sentences';
type Level = HskLesson['level'];

interface PronunciationViewProps {
  hasPro: boolean;
  isSignedIn: boolean;
  onNavigate: (view: AppState['currentView']) => void;
}

const LEVELS: Level[] = ['hsk1', 'hsk2', 'hsk3'];
const TABS: { id: Tab; label: string; icon: typeof Waveform }[] = [
  { id: 'tones', label: 'Tones', icon: Waveform },
  { id: 'words', label: 'Words', icon: BookOpen },
  { id: 'sentences', label: 'Sentences', icon: ChatsCircle },
];

function readFocus(): { hanzi: string; pinyin: string } | null {
  try {
    const raw = sessionStorage.getItem(PRON_FOCUS_KEY);
    if (!raw) return null;
    sessionStorage.removeItem(PRON_FOCUS_KEY);
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export const PronunciationView: React.FC<PronunciationViewProps> = ({ hasPro, isSignedIn }) => {
  const { getLocalized } = useI18n();
  const [focus] = useState(readFocus);
  const [tab, setTab] = useState<Tab>(() => {
    if (focus) return 'words';
    try {
      return (sessionStorage.getItem('hskpath_pron_tab') as Tab) || 'tones';
    } catch {
      return 'tones';
    }
  });
  const [progress, setProgress] = useState<PronProgress>(loadProgress);
  const [proModal, setProModal] = useState(false);
  const mic = micSupport();

  useEffect(() => {
    try {
      sessionStorage.setItem('hskpath_pron_tab', tab);
    } catch {
      // not remembered
    }
  }, [tab]);

  const onScored = (key: string, score: number) => setProgress(recordScore(key, score));

  const practised: [string, { best: number }][] = Object.entries(progress.items);
  const words = practised.filter(([k]) => k.startsWith('w') || k.startsWith('v:'));
  const avg = practised.length ? Math.round(practised.reduce((s, [, v]) => s + v.best, 0) / practised.length) : null;
  const pct = (x: { ok: number; n: number }) => (x.n ? `${Math.round((100 * x.ok) / x.n)}%` : '—');

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">{tr('Pronunciation')}</h1>
          <p className="text-sm sm:text-base text-stone-500 font-medium mt-1">
            {tr('Listen, repeat, and see your tones: your voice is compared with the model.')}
          </p>
        </div>
        <dl className="grid grid-cols-4 gap-2 text-center shrink-0">
          {[
            { k: 'Words', v: String(words.length) },
            { k: 'Average', v: avg === null ? '—' : `${avg}%` },
            { k: 'Ear', v: pct(progress.listen) },
            { k: 'Tones said', v: pct(progress.say) },
          ].map((s) => (
            <div key={s.k} className="px-2.5 sm:px-3 py-2 rounded-xl bg-white border border-[#E8E2D8] min-w-0">
              <dt className="text-[10px] font-bold uppercase tracking-wider text-stone-400 truncate">{tr(s.k)}</dt>
              <dd className="text-base sm:text-lg font-extrabold text-stone-900">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {mic && <MicNotice error={mic} />}

      <div role="tablist" aria-label={tr('Pronunciation')} className="flex gap-1 p-1 rounded-2xl bg-[#F4EFE8] border border-[#E6DED2] w-full sm:w-fit">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            type="button"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold cursor-pointer transition-colors ${
              tab === id ? 'bg-white text-stone-950 shadow-xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Icon className="w-4 h-4" />
            {tr(label)}
          </button>
        ))}
      </div>

      {tab === 'tones' && <ToneTrainer onProgress={() => setProgress(loadProgress())} />}
      {tab === 'words' && (
        <WordPractice
          focus={focus}
          hasPro={hasPro}
          isSignedIn={isSignedIn}
          progress={progress}
          onScored={onScored}
          onLocked={() => setProModal(true)}
          getLocalized={getLocalized}
        />
      )}
      {tab === 'sentences' && (
        <SentencePractice hasPro={hasPro} isSignedIn={isSignedIn} progress={progress} onScored={onScored} onLocked={() => setProModal(true)} getLocalized={getLocalized} />
      )}

      {tab !== 'tones' && (
        <p className="flex items-start gap-2 text-xs text-stone-500 leading-relaxed max-w-3xl">
          <Info className="w-4 h-4 shrink-0 mt-px" />
          {tr(
            'Your melody is analysed on your device, without limit. What you say is also checked by speech recognition when you are signed in (30 checks a day, 150 with Pro, unlimited with your own free Groq key saved in Laoshi). Recordings are never kept.',
          )}
        </p>
      )}

      <ProUpgradeModal isOpen={proModal} onClose={() => setProModal(false)} sourceFeature={tr('Pronunciation')} />
    </div>
  );
};

// ------------------------------------------------------------------------------------------------

interface PracticeProps {
  hasPro: boolean;
  isSignedIn: boolean;
  progress: PronProgress;
  onScored: (key: string, score: number) => void;
  onLocked: () => void;
  getLocalized: ReturnType<typeof useI18n>['getLocalized'];
}

function LessonPicker({
  level,
  setLevel,
  lessonId,
  setLessonId,
  hasPro,
  extra,
}: {
  level: Level;
  setLevel: (l: Level) => void;
  lessonId: string;
  setLessonId: (id: string) => void;
  hasPro: boolean;
  extra?: React.ReactNode;
}) {
  const { getLocalized, language } = useI18n();
  const lessons = HSK_LESSONS_DATA.filter((l) => l.level === level);
  const name = (n: number) => (language === 'zh' ? `第${n}课` : `${tr('Lesson')} ${n}`);
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="inline-flex rounded-xl border border-[#E2D9CC] bg-white p-0.5 shrink-0 self-start">
        {LEVELS.map((l) => (
          <button
            key={l}
            type="button"
            aria-pressed={l === level}
            onClick={() => setLevel(l)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${l === level ? 'bg-stone-900 text-white' : 'text-stone-600'}`}
          >
            HSK {l.slice(3)}
          </button>
        ))}
      </div>
      <select
        value={lessonId}
        onChange={(e) => setLessonId(e.target.value)}
        aria-label={tr('Lesson')}
        className="min-w-0 flex-1 px-3 py-2 rounded-xl border border-[#E2D9CC] bg-white text-sm font-semibold text-stone-800 cursor-pointer"
      >
        {extra}
        {lessons.map((l) => (
          <option key={l.id} value={l.id}>
            {/^(lesson|leçon|第)\s*\d/i.test(getLocalized(l.title)) ? getLocalized(l.title) : `${name(l.lessonNumber)} · ${getLocalized(l.title)}`}
            {!l.isFree && !hasPro ? ' 🔒' : ''}
          </option>
        ))}
      </select>
    </div>
  );
}

function LockedCard({ onLocked }: { onLocked: () => void }) {
  return (
    <div className="p-6 rounded-2xl border border-[#E8E2D8] bg-white text-center space-y-3">
      <Lock className="w-6 h-6 mx-auto text-stone-400" />
      <p className="text-sm text-stone-600">{tr('This lesson is part of HSK Path Pro. HSK 1 and the first two lessons of each level are free.')}</p>
      <button type="button" onClick={onLocked} className="px-4 py-2 rounded-xl bg-[#C52828] text-white text-sm font-bold cursor-pointer">
        {tr('See Pro')}
      </button>
    </div>
  );
}

const REVIEW = '__review__';

function WordPractice({ focus, hasPro, isSignedIn, progress, onScored, onLocked, getLocalized }: PracticeProps & { focus: { hanzi: string; pinyin: string } | null }) {
  const [level, setLevelState] = useState<Level>('hsk1');
  const [lessonId, setLessonId] = useState(() => HSK_LESSONS_DATA.find((l) => l.level === 'hsk1')?.id || '');
  const [index, setIndex] = useState(0);
  const [files, setFiles] = useState<Record<string, string>>({});
  const [single, setSingle] = useState(focus);

  useEffect(() => {
    void loadWordAudio().then(setFiles);
  }, []);

  const setLevel = (l: Level) => {
    setLevelState(l);
    setLessonId(HSK_LESSONS_DATA.find((x) => x.level === l)?.id || '');
    setIndex(0);
    setSingle(null);
  };

  const lesson = HSK_LESSONS_DATA.find((l) => l.id === lessonId);
  const locked = Boolean(lesson && !lesson.isFree && !hasPro && !single);

  const toItem = (hanzi: string, pinyin: string, meaning?: string): SpeakItem => {
    const id = wordId(hanzi, pinyin);
    const key = id ? `w${id}` : `v:${hanzi}`;
    return { key, hanzi, pinyin, meaning, audio: files[key], best: progress.items[key]?.best };
  };

  const items: SpeakItem[] = useMemo(() => {
    if (single) {
      const lessonWord = HSK_LESSONS_DATA.flatMap((l) => l.vocabulary).find((w) => w.hanzi === single.hanzi);
      return [toItem(single.hanzi, single.pinyin, lessonWord ? getLocalized(lessonWord.meaning) : undefined)];
    }
    if (lessonId === REVIEW) {
      const all = HSK_LESSONS_DATA.filter((l) => l.level === level && (l.isFree || hasPro)).flatMap((l) => l.vocabulary);
      const seen = new Set<string>();
      return all
        .map((w) => toItem(w.hanzi, w.pinyin, getLocalized(w.meaning)))
        .filter((it) => {
          const p = progress.items[it.key];
          if (!p || p.best >= 70 || seen.has(it.key)) return false;
          seen.add(it.key);
          return true;
        });
    }
    return (lesson?.vocabulary || []).map((w) => toItem(w.hanzi, w.pinyin, getLocalized(w.meaning)));
    // progress changes would reorder the review list mid-session: only the best score is refreshed below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [single, lessonId, level, files, hasPro]);

  const i = Math.min(index, Math.max(0, items.length - 1));
  const item = items[i] ? { ...items[i], best: progress.items[items[i].key]?.best } : null;
  const reviewCount = HSK_LESSONS_DATA.filter((l) => l.level === level)
    .flatMap((l) => l.vocabulary)
    .filter((w) => {
      const id = wordId(w.hanzi, w.pinyin);
      const p = progress.items[id ? `w${id}` : `v:${w.hanzi}`];
      return p && p.best < 70;
    }).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-5 items-start">
      <div className="space-y-3 min-w-0">
        {single ? (
          <button type="button" onClick={() => setSingle(null)} className="text-sm font-semibold text-[#C52828] cursor-pointer">
            ← {tr('Practise the words of a lesson')}
          </button>
        ) : (
          <LessonPicker
            level={level}
            setLevel={setLevel}
            lessonId={lessonId}
            setLessonId={(id) => {
              setLessonId(id);
              setIndex(0);
            }}
            hasPro={hasPro}
            extra={reviewCount > 0 ? <option value={REVIEW}>{`${tr('To work on')} (${reviewCount})`}</option> : undefined}
          />
        )}
        {locked ? (
          <LockedCard onLocked={onLocked} />
        ) : item ? (
          <SpeakCard
            item={item}
            kind="word"
            canTranscribe={isSignedIn}
            position={`${i + 1} / ${items.length}`}
            onPrev={i > 0 ? () => setIndex(i - 1) : undefined}
            onNext={i < items.length - 1 ? () => setIndex(i + 1) : undefined}
            onScored={onScored}
          />
        ) : (
          <p className="p-6 text-sm text-stone-500 bg-white border border-[#E8E2D8] rounded-2xl text-center">{tr('Nothing to work on here: well done!')}</p>
        )}
      </div>

      {!locked && items.length > 1 && (
        <aside className="hidden lg:block bg-white border border-[#E8E2D8] rounded-2xl p-3 max-h-[70vh] overflow-y-auto">
          <p className="px-1 pb-2 text-xs font-bold uppercase tracking-wider text-stone-400">{tr('Words')}</p>
          <ul className="space-y-0.5">
            {items.map((w, k) => {
              const best = progress.items[w.key]?.best;
              return (
                <li key={w.key + k}>
                  <button
                    type="button"
                    onClick={() => setIndex(k)}
                    className={`w-full flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg text-left cursor-pointer ${k === i ? 'bg-[#F4EFE8]' : 'hover:bg-[#FAF8F5]'}`}
                  >
                    <span className="min-w-0 truncate">
                      <span lang="zh-CN" className="font-hanzi font-bold text-stone-900">
                        {w.hanzi}
                      </span>{' '}
                      <span className="text-xs text-stone-500">{w.pinyin}</span>
                    </span>
                    {best !== undefined && (
                      <span className={`shrink-0 text-[11px] font-bold ${best >= 85 ? 'text-emerald-700' : best >= 70 ? 'text-lime-700' : 'text-amber-700'}`}>{best}%</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
      )}
    </div>
  );
}

function SentencePractice({ hasPro, isSignedIn, progress, onScored, onLocked, getLocalized }: PracticeProps) {
  const [level, setLevelState] = useState<Level>('hsk1');
  const [lessonId, setLessonId] = useState(() => HSK_LESSONS_DATA.find((l) => l.level === 'hsk1')?.id || '');
  const [index, setIndex] = useState(0);
  const [scenes, setScenes] = useState<Record<string, { scenes?: LessonScene[] }> | null>(null);
  const [audio, setAudio] = useState<Record<string, string | string[]>>({});
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    Promise.all([import('../data/lessonScenes'), import('../data/lessonAudio.json')])
      .then(([s, a]) => {
        if (!alive) return;
        setScenes(s.LESSON_SCENES);
        setAudio(a.default as unknown as Record<string, string | string[]>);
      })
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, []);

  const setLevel = (l: Level) => {
    setLevelState(l);
    setLessonId(HSK_LESSONS_DATA.find((x) => x.level === l)?.id || '');
    setIndex(0);
  };

  const lesson = HSK_LESSONS_DATA.find((l) => l.id === lessonId);
  const locked = Boolean(lesson && !lesson.isFree && !hasPro);

  const items: SpeakItem[] = useMemo(() => {
    const lines = (scenes?.[lessonId]?.scenes || []).flatMap((s) => s.lines);
    const seen = new Set<string>();
    return lines
      .filter((l) => {
        const text = (l.audioText || l.hanzi).trim();
        if (seen.has(text) || [...text.replace(/[^一-鿿]/g, '')].length > 30) return false;
        seen.add(text);
        return true;
      })
      .map((l) => {
        const text = (l.audioText || l.hanzi).trim();
        const key = `s:${text}`;
        return { key, hanzi: l.hanzi, pinyin: l.pinyin, meaning: getLocalized(l.meaning), audio: audio[text], best: progress.items[key]?.best };
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scenes, audio, lessonId]);

  const i = Math.min(index, Math.max(0, items.length - 1));
  const item = items[i] ? { ...items[i], best: progress.items[items[i].key]?.best } : null;

  return (
    <div className="space-y-3 max-w-3xl">
      <LessonPicker
        level={level}
        setLevel={setLevel}
        lessonId={lessonId}
        setLessonId={(id) => {
          setLessonId(id);
          setIndex(0);
        }}
        hasPro={hasPro}
      />
      {locked ? (
        <LockedCard onLocked={onLocked} />
      ) : failed ? (
        <p className="p-6 text-sm text-stone-500 bg-white border border-[#E8E2D8] rounded-2xl text-center">{tr('The sentences could not be loaded. Check your connection.')}</p>
      ) : !scenes ? (
        <div className="h-64 rounded-2xl bg-white border border-[#E8E2D8] animate-pulse" />
      ) : item ? (
        <SpeakCard
          item={item}
          kind="sentence"
          canTranscribe={isSignedIn}
          position={`${i + 1} / ${items.length}`}
          onPrev={i > 0 ? () => setIndex(i - 1) : undefined}
          onNext={i < items.length - 1 ? () => setIndex(i + 1) : undefined}
          onScored={onScored}
        />
      ) : (
        <p className="p-6 text-sm text-stone-500 bg-white border border-[#E8E2D8] rounded-2xl text-center">{tr('No dialogue in this lesson yet.')}</p>
      )}
    </div>
  );
}

