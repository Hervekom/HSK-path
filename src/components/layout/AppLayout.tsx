import React, { useState } from 'react';
import { AppSidebar } from './AppSidebar';
import { AppHeader } from './AppHeader';
import { MobileTabBar } from './MobileTabBar';
import { SectionTabs } from './SectionTabs';
import type { AppState, UserProfile } from '../../types';

interface AppLayoutProps {
  currentView: AppState['currentView'];
  onNavigate: (view: AppState['currentView']) => void;
  user: UserProfile;
  streakDays: number;
  children: React.ReactNode;
  onSignOut?: () => void;
  isAdmin?: boolean;
  /** Full-screen tool (Laoshi chat): no side padding on phones, page height fixed to the screen. */
  fullBleed?: boolean;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  currentView,
  onNavigate,
  user,
  streakDays,
  children,
  onSignOut,
  isAdmin = false,
  fullBleed = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#FAF8F5] text-[#231F20]">
      {/* Sidebar (Desktop + Mobile Drawer) */}
      <AppSidebar
        currentView={currentView}
        onNavigate={onNavigate}
        user={user}
        streakDays={streakDays}
        isOpenMobile={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
        onSignOut={onSignOut}
        isAdmin={isAdmin}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#FAF8F5]">
        <AppHeader
          currentView={currentView}
          onNavigate={onNavigate}
          user={user}
          streakDays={streakDays}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          isAdmin={isAdmin}
        />
        <main
          className={
            fullBleed
              ? 'flex-1 pb-[calc(4rem+env(safe-area-inset-bottom))] lg:p-6 max-w-7xl w-full mx-auto text-[#231F20] min-w-0'
              : 'flex-1 px-4 pt-4 pb-24 sm:px-6 sm:pt-6 lg:p-8 max-w-7xl w-full mx-auto text-[#231F20] min-w-0'
          }
        >
          <SectionTabs currentView={currentView} onNavigate={onNavigate} />
          {children}
        </main>
      </div>

      {currentView !== 'mock-test-exam' && <MobileTabBar currentView={currentView} onNavigate={onNavigate} />}
    </div>
  );
};

