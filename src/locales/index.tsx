import React, { createContext, useContext, useState, useEffect } from 'react';
import { setTrLanguage } from './tr';
import type { Language, MultiLingualText } from '../types';
import en from './en.json';
import fr from './fr.json';
import zh from './zh.json';

const translations: Record<Language, any> = {
  en,
  fr,
  zh,
};

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
];

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string, params?: Record<string, string | number>) => string;
  getLocalized: (textObj?: MultiLingualText | null) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = 'hskpath_language_pref';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'en' || saved === 'fr' || saved === 'zh')) {
        return saved as Language;
      }
    } catch {
      // ignore
    }
    const nav = (typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en').toLowerCase();
    if (nav.startsWith('fr')) return 'fr';
    if (nav.startsWith('zh')) return 'zh';
    return 'en';
  });

  // Hard-coded UI strings (tr()) follow the same language; set before children render.
  setTrLanguage(language);
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const t = (path: string, params?: Record<string, string | number>): string => {
    const keys = path.split('.');
    let current: any = translations[language] || translations.en;
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // fallback to English
        let fallbackCurrent: any = translations.en;
        for (const fbKey of keys) {
          if (fallbackCurrent && typeof fallbackCurrent === 'object' && fbKey in fallbackCurrent) {
            fallbackCurrent = fallbackCurrent[fbKey];
          } else {
            return path;
          }
        }
        current = fallbackCurrent;
        break;
      }
    }

    if (typeof current !== 'string') {
      return path;
    }

    if (params) {
      let result = current;
      for (const [k, v] of Object.entries(params)) {
        result = result.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
      return result;
    }

    return current;
  };

  const getLocalized = (textObj?: MultiLingualText | string | null | any): string => {
    if (!textObj) return '';
    if (typeof textObj === 'string') return textObj;
    if (typeof textObj === 'object') {
      return textObj[language] || textObj.en || textObj.zh || textObj.fr || '';
    }
    return String(textObj);
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, getLocalized }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within a LanguageProvider');
  }
  return context;
};
