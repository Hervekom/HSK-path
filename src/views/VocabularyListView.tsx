import React, { useState, useMemo, useEffect } from 'react';
import { tr, trPos } from '../locales/tr';
import {
  Search,
  BookOpen,
  Star,
  CheckCircle2,
  Volume2,
  Filter,
  Layers,
  Sparkles,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  BrainCircuit,
  Clock,
  Zap,
  TrendingUp,
  Award,
  Check,
} from '../components/icons';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SpeechButton } from '../components/ui/SpeechButton';
import { VocabularyDetailModal } from './VocabularyDetailModal';
import {
  loadSRSState,
  saveSRSState,
  calculateNextSRSState,
  isWordDueForReview,
  getWordPriorityScore,
  getSRSStage,
  getNextIntervalText,
} from '../utils/srs';
import type { VocabularyWord, WordSRSData, SRSGrade, AppState } from '../types';

interface VocabularyListViewProps {
  words: VocabularyWord[];
  onToggleLearned: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onNavigate?: (view: AppState['currentView']) => void;
}

export const VocabularyListView: React.FC<VocabularyListViewProps> = ({
  words,
  onToggleLearned,
  onToggleFavorite,
  onNavigate,
}) => {
  const { t, getLocalized } = useI18n();

  // SRS state store
  const [srsMap, setSrsMap] = useState<Record<string, WordSRSData>>(() => loadSRSState(words));
  
  // Active view tab: 'all' | 'due' | 'flashcards'
  const [activeTab, setActiveTab] = useState<'all' | 'due' | 'flashcards'>('all');

  const [searchQuery, setSearchQuery] = useState('');
  const PAGE_SIZE = 60;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'hsk1' | 'hsk2' | 'hsk3'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'learned' | 'favorite' | 'unlearned'>('all');
  const [activeWordModal, setActiveWordModal] = useState<VocabularyWord | null>(null);

  // Global Pinyin visibility toggle
  const [showPinyin, setShowPinyin] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('hsk_show_vocab_pinyin');
      if (saved !== null) {
        return saved === 'true';
      }
    } catch {
      // ignore
    }
    return true;
  });

  // Track single cards where user clicked "Tap to reveal" in self-test mode
  const [revealedPinyinIds, setRevealedPinyinIds] = useState<Set<string>>(new Set());

  // Flashcard / SRS Session state
  const [sessionIndex, setSessionIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [showPinyinOnFront, setShowPinyinOnFront] = useState(true);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  // Sync SRS state when words prop updates
  useEffect(() => {
    setSrsMap(loadSRSState(words));
  }, [words]);

  const handleToggleGlobalPinyin = () => {
    setShowPinyin((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('hsk_show_vocab_pinyin', String(next));
      } catch {
        // ignore
      }
      return next;
    });
    setRevealedPinyinIds(new Set());
  };

  const handleToggleSingleWordPinyin = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRevealedPinyinIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Grade word in SRS session
  const handleGradeWord = (wordId: string, grade: SRSGrade) => {
    const currentData = srsMap[wordId];
    const updated = calculateNextSRSState(currentData, grade);
    const newMap = { ...srsMap, [wordId]: updated };
    setSrsMap(newMap);
    saveSRSState(newMap);

    // If grade was good or easy, ensure it is marked learned
    if ((grade === 'good' || grade === 'easy') && !words.find((w) => w.id === wordId)?.isLearned) {
      onToggleLearned(wordId);
    }

    // Advance to next card or finish session
    if (sessionIndex + 1 < dueWords.length) {
      setIsCardFlipped(false);
      setSessionIndex((prev) => prev + 1);
    } else {
      setSessionCompleted(true);
    }
  };

  // Words due for SRS review today, ordered by urgency score
  const dueWords = useMemo(() => {
    const due = words.filter((w) => isWordDueForReview(w, srsMap[w.id]));
    return due.sort((a, b) => {
      const scoreA = getWordPriorityScore(a, srsMap[a.id]);
      const scoreB = getWordPriorityScore(b, srsMap[b.id]);
      return scoreB - scoreA;
    });
  }, [words, srsMap]);

  // General Filtered vocabulary list
  const filteredWords = useMemo(() => {
    return words.filter((word) => {
      // Due filter if in 'due' tab
      if (activeTab === 'due' && !isWordDueForReview(word, srsMap[word.id])) {
        return false;
      }
      // Level filter
      if (selectedLevel !== 'all' && word.level !== selectedLevel) {
        return false;
      }
      // Status filter
      if (selectedStatus === 'learned' && !word.isLearned) return false;
      if (selectedStatus === 'favorite' && !word.isFavorite) return false;
      if (selectedStatus === 'unlearned' && word.isLearned) return false;

      // Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchHanzi = word.hanzi.includes(q);
      const matchPinyin = word.pinyin.toLowerCase().includes(q);
      const matchEn = word.meaning.en.toLowerCase().includes(q);
      const matchFr = word.meaning.fr.toLowerCase().includes(q);
      const matchZh = word.meaning.zh.includes(q);

      return matchHanzi || matchPinyin || matchEn || matchFr || matchZh;
    });
  }, [words, selectedLevel, selectedStatus, searchQuery, activeTab, srsMap]);

  // Active card in flashcard or SRS mode
  const currentCardList = activeTab === 'due' ? dueWords : filteredWords;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery, selectedLevel, selectedStatus]);
  const activeFlashcard = currentCardList[sessionIndex] || currentCardList[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* ================= HEADER & MODE BAR ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E2D8]">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white border border-[#E0D7CB] text-[10px] font-bold text-stone-600 uppercase tracking-widest mb-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C52828]" />
            {tr("Spaced review")}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
            {t('vocabulary.title')}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-medium mt-0.5">
            ({filteredWords.length} / {words.length}{" "}{tr("active words)")}
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          {/* Pinyin Global Toggle */}
          <Button
            variant={showPinyin ? 'outline' : 'primary'}
            size="sm"
            onClick={handleToggleGlobalPinyin}
            icon={
              showPinyin ? (
                <EyeOff className="w-3.5 h-3.5 text-stone-500" />
              ) : (
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
              )
            }
            className="shadow-2xs text-xs font-semibold bg-white border-[#E0D7CB]"
          >
            {showPinyin ? t('vocabulary.hidePinyin') : t('vocabulary.showPinyin')}
          </Button>

          {/* Flashcard / SRS Mode Switch */}
          <Button
            variant={activeTab === 'flashcards' ? 'luxury' : 'outline'}
            size="sm"
            onClick={() => {
              if (activeTab === 'flashcards') {
                setActiveTab('all');
              } else {
                setActiveTab('flashcards');
                setSessionIndex(0);
                setIsCardFlipped(false);
                setSessionCompleted(false);
              }
            }}
            icon={<RotateCw className="w-3.5 h-3.5" />}
            className="shadow-2xs text-xs font-semibold"
          >
            {activeTab === 'flashcards' ? tr("Exit Flashcards") : tr("Flashcard Mode")}
          </Button>
        </div>
      </div>

      {/* ================= SRS "REVIEW TODAY" HERO STRIP ================= */}
      {activeTab !== 'flashcards' && (
        <div className="p-6 rounded-3xl bg-[#1C1917] text-white border border-stone-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          {/* Ambient subtle glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C52828]/20 blur-3xl pointer-events-none" />

          <div className="space-y-2 relative z-10 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#C52828] text-white text-[10px] font-bold uppercase tracking-widest shadow-xs">
                {tr("SRS Queue")}
              </span>
              <span className="text-xs text-stone-400 font-medium">
                {tr("Based on your past answers")}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {dueWords.length > 0 ? (
                <>
                  <span className="text-[#FAF8F5] font-black">{dueWords.length}{" "}{tr("Words")}</span>{" "}{tr("Due for Spaced Review Today")}
                </>
              ) : (
                'All Scheduled Reviews Complete for Today'
              )}
            </h2>
            <p className="text-xs text-stone-400 leading-relaxed">
              {dueWords.length > 0
                ? tr("Calculated based on your memory intervals and past retention accuracy. Reviewing now locks these into long-term recall.")
                : tr("Excellent work! Your memory stability scores are currently optimal. You can explore new vocabulary or test unlearned words.")}
            </p>
          </div>

          <div className="shrink-0 relative z-10 flex flex-col sm:flex-row items-center gap-3">
            {dueWords.length > 0 ? (
              <>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setActiveTab('due');
                    setSessionIndex(0);
                    setIsCardFlipped(false);
                    setSessionCompleted(false);
                  }}
                  iconRight={<Zap className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-md"
                >
                  {tr("Start SRS Review (")}{dueWords.length})
                </Button>
                {activeTab === 'due' && (
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setActiveTab('all')}
                    className="w-full sm:w-auto bg-stone-800 text-stone-200 border-stone-700 hover:bg-stone-700"
                  >
                    {tr("View All Words")}
                  </Button>
                )}
              </>
            ) : (
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  setSelectedStatus('unlearned');
                  setActiveTab('all');
                }}
                className="w-full sm:w-auto bg-stone-800 text-stone-200 border-stone-700 hover:bg-stone-700 text-xs"
              >
                {tr("Learn New Words")}
              </Button>
            )}
          </div>
        </div>
      )}

      {/* ================= ACTIVE SRS / FLASHCARD SESSION MODE ================= */}
      {(activeTab === 'flashcards' || (activeTab === 'due' && dueWords.length > 0 && sessionIndex < dueWords.length && !sessionCompleted)) ? (
        <div className="max-w-2xl mx-auto space-y-6 py-2">
          <div className="flex items-center justify-between text-xs font-bold text-stone-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C52828] animate-pulse" />
              {activeTab === 'due' ? tr("SRS Daily Review Session") : tr("Vocabulary Flashcards")}{tr(": Card")}{" "}{sessionIndex + 1}{" "}{tr("of")}{" "}{currentCardList.length}
            </span>
            <button
              onClick={() => setShowPinyinOnFront(!showPinyinOnFront)}
              className="inline-flex items-center gap-1.5 text-stone-600 hover:text-stone-900 cursor-pointer"
            >
              {showPinyinOnFront ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showPinyinOnFront ? tr("Hide Pinyin Front") : tr("Show Pinyin Front")}</span>
            </button>
          </div>

          {activeFlashcard && (
            <div
              onClick={() => setIsCardFlipped(!isCardFlipped)}
              className="relative min-h-[360px] p-8 rounded-3xl bg-white border border-[#E4DCCE] shadow-lg cursor-pointer flex flex-col justify-between select-none group hover:border-[#C52828] transition-all text-center"
            >
              {/* Card top badges */}
              <div className="flex items-center justify-between">
                <Badge variant={activeFlashcard.level as any}>
                  {activeFlashcard.level.toUpperCase()}
                </Badge>
                <span className="text-xs font-semibold text-stone-400">
                  {isCardFlipped ? tr("Back (Meaning & Recall)") : tr("Click anywhere to Flip")}
                </span>
                <Badge variant="neutral">{trPos(activeFlashcard.partOfSpeech)}</Badge>
              </div>

              {/* Card Center Body in Tianzige grid */}
              <div className="py-6 space-y-4">
                {!isCardFlipped ? (
                  <>
                    <div className="inline-block p-6 rounded-2xl bg-[#FAF8F5] border border-[#E4DCCE] tianzige-bg shadow-2xs">
                      <div className="font-hanzi-serif font-black text-6xl sm:text-7xl text-stone-950 tracking-wider">
                        {activeFlashcard.hanzi}
                      </div>
                    </div>
                    {showPinyinOnFront && (
                      <div className="text-lg sm:text-xl font-bold font-mono text-[#C52828]">
                        {activeFlashcard.pinyin}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="font-hanzi-serif font-black text-4xl text-stone-950">
                      {activeFlashcard.hanzi}
                    </div>
                    <div className="text-base font-bold font-mono text-[#C52828]">
                      {activeFlashcard.pinyin}
                    </div>
                    <div className="text-2xl font-black text-stone-900 tracking-tight">
                      {getLocalized(activeFlashcard.meaning)}
                    </div>
                    {activeFlashcard.exampleSentence && (
                      <div className="text-xs text-stone-700 bg-[#FAF8F5] p-3.5 rounded-xl max-w-md mx-auto mt-4 border border-[#E8E0D4] text-left space-y-1">
                        <div className="font-hanzi font-bold text-stone-900">
                          {activeFlashcard.exampleSentence.hanzi}
                        </div>
                        <div className="text-stone-500 text-[11px]">
                          {getLocalized(activeFlashcard.exampleSentence.translation)}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Card Bottom Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-100" onClick={(e) => e.stopPropagation()}>
                <SpeechButton text={activeFlashcard.hanzi} size="md" showLabel />

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleFavorite(activeFlashcard.id)}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      activeFlashcard.isFavorite
                        ? 'bg-amber-50 border-amber-300 text-amber-500'
                        : 'bg-white border-stone-200 text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    <Star className={`w-4 h-4 ${activeFlashcard.isFavorite ? 'fill-amber-400' : ''}`} />
                  </button>
                  <button
                    onClick={() => onToggleLearned(activeFlashcard.id)}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      activeFlashcard.isLearned
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                        : 'bg-white border-stone-200 text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 ${activeFlashcard.isLearned ? 'fill-emerald-500 text-white' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SRS Grading Intervals Bar (When card is flipped or in SRS mode) */}
          {isCardFlipped ? (
            <div className="p-4 rounded-2xl bg-white border border-[#E4DCCE] shadow-sm space-y-3">
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider text-center">
                {tr("Rate Your Recall (SuperMemo SM-2 Algorithm):")}
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => handleGradeWord(activeFlashcard.id, 'again')}
                  className="p-3 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-center cursor-pointer transition-all"
                >
                  <div className="text-[10px] font-bold text-rose-600 uppercase">{tr("Again")}</div>
                  <div className="text-xs font-black text-rose-950 mt-0.5">
                    {getNextIntervalText(srsMap[activeFlashcard.id], 'again')}
                  </div>
                </button>

                <button
                  onClick={() => handleGradeWord(activeFlashcard.id, 'hard')}
                  className="p-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-center cursor-pointer transition-all"
                >
                  <div className="text-[10px] font-bold text-amber-700 uppercase">{tr("Hard")}</div>
                  <div className="text-xs font-black text-amber-950 mt-0.5">
                    {getNextIntervalText(srsMap[activeFlashcard.id], 'hard')}
                  </div>
                </button>

                <button
                  onClick={() => handleGradeWord(activeFlashcard.id, 'good')}
                  className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-center cursor-pointer transition-all"
                >
                  <div className="text-[10px] font-bold text-emerald-700 uppercase">{tr("Good")}</div>
                  <div className="text-xs font-black text-emerald-950 mt-0.5">
                    {getNextIntervalText(srsMap[activeFlashcard.id], 'good')}
                  </div>
                </button>

                <button
                  onClick={() => handleGradeWord(activeFlashcard.id, 'easy')}
                  className="p-3 rounded-xl bg-[#1C1917] hover:bg-stone-800 border border-stone-800 text-center cursor-pointer transition-all text-white"
                >
                  <div className="text-[10px] font-bold text-stone-300 uppercase">{tr("Easy")}</div>
                  <div className="text-xs font-black text-white mt-0.5">
                    {getNextIntervalText(srsMap[activeFlashcard.id], 'easy')}
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <Button
                variant="outline"
                size="md"
                onClick={() => setSessionIndex((prev) => (prev - 1 + currentCardList.length) % currentCardList.length)}
                icon={<ChevronLeft className="w-4 h-4" />}
              >
                {tr("Previous")}
              </Button>
              <Button
                variant="luxury"
                size="md"
                onClick={() => setIsCardFlipped(true)}
              >
                {tr("Reveal Back to Grade")}
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => setSessionIndex((prev) => (prev + 1) % currentCardList.length)}
                iconRight={<ChevronRight className="w-4 h-4" />}
              >
                {tr("Skip")}
              </Button>
            </div>
          )}
        </div>
      ) : (
        /* ================= LIST / GRID VIEW ================= */
        <div className="space-y-6">
          {/* Search & Filter Bar */}
          <div className="p-4 rounded-2xl bg-white border border-[#E4DCCE] shadow-2xs space-y-3">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={tr("Search by Hanzi (学), Pinyin (xué), or English (study)...")}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#E0D7CB] text-xs sm:text-sm font-medium bg-[#FAF8F5]/60 focus:bg-white focus:border-[#1C1917] focus:ring-1 focus:ring-[#1C1917] outline-none"
                />
              </div>

              {/* Level Filter Tabs */}
              <div className="inline-flex p-1 bg-[#EFE8DE] rounded-xl border border-[#E0D7CB] shrink-0">
                {(['all', 'hsk1', 'hsk2', 'hsk3'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      selectedLevel === lvl
                        ? 'bg-[#1C1917] text-white shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {lvl === 'all' ? tr("All Levels") : lvl.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Status Filter Tabs */}
              <div className="inline-flex p-1 bg-[#EFE8DE] rounded-xl border border-[#E0D7CB] shrink-0">
                {(['all', 'learned', 'unlearned', 'favorite'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer capitalize ${
                      selectedStatus === status
                        ? 'bg-[#1C1917] text-white shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {status === 'all' ? tr("All Words") : status === 'learned' ? tr("Learned") : status === 'unlearned' ? tr("Not learned") : tr("Favorite")}
                  </button>
                ))}
              </div>
            </div>

            {/* Banner when Pinyin is hidden to clarify self-test mode */}
            {!showPinyin && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-[#FAF5EB] border border-[#E6D4B0] text-xs text-[#8C6405] font-medium animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-md bg-[#F4E3BF] text-[#7A5500]">
                    <EyeOff className="w-3.5 h-3.5" />
                  </span>
                  <span>{t('vocabulary.pinyinModeActive')}{" "}{tr("Tap individual words to reveal pinyin when self-testing.")}</span>
                </div>
                <button
                  type="button"
                  onClick={handleToggleGlobalPinyin}
                  className="self-end sm:self-auto font-bold text-[#7A5500] hover:text-[#523A00] underline cursor-pointer text-xs"
                >
                  {t('vocabulary.showPinyin')}
                </button>
              </div>
            )}
          </div>

          {/* Cards Grid */}
          {filteredWords.length > 0 ? (
            <>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {filteredWords.slice(0, visibleCount).map((word) => {
                const isPinyinVisible = showPinyin || revealedPinyinIds.has(word.id);
                const srsData = srsMap[word.id];
                const stage = getSRSStage(srsData);

                return (
                  <div
                    key={word.id}
                    onClick={() => setActiveWordModal(word)}
                    className="p-3 sm:p-5 rounded-2xl bg-white border border-[#E4DCCE] hover:border-[#C52828] hover:bg-[#FFFDFB] shadow-2xs space-y-3 sm:space-y-4 flex flex-col min-w-0 justify-between cursor-pointer transition-all group"
                  >
                    <div className="space-y-3">
                      {/* Top Row: Level + Status + SRS Stage */}
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1 min-w-0 overflow-hidden">
                          <Badge variant={word.level as any}>{word.level.toUpperCase()}</Badge>
                          {stage === 'due' && (
                            <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 text-[9px] font-black uppercase">
                              {tr("Due")}
                            </span>
                          )}
                          {stage === 'mastered' && (
                            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase">
                              <span className="hidden sm:inline">{tr("Mastered")}</span>
                              <span className="sm:hidden">✓</span>
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-0.5 sm:gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => onToggleFavorite(word.id)}
                            className={`p-1 rounded-lg text-stone-300 hover:text-amber-500 cursor-pointer transition-colors ${
                              word.isFavorite ? 'text-amber-500' : ''
                            }`}
                            title={tr("Favorite")}
                          >
                            <Star className={`w-4 h-4 ${word.isFavorite ? 'fill-amber-400' : ''}`} />
                          </button>
                          <button
                            onClick={() => onToggleLearned(word.id)}
                            className={`p-1 rounded-lg text-stone-300 hover:text-emerald-600 cursor-pointer transition-colors ${
                              word.isLearned ? 'text-emerald-600' : ''
                            }`}
                            title={tr("Learned")}
                          >
                            <CheckCircle2 className={`w-4 h-4 ${word.isLearned ? 'fill-emerald-500 text-white' : ''}`} />
                          </button>
                        </div>
                      </div>

                      {/* Character & Pinyin Self-Test Box in Tianzige style */}
                      <div className="text-center py-3.5 px-2 bg-[#FAF8F5] rounded-xl border border-[#E8E0D4] space-y-1.5 transition-all tianzige-bg">
                        <div className="font-hanzi-serif font-black text-3xl sm:text-4xl text-stone-950 tracking-wide select-text">
                          {word.hanzi}
                        </div>

                        {/* Pinyin display or Tap to Reveal trigger */}
                        {isPinyinVisible ? (
                          <div className="flex items-center justify-center gap-1 min-h-[22px]">
                            <span
                              className={`text-xs font-mono ${
                                !showPinyin
                                  ? 'text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200'
                                  : 'text-[#C52828] font-bold'
                              }`}
                            >
                              {word.pinyin}
                            </span>
                            {!showPinyin && (
                              <button
                                type="button"
                                onClick={(e) => handleToggleSingleWordPinyin(word.id, e)}
                                className="text-stone-400 hover:text-stone-600 p-0.5 rounded cursor-pointer"
                                title={tr("Re-hide Pinyin")}
                              >
                                <EyeOff className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="min-h-[22px] flex items-center justify-center">
                            <button
                              type="button"
                              onClick={(e) => handleToggleSingleWordPinyin(word.id, e)}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8E0D4] hover:bg-stone-300 text-stone-700 text-[10px] font-bold transition-all cursor-pointer shadow-2xs"
                              title={tr("Click to test & reveal Pinyin")}
                            >
                              <Eye className="w-3 h-3 text-stone-500" />
                              <span>{t('vocabulary.tapToRevealPinyin')}</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Meaning */}
                      <div className="text-xs font-bold text-stone-900 line-clamp-1">
                        {getLocalized(word.meaning)}
                      </div>
                    </div>

                    {/* Bottom Speech & Info Trigger */}
                    <div
                      className="pt-2 border-t border-stone-100 flex items-center justify-between"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                        {trPos(word.partOfSpeech)}
                      </span>
                      <SpeechButton text={word.hanzi} size="sm" />
                    </div>
                  </div>
                );
              })}
            </div>
            {filteredWords.length > visibleCount && (
              <div className="flex justify-center pt-2">
                <Button variant="outline" size="md" onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}>
                  {tr("Show more words")} ({filteredWords.length - visibleCount})
                </Button>
              </div>
            )}
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E4DCCE] space-y-3">
              <BookOpen className="w-10 h-10 text-stone-300 mx-auto" />
              <h3 className="font-bold text-base text-stone-900">{tr("No vocabulary found")}</h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                {tr("Try clearing your search query or switching level and status filters.")}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLevel('all');
                  setSelectedStatus('all');
                  setActiveTab('all');
                }}
              >
                {tr("Reset Filters")}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Vocabulary Detail Modal */}
      <VocabularyDetailModal
        word={activeWordModal}
        isOpen={!!activeWordModal}
        onClose={() => setActiveWordModal(null)}
        onToggleLearned={onToggleLearned}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
};
