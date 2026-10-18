import React, { useState } from 'react';
import { AppSidebar } from './AppSidebar';
import { AppHeader } from './AppHeader';
import type { AppState, UserProfile } from '../../types';

interface AppLayoutProps {
  currentView: AppState['currentView'];
  onNavigate: (view: AppState['currentView']) => void;
  user: UserProfile;
  streakDays: number;
  children: React.ReactNode;
  onSignOut?: () => void;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  currentView,
  onNavigate,
  user,
  streakDays,
  children,
  onSignOut,
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
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#FAF8F5]">
        <AppHeader
          currentView={currentView}
          onNavigate={onNavigate}
          user={user}
          streakDays={streakDays}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto text-[#231F20]">
          {children}
        </main>
      </div>
    </div>
  );
};

