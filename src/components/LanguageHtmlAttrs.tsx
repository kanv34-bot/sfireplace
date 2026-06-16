"use client";

import { useLayoutEffect } from "react";
import { isRtl } from "@/lib/site-i18n";

export default function LanguageHtmlAttrs({ lang }: { lang: string }) {
  useLayoutEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl(lang) ? "rtl" : "ltr";
  }, [lang]);

  return null;
}
