import type { MetadataRoute } from "next";
import { cases } from "@/lib/cases";
import { locales } from "@/lib/dictionary";
import { newsArticles } from "@/lib/news";
import { getProductRouteId, products } from "@/lib/products";

const baseUrl = "https://sfireplace.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/products", "/cases", "/news", "/videos", "/contact"];

  return locales.flatMap((lang) => [
    ...staticPages.map((path) => ({
      url: `${baseUrl}/${lang}${path}`,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/products" ? 0.9 : 0.7,
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/${lang}/products/${getProductRouteId(product)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...newsArticles.map((article) => ({
      url: `${baseUrl}/${lang}/news/${article.id}`,
      lastModified: article.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...cases.map((projectCase) => ({
      url: `${baseUrl}/${lang}/cases/${projectCase.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]);
}
