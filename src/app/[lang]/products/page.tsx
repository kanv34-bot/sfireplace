import Link from "next/link";
import type { Metadata } from "next";
import { products, categories } from "@/lib/products";
import ProductImage from "@/components/ProductImage";
import { getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";
import { formatReferencePrice } from "@/lib/product-pricing";
import { getProductBasePriceCny } from "@/lib/product-price-table";
import { getModelLabel, getProductModel } from "@/lib/product-models";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return {
    title: `${t.products_title} | Fireplace Master`,
    description: t.products_desc,
  };
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { lang } = await params;
  const sp = await searchParams;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);

  let filtered = [...products];
  if (sp.category) {
    filtered = filtered.filter((p) => p.category === sp.category);
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f]">{t.products_title}</h1>
          <p className="mt-2 text-sm text-[#6e6e73]">{t.products_desc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <div className="lg:sticky lg:top-24">
              {/* Category filter */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-3">
                  {t.products_filter}
                </h3>
                <div className="flex flex-wrap lg:flex-col gap-1.5">
                  <Link
                    href={`/${lang}/products`}
                    className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${
                      !sp.category
                        ? "bg-[#fff7ed] text-[#c2410c] font-medium"
                        : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]"
                    }`}
                  >
                    {t.products_all}
                  </Link>
                  {categories.map((cat) => {
                    const count = products.filter((p) => p.category === cat.id).length;
                    return (
                      <Link
                        key={cat.id}
                        href={`/${lang}/products?category=${cat.id}`}
                        className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${
                          sp.category === cat.id
                            ? "bg-[#fff7ed] text-[#c2410c] font-medium"
                            : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]"
                        }`}
                      >
                        {localizedField(cat, "name", lang, langMap)}
                        <span className="text-xs text-[#a1a1aa] ml-1">({count})</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#6e6e73]">{t.products_none}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((product) => {
                  const hoverImage = product.images[1];
                  const hasProductScenePair = Boolean(hoverImage?.includes("/scene/"));
                  const localizedBrand = localizedField(product, "brand", lang, langMap);
                  const priceCny = getProductBasePriceCny(product.id, product.priceCny);
                  const model = getProductModel(product.id);

                  return (
                    <Link
                      key={product.id}
                      href={`/${lang}/products/${product.id}`}
                      className="group bg-white rounded-2xl overflow-hidden card-hover border border-[#e5e5ea]"
                    >
                      <div className="aspect-[4/3] bg-white relative overflow-hidden">
                        <ProductImage
                          src={product.coverImage}
                          alt={localizedField(product, "name", lang, langMap)}
                          category={product.category}
                          brand={localizedBrand}
                          className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                            hasProductScenePair
                              ? "object-contain p-7 sm:p-8 group-hover:opacity-0"
                              : "object-cover group-hover:scale-105"
                          }`}
                        />
                        {hoverImage && (
                          <ProductImage
                            src={hoverImage}
                            alt={`${localizedField(product, "name", lang, langMap)} scene`}
                            category={product.category}
                            brand={localizedBrand}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          />
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-[#c2410c] font-medium bg-[#fff7ed] px-2 py-0.5 rounded-full">
                            {localizedBrand}
                          </span>
                          {model && (
                            <span className="text-xs font-semibold text-[#1d1d1f] bg-[#f5f5f7] px-2 py-0.5 rounded-full">
                              {getModelLabel(lang)} {model}
                            </span>
                          )}
                          <span className="text-xs text-[#6e6e73]">{localizedField(product, "installation", lang, langMap)}</span>
                        </div>
                        <h3 className="text-sm font-medium text-[#1d1d1f] line-clamp-2 group-hover:text-[#c2410c] transition-colors">
                          {localizedField(product, "name", lang, langMap)}
                        </h3>
                        <p className="text-xs text-[#6e6e73] mt-1 line-clamp-2">
                          {localizedField(product, "description", lang, langMap)}
                        </p>
                        {priceCny && (
                          <p className="mt-3 text-sm font-semibold text-[#c2410c]">
                            {formatReferencePrice(priceCny, lang)}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
