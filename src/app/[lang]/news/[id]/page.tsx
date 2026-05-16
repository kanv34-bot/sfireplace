import Link from "next/link";
import Image from "next/image";
import { newsArticles } from "@/lib/news";
import { notFound } from "next/navigation";
import { locales, getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";

export async function generateStaticParams() {
  const params: { lang: string; id: string }[] = [];
  for (const lang of locales) {
    for (const a of newsArticles) {
      params.push({ lang, id: a.id });
    }
  }
  return params;
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);

  const article = newsArticles.find((a) => a.id === id);
  if (!article) notFound();

  return (
    <div>
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-[#6e6e73]">
            <Link href={`/${lang}`} className="hover:text-[#c2410c] transition-colors">
              {t.home}
            </Link>
            <span>/</span>
            <Link href={`/${lang}/news`} className="hover:text-[#c2410c] transition-colors">
              {t.news}
            </Link>
            <span>/</span>
            <span className="text-[#1d1d1f]">{localizedField(article, "title", lang, langMap)}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-[#c2410c] bg-[#fff7ed] px-2.5 py-1 rounded-full font-medium">
            {article.category}
          </span>
          <span className="text-xs text-[#6e6e73]">{article.date}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-6">
          {localizedField(article, "title", lang, langMap)}
        </h1>

        <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea]">
          <Image
            src={`/media/news/${article.date}.png`}
            alt={localizedField(article, "title", lang, langMap)}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="text-sm text-[#6e6e73] leading-relaxed space-y-4">
          {lang === "zh"
            ? article.content.split("；").map((s, i) => s.trim() && (
                <p key={i}>{s}。</p>
              ))
            : article.contentEn
                .split(/(?<=\.)\s+/)
                .map((s, i) => s.trim() && <p key={i}>{s}</p>)}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <Link
            href={`/${lang}/news`}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#e5e5ea] text-sm text-[#1d1d1f] rounded-full hover:bg-[#f5f5f7] transition-colors"
          >
            ← {t.news_back}
          </Link>
        </div>
      </div>
    </div>
  );
}
