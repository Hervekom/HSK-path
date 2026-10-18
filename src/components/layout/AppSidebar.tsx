import React from 'react';
import { tr } from '../../locales/tr';
import { ChevronRight, Flame, LogOut } from '../icons';
import { NAV_SECTIONS } from './navigation';
import { useI18n } from '../../locales';
import { LanguageSelector } from '../ui/LanguageSelector';
import type { AppState, UserProfile } from '../../types';

interface AppSidebarProps {
  currentView: AppState['currentView'];
  onNavigate: (view: AppState['currentView']) => void;
  user: UserProfile;
  streakDays: number;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  onSignOut?: () => void;
  isAdmin?: boolean;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  currentView,
  onNavigate,
  user,
  streakDays,
  isOpenMobile = false,
  onCloseMobile,
  onSignOut,
  isAdmin = false,
}) => {
  const { t } = useI18n();

  const sections = NAV_SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter((item) => !item.adminOnly || isAdmin),
  })).filter((section) => section.items.length > 0);

  const handleItemClick = (id: any) => {
    onNavigate(id);
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between bg-[#FAF8F5] border-r border-[#E6DFD3] text-stone-700 select-none">
      {/* Top Section */}
      <div className="p-4 space-y-6">
        {/* Brand */}
        <div
          onClick={() => handleItemClick('dashboard')}
          className="flex items-center gap-3 px-2 py-1.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1C1917] border border-stone-800 flex items-center justify-center text-white shadow-xs group-hover:border-[#C52828] transition-colors relative overflow-hidden">
            <span className="font-hanzi-serif font-bold text-xl text-[#FAF8F5]">道</span>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C52828]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-stone-900 tracking-tight leading-none">{tr("HSK Path")}</span>
            <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider mt-1">
              {tr("HSK 3.0 · levels 1–3")}
            </span>
          </div>
        </div>

        {/* Current Active Target Banner */}
        <div 
          onClick={() => handleItemClick('hsk-levels')}
          className="p-3 rounded-2xl bg-white border border-[#E4DCCE] shadow-2xs flex items-center justify-between cursor-pointer hover:border-stone-400 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
              {user.currentHsk.toUpperCase()}
            </div>
            <div>
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                {tr("Target Syllabus")}
              </div>
              <div className="text-xs font-bold text-stone-900">
                {user.currentHsk.toUpperCase()}{" "}{tr("Master Plan")}
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-stone-400" />
        </div>

        {/* Navigation, grouped by section */}
        <nav className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="space-y-1">
              {(section.titleKey || section.title) && (
                <p className="px-3.5 pb-0.5 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  {section.titleKey ? t(section.titleKey) : tr(section.title!)}
                </p>
              )}
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = item.views.includes(currentView);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                        : 'text-stone-600 hover:text-stone-950 hover:bg-[#EFE8DE]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#FAF8F5]' : 'text-stone-500'}`} />
                      <span>{item.labelKey ? t(item.labelKey) : tr(item.label!)}</span>
                    </div>
                    {item.badge === 'srs' && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-[#FAF5EB] text-[#8C6405] border border-[#E6D4B0]'}`}>
                        {tr("SRS")}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-[#E6DFD3] space-y-3 bg-[#FAF8F5]">
        {/* Study Streak Badge */}
        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#FAF5EB] border border-[#E6D4B0] text-[#8C6405] text-xs font-semibold shadow-2xs">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>{tr("Study Streak")}</span>
          </div>
          <span className="font-bold">{streakDays} {t('dashboard.days')}</span>
        </div>

        {/* Interface Language Selector in Sidebar */}
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-medium text-stone-500">{tr("Language")}</span>
          <LanguageSelector variant="standard" />
        </div>

        {/* User Card */}
        <div
          onClick={() => handleItemClick('profile')}
          className="flex items-center gap-3 p-2 rounded-xl bg-white border border-[#E4DCCE] hover:border-stone-400 transition-colors cursor-pointer shadow-2xs"
        >
          <div className="w-8 h-8 rounded-full bg-[#1C1917] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
            {user.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-stone-900 truncate">{user.name}</p>
            <p className="text-[10px] text-stone-500 truncate">{user.email}</p>
          </div>
        </div>

        {/* Quick Sign Out trigger to return to landing */}
        <button
          onClick={() => {
            onCloseMobile?.();
            if (onSignOut) onSignOut();
            else handleItemClick('landing');
          }}
          className="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-stone-500 hover:text-[#C52828] hover:bg-[#EFE8DE] rounded-lg transition-colors cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>{t('nav.signOut')}</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-64 h-screen sticky top-0 shrink-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs animate-in fade-in"
            onClick={onCloseMobile}
          />
          <div className="relative w-72 max-w-[85vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};

