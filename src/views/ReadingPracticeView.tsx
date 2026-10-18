import React, { useState } from 'react';
import {
  ArrowLeft,
  FileText,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useI18n } from '../locales';
import { READING_EXERCISES } from '../data/exercises';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { SpeechButton } from '../components/ui/SpeechButton';

interface ReadingPracticeViewProps {
  onExit: () => void;
}

export const ReadingPracticeView: React.FC<ReadingPracticeViewProps> = ({ onExit }) => {
  const { t, getLocalized } = useI18n();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [showPinyin, setShowPinyin] = useState(false);

  const currentEx = READING_EXERCISES[currentIndex] || READING_EXERCISES[0];

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleCheck = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 < READING_EXERCISES.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      alert('Reading practice complete!');
      onExit();
    }
  };

  const progressPercent = Math.round(((currentIndex + 1) / READING_EXERCISES.length) * 100);

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-150">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onExit}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Practice</span>
        </button>
        <div className="text-xs font-bold text-slate-600">
          Passage {currentIndex + 1} of {READING_EXERCISES.length}
        </div>
      </div>

      <ProgressBar value={progressPercent} color="blue" size="sm" />

      {/* Main Card */}
      <Card variant="elevated" className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <Badge variant={currentEx.level as any}>{currentEx.level.toUpperCase()}</Badge>
          <button
            onClick={() => setShowPinyin(!showPinyin)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            {showPinyin ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showPinyin ? 'Hide Pinyin' : 'Show Pinyin'}</span>
          </button>
        </div>

        {/* Passage Reading Box */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Chinese Reading Passage
            </span>
            <SpeechButton text={currentEx.passage} size="sm" showLabel label="Listen Passage" />
          </div>

          <div className="space-y-3">
            <div className="font-hanzi font-normal text-lg sm:text-xl text-slate-950 leading-relaxed">
              {currentEx.passage}
            </div>

            {showPinyin && (
              <div className="text-sm font-medium text-slate-500 leading-relaxed pt-1 border-t border-slate-200/40">
                {currentEx.pinyin}
              </div>
            )}
          </div>
        </div>

        {/* Comprehension Question */}
        <div className="space-y-2 pt-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Comprehension Question
          </div>
          <h4 className="text-base font-bold text-slate-900">
            {currentEx.question ||
              ((currentEx as any).prompt ? getLocalized((currentEx as any).prompt) : '') ||
              'Based on the passage above, choose the correct answer:'}
          </h4>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {currentEx.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            const isCorrect = opt.id === currentEx.correctAnswerId;

            let style = 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50';

            if (isAnswerSubmitted) {
              if (isCorrect) {
                style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
              } else if (isSelected && !isCorrect) {
                style = 'bg-rose-50 border-rose-400 text-rose-950 font-medium';
              } else {
                style = 'bg-slate-50 border-slate-200 text-slate-400';
              }
            } else if (isSelected) {
              style = 'bg-slate-900 border-slate-900 text-white font-semibold shadow-xs';
            }

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectOption(opt.id)}
                disabled={isAnswerSubmitted}
                className={`w-full p-3.5 rounded-xl border text-left text-sm transition-all cursor-pointer flex items-center justify-between gap-3 ${style}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${
                    isSelected && !isAnswerSubmitted
                      ? 'bg-white text-slate-900'
                      : isAnswerSubmitted && isCorrect
                      ? 'bg-emerald-600 text-white'
                      : isAnswerSubmitted && isSelected && !isCorrect
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {opt.id.toUpperCase()}
                  </span>
                  <span>{opt.text}</span>
                </div>

                {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {isAnswerSubmitted && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Translation & Explanation</span>
            </div>
            <p>{getLocalized(currentEx.explanation)}</p>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="pt-2">
          {!isAnswerSubmitted ? (
            <Button
              variant="primary"
              size="md"
              onClick={handleCheck}
              disabled={!selectedOptionId}
              className="w-full justify-center"
            >
              Check Answer
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={handleNext}
              className="w-full justify-center"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              {currentIndex + 1 < READING_EXERCISES.length ? 'Next Passage' : 'Complete Reading Practice'}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};
