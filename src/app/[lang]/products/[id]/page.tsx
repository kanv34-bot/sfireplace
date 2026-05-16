import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { getProductById, categories, products } from "@/lib/products";
import { notFound } from "next/navigation";
import { locales, getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";

export async function generateStaticParams() {
  const params: { lang: string; id: string }[] = [];
  for (const lang of locales) {
    for (const p of products) {
      params.push({ lang, id: p.id });
    }
  }
  return params;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);

  const product = getProductById(id);
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.category);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-[#6e6e73]">
            <Link href={`/${lang}`} className="hover:text-[#c2410c] transition-colors">
              {t.home}
            </Link>
            <span>/</span>
            <Link href={`/${lang}/products`} className="hover:text-[#c2410c] transition-colors">
              {t.products}
            </Link>
            <span>/</span>
            <span className="text-[#1d1d1f]">{localizedField(product, "name", lang, langMap)}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Image */}
          <div className="aspect-[4/3] bg-[#f5f5f7] rounded-2xl overflow-hidden relative">
            <ProductImage
              src={product.coverImage}
              alt={localizedField(product, "name", lang, langMap)}
              category={product.category}
              brand={product.brand}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {category && (
                <Link
                  href={`/${lang}/products?category=${category.id}`}
                  className="text-xs text-[#c2410c] bg-[#fff7ed] px-2.5 py-1 rounded-full font-medium hover:bg-[#ffedd5] transition-colors"
                >
                  {localizedField(category, "name", lang, langMap)}
                </Link>
              )}
              <span className="text-xs text-[#6e6e73] bg-[#f5f5f7] px-2.5 py-1 rounded-full">
                {localizedField(product, "installation", lang, langMap)}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mt-3">
              {localizedField(product, "name", lang, langMap)}
            </h1>

            <p className="mt-4 text-sm text-[#6e6e73] leading-relaxed">
              {localizedField(product, "description", lang, langMap)}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6e6e73] w-16">{t.brand}</span>
                <span className="font-medium text-[#1d1d1f]">{product.brand}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6e6e73] w-16">{t.origin}</span>
                <span className="font-medium text-[#1d1d1f]">
                  {localizedField(product, "brandCountry", lang, langMap)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6e6e73] w-16">{t.installation}</span>
                <span className="font-medium text-[#1d1d1f]">{localizedField(product, "installation", lang, langMap)}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#fff7ed] rounded-xl border border-[#fed7aa]">
              <p className="text-sm text-[#c2410c] font-medium">{t.contact_for_price}</p>
              <p className="text-xs text-[#ea580c] mt-1">+86 18028181668 | kanv34@gmail.com</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+8618028181668"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c2410c] text-white rounded-full text-sm font-medium hover:bg-[#ea580c] transition-colors shadow-lg shadow-[#c2410c]/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.inquire_now}：+86 18028181668
              </a>
              <Link
                href={`/${lang}/products`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#e5e5ea] text-[#1d1d1f] rounded-full text-sm font-medium hover:bg-[#f5f5f7] transition-colors"
              >
                ← {t.back_to_products}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
