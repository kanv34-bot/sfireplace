import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { cases } from "@/lib/cases";
import { notFound } from "next/navigation";
import { locales, getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";
import { getProductTypeName, getSiteCopy } from "@/lib/site-i18n";
import { pageMetadata } from "@/lib/page-seo";

export async function generateStaticParams() {
  const params: { lang: string; id: string }[] = [];
  for (const lang of locales) {
    for (const c of cases) {
      params.push({ lang, id: c.id });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const c = cases.find((c) => c.id === id);

  if (!c) {
    return {
      title: lang === "zh" ? "案例不存在" : "Case not found",
    };
  }

  if (lang === "zh") {
    return {
      title: c.seoTitle,
      description: c.seoDescription,
      keywords: c.keywords,
      openGraph: {
        title: c.seoTitle,
        description: c.seoDescription,
        images: [c.images[0]],
      },
    };
  }

  if (lang === "de") {
    const product = getProductTypeName(c.product, lang);
    const meta = pageMetadata(lang, "caseDetail");
    return {
      ...meta,
      title: `${product} · Projektbeispiel | Fireplace Master`,
      openGraph: {
        ...meta.openGraph,
        title: `${product} · Projektbeispiel | Fireplace Master`,
        images: [c.images[0]],
      },
    };
  }

  return {
    title: c.titleEn,
    description: c.descriptionEn,
    openGraph: {
      title: c.titleEn,
      description: c.descriptionEn,
      images: [c.images[0]],
    },
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);
  const site = getSiteCopy(lang);

  const c = cases.find((c) => c.id === id);
  if (!c) notFound();
  const productName = lang === "zh" || lang === "en"
    ? localizedField(c, "product", lang, langMap)
    : getProductTypeName(c.product, lang);
  const caseTitle = lang === "zh" || lang === "en"
    ? localizedField(c, "title", lang, langMap)
    : `${productName} · ${site.caseStoryTitle}`;
  const caseDescription = lang === "zh" || lang === "en"
    ? localizedField(c, "description", lang, langMap)
    : site.caseStoryParagraph;
  const caseLocation = lang === "zh" || lang === "en"
    ? localizedField(c, "location", lang, langMap)
    : "China";
  const detailParagraphs = lang === "zh"
    ? c.content
    : lang === "en"
      ? [localizedField(c, "description", lang, langMap)]
      : [site.caseStoryParagraph];

  return (
    <div>
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-[#6e6e73]">
            <Link href={`/${lang}`} className="hover:text-[#c2410c] transition-colors">
              {t.home}
            </Link>
            <span>/</span>
            <Link href={`/${lang}/cases`} className="hover:text-[#c2410c] transition-colors">
              {t.cases}
            </Link>
            <span>/</span>
            <span className="text-[#1d1d1f]">{caseTitle}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-[#6e6e73] bg-[#f5f5f7] px-2.5 py-1 rounded-full">
              {caseLocation}
            </span>
            <span className="text-xs text-[#c2410c] bg-[#fff7ed] px-2.5 py-1 rounded-full font-medium">
              {productName}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
            {caseTitle}
          </h1>
        </div>

        <div className="aspect-video bg-[#e8e8ed] rounded-2xl overflow-hidden relative mb-6">
          <Image
            src={c.images[0]}
            alt={caseTitle}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-base text-[#4b4b50] leading-8 font-medium">
            {caseDescription}
          </p>
          <div className="mt-6 space-y-5">
            {detailParagraphs.map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base text-[#4b4b50] leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {lang === "zh" && (
          <div className="mt-8 rounded-2xl border border-[#f1e4d8] bg-[#fffaf6] p-5">
            <h2 className="text-sm font-bold text-[#1d1d1f]">项目关键词</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#c2410c] ring-1 ring-[#fed7aa]">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {c.images.length > 1 && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {c.images.slice(1).map((image, index) => (
              <div key={image} className="relative aspect-video overflow-hidden rounded-2xl bg-[#e8e8ed]">
                <Image
                  src={image}
                  alt={`${caseTitle} ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center gap-3">
          <Link
            href={`/${lang}/cases`}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#e5e5ea] text-sm text-[#1d1d1f] rounded-full hover:bg-[#f5f5f7] transition-colors"
          >
            ← {t.case_back}
          </Link>
        </div>
      </div>
    </div>
  );
}
