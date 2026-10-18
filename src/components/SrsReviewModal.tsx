import React, { useState, useEffect, useCallback } from 'react';
import { tr, trPos } from '../locales/tr';
import {
  Brain,
  RotateCw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Volume2,
  ChevronRight,
  Flame,
  ArrowRight,
  Eye,
  EyeOff,
  Star,
  Award,
  Layers,
  X,
} from './icons';
import { useI18n } from '../locales';
import { Modal } from './ui/Modal';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { SpeechButton } from './ui/SpeechButton';
import { ProgressBar } from './ui/ProgressBar';
import { getNextIntervalText, calculateNextSRSState } from '../utils/srs';
import type { VocabularyWord, WordSRSData, SRSGrade } from '../types';

interface SrsReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  wordsDue: VocabularyWord[];
  srsMap: Record<string, WordSRSData>;
  onGradeWord: (wordId: string, grade: SRSGrade) => void;
  onToggleFavorite?: (wordId: string) => void;
}

export const SrsReviewModal: React.FC<SrsReviewModalProps> = ({
  isOpen,
  onClose,
  wordsDue,
  srsMap,
  onGradeWord,
  onToggleFavorite,
}) => {
  const { t, getLocalized } = useI18n();

  const [queue, setQueue] = useState<VocabularyWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPinyinFront, setShowPinyinFront] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [gradeStats, setGradeStats] = useState<Record<SRSGrade, number>>({
    again: 0,
    hard: 0,
    good: 0,
    easy: 0,
  });
  const [isSessionComplete, setIsSessionComplete] = useState(false);

  // Initialize or reset queue when modal opens
  useEffect(() => {
    if (isOpen) {
      setQueue([...wordsDue]);
      setCurrentIndex(0);
      setIsFlipped(false);
      setShowPinyinFront(false);
      setReviewedCount(0);
      setGradeStats({ again: 0, hard: 0, good: 0, easy: 0 });
      setIsSessionComplete(wordsDue.length === 0);
    }
  }, [isOpen, wordsDue]);

  const currentWord = queue[currentIndex];
  const currentSRS = currentWord ? srsMap[currentWord.id] : undefined;

  const handleGrade = useCallback(
    (grade: SRSGrade) => {
      if (!currentWord) return;

      onGradeWord(currentWord.id, grade);
      setReviewedCount((prev) => prev + 1);
      setGradeStats((prev) => ({
        ...prev,
        [grade]: prev[grade] + 1,
      }));

      // If user failed (Again), optionally append to the end of this session to repeat
      if (grade === 'again') {
        setQueue((prev) => [...prev, currentWord]);
      }

      if (currentIndex + 1 >= queue.length && grade !== 'again') {
        setIsSessionComplete(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
        setIsFlipped(false);
        setShowPinyinFront(false);
      }
    },
    [currentWord, currentIndex, queue.length, onGradeWord]
  );

  // Keyboard shortcut listener (Space = Flip, 1, 2, 3, 4 = Grades)
  useEffect(() => {
    if (!isOpen || isSessionComplete) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (isFlipped) {
        if (e.key === '1') handleGrade('again');
        else if (e.key === '2') handleGrade('hard');
        else if (e.key === '3') handleGrade('good');
        else if (e.key === '4') handleGrade('easy');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFlipped, isSessionComplete, handleGrade]);

  if (!isOpen) return null;

  const progressPercent =
    queue.length > 0 ? Math.round((currentIndex / queue.length) * 100) : 100;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="space-y-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-100">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 leading-tight">
                {t('vocabulary.srsAlgorithm')}
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {isSessionComplete
                  ? t('vocabulary.sessionComplete')
                  : `Card ${currentIndex + 1} of ${queue.length} · Spaced Recall`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isSessionComplete && (
              <span className="text-xs font-mono font-bold text-slate-500 px-2.5 py-1 bg-slate-100 rounded-lg">
                {progressPercent}%
              </span>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        {!isSessionComplete && (
          <div className="w-full">
            <ProgressBar value={progressPercent} variant="primary" size="sm" />
          </div>
        )}

        {/* Complete View */}
        {isSessionComplete ? (
          <div className="text-center py-8 px-4 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-950">
                {t('vocabulary.sessionComplete')}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {t('vocabulary.sessionCompleteDesc', { count: reviewedCount })}
              </p>
            </div>

            {/* Session Stats Breakdown */}
            <div className="grid grid-cols-4 gap-2.5 max-w-lg mx-auto">
              <div className="p-3 rounded-xl bg-red-50/80 border border-red-200 text-center">
                <div className="text-lg font-bold text-red-700">{gradeStats.again}</div>
                <div className="text-[11px] font-semibold text-red-600 uppercase">{t('vocabulary.gradeAgain')}</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-center">
                <div className="text-lg font-bold text-amber-700">{gradeStats.hard}</div>
                <div className="text-[11px] font-semibold text-amber-600 uppercase">{t('vocabulary.gradeHard')}</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-center">
                <div className="text-lg font-bold text-blue-700">{gradeStats.good}</div>
                <div className="text-[11px] font-semibold text-blue-600 uppercase">{t('vocabulary.gradeGood')}</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center">
                <div className="text-lg font-bold text-emerald-700">{gradeStats.easy}</div>
                <div className="text-[11px] font-semibold text-emerald-600 uppercase">{t('vocabulary.gradeEasy')}</div>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <Button variant="primary" size="lg" onClick={onClose} className="px-8">
                {t('common.close')}
              </Button>
            </div>
          </div>
        ) : currentWord ? (
          /* Active Card View */
          <div className="space-y-6">
            {/* Flashcard Box */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className={`p-6 sm:p-8 rounded-3xl border text-center transition-all cursor-pointer select-none space-y-4 shadow-sm ${
                isFlipped
                  ? 'bg-white border-slate-300 ring-2 ring-rose-500/10'
                  : 'bg-gradient-to-b from-slate-50/90 to-slate-100/70 border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Card Meta Header */}
              <div className="flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-2">
                  <Badge variant={currentWord.level as any}>{currentWord.level.toUpperCase()}</Badge>
                  <Badge variant="neutral">{trPos(currentWord.partOfSpeech)}</Badge>
                </div>

                <div className="flex items-center gap-2">
                  {onToggleFavorite && (
                    <button
                      type="button"
                      onClick={() => onToggleFavorite(currentWord.id)}
                      className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                        currentWord.isFavorite
                          ? 'bg-amber-50 border-amber-300 text-amber-500'
                          : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <Star className={`w-4 h-4 ${currentWord.isFavorite ? 'fill-amber-400' : ''}`} />
                    </button>
                  )}
                  <SpeechButton text={currentWord.hanzi} size="sm" />
                </div>
              </div>

              {/* Front Content: Character Display */}
              <div className="py-6 space-y-3">
                <div className="font-hanzi font-bold text-6xl sm:text-7xl text-slate-950 tracking-wider">
                  {currentWord.hanzi}
                </div>

                {/* Optional Pinyin Toggle on Front */}
                {!isFlipped && (
                  <div>
                    {showPinyinFront ? (
                      <span className="text-base font-semibold text-rose-800 bg-white/80 px-3 py-1 rounded-lg border border-slate-200">
                        {currentWord.pinyin}
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowPinyinFront(true);
                        }}
                        className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700 bg-white/70 px-2.5 py-1 rounded-full border border-slate-200 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{tr("Peek Pinyin")}</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Back Content: Reveal Details when Flipped */}
              {isFlipped && (
                <div className="pt-4 border-t border-slate-100 space-y-3 animate-in fade-in duration-150">
                  <div className="text-xl font-bold text-slate-800 font-sans">
                    {currentWord.pinyin}
                  </div>
                  <div className="text-lg font-bold text-rose-800">
                    {getLocalized(currentWord.meaning)}
                  </div>

                  {/* Example Sentence */}
                  {currentWord.exampleSentence && (
                    <div
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left space-y-1 mt-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-hanzi font-bold text-sm text-slate-900">
                          {currentWord.exampleSentence.hanzi}
                        </span>
                        <SpeechButton text={currentWord.exampleSentence.hanzi} size="sm" />
                      </div>
                      <p className="text-xs text-slate-500 font-medium">
                        {currentWord.exampleSentence.pinyin}
                      </p>
                      <p className="text-xs text-slate-700 font-medium">
                        {getLocalized(currentWord.exampleSentence.translation)}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Flip Hint */}
              <div className="text-xs text-slate-400 font-medium pt-2">
                {isFlipped
                  ? tr("Grade your recall below or press (1-4)")
                  : tr("Click card or press [Space] to reveal answer")}
              </div>
            </div>

            {/* SRS Grading Station */}
            {isFlipped ? (
              <div className="space-y-2 animate-in slide-in-from-bottom-2 duration-150">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                  {tr("How well did you remember this character?")}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {/* Grade 1: Again */}
                  <button
                    type="button"
                    onClick={() => handleGrade('again')}
                    className="p-3 rounded-2xl bg-red-50 hover:bg-red-100 border border-red-200 text-left transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-red-200/80 text-red-800">
                        1
                      </span>
                      <span className="text-[11px] font-bold text-red-600 font-mono">
                        {getNextIntervalText(currentSRS, 'again')}
                      </span>
                    </div>
                    <div className="mt-2 font-bold text-sm text-red-900">
                      {t('vocabulary.gradeAgain')}
                    </div>
                    <div className="text-[11px] text-red-700/80">{tr("Forgot / Repeat")}</div>
                  </button>

                  {/* Grade 2: Hard */}
                  <button
                    type="button"
                    onClick={() => handleGrade('hard')}
                    className="p-3 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-left transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-amber-200/80 text-amber-800">
                        2
                      </span>
                      <span className="text-[11px] font-bold text-amber-700 font-mono">
                        {getNextIntervalText(currentSRS, 'hard')}
                      </span>
                    </div>
                    <div className="mt-2 font-bold text-sm text-amber-900">
                      {t('vocabulary.gradeHard')}
                    </div>
                    <div className="text-[11px] text-amber-700/80">{tr("Slow recall")}</div>
                  </button>

                  {/* Grade 3: Good */}
                  <button
                    type="button"
                    onClick={() => handleGrade('good')}
                    className="p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-left transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-blue-200/80 text-blue-800">
                        3
                      </span>
                      <span className="text-[11px] font-bold text-blue-700 font-mono">
                        {getNextIntervalText(currentSRS, 'good')}
                      </span>
                    </div>
                    <div className="mt-2 font-bold text-sm text-blue-900">
                      {t('vocabulary.gradeGood')}
                    </div>
                    <div className="text-[11px] text-blue-700/80">{tr("Optimal recall")}</div>
                  </button>

                  {/* Grade 4: Easy */}
                  <button
                    type="button"
                    onClick={() => handleGrade('easy')}
                    className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-left transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-200/80 text-emerald-800">
                        4
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 font-mono">
                        {getNextIntervalText(currentSRS, 'easy')}
                      </span>
                    </div>
                    <div className="mt-2 font-bold text-sm text-emerald-900">
                      {t('vocabulary.gradeEasy')}
                    </div>
                    <div className="text-[11px] text-emerald-700/80">{tr("Instant mastery")}</div>
                  </button>
                </div>
              </div>
            ) : (
              /* Pre-flip controls */
              <div className="flex items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsFlipped(true)}
                  className="w-full sm:w-auto px-10 font-bold"
                  icon={<RotateCw className="w-4 h-4" />}
                >
                  {tr("Show Answer (Space)")}
                </Button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </Modal>
  );
};
