import React, { useState, useRef, useEffect } from 'react';
import { tr } from '../../locales/tr';
import { Globe, ChevronDown, Check } from '../icons';
import { useI18n, SUPPORTED_LANGUAGES } from '../../locales';
import type { Language } from '../../types';

interface LanguageSelectorProps {
  variant?: 'compact' | 'standard' | 'pill';
  className?: string;
  id?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'standard',
  className = '',
  id,
}) => {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === 'pill') {
    return (
      <div id={id} className={`inline-flex p-1 bg-[#F0EAE1] rounded-xl border border-[#DFD6C9] ${className}`}>
        {SUPPORTED_LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              language === lang.code
                ? 'bg-white text-[#C52828] shadow-xs font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {lang.nativeName}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div id={id} className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 bg-white border border-[#DDD3C6] rounded-xl hover:bg-[#FAF8F5] hover:text-[#C52828] hover:border-[#C52828]/40 transition-colors shadow-2xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C52828]/20"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-stone-500 shrink-0" />
        <span className="hidden sm:inline font-semibold text-stone-800">{currentLang.nativeName}</span>
        <span className="sm:hidden font-bold text-stone-800 uppercase text-[11px]">{currentLang.code}</span>
        <ChevronDown className={`hidden sm:block w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white shadow-xl border border-[#E4DCCE] py-1.5 z-50 animate-in fade-in-50 zoom-in-95 duration-100">
          <div className="px-3 py-1.5 text-[10px] font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100 mb-1">
            {tr("Interface Language")}
          </div>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors text-left cursor-pointer ${
                language === lang.code
                  ? 'bg-rose-50 text-[#C52828] font-bold'
                  : 'text-stone-700 hover:bg-[#F9F7F3] hover:text-stone-900'
              }`}
            >
              <div className="flex flex-col">
                <span className="font-semibold">{lang.nativeName}</span>
                <span className="text-[10px] text-stone-400">{tr(lang.name)}</span>
              </div>
              {language === lang.code && (
                <Check className="w-4 h-4 text-[#C52828]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

