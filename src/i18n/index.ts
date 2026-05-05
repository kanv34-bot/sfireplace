import type { Locale } from './config';

import en from './translations/en.json';
import zh from './translations/zh.json';
import fr from './translations/fr.json';
import es from './translations/es.json';
import de from './translations/de.json';
import it from './translations/it.json';
import ru from './translations/ru.json';
import ar from './translations/ar.json';

const allTranslations: Record<string, any> = { en, zh, fr, es, de, it, ru, ar };

export function getTranslations(locale: string = 'en'): any {
  return allTranslations[locale] || allTranslations.en;
}

export function getContent(locale: string, path: string): string {
  const t = getTranslations(locale);
  const keys = path.split('.');
  let result = t;
  for (const key of keys) {
    result = result?.[key];
  }
  return result || path;
}

export const locales = ['en', 'zh', 'fr', 'es', 'de', 'it', 'ru', 'ar'] as const;

// Non-English locales used for [locale] dynamic routing
export const nonEnglishLocales: string[] = ['zh', 'fr', 'es', 'de', 'it', 'ru', 'ar'];

export const localeLabels: Record<string, string> = {
  en: '🇬🇧 English', zh: '🇨🇳 中文', fr: '🇫🇷 Français',
  es: '🇪🇸 Español', de: '🇩🇪 Deutsch', it: '🇮🇹 Italiano',
  ru: '🇷🇺 Русский', ar: '🇸🇦 العربية',
};

export const localeShortLabels: Record<string, string> = {
  en: 'EN', zh: '中文', fr: 'FR', es: 'ES', de: 'DE', it: 'IT', ru: 'RU', ar: 'العربية',
};

export function isRtl(locale: string): boolean {
  return locale === 'ar';
}
