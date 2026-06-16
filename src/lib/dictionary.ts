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

const phraseTranslations: Record<string, Partial<Record<Locale, string>>> = {
  "Our Story": {
    de: "Unsere Geschichte",
    fr: "Notre histoire",
    it: "La nostra storia",
    es: "Nuestra historia",
    ru: "Наша история",
    ja: "私たちの歩み",
    pt: "Nossa história",
    ar: "قصتنا",
  },
  "Our Culture": {
    de: "Unsere Kultur",
    fr: "Notre culture",
    it: "La nostra cultura",
    es: "Nuestra cultura",
    ru: "Наша культура",
    ja: "企業文化",
    pt: "Nossa cultura",
    ar: "ثقافتنا",
  },
  "Our History": {
    de: "Entwicklung",
    fr: "Notre parcours",
    it: "Il nostro percorso",
    es: "Nuestra trayectoria",
    ru: "Наш путь",
    ja: "発展の歩み",
    pt: "Nossa trajetória",
    ar: "مسيرتنا",
  },
  "Click to send a wholesale inquiry": {
    de: "Direkt eine Großhandelsanfrage senden",
    fr: "Envoyer directement une demande de gros",
    it: "Invia direttamente una richiesta all'ingrosso",
    es: "Enviar directamente una consulta mayorista",
    ru: "Отправить оптовый запрос напрямую",
    ja: "卸売問い合わせを直接送信",
    pt: "Enviar consulta de atacado diretamente",
    ar: "إرسال استفسار جملة مباشرة",
  },
  "Wholesale Inquiry on WhatsApp": {
    de: "Großhandelsanfrage über WhatsApp",
    fr: "Demande de gros sur WhatsApp",
    it: "Richiesta all'ingrosso su WhatsApp",
    es: "Consulta mayorista por WhatsApp",
    ru: "Оптовый запрос в WhatsApp",
    ja: "WhatsAppで卸売問い合わせ",
    pt: "Consulta de atacado pelo WhatsApp",
    ar: "استفسار جملة عبر واتساب",
  },
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[Locale]>>;

export async function getDictionary(locale: string): Promise<Dictionary> {
  const l = (locales as readonly string[]).includes(locale) ? locale : defaultLocale;
  return dictionaries[l as Locale]();
}

/** Simple zh/en selection. For non-zh languages, returns the English text. */
export function localizedText(lang: string, zh: string, en: string): string {
  if (lang === "zh") return zh;
  const locale = ((locales as readonly string[]).includes(lang) ? lang : "en") as Locale;
  return phraseTranslations[en]?.[locale] ?? en;
}
