import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Console | Fireplace Master",
  robots: { index: false, follow: false },
};

export default async function AdminPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase text-[#c2410c]">Internal Admin</p>
        <h1 className="mt-2 text-3xl font-bold text-[#1d1d1f]">产品资料管理台</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6e6e73]">
          第一版管理台用于检查产品人民币源价格、各语言自动换算价格和汇率设置。当前版本不在线写入文件，产品数据仍以代码仓库为准。
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link
            href={`/${lang}/admin/products`}
            className="rounded-[8px] border border-[#e5e5ea] bg-white p-6 hover:border-[#c2410c]"
          >
            <h2 className="text-xl font-bold text-[#1d1d1f]">产品价格总览</h2>
            <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
              查看每个产品的人民币源价格，以及中文、英文、德语、日语等页面的自动换算价格。
            </p>
          </Link>

          <Link
            href={`/${lang}/admin/price-matrix`}
            className="rounded-[8px] border border-[#e5e5ea] bg-white p-6 hover:border-[#c2410c]"
          >
            <h2 className="text-xl font-bold text-[#1d1d1f]">国家价格对比表</h2>
            <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
              一张表查看每个产品在中文、英语、德语、法语、日语、阿语等页面显示的价格。
            </p>
          </Link>

          <Link
            href={`/${lang}/admin/exchange-rates`}
            className="rounded-[8px] border border-[#e5e5ea] bg-white p-6 hover:border-[#c2410c]"
          >
            <h2 className="text-xl font-bold text-[#1d1d1f]">汇率配置</h2>
            <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
              查看各语言使用的显示货币、固定参考汇率和取整规则。
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
