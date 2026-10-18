import React from 'react';
import { Sparkles, Headphones, FileText, Layers, PenTool, BookOpen, ArrowRight, Clock, Flame, Award, Play } from '../components/icons';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import type { AppState, SkillType } from '../types';

interface PracticeHubViewProps {
  onNavigate: (view: AppState['currentView']) => void;
  onStartPractice: (skill: SkillType | 'mixed') => void;
}

export const PracticeHubView: React.FC<PracticeHubViewProps> = ({
  onNavigate,
  onStartPractice,
}) => {
  const { t } = useI18n();

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          {t('practice.title')}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
          {t('practice.subtitle')}
        </p>
      </div>

      {/* Featured Quick Daily Drill Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-950 via-slate-900 to-slate-900 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider">
              {t('practice.quickQuiz')}
            </span>
            <span className="text-xs text-slate-400 font-medium">10 Questions · ~5 min</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Daily Adaptive Drill (HSK 1–3 Mix)
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A fast, high-yield drill covering vocabulary recall, listening dialogues, and grammar particles to keep your streak alive.
          </p>
        </div>

        <div className="shrink-0">
          <Button
            variant="accent"
            size="lg"
            onClick={() => onStartPractice('mixed')}
            className="w-full sm:w-auto shadow-md"
            icon={<Play className="w-4 h-4" weight="fill" />}
          >
            Start Daily Drill
          </Button>
        </div>
      </div>

      {/* Categorized Practice Drills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Listening Practice */}
        <Card
          variant="interactive"
          onClick={() => onNavigate('listening-practice')}
          className="p-6 space-y-4 flex flex-col justify-between hover:border-slate-300"
        >
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-xl bg-[#F4EFE8] text-stone-800 border border-[#E6DED2] flex items-center justify-center">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {t('practice.listeningPractice')}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Listen to native Mandarin dialogues, adjust audio playback speed (0.8x / 1.0x), and answer comprehension questions.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#C52828]">
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="w-3 h-3" /> ~10 min session
            </span>
            <span className="flex items-center gap-1">
              Start Audio Drill <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Card>

        {/* 2. Reading Practice */}
        <Card
          variant="interactive"
          onClick={() => onNavigate('reading-practice')}
          className="p-6 space-y-4 flex flex-col justify-between hover:border-slate-300"
        >
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-xl bg-[#F4EFE8] text-stone-800 border border-[#E6DED2] flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {t('practice.readingPractice')}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Read authentic Chinese short passages and dialogues with optional pinyin annotations and text questions.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#C52828]">
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="w-3 h-3" /> ~12 min session
            </span>
            <span className="flex items-center gap-1">
              Read Passages <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Card>

        {/* 3. Writing & Sentence Order */}
        <Card
          variant="interactive"
          onClick={() => onNavigate('writing-practice')}
          className="p-6 space-y-4 flex flex-col justify-between hover:border-slate-300"
        >
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-xl bg-[#F4EFE8] text-stone-800 border border-[#E6DED2] flex items-center justify-center">
              <PenTool className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {t('practice.writingPractice')}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Interactive word ordering and sentence construction directly preparing you for the official HSK 3 writing section.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#C52828]">
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="w-3 h-3" /> ~8 min session
            </span>
            <span className="flex items-center gap-1">
              Arrange Words <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Card>

        {/* 4. Grammar Patterns Quiz */}
        <Card
          variant="interactive"
          onClick={() => onStartPractice('grammar')}
          className="p-6 space-y-4 flex flex-col justify-between hover:border-slate-300"
        >
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-xl bg-[#F4EFE8] text-stone-800 border border-[#E6DED2] flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {t('practice.grammarQuiz')}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Master essential modal verbs (会, 能, 可以), comparison clauses (比), and aspect particles (了, 着, 过).
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#C52828]">
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="w-3 h-3" /> ~8 min session
            </span>
            <span className="flex items-center gap-1">
              Start Grammar <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Card>

        {/* 5. Vocabulary Flashcards */}
        <Card
          variant="interactive"
          onClick={() => onNavigate('vocabulary')}
          className="p-6 space-y-4 flex flex-col justify-between hover:border-slate-300"
        >
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-xl bg-[#F4EFE8] text-stone-800 border border-[#E6DED2] flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {t('nav.vocabulary')} Flashcards
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Flip and memorize characters with audio pronunciation, example sentences, and bookmarking.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#C52828]">
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="w-3 h-3" /> Self-paced
            </span>
            <span className="flex items-center gap-1">
              Study Cards <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Card>

        {/* 6. Full Mock Exams */}
        <Card
          variant="interactive"
          onClick={() => onNavigate('mock-tests')}
          className="p-6 space-y-4 flex flex-col justify-between hover:border-slate-300"
        >
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-xl bg-[#F4EFE8] text-stone-800 border border-[#E6DED2] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {t('nav.mockTests')}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Timed simulation exams with official section timing, audio player, score cards, and mistake logs.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#C52828]">
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="w-3 h-3" /> 35–90 min
            </span>
            <span className="flex items-center gap-1">
              Take Exam <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};
