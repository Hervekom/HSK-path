import React, { useEffect, useMemo, useState } from 'react';
import {
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  Info,
  RotateCcw,
  X,
  Play,
  ArrowRight,
  HandWaving,
  HandsPraying,
  BowlFood,
  ShoppingBag,
  Train,
  GraduationCap,
  DeviceMobile,
  Pill,
  House,
  ChatCircleText,
  Clock,
  Siren,
} from '../components/icons';
import { useI18n } from '../locales';
import { tr } from '../locales/tr';
import { PHRASES, type PhraseRow } from '../data/phrases';
import { SpeechButton } from '../components/ui/SpeechButton';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import type { AppState } from '../types';

type LevelFilter = 'all' | 1 | 2 | 3 | 4;

export const SITUATIONS: Array<{ id: string; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { id: 'greetings', label: 'Greetings & introductions', icon: HandWaving },
  { id: 'courtesy', label: 'Politeness', icon: HandsPraying },
  { id: 'restaurant', label: 'At the restaurant', icon: BowlFood },
  { id: 'shopping', label: 'Shopping & paying', icon: ShoppingBag },
  { id: 'transport', label: 'Transport & directions', icon: Train },
  { id: 'school', label: 'At school', icon: GraduationCap },
  { id: 'phone', label: 'Phone & WeChat', icon: DeviceMobile },
  { id: 'health', label: 'Health & pharmacy', icon: Pill },
  { id: 'home', label: 'Home & daily life', icon: House },
  { id: 'feelings', label: 'Feelings & chatting', icon: ChatCircleText },
  { id: 'time', label: 'Time & meeting up', icon: Clock },
  { id: 'emergency', label: 'Emergencies', icon: Siren },
];

export const phraseKey = (id: string) => `phrase:${id}`;

interface PhrasesViewProps {
  learnedPhraseIds: Set<string>;
  onToggleLearned: (id: string) => void;
  onNavigate: (view: AppState['currentView']) => void;
}

interface QuizState {
  items: PhraseRow[];
  index: number;
  choice: string | null;
  score: number;
  options: string[];
}

