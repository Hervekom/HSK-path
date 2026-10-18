import React, { useState } from 'react';
import {
  ArrowLeft,
  Headphones,
  Volume2,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  RotateCcw,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from '../components/icons';
import { useI18n } from '../locales';
import { LISTENING_EXERCISES } from '../data/exercises';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { SpeechButton } from '../components/ui/SpeechButton';

interface ListeningPracticeViewProps {
  onExit: () => void;
}

export const ListeningPracticeView: React.FC<ListeningPracticeViewProps> = ({ onExit }) => {
  const { t, getLocalized } = useI18n();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentEx = LISTENING_EXERCISES[currentIndex] || LISTENING_EXERCISES[0];

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleCheck = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    if (selectedOptionId === currentEx.correctAnswerId) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < LISTENING_EXERCISES.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
      setShowTranscript(false);
    } else {
      // Completed all
      alert(`Drill completed! Score: ${correctCount + (selectedOptionId === currentEx.correctAnswerId ? 1 : 0)} / ${LISTENING_EXERCISES.length}`);
      onExit();
    }
  };

  const progressPercent = Math.round(((currentIndex + 1) / LISTENING_EXERCISES.length) * 100);

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-150">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onExit}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Practice</span>
        </button>
        <div className="text-xs font-bold text-slate-600">
          Audio Drill {currentIndex + 1} of {LISTENING_EXERCISES.length}
        </div>
      </div>

      <ProgressBar value={progressPercent} color="emerald" size="sm" />

      {/* Main Listening Card */}
      <Card variant="elevated" className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <Badge variant={currentEx.level as any}>{currentEx.level.toUpperCase()}</Badge>
          <Badge variant="neutral">Listening Comprehension</Badge>
        </div>

        {/* Audio Player Station */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center space-y-4 shadow-sm">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center">
            <Headphones className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">
              Listen to the Mandarin Dialogue
            </h3>
            <p className="text-xs text-slate-400">
              Click the audio player below. Listen at normal (1.0x) or slow (0.8x) speed.
            </p>
          </div>

          {/* Speech Control */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <SpeechButton
              text={currentEx.audioText}
              size="lg"
              showLabel
              label="Play Dialogue Audio"
              allowSpeedToggle
              className="bg-white text-slate-900 border-none font-bold text-sm"
            />
          </div>
        </div>

        {/* Transcript Toggle button */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
          >
            {showTranscript ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showTranscript ? 'Hide Chinese Transcript' : 'Show Chinese Transcript'}</span>
          </button>
        </div>

        {/* Transcript Box */}
        {showTranscript && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1 animate-in fade-in">
            <div className="font-hanzi font-bold text-base text-slate-900">
              {currentEx.audioText}
            </div>
            <div className="text-xs text-slate-500">
              {currentEx.pinyin}
            </div>
          </div>
        )}

        {/* Question Prompt */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Question Prompt
          </div>
          <h4 className="text-base font-bold text-slate-900">
            {currentEx.question ||
              ((currentEx as any).prompt ? getLocalized((currentEx as any).prompt) : '') ||
              'Listen to the dialogue and select the correct answer:'}
          </h4>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {currentEx.options.map((opt, optIdx) => {
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
                    {/^[a-d]$/i.test(opt.id) ? opt.id.toUpperCase() : String.fromCharCode(65 + optIdx)}
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
              <span>Explanation</span>
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
              {currentIndex + 1 < LISTENING_EXERCISES.length ? 'Next Audio Drill' : 'Complete Practice'}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};
