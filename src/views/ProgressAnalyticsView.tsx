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
import { WEEKLY_PERFORMANCE_HISTORY, INITIAL_SKILL_STATS } from '../data/progressData';
import type { UserProfile, TestResult, AppState } from '../types';

interface ProgressAnalyticsViewProps {
  user: UserProfile;
  streakDays: number;
  testHistory: TestResult[];
  onNavigate: (view: AppState['currentView']) => void;
  onReviewTest: (result: TestResult) => void;
}

export const ProgressAnalyticsView: React.FC<ProgressAnalyticsViewProps> = ({
  user,
  streakDays,
  testHistory,
  onNavigate,
  onReviewTest,
}) => {
  const { t } = useI18n();

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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Card variant="default" className="p-6 space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Average Mock Score
          </div>
          <div className="text-3xl font-extrabold text-slate-900">82%</div>
          <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +6% from last week
          </div>
        </Card>

        <Card variant="default" className="p-6 space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Total Study Hours
          </div>
          <div className="text-3xl font-extrabold text-slate-900">18.5 hrs</div>
          <div className="text-xs text-slate-500 font-semibold">
            Across {user.currentHsk.toUpperCase()} curriculum
          </div>
        </Card>

        <Card variant="default" className="p-6 space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Active Streak
          </div>
          <div className="text-3xl font-extrabold text-slate-900">{streakDays} Days</div>
          <div className="text-xs text-amber-700 font-semibold">
            Longest record: 14 days
          </div>
        </Card>
      </div>

      {/* Skills Mastery Breakdown Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 tracking-tight">
          Skill Mastery & Accuracy
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INITIAL_SKILL_STATS.map((stat) => (
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
                <span>{stat.totalQuestions} Questions</span>
                <span>{stat.masteryLevel}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 7-Day Performance Graph */}
      <Card variant="default" className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">7-Day Study & Accuracy Trend</h3>
            <p className="text-xs text-slate-500">Daily practice sessions and drill accuracy</p>
          </div>
          <Badge variant="neutral">Weekly View</Badge>
        </div>

        <div className="h-44 flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-slate-100">
          {WEEKLY_PERFORMANCE_HISTORY.map((item) => (
            <div key={item.day} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded shadow-2xs">
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

      {/* Mock Exam History Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 tracking-tight">
          Simulation Exam History
        </h2>

        <Card variant="default" className="divide-y divide-slate-100 p-0 overflow-hidden">
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
