import type { Metadata } from "next";
import Link from "next/link";
import { products, categories } from "@/lib/products";
import { formatLocalizedPrice } from "@/lib/product-pricing";
import { getProductBasePriceCny, productPriceTable } from "@/lib/product-price-table";

export const metadata: Metadata = {
  title: "Product Price Matrix | Fireplace Master",
  robots: { index: false, follow: false },
};

const marketColumns = [
  { key: "zh", label: "中国", currency: "CNY" },
  { key: "en", label: "美国/英语", currency: "USD" },
  { key: "de", label: "德国", currency: "EUR" },
  { key: "fr", label: "法国", currency: "EUR" },
  { key: "es", label: "西班牙", currency: "EUR" },
  { key: "pt", label: "葡萄牙", currency: "EUR" },
  { key: "it", label: "意大利", currency: "EUR" },
  { key: "ru", label: "俄罗斯", currency: "EUR" },
  { key: "ja", label: "日本", currency: "JPY" },
  { key: "ar", label: "中东/阿语", currency: "USD" },
] as const;

export default async function PriceMatrixPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const categoryName = new Map(categories.map((category) => [category.id, category.name]));
  const pricedProductIds = new Set(productPriceTable.map((row) => row.productId));

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <section className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-[#c2410c]">Internal Admin</p>
            <h1 className="mt-2 text-3xl font-bold text-[#1d1d1f]">国家价格对比表</h1>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-[#6e6e73]">
              这个表用于检查每个产品在不同国家/语言页面显示的参考批发价。源价格只改桌面表格：/Users/x/Desktop/sfireplace产品价格总表.csv。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={`/${lang}/admin/products`} className="text-sm font-semibold text-[#c2410c]">
              产品总览 →
            </Link>
            <Link href={`/${lang}/admin/exchange-rates`} className="text-sm font-semibold text-[#c2410c]">
              汇率配置 →
            </Link>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-[8px] border border-[#e5e5ea] bg-white">
          <table className="w-full min-w-[1680px] border-collapse text-left text-sm">
            <thead className="bg-[#1d1d1f] text-white">
              <tr>
                <th className="sticky left-0 z-10 whitespace-nowrap bg-[#1d1d1f] px-4 py-3 font-semibold">产品</th>
                <th className="whitespace-nowrap px-4 py-3 font-semibold">分类</th>
                <th className="whitespace-nowrap px-4 py-3 font-semibold">人民币源价</th>
                {marketColumns.map((market) => (
                  <th key={market.key} className="whitespace-nowrap px-4 py-3 font-semibold">
                    {market.label}
                    <span className="ml-1 text-xs font-normal text-white/60">{market.currency}</span>
                  </th>
                ))}
                <th className="whitespace-nowrap px-4 py-3 font-semibold">状态</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const priceCny = getProductBasePriceCny(product.id, product.priceCny);
                const hasSourceRow = pricedProductIds.has(product.id);

                return (
                  <tr key={product.id} className="border-t border-[#e5e5ea] odd:bg-white even:bg-[#fafafa]">
                    <td className="sticky left-0 z-10 bg-inherit px-4 py-3">
                      <p className="font-semibold text-[#1d1d1f]">{product.name}</p>
                      <p className="mt-1 font-mono text-xs text-[#86868b]">{product.id}</p>
                    </td>
                    <td className="px-4 py-3 text-[#6e6e73]">{categoryName.get(product.category) ?? product.category}</td>
                    <td className="px-4 py-3 font-bold text-[#1d1d1f]">
                      {priceCny ? `¥${priceCny.toLocaleString("zh-CN")}` : "面议"}
                    </td>
                    {marketColumns.map((market) => (
                      <td key={market.key} className="whitespace-nowrap px-4 py-3 text-[#5f5f64]">
                        {formatLocalizedPrice(priceCny, market.key)}
                      </td>
                    ))}
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        hasSourceRow
                          ? "bg-[#ecfdf5] text-[#047857]"
                          : "bg-[#fff7ed] text-[#c2410c]"
                      }`}>
                        {hasSourceRow ? "已进总表" : "使用旧价"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-[8px] border border-[#fed7aa] bg-[#fff7ed] p-5">
          <h2 className="text-base font-bold text-[#9a3412]">你以后怎么改价格</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#7c2d12]">
            <li>打开桌面文件 sfireplace产品价格总表.csv。</li>
            <li>只修改“人民币源价”这一列，例如 p3_15 的 12800。</li>
            <li>我运行 npm run sync:prices 后，产品列表页、详情页、日语/德语/英语等价格会自动同步。</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
