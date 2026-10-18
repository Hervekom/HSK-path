import React from 'react';
import {
  BookOpen,
  Layers,
  Headphones,
  FileText,
  Sparkles,
  PenTool,
  ArrowRight,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import type { AppState, SkillType } from '../types';

interface LearnHubViewProps {
  onNavigate: (view: AppState['currentView']) => void;
  onStartPractice: (skill: SkillType | 'mixed') => void;
}

export const LearnHubView: React.FC<LearnHubViewProps> = ({ onNavigate, onStartPractice }) => {
  const { t } = useI18n();

  const tracks = [
    {
      id: 'vocabulary',
      title: 'Vocabulary Acquisition',
      desc: 'Learn characters, pinyin, and real-life context sentences with native voice audio.',
      icon: BookOpen,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      lessonsCount: 30,
      progress: 68,
      action: () => onNavigate('vocabulary'),
    },
    {
      id: 'grammar',
      title: 'Essential Grammar',
      desc: 'Master the core HSK sentence patterns, particles (了, 着, 过), and comparisons (比).',
      icon: Layers,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      lessonsCount: 24,
      progress: 55,
      action: () => onStartPractice('grammar'),
    },
    {
      id: 'listening',
      title: 'Listening Comprehension',
      desc: 'Train your ear to natural Mandarin dialogues, numbers, questions, and daily scenarios.',
      icon: Headphones,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      lessonsCount: 28,
      progress: 75,
      action: () => onNavigate('listening-practice'),
    },
    {
      id: 'reading',
      title: 'Reading & Passages',
      desc: 'Enhance Hanzi reading speed, contextual inferences, and passage comprehension.',
      icon: FileText,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      lessonsCount: 22,
      progress: 60,
      action: () => onNavigate('reading-practice'),
    },
    {
      id: 'characters',
      title: 'Hanzi & Radicals',
      desc: 'Understand character formation, stroke order rules, and high-frequency radicals.',
      icon: Sparkles,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      lessonsCount: 16,
      progress: 45,
      action: () => onStartPractice('characters'),
    },
    {
      id: 'writing',
      title: 'Writing & Sentence Structure',
      desc: 'Formulate grammatically correct sentences and prepare for the HSK 3 writing section.',
      icon: PenTool,
      color: 'bg-rose-50 text-rose-700 border-rose-200',
      lessonsCount: 18,
      progress: 40,
      action: () => onNavigate('writing-practice'),
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          {t('learn.title')}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
          {t('learn.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => {
          const Icon = track.icon;
          return (
            <Card
              key={track.id}
              variant="elevated"
              className="p-6 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${track.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge variant="neutral">
                    {track.lessonsCount} {t('learn.lessons')}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{track.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {track.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-semibold text-slate-600">
                    <span>Progress</span>
                    <span className="text-slate-900">{track.progress}%</span>
                  </div>
                  <ProgressBar value={track.progress} color="primary" size="sm" />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Button
                  variant="primary"
                  size="md"
                  onClick={track.action}
                  className="w-full justify-center shadow-xs"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  {track.progress > 0 ? t('learn.continueButton') : t('learn.startButton')}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
