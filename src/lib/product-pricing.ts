type Locale = "en" | "de" | "fr" | "it" | "es" | "ru" | "ja" | "zh" | "pt" | "ar";

export type DisplayCurrency = "CNY" | "USD" | "EUR" | "JPY" | "RUB" | "AED";

type CurrencyRule = {
  currency: DisplayCurrency;
  rateFromCny: number;
  roundTo: number;
  locale: string;
};

const currencyByLang: Record<Locale, CurrencyRule> = {
  zh: { currency: "CNY", rateFromCny: 1, roundTo: 10, locale: "zh-CN" },
  en: { currency: "USD", rateFromCny: 0.15, roundTo: 10, locale: "en-US" },
  de: { currency: "EUR", rateFromCny: 0.13, roundTo: 10, locale: "de-DE" },
  fr: { currency: "EUR", rateFromCny: 0.13, roundTo: 10, locale: "fr-FR" },
  it: { currency: "EUR", rateFromCny: 0.13, roundTo: 10, locale: "it-IT" },
  es: { currency: "EUR", rateFromCny: 0.13, roundTo: 10, locale: "es-ES" },
  pt: { currency: "EUR", rateFromCny: 0.13, roundTo: 10, locale: "pt-PT" },
  ru: { currency: "RUB", rateFromCny: 11.5, roundTo: 100, locale: "ru-RU" },
  ja: { currency: "JPY", rateFromCny: 24, roundTo: 100, locale: "ja-JP" },
  ar: { currency: "AED", rateFromCny: 0.54, roundTo: 10, locale: "ar-AE" },
};

const priceCopy: Record<Locale, {
  reference: string;
  from: string;
  perUnit: string;
  negotiable: string;
  note: string;
}> = {
  zh: {
    reference: "参考批发价",
    from: "起",
    perUnit: "台",
    negotiable: "面议",
    note: "最终报价按规格、数量、包装、汇率和贸易条款确认。",
  },
  en: {
    reference: "Reference wholesale price",
    from: "from",
    perUnit: "unit",
    negotiable: "Request quote",
    note: "Final quotation depends on specification, quantity, packing, exchange rate, and trade terms.",
  },
  de: {
    reference: "Richtpreis für den Großhandel",
    from: "ab",
    perUnit: "Stück",
    negotiable: "Preis auf Anfrage",
    note: "Das endgültige Angebot hängt von Spezifikation, Menge, Verpackung, Wechselkurs und Handelsbedingungen ab.",
  },
  fr: {
    reference: "Prix de gros indicatif",
    from: "à partir de",
    perUnit: "unité",
    negotiable: "Prix sur demande",
    note: "Le devis final dépend des spécifications, de la quantité, de l'emballage, du taux de change et des conditions commerciales.",
  },
  it: {
    reference: "Prezzo wholesale indicativo",
    from: "da",
    perUnit: "unità",
    negotiable: "Prezzo su richiesta",
    note: "Il preventivo finale dipende da specifiche, quantità, imballo, cambio e condizioni commerciali.",
  },
  es: {
    reference: "Precio mayorista de referencia",
    from: "desde",
    perUnit: "unidad",
    negotiable: "Precio bajo consulta",
    note: "La cotización final depende de especificación, cantidad, embalaje, tipo de cambio y términos comerciales.",
  },
  pt: {
    reference: "Preço atacadista de referência",
    from: "a partir de",
    perUnit: "unidade",
    negotiable: "Preço sob consulta",
    note: "A cotação final depende de especificação, quantidade, embalagem, câmbio e termos comerciais.",
  },
  ru: {
    reference: "Ориентировочная оптовая цена",
    from: "от",
    perUnit: "шт.",
    negotiable: "Цена по запросу",
    note: "Финальное предложение зависит от спецификации, количества, упаковки, курса валют и условий поставки.",
  },
  ja: {
    reference: "参考卸売価格",
    from: "約",
    perUnit: "台",
    negotiable: "見積依頼",
    note: "最終見積は仕様、数量、梱包、為替レート、取引条件により決定します。",
  },
  ar: {
    reference: "سعر جملة استرشادي",
    from: "من",
    perUnit: "وحدة",
    negotiable: "طلب عرض سعر",
    note: "يعتمد العرض النهائي على المواصفات والكمية والتغليف وسعر الصرف وشروط التجارة.",
  },
};

function resolveLang(lang: string): Locale {
  return (lang in currencyByLang ? lang : "en") as Locale;
}

function roundConvertedPrice(value: number, roundTo: number): number {
  return Math.ceil(value / roundTo) * roundTo;
}

export function getPricingRule(lang: string): CurrencyRule {
  return currencyByLang[resolveLang(lang)];
}

export function getPricingRules() {
  return currencyByLang;
}

export function getPriceCopy(lang: string) {
  return priceCopy[resolveLang(lang)];
}

export function convertCnyPrice(priceCny?: number, lang = "en"): number | null {
  if (!priceCny) return null;
  const rule = getPricingRule(lang);
  return roundConvertedPrice(priceCny * rule.rateFromCny, rule.roundTo);
}

export function formatLocalizedPrice(priceCny?: number, lang = "en"): string {
  const converted = convertCnyPrice(priceCny, lang);
  const copy = getPriceCopy(lang);
  if (!converted) return copy.negotiable;
  const rule = getPricingRule(lang);
  return new Intl.NumberFormat(rule.locale, {
    style: "currency",
    currency: rule.currency,
    maximumFractionDigits: 0,
  }).format(converted);
}

export function formatReferencePrice(priceCny?: number, lang = "en"): string {
  const copy = getPriceCopy(lang);
  const price = formatLocalizedPrice(priceCny, lang);
  if (!priceCny) return copy.negotiable;
  if (lang === "zh") return `${copy.reference} ${price} / ${copy.perUnit} ${copy.from}`;
  if (lang === "ja") return `${copy.reference}: ${copy.from} ${price} / ${copy.perUnit}`;
  return `${copy.reference}: ${copy.from} ${price} / ${copy.perUnit}`;
}
