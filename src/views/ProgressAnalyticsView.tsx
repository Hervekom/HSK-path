import React from 'react';
import {
  TrendingUp,
  Award,
  BookOpen,
  Headphones,
  FileText,
  Layers,
  Sparkles,
  PenTool,
  Clock,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { WEEKLY_PERFORMANCE_HISTORY } from '../data/progressData';
import type { UserProfile, TestResult, AppState } from '../types';

interface ProgressAnalyticsViewProps {
  user: UserProfile;
  streakDays: number;
  testHistory: TestResult[];
  onNavigate: (view: AppState['currentView']) => void;
  onReviewTest: (result: TestResult) => void;
  showSampleData?: boolean;
}

export const ProgressAnalyticsView: React.FC<ProgressAnalyticsViewProps> = ({
  user,
  streakDays,
  testHistory,
  onNavigate,
  onReviewTest,
  showSampleData = false,
}) => {
  const { t } = useI18n();

  const pct = (r: TestResult) => Math.round((r.score / (r.totalScore || 100)) * 100);
  const avgScore = testHistory.length ? Math.round(testHistory.reduce((s, r) => s + pct(r), 0) / testHistory.length) : null;
  const passedCount = testHistory.filter((r) => r.isPassed).length;
  const examMinutes = testHistory.reduce((s, r) => s + Math.round((r.timeSpentSeconds || 0) / 60), 0);

  // Skill accuracy computed from real mock exam section scores
  const skillStats = (['listening', 'reading', 'writing'] as const)
    .map((skill) => {
      const secs = testHistory.flatMap((r) => r.sectionScores || []).filter((x) => x.section === skill && x.maxScore > 0);
      const score = secs.reduce((s, x) => s + x.score, 0);
      const max = secs.reduce((s, x) => s + x.maxScore, 0);
      return { skill, accuracy: max ? Math.round((score / max) * 100) : null, count: secs.length };
    })
    .filter((x) => x.accuracy !== null) as Array<{ skill: string; accuracy: number; count: number }>;

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          {t('progress.title')}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
          {t('progress.subtitle')}
        </p>
      </div>

      {/* Top 3 Summary Cards */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-5">
        <Card variant="default" className="!p-3.5 sm:!p-6 space-y-1 sm:space-y-2 min-w-0">
          <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider leading-tight">
            {t('progress.avgMock')}
          </div>
          <div className="text-xl sm:text-3xl font-extrabold text-slate-900">{avgScore === null ? '—' : `${avgScore}%`}</div>
          <div className="text-[11px] sm:text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 shrink-0" /> <span className="truncate">{t('progress.passedOf', { passed: passedCount, total: testHistory.length })}</span>
          </div>
        </Card>

        <Card variant="default" className="!p-3.5 sm:!p-6 space-y-1 sm:space-y-2 min-w-0">
          <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider leading-tight">
            {t('progress.examTime')}
          </div>
          <div className="text-xl sm:text-3xl font-extrabold text-slate-900">
            {examMinutes >= 60 ? `${(examMinutes / 60).toFixed(1)} h` : `${examMinutes} min`}
          </div>
          <div className="text-[11px] sm:text-xs text-slate-500 font-semibold truncate">{user.currentHsk.toUpperCase()}</div>
        </Card>

        <Card variant="default" className="!p-3.5 sm:!p-6 space-y-1 sm:space-y-2 min-w-0">
          <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider leading-tight">
            {t('dashboard.studyStreak')}
          </div>
          <div className="text-xl sm:text-3xl font-extrabold text-slate-900">
            {streakDays} <span className="text-sm sm:text-lg font-bold">{t('dashboard.days')}</span>
          </div>
          <div className="text-[11px] sm:text-xs text-amber-700 font-semibold truncate">{t('dashboard.streakLabel')}</div>
        </Card>
      </div>

      {/* Skills Mastery Breakdown Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 tracking-tight">
          {t('progress.skillsTitle')}
        </h2>

        {skillStats.length === 0 && (
          <Card variant="default" className="p-6 text-center text-sm text-slate-500">
            {t('progress.noSkillsYet')}
          </Card>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {skillStats.map((stat) => (
            <Card key={stat.skill} variant="default" className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 capitalize">
                  {stat.skill}
                </span>
                <span className="text-xs font-bold text-slate-900">
                  {stat.accuracy}% Acc.
                </span>
              </div>
              <ProgressBar
                value={stat.accuracy}
                color={stat.accuracy >= 80 ? 'emerald' : stat.accuracy >= 70 ? 'blue' : 'amber'}
                size="md"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>{t('progress.sectionsCount', { count: stat.count })}</span>
                <span>{stat.accuracy >= 80 ? t('progress.levelStrong') : stat.accuracy >= 60 ? t('progress.levelOk') : t('progress.levelWork')}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 7-Day Performance Graph (sample data, demo only) */}
      {showSampleData && (
      <Card variant="default" className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">7-Day Study & Accuracy Trend</h3>
            <p className="text-xs text-slate-500">Daily practice sessions and drill accuracy</p>
          </div>
          <Badge variant="neutral">Weekly View</Badge>
        </div>

        <div className="h-44 flex items-end justify-between gap-1.5 sm:gap-3 pt-8 pb-2 px-0 sm:px-2 border-b border-slate-100">
          {WEEKLY_PERFORMANCE_HISTORY.map((item) => (
            <div key={item.day} className="relative flex-1 min-w-0 flex flex-col items-center gap-2 group h-full justify-end">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded shadow-2xs">
                {item.accuracy}% ({item.studyMinutes}m)
              </div>
              <div
                className="w-full max-w-[36px] rounded-t-xl bg-slate-800 group-hover:bg-rose-700 transition-all duration-200"
                style={{ height: `${item.accuracy}%` }}
              />
              <span className="text-xs font-bold text-slate-500 mt-1">{item.day}</span>
            </div>
          ))}
        </div>
      </Card>
      )}

      {/* Mock Exam History Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 tracking-tight">
          Simulation Exam History
        </h2>

        <Card variant="default" className="divide-y divide-slate-100 !p-0 overflow-hidden">
          {testHistory.length === 0 && (
            <div className="p-6 text-center text-sm text-slate-500">
              {t('admin.noTests')}{' '}
              <button onClick={() => onNavigate('mock-tests')} className="font-bold text-[#C52828] hover:underline cursor-pointer">
                {t('nav.mockTests')} →
              </button>
            </div>
          )}
          {testHistory.map((res) => (
            <div key={res.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant={res.isPassed ? 'success' : 'danger'}>
                    {res.isPassed ? 'Passed' : 'Needs Review'}
                  </Badge>
                  <span className="font-bold text-sm text-slate-900">
                    {res.testTitle}
                  </span>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-3">
                  <span>Date: {res.date}</span>
                  <span>·</span>
                  <span>Time Spent: {Math.round(res.timeSpentSeconds / 60)} min</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-base font-extrabold text-slate-900">
                    {res.score} / {res.totalScore}
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold">
                    Passing: {res.passingScore}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onReviewTest(res)}
                  className="text-xs"
                >
                  Review Mistakes
                </Button>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
