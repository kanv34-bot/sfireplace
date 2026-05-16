import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { cases } from "@/lib/cases";
import { getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (lang === "zh") {
    return {
      title: "经典案例 | 电子壁炉、雾化壁炉定制、酒精壁炉与投影壁炉项目",
      description:
        "壁炉宗师经典案例，覆盖电子壁炉、雾化壁炉、雾化壁炉定制、酒精壁炉和投影壁炉在住宅、酒店、会所、商业空间中的应用。",
      keywords: ["电子壁炉案例", "雾化壁炉定制案例", "酒精壁炉案例", "投影壁炉案例", "壁炉厂家案例"],
    };
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
          {cases.map((c) => (
            <Link
              key={c.id}
              href={`/${lang}/cases/${c.id}`}
              className="group bg-white rounded-2xl overflow-hidden card-hover border border-[#e5e5ea]"
            >
              <div className="aspect-[16/9] bg-[#e8e8ed] relative overflow-hidden">
                <Image
                  src={c.images[0]}
                  alt={localizedField(c, "title", lang, langMap)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-[#6e6e73] bg-[#f5f5f7] px-2 py-0.5 rounded-full">
                    {localizedField(c, "location", lang, langMap)}
                  </span>
                  <span className="text-xs text-[#c2410c] bg-[#fff7ed] px-2 py-0.5 rounded-full">
                    {localizedField(c, "product", lang, langMap)}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-[#1d1d1f] line-clamp-2 group-hover:text-[#c2410c] transition-colors">
                  {localizedField(c, "title", lang, langMap)}
                </h3>
                <p className="text-xs text-[#6e6e73] mt-2 line-clamp-2">
                  {localizedField(c, "description", lang, langMap)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
