// Single source of truth for the app's navigation: sidebar sections, phone tab bar
// and the small section tabs shown at the top of some pages.
import type React from 'react';
import {
  LayoutDashboard,
  Layers,
  BookOpen,
  ChatsCircle,
  Sparkles,
  ChatCircleText,
  FileCheck,
  TrendingUp,
  Settings,
  Shield,
} from '../icons';
import type { AppState } from '../../types';

type View = AppState['currentView'];
type Icon = React.ComponentType<{ className?: string; weight?: 'regular' | 'fill' }>;

export interface NavItem {
  id: View;
  /** i18n key (t) when it exists, otherwise an English string for tr(). */
  labelKey?: string;
  label?: string;
  icon: Icon;
  /** Every view that belongs to this entry (keeps it highlighted). */
  views: View[];
  badge?: 'srs';
  adminOnly?: boolean;
}

export interface NavSection {
  id: 'home' | 'learn' | 'practice' | 'me';
  /** Heading shown above the section in the sidebar (none for home). */
  titleKey?: string;
  title?: string;
  items: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'home',
    items: [{ id: 'dashboard', labelKey: 'nav.dashboard', icon: LayoutDashboard, views: ['dashboard'] }],
  },
  {
    id: 'learn',
    titleKey: 'nav.learn',
    items: [
      { id: 'hsk-levels', label: 'HSK courses', icon: Layers, views: ['hsk-levels', 'hsk-detail', 'learn'] },
      { id: 'vocabulary', labelKey: 'nav.vocabulary', icon: BookOpen, views: ['vocabulary'], badge: 'srs' },
      { id: 'phrases', labelKey: 'nav.phrases', icon: ChatsCircle, views: ['phrases'] },
    ],
  },
  {
    id: 'practice',
    title: 'Practise',
    items: [
      {
        id: 'practice-hub',
        label: 'Exercises',
        icon: Sparkles,
        views: ['practice-hub', 'quiz', 'listening-practice', 'reading-practice', 'writing-practice'],
      },
      { id: 'tutor', labelKey: 'nav.tutor', icon: ChatCircleText, views: ['tutor'] },
      {
        id: 'mock-tests',
        labelKey: 'nav.mockTests',
        icon: FileCheck,
        views: ['mock-tests', 'mock-test-intro', 'mock-test-exam', 'test-results', 'review-mistakes', 'hsk3-exam'],
      },
    ],
  },
  {
    id: 'me',
    title: 'My progress',
    items: [
      { id: 'progress', labelKey: 'nav.progress', icon: TrendingUp, views: ['progress'] },
      { id: 'profile', labelKey: 'nav.profile', icon: Settings, views: ['profile'] },
      { id: 'admin', labelKey: 'nav.admin', icon: Shield, views: ['admin'], adminOnly: true },
    ],
  },
];

export function navItemFor(view: View): NavItem | undefined {
  for (const s of NAV_SECTIONS) for (const i of s.items) if (i.views.includes(view)) return i;
  return undefined;
}

export interface TabItem {
  id: View;
  labelKey?: string;
  label?: string;
  icon: Icon;
  views: View[];
}

const viewsOf = (...ids: View[]) =>
  NAV_SECTIONS.flatMap((s) => s.items).filter((i) => ids.includes(i.id)).flatMap((i) => i.views);

/** Bottom tab bar on phones: one tab per thing students do most. */
export const MOBILE_TABS: TabItem[] = [
  { id: 'dashboard', labelKey: 'navShort.home', icon: LayoutDashboard, views: viewsOf('dashboard', 'progress', 'profile', 'admin') },
  { id: 'hsk-levels', label: 'Learn', icon: Layers, views: viewsOf('hsk-levels', 'vocabulary', 'phrases') },
  { id: 'practice-hub', label: 'Exercises', icon: Sparkles, views: viewsOf('practice-hub') },
  { id: 'tutor', label: 'Laoshi', icon: ChatCircleText, views: ['tutor'] },
  { id: 'mock-tests', labelKey: 'navShort.exams', icon: FileCheck, views: viewsOf('mock-tests') },
];

/**
 * Section tabs shown above a page so its neighbours are one tap away.
 * "always": on every screen size; "mobile": only where the sidebar is hidden.
 */
export const SECTION_TABS: Array<{ items: View[]; show: 'always' | 'mobile' }> = [
  { items: ['hsk-levels', 'vocabulary', 'phrases'], show: 'always' },
  { items: ['dashboard', 'progress', 'profile'], show: 'mobile' },
];