export const PhrasesView: React.FC<PhrasesViewProps> = ({ learnedPhraseIds, onToggleLearned, onNavigate }) => {
  const { language } = useI18n();
  const [level, setLevel] = useState<LevelFilter>('all');
  const [situation, setSituation] = useState<string>('all');
  const [hidePinyin, setHidePinyin] = useState(false);
  const [hideMeaning, setHideMeaning] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [quiz, setQuiz] = useState<QuizState | null>(null);

  const meaningOf = (p: PhraseRow) => (language === 'fr' ? p[5] : p[6]);
  const noteOf = (p: PhraseRow) => (language === 'fr' ? p[7] : p[8]);

  const list = useMemo(
    () => PHRASES.filter((p) => (level === 'all' || p[2] === level) && (situation === 'all' || p[1] === situation)),
    [level, situation]
  );
  const knownCount = PHRASES.filter((p) => learnedPhraseIds.has(phraseKey(p[0]))).length;

  useEffect(() => setRevealed(new Set()), [hidePinyin, hideMeaning]);

  const levelLabel = (l: number) => (l === 4 ? tr('HSK 4+') : `HSK ${l}`);
  const levelBadge = (l: number) => (l === 1 ? 'hsk1' : l === 2 ? 'hsk2' : l === 3 ? 'hsk3' : 'neutral');

  // ---------- Quiz ----------
  const shuffle = <T,>(a: readonly T[]): T[] => [...a].sort(() => Math.random() - 0.5);
  const buildOptions = (target: PhraseRow, pool: PhraseRow[]) => {
    const others = shuffle(pool.filter((p) => p[0] !== target[0] && meaningOf(p) !== meaningOf(target)))
      .slice(0, 3)
      .map(meaningOf);
    return shuffle([meaningOf(target), ...others]);
  };
  const startQuiz = () => {
    const source: PhraseRow[] = list.length >= 4 ? list : PHRASES;
    const items: PhraseRow[] = shuffle<PhraseRow>(source).slice(0, Math.min(10, source.length));
    setQuiz({ items, index: 0, choice: null, score: 0, options: buildOptions(items[0], PHRASES) });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const answer = (opt: string) => {
    if (!quiz || quiz.choice) return;
    const correct = opt === meaningOf(quiz.items[quiz.index]);
    setQuiz({ ...quiz, choice: opt, score: quiz.score + (correct ? 1 : 0) });
  };
  const nextQuestion = () => {
    if (!quiz) return;
    const next = quiz.index + 1;
    if (next >= quiz.items.length) {
      setQuiz({ ...quiz, index: next, choice: null });
      return;
    }
    setQuiz({ ...quiz, index: next, choice: null, options: buildOptions(quiz.items[next], PHRASES) });
  };

  if (quiz) {
    const done = quiz.index >= quiz.items.length;
    const current = quiz.items[quiz.index];
    return (
      <div className="max-w-2xl mx-auto space-y-5 animate-in fade-in duration-150">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setQuiz(null)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            <X className="w-4 h-4" /> {tr('Exit quiz')}
          </button>
          {!done && (
            <span className="text-xs font-bold text-stone-500">
              {quiz.index + 1} / {quiz.items.length}
            </span>
          )}
        </div>
        <div className="h-1.5 rounded-full bg-stone-200 overflow-hidden">
          <div
            className="h-full bg-[#C52828] transition-all"
            style={{ width: `${(Math.min(quiz.index, quiz.items.length) / quiz.items.length) * 100}%` }}
          />
        </div>

        {done ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4DCCE] text-center space-y-4">
            <div className="text-5xl font-black text-stone-950">
              {quiz.score}
              <span className="text-2xl text-stone-400"> / {quiz.items.length}</span>
            </div>
            <p className="text-sm text-stone-600">
              {quiz.score >= quiz.items.length * 0.8 ? tr('Excellent Work!') : tr('Keep Practicing!')}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="primary" onClick={startQuiz} icon={<RotateCcw className="w-4 h-4" />}>
                {tr('Retry Drill')}
              </Button>
              <Button variant="outline" onClick={() => setQuiz(null)}>
                {tr('Back to phrases')}
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-8 rounded-3xl bg-white border border-[#E4DCCE] space-y-5">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500">{tr('What does this phrase mean?')}</div>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="font-hanzi-serif text-3xl sm:text-4xl font-black text-stone-950 leading-tight">{current[3]}</div>
                <div className="text-sm text-[#C52828] font-semibold mt-2">{current[4]}</div>
              </div>
              <SpeechButton text={current[3]} size="lg" allowSpeedToggle />
            </div>
            <div className="grid gap-2">
              {quiz.options.map((opt, i) => {
                const isRight = opt === meaningOf(current);
                const picked = quiz.choice === opt;
                const state = !quiz.choice
                  ? 'border-[#E4DCCE] hover:border-stone-900 bg-white'
                  : isRight
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                  : picked
                  ? 'border-rose-400 bg-rose-50 text-rose-900'
                  : 'border-[#E4DCCE] bg-white opacity-60';
                return (
                  <button
                    key={opt}
                    onClick={() => answer(opt)}
                    className={`w-full text-left p-3.5 rounded-2xl border text-sm font-semibold flex items-center gap-3 transition-colors cursor-pointer ${state}`}
                  >
                    <span className="w-7 h-7 rounded-lg bg-stone-100 text-stone-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {quiz.choice && isRight && <Check className="w-4 h-4 text-emerald-600" />}
                  </button>
                );
              })}
            </div>
            {quiz.choice && (
              <div className="space-y-3">
                {noteOf(current) && (
                  <p className="text-xs text-stone-600 bg-[#FAF8F5] border border-[#EFE8DE] rounded-xl p-3">{noteOf(current)}</p>
                )}
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={nextQuestion}
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  {quiz.index + 1 >= quiz.items.length ? tr('See my score') : tr('Next Question')}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      {/* Words | Phrases switch */}
      <div className="inline-flex p-1 bg-[#EFE8DE] rounded-xl border border-[#E0D7CB]">
        <button
          onClick={() => onNavigate('vocabulary')}
          className="px-4 py-1.5 text-xs font-bold rounded-lg text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          {tr('Words')}
        </button>
        <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-[#1C1917] text-white shadow-2xs">
          {tr('Everyday phrases')}
        </button>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">{tr('Everyday phrases')}</h1>
          <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-2xl">
            {tr('Short sentences used every day in China, sorted by situation and by HSK level. Learn them as a whole: you can use them right away.')}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <div className="text-lg font-extrabold text-stone-950 tabular-nums">
              {knownCount} <span className="text-sm text-stone-400">/ {PHRASES.length}</span>
            </div>
            <div className="text-[11px] text-stone-500 font-semibold">{tr('phrases known')}</div>
          </div>
          <Button variant="primary" onClick={startQuiz} icon={<Play className="w-4 h-4" weight="fill" />}>
            {tr('Practise')}
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-3 p-3 sm:p-4 rounded-2xl bg-white border border-[#E4DCCE]">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex p-1 bg-[#EFE8DE] rounded-xl border border-[#E0D7CB] overflow-x-auto max-w-full">
            {(['all', 1, 2, 3, 4] as const).map((l) => (
              <button
                key={String(l)}
                onClick={() => setLevel(l)}
                className={`px-3 py-1 text-xs font-bold rounded-lg whitespace-nowrap cursor-pointer transition-all ${
                  level === l ? 'bg-[#1C1917] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {l === 'all' ? tr('All Levels') : levelLabel(l)}
              </button>
            ))}
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => setHidePinyin((v) => !v)}
            className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E0D7CB] text-xs font-semibold text-stone-700 hover:bg-[#FAF8F5] cursor-pointer whitespace-nowrap"
          >
            {hidePinyin ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            {hidePinyin ? tr('Show Pinyin') : tr('Hide Pinyin')}
          </button>
          <button
            onClick={() => setHideMeaning((v) => !v)}
            className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E0D7CB] text-xs font-semibold text-stone-700 hover:bg-[#FAF8F5] cursor-pointer whitespace-nowrap"
          >
            {hideMeaning ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            {hideMeaning ? tr('Show Translation') : tr('Hide Translation')}
          </button>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto lg:flex-wrap lg:overflow-visible pb-1 -mx-1 px-1 [scrollbar-width:none]">
          {[{ id: 'all', label: 'All situations', icon: null as null | React.ComponentType<{ className?: string }> }, ...SITUATIONS].map((s) => {
            const SIcon = s.icon;
            return (
            <button
              key={s.id}
              onClick={() => setSituation(s.id)}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                situation === s.id
                  ? 'bg-[#C52828] border-[#C52828] text-white'
                  : 'bg-white border-[#E0D7CB] text-stone-700 hover:border-stone-400'
              }`}
            >
              {SIcon && <SIcon className="w-3.5 h-3.5" />}
              {tr(s.label)}
            </button>
            );
          })}
        </div>
        {level === 4 && (
          <p className="flex items-start gap-2 text-xs text-stone-600">
            <Info className="w-4 h-4 shrink-0 text-stone-500" />
            {tr('These phrases are used constantly in daily life but contain words beyond the HSK 3 vocabulary (marked on each card).')}
          </p>
        )}
      </div>

      {/* Phrase cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {list.map((p) => {
          const key = phraseKey(p[0]);
          const known = learnedPhraseIds.has(key);
          const isRevealed = revealed.has(p[0]);
          const showPy = !hidePinyin || isRevealed;
          const showMeaning = !hideMeaning || isRevealed;
          return (
            <div
              key={p[0]}
              onClick={() => (hidePinyin || hideMeaning) && setRevealed((r) => new Set(r).add(p[0]))}
              className={`p-4 sm:p-5 rounded-2xl bg-white border shadow-2xs flex flex-col gap-3 transition-colors ${
                known ? 'border-emerald-300' : 'border-[#E4DCCE]'
              } ${hidePinyin || hideMeaning ? 'cursor-pointer' : ''}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 space-y-1">
                  <div className="font-hanzi-serif text-2xl font-black text-stone-950 leading-snug">{p[3]}</div>
                  <div className={`text-sm font-semibold ${showPy ? 'text-[#C52828]' : 'text-transparent bg-stone-100 rounded select-none'}`}>
                    {p[4]}
                  </div>
                </div>
                <SpeechButton text={p[3]} size="md" allowSpeedToggle />
              </div>
              <div className={`text-sm ${showMeaning ? 'text-stone-800' : 'text-transparent bg-stone-100 rounded select-none'}`}>
                {meaningOf(p)}
              </div>
              {noteOf(p) && showMeaning && (
                <p className="text-xs text-stone-600 bg-[#FAF8F5] border border-[#EFE8DE] rounded-xl px-3 py-2">{noteOf(p)}</p>
              )}
              <div className="flex items-center justify-between gap-2 pt-1 mt-auto">
                <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                  <Badge variant={levelBadge(p[2]) as any} size="sm">
                    {levelLabel(p[2])}
                  </Badge>
                  {p[9].map((b) => {
                    const [w, l] = b.split('|');
                    return (
                      <span key={b} className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-800">
                        {w} · HSK {Number(l) >= 7 ? '7–9' : l}
                      </span>
                    );
                  })}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleLearned(key);
                  }}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    known ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" weight={known ? 'fill' : 'regular'} />
                  {known ? tr('Known') : tr('I know it')}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
