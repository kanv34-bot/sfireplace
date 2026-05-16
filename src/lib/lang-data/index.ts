import { cache } from "react";

/**
 * Language code → module path mapping.
 * Add a new entry here when creating translations for a new language.
 */
const modules: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  ja: () => import("./ja"),
  en: () => import("./en"),
  de: () => import("./de"),
  fr: () => import("./fr"),
  es: () => import("./es"),
  it: () => import("./it"),
  ru: () => import("./ru"),
  pt: () => import("./pt"),
  ar: () => import("./ar"),
};

/**
 * Dynamically load the translation data for the given language.
 * Uses React.cache() so within a single request, multiple calls for
 * the same language only trigger one actual import.
 */
export const loadLangData = cache(async (lang: string): Promise<Record<string, string> | null> => {
  if (lang === "zh") return null;
  const loader = modules[lang];
  if (!loader) return null;
  try {
    return (await loader()).default;
  } catch {
    return null;
  }
});
