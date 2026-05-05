import { en } from './en';
import { zh } from './zh';
import type { Locale, TranslationKeys } from './config';

const translations: Record<Locale, TranslationKeys> = { en, zh };

// Store current locale
let currentLocale: Locale = 'en';

export function setLocale(locale: Locale) {
  currentLocale = locale;
}

export function getLocale(): Locale {
  return currentLocale;
}

export function useTranslations(locale?: Locale): TranslationKeys {
  const lang = locale || currentLocale;
  return translations[lang] || translations.en;
}

export function t(path: string, locale?: Locale): string {
  const lang = locale || currentLocale;
  const keys = path.split('.');
  let result: any = translations[lang] || translations.en;
  
  for (const key of keys) {
    if (result === undefined) return path;
    result = result[key];
  }
  
  return result === undefined ? path : result;
}

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale] || translations.en;
}
