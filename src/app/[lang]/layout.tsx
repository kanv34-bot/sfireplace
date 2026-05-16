import { locales, localeNames, defaultLocale } from "@/lib/dictionary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = (locales as readonly string[]).includes(lang) ? lang : defaultLocale;

  return (
    <>
      <Header lang={validLang} />
      <main className="flex-1">{children}</main>
      <Footer lang={validLang} />
    </>
  );
}
