import type { Metadata } from "next";
import Link from "next/link";
import { products, categories } from "@/lib/products";
import { formatLocalizedPrice, formatReferencePrice } from "@/lib/product-pricing";
import { getProductBasePriceCny } from "@/lib/product-price-table";

export const metadata: Metadata = {
  title: "Product Pricing Admin | Fireplace Master",
  robots: { index: false, follow: false },
};

const previewLangs = ["zh", "en", "de", "ja"] as const;

export default async function AdminProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const categoryName = new Map(categories.map((category) => [category.id, category.name]));

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-[#c2410c]">Internal Admin</p>
            <h1 className="mt-2 text-3xl font-bold text-[#1d1d1f]">产品价格总览</h1>
            <p className="mt-2 text-sm text-[#6e6e73]">
              人民币为唯一源价格，前台按语言自动换算。你只改桌面上的 sfireplace产品价格总表.csv，然后运行同步即可。
            </p>
          </div>
          <Link href={`/${lang}/admin/exchange-rates`} className="text-sm font-semibold text-[#c2410c]">
            查看汇率配置 →
          </Link>
        </div>

        <div className="mt-6 overflow-x-auto rounded-[8px] border border-[#e5e5ea] bg-white">
          <table className="w-full min-w-[1180px] border-collapse text-left text-sm">
            <thead className="bg-[#1d1d1f] text-white">
              <tr>
                {["ID", "分类", "产品", "人民币源价", "中文", "英文", "德语", "日语", "页面预览"].map((heading) => (
                  <th key={heading} className="whitespace-nowrap px-4 py-3 font-semibold">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                (() => {
                  const priceCny = getProductBasePriceCny(product.id, product.priceCny);

                  return (
                    <tr key={product.id} className="border-t border-[#e5e5ea] odd:bg-white even:bg-[#fafafa]">
                      <td className="px-4 py-3 font-mono text-xs text-[#6e6e73]">{product.id}</td>
                      <td className="px-4 py-3 text-[#6e6e73]">{categoryName.get(product.category) ?? product.category}</td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-[#1d1d1f]">{product.name}</p>
                        <p className="mt-1 text-xs text-[#6e6e73]">{product.nameEn}</p>
                      </td>
                      <td className="px-4 py-3 font-semibold text-[#1d1d1f]">
                        {priceCny ? `¥${priceCny.toLocaleString("zh-CN")}` : "面议"}
                      </td>
                      {previewLangs.map((locale) => (
                        <td key={locale} className="px-4 py-3 text-[#5f5f64]">
                          {formatLocalizedPrice(priceCny, locale)}
                        </td>
                      ))}
                      <td className="px-4 py-3">
                        <Link
                          href={`/${lang}/products/${product.id}`}
                          className="font-semibold text-[#c2410c] hover:text-[#ea580c]"
                        >
                          打开
                        </Link>
                      </td>
                    </tr>
                  );
                })()
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-[8px] border border-[#fed7aa] bg-[#fff7ed] p-5">
          <h2 className="text-base font-bold text-[#9a3412]">前台显示规则</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-[#7c2d12]">
            <li>产品列表页和详情页统一调用价格模块，不再手工拼接 ¥、US$ 或日元。</li>
            <li>价格源头是桌面文件：/Users/x/Desktop/sfireplace产品价格总表.csv。</li>
            <li>同步命令是 npm run sync:prices，同步后提交部署，会更新对应产品页面。</li>
            <li>示例：p3_15 人民币 ¥12,800，在日语页显示为 {formatReferencePrice(12800, "ja")}。</li>
            <li>最终成交价仍需按规格、数量、包装、汇率和贸易条款确认。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
