import { loadLangData } from "./lang-data";

/**
 * Resolve a localized field on a data object with fallback chain:
 *  1. Try field + LangCode (e.g. nameJa)
 *  2. Check langData map for "{id}:{field}" (e.g. "p1_71:name")
 *  3. Check langData map for direct Chinese text match (e.g. "独立式", "西班牙")
 *  4. Fall back to field + "En" (English)
 *  5. Fall back to field (Chinese)
 *
 * For performance, pages should pre-load langMap once via `loadLangData(lang)`
 * and pass it to each call. If omitted, the function loads it internally
 * (first call per request triggers the dynamic import; subsequent calls
 * resolve from React.cache).
 */
export function localizedField<T extends Record<string, any>>(
  obj: T,
  baseField: string,
  lang: string,
  langMap?: Record<string, string> | null,
): string {
  if (lang === "zh") return obj[baseField] ?? "";

  // 1. Check for object-level language-specific field (nameJa, descDe, etc.)
  const langField = baseField + lang.charAt(0).toUpperCase() + lang.slice(1);
  if (obj[langField as keyof T]) return String(obj[langField as keyof T]);

  // 2. Check langData for "{id}:{field}" key
  if (obj["id"] && langMap) {
    const key = `${obj["id"]}:${baseField}`;
    if (langMap[key]) return langMap[key];
  }

  // 3. Check langData for direct Chinese text mapping (e.g. "西班牙"→"Spain")
  const chineseValue = obj[baseField];
  if (chineseValue && langMap?.[chineseValue]) return langMap[chineseValue];

  // 4. Fall back to English field
  const enField = baseField + "En";
  if (obj[enField as keyof T]) return String(obj[enField as keyof T]);

  // 5. Final fallback to original Chinese
  return obj[baseField] ?? "";
}

/**
 * Pre-load the langMap for a language and return a convenience wrapper
 * that binds the map to localizedField calls.
 *
 * Usage in pages:
 *   const loc = await createLocalizer(lang);
 *   // then: loc(product, "name")
 *   //       loc(cat, "name")
 */
export async function createLocalizer(lang: string) {
  const langMap = await loadLangData(lang);
  return <T extends Record<string, any>>(obj: T, field: string) =>
    localizedField(obj, field, lang, langMap);
}
