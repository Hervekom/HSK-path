import React from 'react';
import { tr } from '../../locales/tr';
import { useI18n } from '../../locales';
import { LanguageSelector } from '../ui/LanguageSelector';

interface FooterProps {
  onNavigate: (view: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useI18n();

  return (
    <footer className="bg-[#171412] text-stone-300 border-t border-stone-800 relative overflow-hidden">
      {/* Ambient subtle glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-[#C52828]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#C52828] border border-[#A82020] flex items-center justify-center text-white shadow-xs">
                <span className="font-hanzi-serif font-bold text-lg text-[#FAF8F5]">道</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-[#FAF8F5] tracking-tight">{tr("HSK Path")}</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">
                  {tr("HSK 1–3 preparation")}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              {t('app.tagline')}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <LanguageSelector className="bg-stone-900 border-stone-800 text-stone-300" />
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF8F5]">
              {t('nav.hskLevels')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <button onClick={() => onNavigate('hsk-detail')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  {tr("HSK 1 (150 words)")}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hsk-detail')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  {tr("HSK 2 (300 words)")}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hsk-detail')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  {tr("HSK 3 (600 words)")}
                </button>
              </li>
              <li className="text-stone-600 text-xs">
                {tr("HSK 4–6 (coming later)")}
              </li>
            </ul>
          </div>

          {/* Practice Hub */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF8F5]">
              {t('nav.practice')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <button onClick={() => onNavigate('vocabulary')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  {t('nav.vocabulary')}{" "}{tr("& SRS")}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('practice-hub')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  {t('practice.listeningPractice')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('practice-hub')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  {t('practice.readingPractice')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mock-tests')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  {t('nav.mockTests')}
                </button>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF8F5]">
              {tr("Platform")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  {t('nav.dashboard')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('progress')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  {t('nav.progress')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('profile')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  {t('nav.settings')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & seal */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>{tr("© 2026 HSK Path")}</p>
        </div>
      </div>
    </footer>
  );
};


