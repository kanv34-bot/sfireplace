import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sfireplace.com/sitemap.xml",
    host: "https://sfireplace.com",
  };
}
