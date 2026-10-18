import React from 'react';
import { Menu, Flame, Search, Bell, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { useI18n } from '../../locales';
import { LanguageSelector } from '../ui/LanguageSelector';
import { Button } from '../ui/Button';
import type { AppState, UserProfile } from '../../types';

interface AppHeaderProps {
  currentView: AppState['currentView'];
  onNavigate: (view: AppState['currentView']) => void;
  user: UserProfile;
  streakDays: number;
  onOpenMobileMenu: () => void;
  isAdmin?: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentView,
  onNavigate,
  user,
  streakDays,
  onOpenMobileMenu,
  isAdmin = false,
}) => {
  const { t } = useI18n();

  const getTitle = () => {
    switch (currentView) {
      case 'dashboard':
        return t('nav.dashboard');
      case 'hsk-levels':
      case 'hsk-detail':
        return t('nav.hskLevels');
      case 'learn':
        return t('nav.learn');
      case 'vocabulary':
        return t('nav.vocabulary');
      case 'practice-hub':
      case 'quiz':
      case 'listening-practice':
      case 'reading-practice':
      case 'writing-practice':
        return t('nav.practice');
      case 'mock-tests':
      case 'mock-test-intro':
      case 'mock-test-exam':
      case 'test-results':
      case 'review-mistakes':
        return t('nav.mockTests');
      case 'progress':
        return t('nav.progress');
      case 'profile':
        return t('nav.profile');
      case 'admin':
        return t('nav.admin');
      default:
        return 'HSK Path';
    }
  };

  return (
    <header className="sticky top-0 z-20 w-full bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E8E2D8] px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 transition-colors">
      {/* Left: Mobile trigger & breadcrumb */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-[#C52828] hover:bg-[#F2ECE4] transition-colors cursor-pointer"
          aria-label="Open Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 min-w-0">
          <span className="font-bold text-base sm:text-lg text-stone-900 tracking-tight truncate">
            {getTitle()}
          </span>
          <span className="hidden sm:inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1C1917] text-[#FAF8F5] tracking-wider uppercase">
            {user.currentHsk.toUpperCase()} ACTIVE
          </span>
        </div>
      </div>

      {/* Right actions: Quick SRS review trigger, search, streak, language selector, avatar */}
      <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
        {/* Quick SRS Review Trigger */}
        <button
          onClick={() => onNavigate('vocabulary')}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-[#C52828] text-xs font-bold hover:bg-rose-100 transition-colors cursor-pointer shadow-2xs"
          title="Review due spaced repetition vocabulary"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Review Due</span>
        </button>

        {isAdmin && (
          <button
            onClick={() => onNavigate('admin')}
            className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer shadow-2xs ${
              currentView === 'admin'
                ? 'bg-stone-900 border-stone-900 text-white'
                : 'bg-white border-[#E0D7CB] text-stone-700 hover:text-[#C52828]'
            }`}
            title={t('nav.admin')}
            aria-label={t('nav.admin')}
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="hidden sm:inline">{t('nav.admin')}</span>
          </button>
        )}

        {/* Streak indicator */}
        <div
          onClick={() => onNavigate('progress')}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#FAF5EB] border border-[#E6D4B0] text-[#8C6405] text-xs font-bold cursor-pointer hover:bg-[#F5EAD4] transition-colors shadow-2xs"
          title="Daily Study Streak"
        >
          <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
          <span>{streakDays}d</span>
        </div>

        {/* Global Search trigger for vocabulary */}
        <button
          onClick={() => onNavigate('vocabulary')}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#E0D7CB] text-xs text-stone-600 bg-white hover:bg-[#FAF8F5] hover:border-stone-400 hover:text-stone-900 transition-colors cursor-pointer shadow-2xs"
        >
          <Search className="w-3.5 h-3.5 text-stone-400" />
          <span>Search Hanzi...</span>
        </button>

        {/* Language selector in top app header */}
        <LanguageSelector variant="standard" />

        {/* User avatar */}
        <button
          onClick={() => onNavigate('profile')}
          className="w-8 h-8 rounded-xl bg-[#1C1917] text-[#FAF8F5] border border-stone-800 flex items-center justify-center font-bold text-xs hover:bg-[#C52828] hover:border-[#A82020] transition-colors cursor-pointer shadow-2xs"
          title={user.name}
        >
          {user.name.charAt(0)}
        </button>
      </div>
    </header>
  );
};

