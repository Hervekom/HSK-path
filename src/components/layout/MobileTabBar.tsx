import React from 'react';
import { LayoutDashboard, Layers, Sparkles, BookOpen, FileCheck } from 'lucide-react';
import { useI18n } from '../../locales';
import type { AppState } from '../../types';

interface MobileTabBarProps {
  currentView: AppState['currentView'];
  onNavigate: (view: AppState['currentView']) => void;
}

const TABS: Array<{
  id: AppState['currentView'];
  labelKey: string;
  icon: React.ComponentType<{ className?: string }>;
  group: AppState['currentView'][];
}> = [
  { id: 'dashboard', labelKey: 'navShort.home', icon: LayoutDashboard, group: ['dashboard', 'progress', 'profile'] },
  { id: 'hsk-levels', labelKey: 'navShort.levels', icon: Layers, group: ['hsk-levels', 'hsk-detail', 'learn'] },
  {
    id: 'practice-hub',
    labelKey: 'navShort.practice',
    icon: Sparkles,
    group: ['practice-hub', 'quiz', 'listening-practice', 'reading-practice', 'writing-practice'],
  },
  { id: 'vocabulary', labelKey: 'navShort.vocab', icon: BookOpen, group: ['vocabulary'] },
  {
    id: 'mock-tests',
    labelKey: 'navShort.exams',
    icon: FileCheck,
    group: ['mock-tests', 'mock-test-intro', 'mock-test-exam', 'test-results', 'review-mistakes'],
  },
];

/** Bottom navigation for phones (hidden from lg breakpoint, where the sidebar is visible). */
export const MobileTabBar: React.FC<MobileTabBarProps> = ({ currentView, onNavigate }) => {
  const { t } = useI18n();

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E8E2D8] shadow-[0_-4px_16px_rgba(28,25,23,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Main navigation"
    >
      <div className="grid grid-cols-5 max-w-xl mx-auto">
        {TABS.map((tab) => {
          const active = tab.group.includes(currentView);
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`relative flex flex-col items-center justify-center gap-0.5 h-16 text-[10.5px] font-semibold transition-colors cursor-pointer ${
                active ? 'text-[#C52828]' : 'text-stone-500 hover:text-stone-900'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              {active && <span className="absolute top-0 h-0.5 w-8 rounded-full bg-[#C52828]" />}
              <Icon className={`w-5 h-5 ${active ? 'stroke-[2.4]' : ''}`} />
              <span className="truncate max-w-full px-1">{t(tab.labelKey)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
