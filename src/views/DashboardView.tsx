import React from 'react';
import { Sparkles, Flame, Clock, BookOpen, Headphones, FileText, Layers, ArrowRight, TrendingUp, AlertCircle, Award, ChevronRight, CheckCircle2, Calendar, PenTool, BrainCircuit, Zap, Timer } from '../components/icons';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { DailyChineseWidget } from '../components/DailyChineseWidget';
import { WEEKLY_PERFORMANCE_HISTORY } from '../data/progressData';
import type { AppState, UserProfile, TestResult, SkillType } from '../types';

interface DashboardViewProps {
  user: UserProfile;
  streakDays: number;
  weeklyMinutes: number;
  learnedWordCount: number;
  testHistory: TestResult[];
  onNavigate: (view: AppState['currentView']) => void;
  onSelectLevel: (level: 'hsk1' | 'hsk2' | 'hsk3') => void;
  onStartPractice: (skill: SkillType | 'mixed') => void;
  showSampleData?: boolean;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  streakDays,
  weeklyMinutes,
  learnedWordCount,
  testHistory,
  onNavigate,
  onSelectLevel,
  onStartPractice,
  showSampleData = false,
}) => {
  const { t } = useI18n();

  const currentLevelMaxWords = user.currentHsk === 'hsk1' ? 150 : user.currentHsk === 'hsk2' ? 300 : 600;
  const overallPercentage = Math.min(100, Math.round((learnedWordCount / currentLevelMaxWords) * 100));
  const weeklyGoal = (user.dailyGoalMinutes || 20) * 7;
  const weeklyPct = Math.round((weeklyMinutes / weeklyGoal) * 100);
  const fmtMinutes = (m: number) => (m >= 60 ? `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, '0')}m` : `${m}m`);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Greeting & Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-[#E8E2D8]">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white border border-[#E0D7CB] text-[10px] font-bold text-stone-600 uppercase tracking-widest mb-2 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C52828]" />
            Active Scholar Dashboard
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
            {t('dashboard.greeting')}, {user.name.split(' ')[0]}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-medium mt-0.5">
            {t('dashboard.readyMessage')}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('hsk-levels')}
            className="text-xs bg-white border-[#E0D7CB]"
          >
            Level: {user.currentHsk.toUpperCase()}
          </Button>
          <Button
            variant="luxury"
            size="sm"
            onClick={() => onStartPractice('mixed')}
            icon={<Timer className="w-3.5 h-3.5" />}
            className="text-xs shadow-xs"
          >
            Quick Daily Drill
          </Button>
        </div>
      </div>

      {/* 4 Luxury Stats Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Stat 1: Current HSK & Progress */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E4DCCE] shadow-2xs space-y-3 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              {t('dashboard.currentHsk')}
            </span>
            <div className="h-7 px-1.5 rounded-lg bg-[#1C1917] text-white flex items-center justify-center font-bold text-[10px] shrink-0">
              {user.currentHsk.toUpperCase()}
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-stone-900 tracking-tight">{overallPercentage}%</div>
            <p className="text-xs text-stone-500 font-medium mt-0.5">{t('dashboard.overallProgress')}</p>
          </div>
          <ProgressBar value={overallPercentage} color="rose" size="sm" />
        </div>

        {/* Stat 2: Vocabulary Mastered */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E4DCCE] shadow-2xs space-y-3 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              {t('dashboard.vocabCount')}
            </span>
            <div className="w-7 h-7 rounded-lg bg-[#F4EFE8] text-stone-800 border border-[#E6DED2] flex items-center justify-center font-bold text-xs">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-stone-900 tracking-tight">
              {learnedWordCount} <span className="text-xs font-normal text-stone-400 uppercase tracking-wider">/ {currentLevelMaxWords}</span>
            </div>
            <p className="text-xs text-stone-500 font-medium mt-0.5">{user.currentHsk.toUpperCase()} · {t('dashboard.wordsLearned')}</p>
          </div>
          <ProgressBar value={learnedWordCount} max={currentLevelMaxWords} color="emerald" size="sm" />
        </div>

        {/* Stat 3: Study Streak */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E4DCCE] shadow-2xs space-y-3 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              {t('dashboard.studyStreak')}
            </span>
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EB] text-amber-700 border border-[#E6D4B0] flex items-center justify-center font-bold text-xs">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-600" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-stone-900 tracking-tight">
              {streakDays} <span className="text-xs font-normal text-stone-400 uppercase tracking-wider">{t('dashboard.days')}</span>
            </div>
            <p className="text-xs text-amber-800 font-semibold mt-0.5">{t('dashboard.streakLabel')}</p>
          </div>
          <div className="flex gap-1">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
              <div
                key={day + idx}
                className={`flex-1 h-1.5 rounded-full ${idx < Math.min(streakDays, 7) ? 'bg-amber-500' : 'bg-stone-200'}`}
              />
            ))}
          </div>
        </div>

        {/* Stat 4: Weekly Study Time */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E4DCCE] shadow-2xs space-y-3 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              {t('dashboard.weeklyTime')}
            </span>
            <div className="w-7 h-7 rounded-lg bg-stone-100 text-stone-700 border border-stone-200 flex items-center justify-center font-bold text-xs">
              <Clock className="w-3.5 h-3.5" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-stone-900 tracking-tight">{fmtMinutes(weeklyMinutes)}</div>
            <p className="text-xs text-stone-500 font-medium mt-0.5">{t('dashboard.weeklyGoal', { goal: fmtMinutes(weeklyGoal) })}</p>
          </div>
          <ProgressBar value={Math.min(100, weeklyPct)} color="amber" size="sm" />
        </div>
      </div>

      {/* Large Hero "Continue Learning & SRS Track" Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#1C1917] text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-stone-800 relative overflow-hidden">
        {/* Subtle ambient red glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-[#C52828]/20 to-transparent blur-3xl pointer-events-none" />

        <div className="space-y-3 max-w-xl relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#C52828]/30 text-[#FAF8F5] border border-[#C52828]/50 text-[10px] font-bold uppercase tracking-wider">
              {t('dashboard.continueLearning')}
            </span>
            <span className="text-xs text-stone-400 font-medium">
              HSK 2 · {t('dashboard.lesson')} 8
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            HSK 2 Vocabulary & Directions Drill
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Practice essential location prepositions (在, 往, 离) and travel vocabulary (宾馆, 飞机场, 车站) with SRS algorithm.
          </p>

          <div className="space-y-1.5 pt-2 max-w-md">
            <div className="flex justify-between text-xs text-stone-300 font-medium">
              <span>Track Retention Mastery</span>
              <span className="font-bold text-white">68% {t('dashboard.complete')}</span>
            </div>
            <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
              <div className="w-[68%] h-full bg-[#C52828] rounded-full transition-all duration-500" />
            </div>
          </div>
        </div>

        <div className="shrink-0 relative z-10 flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onStartPractice('vocabulary')}
            className="w-full sm:w-auto shadow-md"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            {t('dashboard.continue')}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onNavigate('vocabulary')}
            className="w-full sm:w-auto bg-stone-800 text-stone-200 border-stone-700 hover:bg-stone-700"
          >
            Review Due (SRS)
          </Button>
        </div>
      </div>

      {/* Chinese Language Daily (Google Search Grounded) Widget */}
      <DailyChineseWidget userLevel={user.currentHsk} />

      {/* Today's Practice Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-stone-900 tracking-tight">
              {t('dashboard.todayPractice')}
            </h3>
            <p className="text-xs text-stone-500">
              Targeted short sessions designed to fit your daily {user.dailyGoalMinutes} min goal
            </p>
          </div>
          <button
            onClick={() => onNavigate('practice-hub')}
            className="text-xs font-bold text-stone-700 hover:text-stone-950 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Drills</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Practice 1: Vocabulary */}
          <div
            onClick={() => onStartPractice('vocabulary')}
            className="p-5 rounded-2xl bg-white border border-[#E4DCCE] hover:border-[#C52828] hover:bg-[#FFFDFB] shadow-2xs space-y-3 flex flex-col justify-between cursor-pointer transition-all group"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#C52828] border border-[#E4DCCE] flex items-center justify-center group-hover:bg-[#1C1917] group-hover:text-white transition-all">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-stone-900">Vocabulary Flashcards</h4>
              <p className="text-xs text-stone-500">
                10 essential words with pinyin and native speech playback
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs font-semibold text-stone-600">
              <span className="flex items-center gap-1 text-stone-400">
                <Clock className="w-3 h-3" /> 10 min
              </span>
              <span className="text-[#C52828] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 font-bold">
                Start <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Practice 2: Grammar */}
          <div
            onClick={() => onStartPractice('grammar')}
            className="p-5 rounded-2xl bg-white border border-[#E4DCCE] hover:border-[#C52828] hover:bg-[#FFFDFB] shadow-2xs space-y-3 flex flex-col justify-between cursor-pointer transition-all group"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-amber-700 border border-[#E4DCCE] flex items-center justify-center group-hover:bg-[#1C1917] group-hover:text-white transition-all">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-stone-900">Grammar Patterns</h4>
              <p className="text-xs text-stone-500">
                Master the "比" comparison and "过" experience structures
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs font-semibold text-stone-600">
              <span className="flex items-center gap-1 text-stone-400">
                <Clock className="w-3 h-3" /> 8 min
              </span>
              <span className="text-amber-700 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 font-bold">
                Start <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Practice 3: Listening */}
          <div
            onClick={() => onNavigate('listening-practice')}
            className="p-5 rounded-2xl bg-white border border-[#E4DCCE] hover:border-[#C52828] hover:bg-[#FFFDFB] shadow-2xs space-y-3 flex flex-col justify-between cursor-pointer transition-all group"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-emerald-700 border border-[#E4DCCE] flex items-center justify-center group-hover:bg-[#1C1917] group-hover:text-white transition-all">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-stone-900">Listening Comprehension</h4>
              <p className="text-xs text-stone-500">
                Audio questions with realistic pace and dialogue inferences
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs font-semibold text-stone-600">
              <span className="flex items-center gap-1 text-stone-400">
                <Clock className="w-3 h-3" /> 12 min
              </span>
              <span className="text-emerald-700 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 font-bold">
                Start <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Practice 4: Reading */}
          <div
            onClick={() => onNavigate('reading-practice')}
            className="p-5 rounded-2xl bg-white border border-[#E4DCCE] hover:border-[#C52828] hover:bg-[#FFFDFB] shadow-2xs space-y-3 flex flex-col justify-between cursor-pointer transition-all group"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-sky-700 border border-[#E4DCCE] flex items-center justify-center group-hover:bg-[#1C1917] group-hover:text-white transition-all">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-stone-900">Reading Passages</h4>
              <p className="text-xs text-stone-500">
                Contextual paragraphs with toggleable pinyin assistance
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs font-semibold text-stone-600">
              <span className="flex items-center gap-1 text-stone-400">
                <Clock className="w-3 h-3" /> 10 min
              </span>
              <span className="text-sky-700 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 font-bold">
                Start <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance & Weak Areas 2-Column Section */}
      {showSampleData && (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: 7-Day Performance Chart */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white border border-[#E4DCCE] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-stone-900 tracking-tight">
                {t('dashboard.recentPerformance')}
              </h3>
              <p className="text-xs text-stone-500">
                {t('dashboard.performanceSubtitle')}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-stone-600">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1C1917]" />
                Accuracy %
              </span>
              <span className="text-stone-400">Avg: 80%</span>
            </div>
          </div>

          {/* Clean 7-Day Performance Bar Chart */}
          <div className="h-44 flex items-end justify-between gap-1.5 sm:gap-3 pt-8 pb-2 px-0 sm:px-2 border-b border-stone-100">
            {WEEKLY_PERFORMANCE_HISTORY.map((item, idx) => (
              <div key={item.day} className="relative flex-1 min-w-0 flex flex-col items-center gap-2 group h-full justify-end">
                {/* Tooltip on hover */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-bold text-stone-900 bg-stone-100 px-1.5 py-0.5 rounded shadow-2xs -mb-1">
                  {item.accuracy}%
                </div>
                {/* Bar */}
                <div
                  className="w-full max-w-[36px] rounded-t-xl bg-stone-900 group-hover:bg-[#C52828] transition-all duration-200"
                  style={{ height: `${item.accuracy}%` }}
                />
                <span className="text-xs font-bold text-stone-500 mt-1">{item.day}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-4">
              <span>Total Sessions: <strong>7</strong></span>
              <span>Total Questions: <strong>285</strong></span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('progress')}
              className="text-xs"
            >
              Open Full Analytics
            </Button>
          </div>
        </div>

        {/* Right 1 Col: Weak Areas */}
        <div className="p-6 rounded-3xl bg-white border border-[#E4DCCE] shadow-xs space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <h3 className="text-base font-bold text-stone-900">
                  {t('dashboard.weakAreas')}
                </h3>
              </div>
              <Badge variant="warning">Prioritize</Badge>
            </div>
            <p className="text-xs text-stone-500">
              {t('dashboard.weakAreasSubtitle')}
            </p>

            <div className="space-y-3">
              {/* Weak Area 1: Grammar */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E4DCCE] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-stone-800">
                  <span>Grammar (比 / 把 structures)</span>
                  <span className="text-[#C52828]">64% Acc.</span>
                </div>
                <ProgressBar value={64} color="amber" size="sm" />
              </div>

              {/* Weak Area 2: Listening */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E4DCCE] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-stone-800">
                  <span>Fast Dialogue Inferences</span>
                  <span className="text-amber-700">72% Acc.</span>
                </div>
                <ProgressBar value={72} color="amber" size="sm" />
              </div>

              {/* Weak Area 3: Characters */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E4DCCE] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-stone-800">
                  <span>Similar Radicals (讠 vs 氵)</span>
                  <span className="text-amber-700">70% Acc.</span>
                </div>
                <ProgressBar value={70} color="amber" size="sm" />
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onStartPractice('grammar')}
            className="w-full justify-center text-xs"
          >
            Reinforce Weak Points
          </Button>
        </div>
      </div>
      )}

      {/* Recent Activity Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-stone-900 tracking-tight">
            {t('dashboard.recentActivity')}
          </h3>
          <span className="text-xs text-stone-400 font-medium">Last 24 Hours</span>
        </div>

        <div className="rounded-3xl bg-white border border-[#E4DCCE] divide-y divide-stone-100 overflow-hidden shadow-2xs">
          {[
            {
              id: 'act-1',
              title: 'HSK 2 Standard Simulation Test A',
              type: 'Mock Exam',
              date: 'Today, 14:20',
              score: '160 / 200 (Passed)',
              icon: Award,
              color: 'text-emerald-700 bg-emerald-50',
            },
            {
              id: 'act-2',
              title: 'HSK 2 Core Vocabulary Practice',
              type: 'Flashcards',
              date: 'Today, 11:05',
              score: '18 / 20 Words',
              icon: BookOpen,
              color: 'text-[#C52828] bg-rose-50',
            },
            {
              id: 'act-3',
              title: 'Listening Dialogue Drill #4',
              type: 'Listening',
              date: 'Yesterday, 19:40',
              score: '85% Accuracy',
              icon: Headphones,
              color: 'text-sky-700 bg-sky-50',
            },
          ].map((act) => {
            const Icon = act.icon;
            return (
              <div key={act.id} className="p-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${act.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">{act.title}</h4>
                    <p className="text-xs text-stone-500">{act.type} · {act.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-stone-800">{act.score}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
