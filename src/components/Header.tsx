"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales } from "@/lib/dictionary";
import { getSiteCopy } from "@/lib/site-i18n";

const navKeys = ["home", "products", "cases", "about", "contact", "news", "videos"] as const;

const dictionaries: Record<string, Record<string, string>> = {
  zh: { home: "首页", products: "产品中心", cases: "经典案例", about: "关于我们", contact: "联系我们", news: "资讯分享", videos: "视频中心" },
  en: { home: "Home", products: "Products", cases: "Cases", about: "About", contact: "Contact", news: "News", videos: "Videos" },
  de: { home: "Startseite", products: "Produkte", cases: "Projekte", about: "Über uns", contact: "Kontakt", news: "Neuigkeiten", videos: "Videos" },
  fr: { home: "Accueil", products: "Produits", cases: "Réalisations", about: "À propos", contact: "Contact", news: "Actualités", videos: "Vidéos" },
  es: { home: "Inicio", products: "Productos", cases: "Proyectos", about: "Nosotros", contact: "Contacto", news: "Noticias", videos: "Videos" },
  it: { home: "Home", products: "Prodotti", cases: "Progetti", about: "Chi siamo", contact: "Contatti", news: "Notizie", videos: "Video" },
  ru: { home: "Главная", products: "Продукты", cases: "Проекты", about: "О нас", contact: "Контакты", news: "Новости", videos: "Видео" },
  ja: { home: "ホーム", products: "製品", cases: "施工事例", about: "私たち", contact: "お問い合わせ", news: "お知らせ", videos: "動画" },
  pt: { home: "Início", products: "Produtos", cases: "Projetos", about: "Sobre", contact: "Contato", news: "Notícias", videos: "Vídeos" },
  ar: { home: "الرئيسية", products: "المنتجات", cases: "المشاريع", about: "من نحن", contact: "اتصل بنا", news: "الأخبار", videos: "الفيديوهات" },
};

const navPaths: Record<string, string> = {
  home: "",
  products: "products",
  cases: "cases",
  about: "about",
  contact: "contact",
  news: "news",
  videos: "videos",
};

export default function Header({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const nav = dictionaries[lang] || dictionaries.zh;
  const site = getSiteCopy(lang);
  const isHomePage = pathname === `/${lang}` || pathname === `/${lang}/`;

  const isActive = (path: string) => {
    if (!path) return pathname === `/${lang}` || pathname === `/${lang}/`;
    return pathname.startsWith(`/${lang}/${path}`);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        isHomePage
          ? "bg-[#090806]/96 border-white/10 backdrop-blur-xl"
          : "glass border-[#e5e5ea]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className={`flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-tight ${
              isHomePage ? "text-white" : "text-[#1d1d1f]"
            }`}
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#c2410c]">
              <span className="h-4 w-3 rounded-t-full rounded-bl-full bg-white rotate-[-24deg]" />
              <span className="absolute bottom-2 h-2 w-2 rounded-t-full rounded-bl-full bg-[#fed7aa] rotate-[-24deg]" />
            </span>
            <span className="leading-none">
              <span className="block">{lang === "zh" ? "壁炉宗师" : "Fireplace Master"}</span>
              <span className={`hidden text-[9px] uppercase tracking-[0.18em] sm:block ${isHomePage ? "text-white/55" : "text-[#6e6e73]"}`}>
                Master Fireplace
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navKeys.map((key) => (
              <Link
                key={key}
                href={`/${lang}/${navPaths[key]}`}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  isHomePage
                    ? isActive(navPaths[key])
                      ? "text-white font-semibold"
                      : "text-white/70 hover:text-white hover:bg-white/8"
                    : isActive(navPaths[key])
                      ? "bg-[#f5f5f7] text-[#c2410c] font-medium"
                      : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]"
                }`}
              >
                {nav[key]}
              </Link>
            ))}

            {isHomePage && (
              <a href="tel:+8618028181668" className="ml-3 hidden text-xs font-medium text-white/75 lg:inline-flex">
                +86 180 2818 1668
              </a>
            )}

            {/* Language selector */}
            <div ref={langRef} className="relative ml-2">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                  isHomePage
                    ? "text-white/75 hover:text-white hover:bg-white/8"
                    : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{localeNames[lang] || "中文"}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white rounded-xl shadow-lg border border-[#e5e5ea] py-1 z-50 lang-enter">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={pathname.replace(`/${lang}`, `/${l}`)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        l === lang
                          ? "text-[#c2410c] bg-[#fff7ed] font-medium"
                          : "text-[#1d1d1f] hover:bg-[#f5f5f7]"
                      }`}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      {localeNames[l]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {isHomePage && (
              <Link
                href={`/${lang}/contact`}
                className="ml-2 rounded-[4px] bg-[#f97316] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ea580c]"
              >
                {site.consultNow}
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isHomePage ? "text-white/80 hover:text-white" : "text-[#6e6e73] hover:text-[#1d1d1f]"
            }`}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden pb-4 border-t pt-2 lang-enter ${isHomePage ? "border-white/10" : "border-[#e5e5ea]"}`}>
            {navKeys.map((key) => (
              <Link
                key={key}
                href={`/${lang}/${navPaths[key]}`}
                className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                  isHomePage
                    ? isActive(navPaths[key])
                      ? "text-white bg-white/10 font-medium"
                      : "text-white/76 hover:bg-white/8"
                    : isActive(navPaths[key])
                      ? "text-[#c2410c] bg-[#fff7ed] font-medium"
                      : "text-[#1d1d1f] hover:bg-[#f5f5f7]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav[key]}
              </Link>
            ))}
            <div className={`mt-2 pt-2 border-t ${isHomePage ? "border-white/10" : "border-[#e5e5ea]"}`}>
              <p className={`px-3 pb-1 text-xs font-medium ${isHomePage ? "text-white/50" : "text-[#6e6e73]"}`}>Language / 语言</p>
              <div className="grid grid-cols-3 gap-1 px-1">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={pathname.replace(`/${lang}`, `/${l}`)}
                    className={`block px-2 py-1.5 text-xs rounded-lg text-center transition-colors ${
                      l === lang
                        ? "text-[#c2410c] bg-[#fff7ed] font-medium"
                        : "text-[#6e6e73] hover:bg-[#f5f5f7]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {localeNames[l]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
