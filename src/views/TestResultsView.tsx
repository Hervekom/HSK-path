import React from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
} from 'lucide-react';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import type { TestResult, MockTest, AppState } from '../types';

interface TestResultsViewProps {
  result: TestResult;
  test: MockTest;
  onReviewMistakes: () => void;
  onRetake: () => void;
  onNavigate: (view: AppState['currentView']) => void;
}

export const TestResultsView: React.FC<TestResultsViewProps> = ({
  result,
  test,
  onReviewMistakes,
  onRetake,
  onNavigate,
}) => {
  const { t, getLocalized } = useI18n();

  const percentage = Math.round((result.score / result.totalScore) * 100);
  const isPassed = result.isPassed;

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-6 animate-in zoom-in-95 duration-150">
      <Card variant="elevated" className="p-8 sm:p-10 text-center space-y-8">
        {/* Pass / Needs Review Trophy Banner */}
        <div className="space-y-4">
          <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center shadow-xs ${
            isPassed
              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
              : 'bg-amber-50 text-amber-600 border border-amber-200'
          }`}>
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <Badge variant={isPassed ? 'success' : 'danger'} size="md">
              {isPassed ? t('testResults.passed') : t('testResults.failed')}
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2">
              {test.title}
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Completed on {result.date}
            </p>
          </div>
        </div>

        {/* Big Score Display Card */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 max-w-md mx-auto">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t('testResults.finalScore')}
          </div>
          <div className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight">
            {result.score} <span className="text-2xl font-bold text-slate-400">/ {result.totalScore}</span>
          </div>
          <div className="text-sm font-bold text-slate-700">
            {percentage}% Accuracy · Passing Score: {result.passingScore}
          </div>
        </div>

        {/* Section Score Breakdown */}
        <div className="space-y-4 text-left max-w-lg mx-auto">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            {t('testResults.sectionBreakdown')}
          </h3>

          <div className="space-y-3">
            {result.sectionScores.map((sec) => {
              const secPercent = Math.round((sec.score / sec.maxScore) * 100);
              return (
                <div key={sec.section} className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span className="capitalize">{sec.section} Comprehension</span>
                    <span>{sec.score} / {sec.maxScore} pts ({secPercent}%)</span>
                  </div>
                  <ProgressBar
                    value={secPercent}
                    color={secPercent >= 70 ? 'emerald' : 'amber'}
                    size="sm"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons: Review Mistakes / Retake / Dashboard */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 border-t border-slate-100">
          <Button
            variant="primary"
            size="lg"
            onClick={onReviewMistakes}
            className="w-full sm:w-auto shadow-xs"
            icon={<BookOpen className="w-4 h-4" />}
          >
            {t('testResults.reviewMistakes')}
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onRetake}
            className="w-full sm:w-auto"
            icon={<RotateCcw className="w-4 h-4" />}
          >
            {t('testResults.retakeTest')}
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => onNavigate('dashboard')}
            className="w-full sm:w-auto text-slate-600"
          >
            {t('testResults.backToDashboard')}
          </Button>
        </div>
      </Card>
    </div>
  );
};
