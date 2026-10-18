import React, { useState } from 'react';
import {
  ArrowLeft,
  PenTool,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useI18n } from '../locales';
import { WRITING_SENTENCE_EXERCISES } from '../data/exercises';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { SpeechButton } from '../components/ui/SpeechButton';

interface WritingPracticeViewProps {
  onExit: () => void;
}

export const WritingPracticeView: React.FC<WritingPracticeViewProps> = ({ onExit }) => {
  const { t, getLocalized } = useI18n();

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentEx = WRITING_SENTENCE_EXERCISES[currentIndex] || WRITING_SENTENCE_EXERCISES[0];

  // Available tokens and selected tokens
  const [availableTokens, setAvailableTokens] = useState<string[]>(() => [...currentEx.scrambledTokens]);
  const [assembledTokens, setAssembledTokens] = useState<string[]>([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handlePickToken = (token: string, index: number) => {
    if (isAnswerChecked) return;
    setAssembledTokens((prev) => [...prev, token]);
    setAvailableTokens((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveToken = (token: string, index: number) => {
    if (isAnswerChecked) return;
    setAvailableTokens((prev) => [...prev, token]);
    setAssembledTokens((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setAvailableTokens([...currentEx.scrambledTokens]);
    setAssembledTokens([]);
    setIsAnswerChecked(false);
    setIsCorrect(false);
  };

  const handleCheckAnswer = () => {
    const assembledString = assembledTokens.join('');
    const targetString = currentEx.correctOrder.join('');
    const correct = assembledString === targetString;
    setIsCorrect(correct);
    setIsAnswerChecked(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 < WRITING_SENTENCE_EXERCISES.length) {
      const nextIndex = currentIndex + 1;
      const nextEx = WRITING_SENTENCE_EXERCISES[nextIndex];
      setCurrentIndex(nextIndex);
      setAvailableTokens([...nextEx.scrambledTokens]);
      setAssembledTokens([]);
      setIsAnswerChecked(false);
      setIsCorrect(false);
    } else {
      alert('Sentence ordering practice complete!');
      onExit();
    }
  };

  const progressPercent = Math.round(((currentIndex + 1) / WRITING_SENTENCE_EXERCISES.length) * 100);

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
          Sentence {currentIndex + 1} of {WRITING_SENTENCE_EXERCISES.length}
        </div>
      </div>

      <ProgressBar value={progressPercent} color="rose" size="sm" />

      {/* Main Card */}
      <Card variant="elevated" className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <Badge variant={currentEx.level as any}>{currentEx.level.toUpperCase()}</Badge>
          <Badge variant="neutral">HSK 3 Writing Reordering</Badge>
        </div>

        {/* Translation Prompt */}
        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Target Meaning
          </div>
          <h3 className="text-xl font-extrabold text-slate-950">
            {getLocalized(currentEx.translation)}
          </h3>
          <p className="text-xs text-slate-500">
            Click words below in the correct grammatical order to form the Chinese sentence.
          </p>
        </div>

        {/* Sentence Assembly Drop Area */}
        <div className="min-h-[100px] p-5 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 flex flex-wrap items-center gap-2.5">
          {assembledTokens.length === 0 ? (
            <span className="text-xs font-medium text-slate-400 select-none">
              Click word tiles below to arrange them here...
            </span>
          ) : (
            assembledTokens.map((token, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleRemoveToken(token, idx)}
                disabled={isAnswerChecked}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-hanzi font-bold text-lg shadow-xs hover:bg-slate-800 transition-all cursor-pointer animate-in zoom-in-90"
              >
                {token}
              </button>
            ))
          )}
        </div>

        {/* Available Word Bank */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Word Bank
            </span>
            <button
              onClick={handleReset}
              disabled={isAnswerChecked}
              className="text-xs text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2.5 p-4 rounded-2xl bg-white border border-slate-200">
            {availableTokens.map((token, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePickToken(token, idx)}
                disabled={isAnswerChecked}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-hanzi font-bold text-lg border border-slate-200 transition-all cursor-pointer"
              >
                {token}
              </button>
            ))}
          </div>
        </div>

        {/* Explanation & Feedback */}
        {isAnswerChecked && (
          <div className={`p-4 rounded-2xl border space-y-2 animate-in fade-in ${
            isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <XCircle className="w-5 h-5 text-rose-600" />}
                <span>{isCorrect ? 'Correct Grammatical Order!' : 'Incorrect Word Order'}</span>
              </div>
              <SpeechButton text={currentEx.correctOrder.join('')} size="sm" />
            </div>

            <div className="text-xs space-y-1">
              <div>
                <strong>Correct Sentence: </strong>
                <span className="font-hanzi font-bold text-sm">{currentEx.correctOrder.join('')}</span>
              </div>
              <p className="text-slate-600">{getLocalized(currentEx.explanation)}</p>
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="pt-2">
          {!isAnswerChecked ? (
            <Button
              variant="primary"
              size="md"
              onClick={handleCheckAnswer}
              disabled={availableTokens.length > 0}
              className="w-full justify-center"
            >
              Check Sentence Order
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={handleNext}
              className="w-full justify-center"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              {currentIndex + 1 < WRITING_SENTENCE_EXERCISES.length ? 'Next Sentence' : 'Finish Writing Drill'}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};
