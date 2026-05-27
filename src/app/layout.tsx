import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sfireplace.com"),
  title: "壁炉宗师 | 电子壁炉、雾化壁炉、酒精壁炉、全息壁炉源头工厂",
  description: "壁炉宗师是自有品牌壁炉源头工厂，专注电子壁炉、雾化壁炉、雾化壁炉定制、酒精壁炉、全息壁炉和投影壁炉，为住宅、酒店、会所与商业空间提供OEM/ODM定制和工程方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
