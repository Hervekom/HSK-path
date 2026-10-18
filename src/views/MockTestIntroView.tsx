import React from 'react';
import {
  ArrowLeft,
  Clock,
  Award,
  CheckCircle2,
  AlertCircle,
  Volume2,
  ShieldCheck,
  Play,
} from 'lucide-react';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import type { MockTest } from '../types';

interface MockTestIntroViewProps {
  test: MockTest;
  onStartExam: () => void;
  onBack: () => void;
}

export const MockTestIntroView: React.FC<MockTestIntroViewProps> = ({
  test,
  onStartExam,
  onBack,
}) => {
  const { t, getLocalized } = useI18n();

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-150 py-4">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Mock Tests Catalog</span>
      </button>

      <Card variant="elevated" className="p-8 sm:p-10 space-y-8">
        {/* Title Header */}
        <div className="space-y-3 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Badge variant={test.level as any}>{test.level.toUpperCase()}</Badge>
            <Badge variant="neutral">Full Simulation</Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {test.title}
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            {getLocalized(test.description)}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
            <Clock className="w-5 h-5 text-slate-500 mx-auto" />
            <div className="text-xs font-semibold text-slate-500">Duration</div>
            <div className="text-xl font-bold text-slate-900">{test.durationMinutes} Minutes</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
            <Award className="w-5 h-5 text-slate-500 mx-auto" />
            <div className="text-xs font-semibold text-slate-500">Questions</div>
            <div className="text-xl font-bold text-slate-900">{test.questionsCount} Total</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto" />
            <div className="text-xs font-semibold text-slate-500">Passing Score</div>
            <div className="text-xl font-bold text-slate-900">{test.passingScore} / {test.totalScore} (60%)</div>
          </div>
        </div>

        {/* Section Breakdown */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            Exam Sections & Timing
          </h3>
          <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
            {test.sections.map((sec) => (
              <div key={sec.type} className="p-4 flex items-center justify-between bg-white hover:bg-slate-50">
                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-slate-900">{sec.name}</div>
                  <div className="text-xs text-slate-500">
                    {sec.questionsCount} questions · {sec.maxScore} points
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg">
                  {sec.durationMinutes} min
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions list */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2 text-xs text-amber-950">
          <div className="font-bold flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-700" />
            <span>Important Simulation Guidelines:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-amber-900">
            <li>Ensure your computer audio is enabled for the listening portion.</li>
            <li>The countdown timer starts as soon as you press "Begin Exam".</li>
            <li>You can freely navigate between questions before clicking "Submit Exam".</li>
            <li>A comprehensive mistake analysis and answer key will be generated upon completion.</li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={onStartExam}
            className="w-full justify-center shadow-md font-bold text-base"
            icon={<Play className="w-5 h-5 fill-current" />}
          >
            Begin Official Simulation
          </Button>
        </div>
      </Card>
    </div>
  );
};
