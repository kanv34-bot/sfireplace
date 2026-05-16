import Image from "next/image";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { cases } from "@/lib/cases";
import { categories, products } from "@/lib/products";
import { getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";

export default async function HeroPreviewPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);
  const heroProduct = products[1] ?? products[0];
  const signatureProducts = [products[0], products[1], products[2], products[11]].filter(Boolean);
  const proofCases = cases.slice(0, 3);

  return (
    <div className="bg-[#0f0f0d] text-white">
      <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/media/oss/产品/西班牙Lacunza%20/ALtea/4.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,13,0.95)_0%,rgba(15,15,13,0.78)_42%,rgba(15,15,13,0.36)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0f0f0d] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f97316]">
              Fireplace Master
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              让客户第一眼看见产品、案例和厂家实力
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              汇聚欧洲高端真火、燃气、雾化与定制壁炉系统，提供选型、深化、供货、安装与售后的一体化解决方案。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${lang}/products`}
                className="inline-flex items-center justify-center rounded-full bg-[#c2410c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 hover:bg-[#ea580c]"
              >
                {t.explore_products}
              </Link>
              <Link
                href={`/${lang}/cases`}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/18"
              >
                {t.view_cases}
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 divide-x divide-white/14 border-y border-white/14 py-5">
              {[
                ["50+", "产品型号"],
                ["13", "实景案例"],
                ["6", "欧洲品牌"],
              ].map(([value, label]) => (
                <div key={label} className="px-4 first:pl-0">
                  <div className="text-2xl font-semibold text-white">{value}</div>
                  <div className="mt-1 text-xs text-white/58">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[560px] lg:block">
            <Link
              href={`/${lang}/products/${heroProduct.id}`}
              className="group absolute right-0 top-8 block w-[82%] overflow-hidden rounded-[8px] border border-white/14 bg-white shadow-2xl shadow-black/45"
            >
              <div className="relative aspect-[4/5] bg-[#f2f2ef]">
                <ProductImage
                  src={heroProduct.coverImage}
                  alt={localizedField(heroProduct, "name", lang, langMap)}
                  category={heroProduct.category}
                  brand={heroProduct.brand}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-5 text-[#1d1d1f]">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c2410c]">
                  Featured Product
                </div>
                <h2 className="mt-2 text-xl font-semibold leading-snug">
                  {localizedField(heroProduct, "name", lang, langMap)}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
                  {localizedField(heroProduct, "description", lang, langMap)}
                </p>
              </div>
            </Link>

            <div className="absolute bottom-8 left-0 w-[58%] overflow-hidden rounded-[8px] border border-white/16 bg-[#171714]/92 p-4 shadow-2xl shadow-black/40">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
                Product Range
              </div>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(0, 4).map((category) => (
                  <Link
                    href={`/${lang}/products?category=${category.id}`}
                    key={category.id}
                    className="rounded-[6px] bg-white/8 px-3 py-3 hover:bg-white/14"
                  >
                    <div className="text-lg">{category.icon}</div>
                    <div className="mt-1 text-xs font-medium text-white">
                      {localizedField(category, "name", lang, langMap)}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f2] py-14 text-[#1d1d1f] sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c2410c]">
                Real Products
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                先用真实产品建立信任
              </h2>
            </div>
            <Link
              href={`/${lang}/products`}
              className="text-sm font-semibold text-[#c2410c] hover:text-[#ea580c]"
            >
              {t.view_all} →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {signatureProducts.map((product) => (
              <Link
                href={`/${lang}/products/${product.id}`}
                key={product.id}
                className="group overflow-hidden rounded-[8px] border border-black/8 bg-white shadow-sm hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] bg-[#ede9e2]">
                  <ProductImage
                    src={product.coverImage}
                    alt={localizedField(product, "name", lang, langMap)}
                    category={product.category}
                    brand={product.brand}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold text-[#c2410c]">
                    {localizedField(product, "brandCountry", lang, langMap)} · {localizedField(product, "installation", lang, langMap)}
                  </div>
                  <h3 className="mt-2 min-h-12 text-sm font-semibold leading-6 text-[#1d1d1f]">
                    {localizedField(product, "name", lang, langMap)}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 text-[#1d1d1f] sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c2410c]">
                Project Proof
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                案例放在前面，客户更容易相信
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6e6e73]">
                首页第一屏之后紧接真实项目，展示地区、产品和安装结果，比单纯介绍公司更有说服力。
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {proofCases.map((item) => (
                <Link
                  key={item.id}
                  href={`/${lang}/cases/${item.id}`}
                  className="group overflow-hidden rounded-[8px] border border-[#e5e5ea] bg-white"
                >
                  <div className="relative aspect-[3/4] bg-[#e8e8ed]">
                    <Image
                      src={item.images[0]}
                      alt={localizedField(item, "title", lang, langMap)}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-semibold text-[#c2410c]">
                      {localizedField(item, "location", lang, langMap)}
                    </div>
                    <h3 className="mt-2 text-sm font-semibold leading-6">
                      {localizedField(item, "title", lang, langMap)}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
