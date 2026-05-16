const dictionaries = {
  en: () => import("../messages/en.json").then((m) => m.default),
  de: () => import("../messages/de.json").then((m) => m.default),
  fr: () => import("../messages/fr.json").then((m) => m.default),
  it: () => import("../messages/it.json").then((m) => m.default),
  es: () => import("../messages/es.json").then((m) => m.default),
  ru: () => import("../messages/ru.json").then((m) => m.default),
  ja: () => import("../messages/ja.json").then((m) => m.default),
  zh: () => import("../messages/zh.json").then((m) => m.default),
  pt: () => import("../messages/pt.json").then((m) => m.default),
  ar: () => import("../messages/ar.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;
export const locales = ["en", "de", "fr", "it", "es", "ru", "ja", "zh", "pt", "ar"] as const;
export const defaultLocale = "zh";

export const localeNames: Record<string, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  es: "Español",
  ru: "Русский",
  ja: "日本語",
  zh: "中文",
  pt: "Português",
  ar: "العربية",
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[Locale]>>;

export async function getDictionary(locale: string): Promise<Dictionary> {
  const l = (locales as readonly string[]).includes(locale) ? locale : defaultLocale;
  return dictionaries[l as Locale]();
}

/** Simple zh/en selection. For non-zh languages, returns the English text. */
export function localizedText(lang: string, zh: string, en: string): string {
  return lang === "zh" ? zh : en;
}
