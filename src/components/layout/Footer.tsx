import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Globe, Sparkles } from '../icons';
import { useI18n } from '../../locales';
import { LanguageSelector } from '../ui/LanguageSelector';
import { Button } from '../ui/Button';
import { useToast } from '../ui/Toast';

interface FooterProps {
  onNavigate: (view: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useI18n();
  const { addToast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    addToast('Thank you for subscribing to the HSK Path curriculum briefing!', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-[#171412] text-stone-300 border-t border-stone-800 relative overflow-hidden">
      {/* Ambient subtle glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-[#C52828]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Newsletter & Curriculum Dispatch Banner */}
        <div className="pb-12 mb-12 border-b border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-stone-900 border border-stone-800 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C52828]" />
              Academic Dispatch
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#FAF8F5] tracking-tight">
              Receive weekly HSK mnemonic drills & grammar insights
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-lg">
              Join over 14,000 learners mastering Chinese with verified spaced repetition and exam-aligned question banks.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md lg:ml-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your academic or personal email"
                className="flex-1 bg-stone-900/90 border border-stone-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-[#C52828] transition-colors"
                required
              />
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="shrink-0 text-xs sm:text-sm"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Join Briefing
              </Button>
            </form>
          </div>
        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#C52828] border border-[#A82020] flex items-center justify-center text-white shadow-xs">
                <span className="font-hanzi-serif font-bold text-lg text-[#FAF8F5]">道</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-[#FAF8F5] tracking-tight">HSK Path</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">
                  HSK 1–3 preparation
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              {t('app.tagline')} Built with spaced repetition algorithms, authentic Tianzige writing sheets, and official Hanban syllabus alignment.
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
                  HSK 1 (150 words)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hsk-detail')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  HSK 2 (300 words)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hsk-detail')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
                  HSK 3 (600 words)
                </button>
              </li>
              <li className="text-stone-600 text-xs">
                HSK 4–6 (In Research)
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
                  {t('nav.vocabulary')} & SRS
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
              Platform
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
              <li>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> 2026 SaaS Production
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & seal */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 HSK Path International. Academic syllabus and Spaced Repetition engine.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-300 cursor-pointer">Methodology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


