import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { cases } from "@/lib/cases";
import { getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";
import { getProductTypeName, getSiteCopy } from "@/lib/site-i18n";
import { pageMetadata } from "@/lib/page-seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (lang === "zh") {
    return pageMetadata(lang, "cases");
  }

  if (lang === "de") {
    return pageMetadata(lang, "cases");
  }

  return {
    title: "Fireplace Project Cases | Electric, Water Vapor, Bioethanol and Projection Fireplaces",
    description:
      "Project stories for electric fireplaces, custom water vapor fireplaces, bioethanol fireplaces and projection fireplaces across residential and commercial spaces.",
  };
}

export default async function CasesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);
  const site = getSiteCopy(lang);

  return (
    <div>
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f]">
            {t.cases_page_title}
          </h1>
          <p className="mt-2 text-sm text-[#6e6e73]">
            {t.cases_desc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((c) => {
            const product = lang === "zh" || lang === "en"
              ? localizedField(c, "product", lang, langMap)
              : getProductTypeName(c.product, lang);
            const title = lang === "zh" || lang === "en"
              ? localizedField(c, "title", lang, langMap)
              : `${product} · ${site.caseStoryTitle}`;
            const description = lang === "zh" || lang === "en"
              ? localizedField(c, "description", lang, langMap)
              : site.caseStoryParagraph;
            const location = lang === "zh" || lang === "en"
              ? localizedField(c, "location", lang, langMap)
              : "China";
            return (
            <Link
              key={c.id}
              href={`/${lang}/cases/${c.id}`}
              className="group bg-white rounded-2xl overflow-hidden card-hover border border-[#e5e5ea]"
            >
              <div className="aspect-[16/9] bg-[#e8e8ed] relative overflow-hidden">
                <Image
                  src={c.images[0]}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-[#6e6e73] bg-[#f5f5f7] px-2 py-0.5 rounded-full">
                    {location}
                  </span>
                  <span className="text-xs text-[#c2410c] bg-[#fff7ed] px-2 py-0.5 rounded-full">
                    {product}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-[#1d1d1f] line-clamp-2 group-hover:text-[#c2410c] transition-colors">
                  {title}
                </h3>
                <p className="text-xs text-[#6e6e73] mt-2 line-clamp-2">
                  {description}
                </p>
              </div>
            </Link>
          )})}
        </div>
      </div>
    </div>
  );
}
