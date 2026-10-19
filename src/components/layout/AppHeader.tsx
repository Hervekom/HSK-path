import React, { useEffect, useRef, useState } from 'react';
import { tr } from '../../locales/tr';
import { Menu, Flame, Search, Bell, Sparkles, BookOpen, ShieldCheck, Settings, TrendingUp, LogOut, Crown } from '../icons';
import { useI18n } from '../../locales';
import { navItemFor } from './navigation';
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
  onSignOut?: () => void;
  hasPro?: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentView,
  onNavigate,
  user,
  streakDays,
  onOpenMobileMenu,
  isAdmin = false,
  onSignOut,
  hasPro = false,
}) => {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the avatar menu on outside click / Escape / page change
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);
  useEffect(() => setMenuOpen(false), [currentView]);

  const getTitle = () => {
    const item = navItemFor(currentView);
    if (!item) return 'HSK Path';
    return item.labelKey ? t(item.labelKey) : tr(item.label!);
  };

  return (
    <header className="sticky top-0 z-20 w-full bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E8E2D8] px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 transition-colors">
      {/* Left: Mobile trigger & breadcrumb */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-[#C52828] hover:bg-[#F2ECE4] transition-colors cursor-pointer"
          aria-label={tr("Open Navigation")}
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 min-w-0">
          <span className="font-bold text-base sm:text-lg text-stone-900 tracking-tight truncate">
            {getTitle()}
          </span>
          <span className="hidden sm:inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1C1917] text-[#FAF8F5] tracking-wider uppercase">
            {user.currentHsk.toUpperCase()}{" "}{tr("ACTIVE")}
          </span>
        </div>
      </div>

      {/* Right actions: Quick SRS review trigger, search, streak, language selector, avatar */}
      <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
        {/* Quick SRS Review Trigger */}
        <button
          onClick={() => onNavigate('vocabulary')}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-[#C52828] text-xs font-bold hover:bg-rose-100 transition-colors cursor-pointer shadow-2xs"
          title={tr("Review due spaced repetition vocabulary")}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>{tr("Review Due")}</span>
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
          title={tr("Daily Study Streak")}
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
          <span>{tr("Search Hanzi...")}</span>
        </button>

        {/* Language selector in top app header */}
        <LanguageSelector variant="standard" />

        {/* User avatar + account menu */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="w-8 h-8 rounded-xl bg-[#1C1917] text-[#FAF8F5] border border-stone-800 flex items-center justify-center font-bold text-xs hover:bg-[#C52828] hover:border-[#A82020] transition-colors cursor-pointer shadow-2xs"
            title={user.name}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-label={tr('Account menu')}
          >
            {user.name.charAt(0)}
          </button>
          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 top-10 z-50 w-60 rounded-2xl border border-[#E6DFD3] bg-white shadow-xl p-1.5 animate-in fade-in duration-100"
            >
              <div className="px-3 py-2.5 border-b border-[#EFE9DF] mb-1">
                <p className="text-sm font-bold text-stone-900 truncate">{user.name}</p>
                <p className="text-[11px] text-stone-500 truncate">{user.email}</p>
                <span className={`mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${hasPro ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-stone-50 border-stone-200 text-stone-600'}`}>
                  {hasPro && <Crown className="w-3 h-3" />} {hasPro ? tr('Pro') : tr('Free')}
                </span>
              </div>
              <button role="menuitem" onClick={() => onNavigate('profile')} className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-stone-700 hover:bg-[#FAF8F5] cursor-pointer">
                <Settings className="w-4 h-4 text-stone-500" /> {t('nav.profile')}
              </button>
              <button role="menuitem" onClick={() => onNavigate('progress')} className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-stone-700 hover:bg-[#FAF8F5] cursor-pointer">
                <TrendingUp className="w-4 h-4 text-stone-500" /> {t('nav.progress')}
              </button>
              {onSignOut && (
                <button
                  role="menuitem"
                  onClick={() => {
                    setMenuOpen(false);
                    onSignOut();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 mt-1 rounded-xl text-sm font-semibold text-[#C52828] hover:bg-[#FDF3F1] border-t border-[#EFE9DF] cursor-pointer"
                >
                  <LogOut className="w-4 h-4" /> {t('nav.signOut')}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

