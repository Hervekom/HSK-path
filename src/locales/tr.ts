import type { Language } from '../types';
import { UI_STRINGS } from './uiStrings';

/**
 * Translate a hard-coded English UI string into the current interface language.
 * The current language is set by <LanguageProvider>, which re-renders the app on change.
 * Unknown strings fall back to English.
 */
let currentLanguage: Language = 'en';

export function setTrLanguage(lang: Language) {
  currentLanguage = lang;
}

export function tr(english: string): string;
export function tr(english: string | null | undefined): string | undefined;
export function tr(english: string | null | undefined): string | undefined {
  if (!english) return english ?? undefined;
  if (currentLanguage === 'en') return english;
  const entry = UI_STRINGS[english];
  const value = entry ? entry[currentLanguage as 'fr' | 'zh'] : undefined;
  return value !== undefined ? value : english;
}
