import React, { useState, useEffect } from 'react';
import { tr } from '../../locales/tr';
import { Menu, X, ArrowRight, ShieldCheck, Sparkles } from '../icons';
import { useI18n } from '../../locales';
import { LanguageSelector } from '../ui/LanguageSelector';
import { Button } from '../ui/Button';

interface NavbarProps {
  onNavigate: (view: any) => void;
  onScrollToSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onScrollToSection }) => {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, fallbackView?: any) => {
    setMobileMenuOpen(false);
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    } else if (fallbackView) {
      onNavigate(fallbackView);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E4DCCE] shadow-xs py-2' 
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Editorial Wordmark */}
        <div 
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1C1917] border border-stone-800 flex items-center justify-center text-white shadow-xs group-hover:border-[#C52828] transition-colors relative overflow-hidden">
            <span className="font-hanzi-serif font-bold text-xl text-[#FAF8F5] group-hover:scale-105 transition-transform">
              道
            </span>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C52828]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-stone-900 leading-none">
                {tr("HSK Path")}
              </span>
            </div>
            <span className="text-[10px] text-stone-500 font-medium tracking-wide uppercase mt-0.5 hidden sm:inline">
              {tr("HSK 1–3 preparation")}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-[13px] font-medium text-stone-700 bg-white/70 px-3 py-1.5 rounded-full border border-[#E8E2D8] shadow-2xs backdrop-blur-xs">
          <button
            onClick={() => handleNavClick('features')}
            className="px-3.5 py-1 rounded-full hover:text-[#C52828] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            {t('nav.features')}
          </button>
          <button
            onClick={() => handleNavClick('hsk-levels')}
            className="px-3.5 py-1 rounded-full hover:text-[#C52828] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            {t('nav.hskLevels')}
          </button>
          <button
            onClick={() => handleNavClick('skills')}
            className="px-3.5 py-1 rounded-full hover:text-[#C52828] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            {t('nav.practice')}
          </button>
          <button
            onClick={() => handleNavClick('mock-tests')}
            className="px-3.5 py-1 rounded-full hover:text-[#C52828] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            {t('nav.mockTests')}
          </button>
          <button
            onClick={() => handleNavClick('pricing')}
            className="px-3.5 py-1 rounded-full hover:text-[#C52828] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            {t('nav.pricing')}
          </button>
        </nav>

        {/* Right side actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <LanguageSelector />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('login')}
            className="text-stone-700 hover:text-stone-950 font-medium text-xs"
          >
            {t('nav.signIn')}
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => onNavigate('signup')}
            iconRight={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />}
            className="shadow-xs"
          >
            {t('nav.getStarted')}
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSelector variant="standard" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-stone-800 hover:bg-[#EFE8DE] cursor-pointer"
            aria-label={tr("Toggle Navigation Menu")}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b border-[#E4DCCE] px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 text-sm font-medium text-stone-800">
            <button
              onClick={() => handleNavClick('features')}
              className="text-left px-3.5 py-2 rounded-xl hover:bg-white transition-colors"
            >
              {t('nav.features')}
            </button>
            <button
              onClick={() => handleNavClick('hsk-levels')}
              className="text-left px-3.5 py-2 rounded-xl hover:bg-white transition-colors"
            >
              {t('nav.hskLevels')}
            </button>
            <button
              onClick={() => handleNavClick('skills')}
              className="text-left px-3.5 py-2 rounded-xl hover:bg-white transition-colors"
            >
              {t('nav.practice')}
            </button>
            <button
              onClick={() => handleNavClick('mock-tests')}
              className="text-left px-3.5 py-2 rounded-xl hover:bg-white transition-colors"
            >
              {t('nav.mockTests')}
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="text-left px-3.5 py-2 rounded-xl hover:bg-white transition-colors"
            >
              {t('nav.pricing')}
            </button>
          </div>

          <div className="pt-3 border-t border-[#E8E0D2] flex flex-col gap-2">
            <Button
              variant="outline"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('login');
              }}
            >
              {t('nav.signIn')}
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('signup');
              }}
            >
              {t('nav.getStarted')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

