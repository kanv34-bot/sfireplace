import Link from "next/link";
import type { Metadata } from "next";
import ProductImage from "@/components/ProductImage";
import { getDictionary, locales } from "@/lib/dictionary";
import { loadLangData } from "@/lib/lang-data";
import { localizedField } from "@/lib/localize";
import { categories, getProductRouteId, products } from "@/lib/products";
import { getProductBasePriceCny } from "@/lib/product-price-table";
import { formatReferencePrice } from "@/lib/product-pricing";
import { getModelLabel, getProductModel } from "@/lib/product-models";

const searchCopy: Record<string, { title: string; hint: string; placeholder: string; button: string; empty: string; count: string }> = {
  zh: { title: "产品搜索", hint: "输入产品名称、一个字、完整标题或型号，都可以找到对应产品。", placeholder: "例如：雾化、电子、M10", button: "搜索", empty: "没有找到对应产品，请换一个关键词。", count: "个产品" },
  en: { title: "Product Search", hint: "Search by product name, one character, full title, or model code.", placeholder: "Mist, electric, M10", button: "Search", empty: "No matching products found.", count: "products" },
  de: { title: "Produktsuche", hint: "Suchen Sie nach Produktname, Teilbegriff, vollständigem Titel oder Modell.", placeholder: "Dampf, elektrisch, M10", button: "Suchen", empty: "Keine passenden Produkte gefunden.", count: "Produkte" },
  fr: { title: "Recherche de produits", hint: "Recherchez par nom, mot partiel, titre complet ou modèle.", placeholder: "Vapeur, électrique, M10", button: "Rechercher", empty: "Aucun produit correspondant.", count: "produits" },
  es: { title: "Búsqueda de productos", hint: "Busque por nombre, palabra parcial, título completo o modelo.", placeholder: "Vapor, eléctrico, M10", button: "Buscar", empty: "No se encontraron productos.", count: "productos" },
  it: { title: "Ricerca prodotti", hint: "Cerca per nome, parola parziale, titolo completo o modello.", placeholder: "Vapore, elettrico, M10", button: "Cerca", empty: "Nessun prodotto trovato.", count: "prodotti" },
  pt: { title: "Pesquisa de produtos", hint: "Pesquise por nome, termo parcial, título completo ou modelo.", placeholder: "Vapor, elétrico, M10", button: "Pesquisar", empty: "Nenhum produto encontrado.", count: "produtos" },
  ja: { title: "製品検索", hint: "製品名、1文字、完全なタイトル、型番で検索できます。", placeholder: "ミスト、電気、M10", button: "検索", empty: "該当する製品が見つかりません。", count: "件" },
  ru: { title: "Поиск товаров", hint: "Ищите по названию, части слова, полному заголовку или модели.", placeholder: "Паровой, электрический, M10", button: "Найти", empty: "Подходящие товары не найдены.", count: "товаров" },
  ar: { title: "بحث المنتجات", hint: "ابحث باسم المنتج أو جزء من الاسم أو العنوان الكامل أو رقم الموديل.", placeholder: "بخار، كهربائي، M10", button: "بحث", empty: "لم يتم العثور على منتجات مطابقة.", count: "منتج" },
};

