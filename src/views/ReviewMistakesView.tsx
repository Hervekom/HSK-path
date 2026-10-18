import React, { useState } from 'react';
import { tr } from '../locales/tr';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Volume2,
  HelpCircle,
  Filter,
  BookOpen,
} from '../components/icons';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SpeechButton } from '../components/ui/SpeechButton';
import type { MockTest, TestResult } from '../types';

interface ReviewMistakesViewProps {
  test: MockTest;
  result: TestResult;
  onBackToResults: () => void;
}

export const ReviewMistakesView: React.FC<ReviewMistakesViewProps> = ({
  test,
  result,
  onBackToResults,
}) => {
  const { t, getLocalized } = useI18n();
  const [filterMode, setFilterMode] = useState<'all' | 'mistakes' | 'correct'>('mistakes');

  const questionsWithStatus = test.questions.map((q, idx) => {
    const userAnswerId = result.userAnswers[q.id];
    const isCorrect = userAnswerId === q.correctAnswerId;
    return {
      ...q,
      questionNumber: idx + 1,
      userAnswerId,
      isCorrect,
    };
  });

  const displayedQuestions = questionsWithStatus.filter((q) => {
    if (filterMode === 'mistakes') return !q.isCorrect;
    if (filterMode === 'correct') return q.isCorrect;
    return true;
  });

  const mistakesCount = questionsWithStatus.filter((q) => !q.isCorrect).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-150">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={onBackToResults}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-950 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{tr("Back to Score Report")}</span>
        </button>

        {/* Filter Pills */}
        <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            onClick={() => setFilterMode('mistakes')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              filterMode === 'mistakes'
                ? 'bg-white text-rose-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {tr("Mistakes Only (")}{mistakesCount})
          </button>
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              filterMode === 'all'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {tr("All Questions (")}{test.questions.length})
          </button>
          <button
            onClick={() => setFilterMode('correct')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              filterMode === 'correct'
                ? 'bg-white text-emerald-700 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {tr("Correct Only (")}{test.questions.length - mistakesCount})
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-extrabold text-slate-950">
          {tr("Answer Key & Mistake Analysis")}
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          {tr("Detailed explanations for")}{" "}{tr(test.title)}
        </p>
      </div>

      {/* List of Questions */}
      {displayedQuestions.length > 0 ? (
        <div className="space-y-5">
          {displayedQuestions.map((q) => (
            <Card
              key={q.id}
              variant="default"
              className={`p-6 sm:p-7 space-y-4 border ${
                q.isCorrect ? 'border-emerald-200/80 bg-white' : 'border-rose-200/80 bg-white'
              }`}
            >
              {/* Question Top Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900">
                    {tr("Question #")}{q.questionNumber}
                  </span>
                  <Badge variant={q.section === 'listening' ? 'hsk2' : 'hsk1'}>
                    {tr(q.section).toUpperCase()}
                  </Badge>
                </div>

                <Badge variant={q.isCorrect ? 'success' : 'danger'}>
                  {q.isCorrect ? tr("Correct (+ points)") : tr("Incorrect")}
                </Badge>
              </div>

              {/* Listening Audio if present */}
              {q.audioText && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-bold uppercase text-slate-400">{tr("Audio Dialogue")}</div>
                    <div className="font-hanzi font-bold text-sm text-slate-900">{q.audioText}</div>
                  </div>
                  <SpeechButton text={q.audioText} size="sm" showLabel label={tr("Play Audio")} />
                </div>
              )}

              {/* Reading passage if present */}
              {q.passage && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-hanzi">
                  {q.passage}
                </div>
              )}

              {/* Question Text */}
              <h3 className="font-bold text-base text-slate-900">
                {tr(q.questionText) ||
                  (q.prompt ? getLocalized(q.prompt) : '') ||
                  tr((q as any).question) ||
                  tr("Question statement")}
              </h3>

              {/* Options Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {q.options.map((opt) => {
                  const isUserPick = q.userAnswerId === opt.id;
                  const isTargetCorrect = q.correctAnswerId === opt.id;

                  let optClass = 'bg-slate-50 border-slate-200 text-slate-700';

                  if (isTargetCorrect) {
                    optClass = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold ring-1 ring-emerald-300';
                  } else if (isUserPick && !isTargetCorrect) {
                    optClass = 'bg-rose-50 border-rose-300 text-rose-950 font-medium line-through';
                  }

                  return (
                    <div
                      key={opt.id}
                      className={`p-3 rounded-xl border flex items-center justify-between ${optClass}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{opt.id.toUpperCase()}.</span>
                        <span>{tr(opt.text)}</span>
                      </div>
                      {isTargetCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      {isUserPick && !isTargetCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                    </div>
                  );
                })}
              </div>

              {/* Pedagogical Explanation Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>{tr("Grammar Note & Solution")}</span>
                </div>
                <p className="leading-relaxed">{getLocalized(q.explanation)}</p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
          <h3 className="font-bold text-base text-slate-900 mt-2">{tr("Zero mistakes in this filter!")}</h3>
          <p className="text-xs text-slate-500 mt-1">
            {tr("Switch the filter to \"All Questions\" to review the full exam key.")}
          </p>
        </div>
      )}
    </div>
  );
};
