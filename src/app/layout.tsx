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
  title: "壁炉宗师 | 电子壁炉、雾化壁炉定制、酒精壁炉、投影壁炉厂家",
  description: "壁炉宗师专注电子壁炉、雾化壁炉、雾化壁炉定制、酒精壁炉和投影壁炉，为住宅、酒店、会所与商业空间提供壁炉产品和工程方案。",
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
