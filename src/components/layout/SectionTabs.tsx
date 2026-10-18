import React from 'react';
import { tr } from '../../locales/tr';
import { useI18n } from '../../locales';
import { NAV_SECTIONS, SECTION_TABS } from './navigation';
import type { AppState } from '../../types';

interface SectionTabsProps {
  currentView: AppState['currentView'];
  onNavigate: (view: AppState['currentView']) => void;
}

/** Small tabs linking the pages of one section (e.g. Courses · Vocabulary · Phrases). */
export const SectionTabs: React.FC<SectionTabsProps> = ({ currentView, onNavigate }) => {
  const { t } = useI18n();
  const items = NAV_SECTIONS.flatMap((s) => s.items);
  const group = SECTION_TABS.find((g) =>
    g.items.some((id) => items.find((i) => i.id === id)?.views.includes(currentView))
  );
  if (!group) return null;

  return (
    <nav
      className={`${group.show === 'mobile' ? 'lg:hidden ' : ''}-mt-1 mb-5 sm:mb-6 overflow-x-auto`}
      aria-label={tr('Section navigation')}
    >
      <div className="inline-flex p-1 bg-[#EFE8DE] rounded-xl border border-[#E0D7CB]">
        {group.items.map((id) => {
          const item = items.find((i) => i.id === id)!;
          const active = item.views.includes(currentView);
          const label = item.labelKey ? t(item.labelKey) : tr(item.label!);
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              aria-current={active ? 'page' : undefined}
              className={`px-3.5 sm:px-4 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                active ? 'bg-[#1C1917] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
