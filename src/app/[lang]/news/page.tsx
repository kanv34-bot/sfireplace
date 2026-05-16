import Link from "next/link";
import Image from "next/image";
import { newsArticles } from "@/lib/news";
import { getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);

  return (
    <div>
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f]">
            {t.news_title}
          </h1>
          <p className="mt-2 text-sm text-[#6e6e73]">
            {t.news_desc}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-6">
          {newsArticles.map((article) => (
            <Link
              key={article.id}
              href={`/${lang}/news/${article.id}`}
              className="group grid grid-cols-1 overflow-hidden bg-white rounded-2xl border border-[#e5e5ea] card-hover md:grid-cols-[320px_1fr]"
            >
              <div className="relative aspect-[16/10] bg-[#f5f5f7] md:aspect-auto">
                <Image
                  src={`/media/news/${article.date}.png`}
                  alt={localizedField(article, "title", lang, langMap)}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-[#c2410c] bg-[#fff7ed] px-2.5 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#6e6e73]">{article.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-[#1d1d1f] group-hover:text-[#c2410c] transition-colors">
                  {localizedField(article, "title", lang, langMap)}
                </h2>
                <p className="mt-2 text-sm text-[#6e6e73] line-clamp-3">
                  {localizedField(article, "summary", lang, langMap)}
                </p>
                <div className="mt-4 text-sm text-[#c2410c] font-medium">
                  {t.news_read_more}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
