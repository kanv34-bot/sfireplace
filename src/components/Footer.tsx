import Link from "next/link";
import { categories } from "@/lib/products";
import { getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";

export default async function Footer({ lang }: { lang: string }) {
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);

  return (
    <footer className="bg-[#f5f5f7] border-t border-[#e5e5ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-2 text-lg font-semibold mb-4">
              <span className="text-[#c2410c] text-xl">🔥</span>
              <span>壁炉宗师</span>
            </Link>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              {lang === "zh"
                ? "壁炉宗师自有品牌源头工厂，专注电子壁炉、雾化壁炉、酒精壁炉、全息壁炉与OEM/ODM定制"
                : "Own-brand fireplace source factory for electric, mist, ethanol, holographic fireplaces and OEM/ODM customization"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3">{t.footer_quick_links}</h3>
            <ul className="space-y-2">
              {[
                { key: "home", label: t.home },
                { key: "products", label: t.products },
                { key: "cases", label: t.cases },
                { key: "videos", label: t.videos_title },
                { key: "about", label: t.about },
                { key: "contact", label: t.contact_us },
                { key: "news", label: t.news },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${lang}/${item.key === "home" ? "" : item.key}`}
                    className="text-sm text-[#6e6e73] hover:text-[#c2410c] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3">{t.footer_products}</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${lang}/products?category=${cat.id}`}
                    className="text-sm text-[#6e6e73] hover:text-[#c2410c] transition-colors"
                  >
                    {localizedField(cat, "name", lang, langMap)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3">{t.footer_contact}</h3>
            <ul className="space-y-2 text-sm text-[#6e6e73]">
              <li>{t.footer_phone}</li>
              <li>{t.footer_email}</li>
              <li className="text-xs">{t.footer_address}</li>
              <li className="flex gap-3 pt-1">
                <a href={`/${lang}`} className="text-sm text-[#c2410c] hover:text-[#ea580c] transition-colors">{t.footer_weibo}</a>
                <a href={`/${lang}`} className="text-sm text-[#c2410c] hover:text-[#ea580c] transition-colors">{t.footer_taobao}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#6e6e73]">{t.footer_copyright}</p>
          <p className="text-xs text-[#6e6e73]">
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c2410c]">
              京ICP备12031994号-3
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