function normalizeSearchText(value: string) {
  return value.toLowerCase().replace(/\s+/g, "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const copy = searchCopy[lang] ?? searchCopy.en;
  return {
    title: `${copy.title} | Fireplace Master`,
    description: copy.hint,
  };
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { lang } = await params;
  const { q = "" } = await searchParams;
  const query = q.trim();
  const normalizedQuery = normalizeSearchText(query);
  const copy = searchCopy[lang] ?? searchCopy.en;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);
  const allLangMaps = await Promise.all(
    locales.map(async (locale) => [locale, await loadLangData(locale)] as const),
  );

  const results = normalizedQuery
    ? products.filter((product) => {
        const model = getProductModel(product.id) ?? "";
        const multilingualTitles = allLangMaps.map(([locale, localeMap]) =>
          localizedField(product, "name", locale, localeMap),
        );
        const searchable = [
          ...multilingualTitles,
          product.name,
          product.nameEn,
          model,
          getProductRouteId(product),
        ]
          .filter(Boolean)
          .map((value) => normalizeSearchText(String(value)))
          .join(" ");

        return searchable.includes(normalizedQuery);
      })
    : [];

  return (
    <div>
      <div className="border-b border-[#e5e5ea] bg-[#f5f5f7]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <h1 className="text-3xl font-bold text-[#1d1d1f] sm:text-4xl">{copy.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-[#6e6e73]">{copy.hint}</p>
          <form action={`/${lang}/search`} className="mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              name="q"
              type="search"
              defaultValue={query}
              placeholder={copy.placeholder}
              className="h-12 flex-1 rounded-lg border border-[#d2d2d7] bg-white px-4 text-base text-[#1d1d1f] outline-none transition-colors placeholder:text-[#86868b] focus:border-[#f97316]"
            />
            <button type="submit" className="h-12 rounded-[4px] bg-[#f97316] px-8 text-sm font-bold text-white hover:bg-[#ea580c]">
              {copy.button}
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {query && (
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm text-[#6e6e73]">
              <span className="font-semibold text-[#1d1d1f]">“{query}”</span> · {results.length} {copy.count}
            </p>
            <Link href={`/${lang}/products`} className="text-sm font-semibold text-[#f97316] hover:text-[#c2410c]">
              {t.products_title}
            </Link>
          </div>
        )}

        {!query ? (
          <div className="rounded-2xl border border-[#e5e5ea] bg-white p-8 text-sm text-[#6e6e73]">
            {copy.hint}
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-2xl border border-[#e5e5ea] bg-white p-8 text-sm text-[#6e6e73]">
            {copy.empty}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((product) => {
              const hoverImage = product.images[1];
              const localizedBrand = localizedField(product, "brand", lang, langMap);
              const model = getProductModel(product.id);
              const priceCny = getProductBasePriceCny(product.id, product.priceCny);
              const category = categories.find((item) => item.id === product.category);
              const hasProductScenePair = Boolean(hoverImage?.includes("/scene/"));
              const shouldContainPrimaryImage =
                hasProductScenePair || product.coverImage.includes("/art-fireplace-series/original/");

              return (
                <Link
                  key={product.id}
                  href={`/${lang}/products/${getProductRouteId(product)}`}
                  className="group overflow-hidden rounded-2xl border border-[#e5e5ea] bg-white card-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <ProductImage
                      src={product.coverImage}
                      alt={localizedField(product, "name", lang, langMap)}
                      category={product.category}
                      brand={localizedBrand}
                      className={`absolute inset-0 h-full w-full transition-all duration-500 ${
                        shouldContainPrimaryImage
                          ? "object-contain p-7 group-hover:opacity-0"
                          : "object-cover group-hover:scale-105"
                      }`}
                    />
                    {hoverImage && (
                      <ProductImage
                        src={hoverImage}
                        alt={`${localizedField(product, "name", lang, langMap)} scene`}
                        category={product.category}
                        brand={localizedBrand}
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {category && (
                        <span className="rounded-full bg-[#fff7ed] px-2 py-0.5 text-xs font-medium text-[#c2410c]">
                          {localizedField(category, "name", lang, langMap)}
                        </span>
                      )}
                      {model && (
                        <span className="rounded-full bg-[#f5f5f7] px-2 py-0.5 text-xs font-semibold text-[#1d1d1f]">
                          {getModelLabel(lang)} {model}
                        </span>
                      )}
                    </div>
                    <h2 className="line-clamp-2 text-sm font-semibold text-[#1d1d1f] transition-colors group-hover:text-[#c2410c]">
                      {localizedField(product, "name", lang, langMap)}
                    </h2>
                    <p className="mt-1 line-clamp-2 text-xs text-[#6e6e73]">
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
  );
}
