import React, { useState } from 'react';
import { tr } from '../locales/tr';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Volume2,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Award,
} from '../components/icons';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { SpeechButton } from '../components/ui/SpeechButton';
import type { QuizQuestion, AppState } from '../types';

interface QuizViewProps {
  title: string;
  questions: QuizQuestion[];
  onFinishQuiz: (score: number, total: number) => void;
  onExit: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  title,
  questions,
  onFinishQuiz,
  onExit,
}) => {
  const { t, getLocalized } = useI18n();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const currentQ = questions[currentIndex] || questions[0];

  // Resolve question prompt text reliably from prompt (MultiLingualText), questionText, or question fallback
  const resolvedPromptText =
    (currentQ.prompt ? getLocalized(currentQ.prompt) : '') ||
    tr(currentQ.questionText) ||
    tr((currentQ as any).question) ||
    (currentQ.skill === 'listening'
      ? tr("Listen to the audio and select the best answer:")
      : currentQ.skill === 'reading'
      ? tr("Read the text and choose the correct answer:")
      : currentQ.skill === 'grammar'
      ? tr("Choose the correct grammatical completion:")
      : currentQ.skill === 'vocabulary'
      ? tr("Select the correct meaning or character:")
      : tr("Choose the correct answer:"));

  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;

    setIsAnswerSubmitted(true);
    if (selectedOptionId === currentQ.correctAnswerId) {
      setCorrectAnswersCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizComplete(true);
      const finalScore = (correctAnswersCount + (selectedOptionId === currentQ.correctAnswerId ? 1 : 0));
      onFinishQuiz(finalScore, questions.length);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setCorrectAnswersCount(0);
    setIsQuizComplete(false);
  };

  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  // If Quiz is Finished, show results screen
  if (isQuizComplete) {
    const percentage = Math.round((correctAnswersCount / questions.length) * 100);
    const isPassed = percentage >= 60;

    return (
      <div className="max-w-xl mx-auto py-8 space-y-6 animate-in zoom-in-95 duration-150">
        <Card variant="elevated" className="p-8 text-center space-y-6">
          <div className={`w-16 h-16 mx-auto rounded-3xl flex items-center justify-center ${
            isPassed ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-amber-50 text-amber-600 border border-amber-200'
          }`}>
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              {isPassed ? tr("Excellent Work!") : tr("Keep Practicing!")}
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              {tr("You completed the \"")}{title}{tr("\" practice drill.")}
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {tr("Final Accuracy")}
            </div>
            <div className="text-4xl font-extrabold text-slate-900">
              {percentage}%
            </div>
            <div className="text-sm font-bold text-slate-700">
              {correctAnswersCount} / {questions.length}{" "}{tr("Correct Answers")}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              variant="outline"
              size="md"
              onClick={handleRestart}
              icon={<RotateCcw className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              {tr("Retry Drill")}
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={onExit}
              className="w-full sm:w-auto"
            >
              {tr("Back to Practice Hub")}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-150">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onExit}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{tr("Exit Drill")}</span>
        </button>

        <div className="text-xs font-bold text-slate-600">
          {tr("Question")}{" "}{currentIndex + 1}{" "}{tr("of")}{" "}{questions.length}
        </div>
      </div>

      <ProgressBar value={progressPercent} color="primary" size="sm" />

      {/* Main Question Card */}
      <Card variant="elevated" className="p-6 sm:p-8 space-y-6">
        {/* Badges */}
        <div className="flex items-center justify-between">
          <Badge variant={currentQ.level as any}>{currentQ.level.toUpperCase()}</Badge>
          <Badge variant="neutral">{currentQ.skill}</Badge>
        </div>

        {/* Prompt */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 leading-snug">
            {resolvedPromptText}
          </h3>

          {/* Listening Dialogue Audio Station if audioText is present */}
          {currentQ.audioText && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4" />{" "}{tr("Audio Clip")}
                </span>
                <span className="text-slate-400 font-mono">{tr("0.8x / 1.0x Playback")}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <SpeechButton
                  text={currentQ.audioText}
                  size="md"
                  showLabel
                  label={tr("Play Audio")}
                  allowSpeedToggle
                  className="bg-white text-slate-900 font-bold text-xs"
                />
                <span className="text-xs text-slate-400 font-medium">{tr("Click to listen")}</span>
              </div>
            </div>
          )}

          {/* Reading or Grammatical Passage if passage is present */}
          {currentQ.passage && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {tr("Reading Text")}
                </span>
                <SpeechButton text={currentQ.passage} size="sm" />
              </div>
              <div className="font-hanzi font-normal text-lg sm:text-xl text-slate-900 leading-relaxed">
                {currentQ.passage}
              </div>
              {currentQ.passagePinyin && (
                <div className="text-xs font-medium text-slate-500 pt-1 border-t border-slate-200/50">
                  {currentQ.passagePinyin}
                </div>
              )}
            </div>
          )}

          {/* If character / word / sentence prompt */}
          {currentQ.hanzi && (
            <div className="text-center py-5 px-4 bg-slate-50/90 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="font-hanzi font-bold text-3xl sm:text-4xl text-slate-900 tracking-wide">
                {currentQ.hanzi}
              </div>
              {currentQ.pinyin && (
                <div className="text-sm font-semibold text-slate-600">
                  {currentQ.pinyin}
                </div>
              )}
              <div className="pt-1 flex justify-center">
                <SpeechButton text={currentQ.hanzi} size="sm" showLabel label={tr("Listen")} />
              </div>
            </div>
          )}
        </div>

        {/* Multiple Choice Options */}
        <div className="space-y-2.5">
          {currentQ.options.map((opt, optIdx) => {
            const isSelected = selectedOptionId === opt.id;
            const isCorrect = opt.id === currentQ.correctAnswerId;

            let optionStyle = 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50';

            if (isAnswerSubmitted) {
              if (isCorrect) {
                optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
              } else if (isSelected && !isCorrect) {
                optionStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-medium';
              } else {
                optionStyle = 'bg-slate-50 border-slate-200 text-slate-400';
              }
            } else if (isSelected) {
              optionStyle = 'bg-slate-900 border-slate-900 text-white font-semibold shadow-xs';
            }

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectOption(opt.id)}
                disabled={isAnswerSubmitted}
                className={`w-full p-4 rounded-xl border text-left text-sm transition-all cursor-pointer flex items-center justify-between gap-3 ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
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
                  <div>
                    {opt.hanzi && (
                      <span className="font-hanzi font-bold text-base mr-2">
                        {opt.hanzi}
                      </span>
                    )}
                    <span>{tr(opt.text)}</span>
                  </div>
                </div>

                {isAnswerSubmitted && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Card (shows after submitting answer) */}
        {isAnswerSubmitted && (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5 animate-in fade-in duration-150">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>{tr("Explanation & Note")}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {getLocalized(currentQ.explanation)}
            </p>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="pt-2 flex items-center justify-between">
          {!isAnswerSubmitted ? (
            <Button
              variant="primary"
              size="md"
              onClick={handleSubmitAnswer}
              disabled={!selectedOptionId}
              className="w-full justify-center"
            >
              {tr("Check Answer")}
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={handleNextQuestion}
              className="w-full justify-center"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              {currentIndex + 1 < questions.length ? tr("Next Question") : tr("Complete Drill")}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};
