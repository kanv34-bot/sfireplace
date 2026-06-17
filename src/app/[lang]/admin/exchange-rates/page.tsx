import type { Metadata } from "next";
import Link from "next/link";
import { getPricingRules } from "@/lib/product-pricing";

export const metadata: Metadata = {
  title: "Exchange Rate Admin | Fireplace Master",
  robots: { index: false, follow: false },
};

const labels: Record<string, string> = {
  zh: "中文",
  en: "英语",
  de: "德语",
  fr: "法语",
  it: "意大利语",
  es: "西班牙语",
  pt: "葡萄牙语",
  ru: "俄语",
  ja: "日语",
  ar: "阿拉伯语",
};

export default async function ExchangeRatesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const rules = getPricingRules();

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-[#c2410c]">Internal Admin</p>
            <h1 className="mt-2 text-3xl font-bold text-[#1d1d1f]">汇率配置</h1>
            <p className="mt-2 text-sm text-[#6e6e73]">
              当前采用固定参考汇率。修改位置：src/lib/product-pricing.ts 的 currencyByLang。
            </p>
          </div>
          <Link href={`/${lang}/admin/products`} className="text-sm font-semibold text-[#c2410c]">
            返回产品价格总览 →
          </Link>
        </div>

        <div className="mt-6 overflow-x-auto rounded-[8px] border border-[#e5e5ea] bg-white">
          <table className="w-full min-w-[840px] border-collapse text-left text-sm">
            <thead className="bg-[#1d1d1f] text-white">
              <tr>
                {["语言", "页面路径", "显示货币", "1 CNY 换算", "价格取整", "格式区域"].map((heading) => (
                  <th key={heading} className="whitespace-nowrap px-4 py-3 font-semibold">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(rules).map(([locale, rule]) => (
                <tr key={locale} className="border-t border-[#e5e5ea] odd:bg-white even:bg-[#fafafa]">
                  <td className="px-4 py-3 font-semibold text-[#1d1d1f]">{labels[locale] ?? locale}</td>
                  <td className="px-4 py-3 font-mono text-xs text-[#6e6e73]">/{locale}/products</td>
                  <td className="px-4 py-3 text-[#1d1d1f]">{rule.currency}</td>
                  <td className="px-4 py-3 text-[#5f5f64]">{rule.rateFromCny}</td>
                  <td className="px-4 py-3 text-[#5f5f64]">{rule.roundTo}</td>
                  <td className="px-4 py-3 text-[#5f5f64]">{rule.locale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-[8px] border border-[#e5e5ea] bg-white p-5">
          <h2 className="text-base font-bold text-[#1d1d1f]">建议</h2>
          <p className="mt-2 text-sm leading-7 text-[#6e6e73]">
            外贸批发站建议使用固定参考汇率，不使用实时汇率。实时汇率会让客户截图和历史报价不一致，实际成交价仍应在 WhatsApp 或正式报价单中确认。
          </p>
        </div>
      </section>
    </main>
  );
}
