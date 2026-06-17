import type { Metadata } from "next";

type PageKey = "home" | "news" | "newsDetail" | "about" | "contact" | "videos" | "cases" | "caseDetail";

const german: Record<PageKey, { title: string; description: string }> = {
  home: {
    title: "Fireplace Master | Kaminhersteller für Bioethanol-, Wasserdampf-, Elektro- und holografische Kamine",
    description:
      "Fireplace Master ist ein Kaminhersteller für OEM/ODM, Projektgeschäft, Großhandel und Exportlieferungen. Wir liefern Bioethanol-Kamine, Wasserdampf-Kamine, Elektrokamine und holografische Kamine für internationale Projekte.",
  },
  news: {
    title: "Kaminwissen und Beschaffungshinweise | Fireplace Master",
    description:
      "Fachbeiträge zu Bioethanol-Kaminen, Wasserdampf-Kaminen, Elektrokaminen, holografischen Kaminen, Projektplanung, Installation, Wartung und Großhandelseinkauf.",
  },
  newsDetail: {
    title: "Kamin-Fachbeitrag | Fireplace Master",
    description:
      "Produktwissen und Anwendungshinweise für internationale Kaminprojekte, OEM/ODM-Anpassung und Großhandelsbeschaffung direkt vom Hersteller.",
  },
  about: {
    title: "Über Fireplace Master | Kaminhersteller und OEM/ODM-Fabrik",
    description:
      "Fireplace Master ist ein Hersteller für Bioethanol-, Wasserdampf-, Elektro- und holografische Kamine mit OEM/ODM-Anpassung, Projektservice und Exportlieferung.",
  },
  contact: {
    title: "Kontakt | Kamin-Großhandel und OEM/ODM-Anfrage",
    description:
      "Kontaktieren Sie Fireplace Master für Kataloge, technische Daten, OEM/ODM-Anpassung und projektbezogene Großhandelspreise für Kaminprodukte.",
  },
  videos: {
    title: "Kamin-Videos | Produktpräsentationen und Projektanwendungen",
    description:
      "Videos zu Kaminprodukten, Projektanwendungen und technischen Details für Bioethanol-, Wasserdampf-, Elektro- und holografische Kamine.",
  },
  cases: {
    title: "Kamin-Projektbeispiele | Bioethanol-, Wasserdampf-, Elektro- und holografische Kamine",
    description:
      "Projektbeispiele für Kaminlösungen in Hotels, Villen, Wohnräumen, Clubs, Showrooms und Gewerbeflächen mit OEM/ODM-Anpassung.",
  },
  caseDetail: {
    title: "Kamin-Projektbeispiel | Fireplace Master",
    description:
      "Projektbezogene Kaminlösung mit Produktauswahl, Maßanpassung, Installationsplanung und Lieferung für internationale B2B-Kunden.",
  },
};

const chinese: Record<PageKey, { title: string; description: string }> = {
  home: {
    title: "壁炉宗师 | 电子壁炉、雾化壁炉、酒精壁炉、全息壁炉源头工厂",
    description:
      "壁炉宗师是自有品牌壁炉源头工厂，专注电子壁炉、雾化壁炉、雾化壁炉定制、酒精壁炉、全息壁炉和投影壁炉，为住宅、酒店、会所与商业空间提供OEM/ODM定制和工程方案。",
  },
  news: {
    title: "新闻中心 | 壁炉产品知识与项目采购指南",
    description: "了解电子壁炉、雾化壁炉、酒精壁炉、全息壁炉和投影壁炉的选型、安装、维护、批发采购与项目应用。",
  },
  newsDetail: {
    title: "壁炉产品知识 | 壁炉宗师",
    description: "围绕壁炉产品选型、安装、维护、批发采购和工程落地的专业文章。",
  },
  about: {
    title: "关于壁炉宗师 | 壁炉源头工厂与OEM/ODM定制",
    description: "了解壁炉宗师自有品牌工厂、产品研发、生产能力、OEM/ODM定制和项目交付服务。",
  },
  contact: {
    title: "联系我们 | 壁炉批发与OEM/ODM询价",
    description: "联系壁炉宗师获取产品目录、技术参数、批发价格和OEM/ODM定制方案。",
  },
  videos: {
    title: "视频中心 | 壁炉产品展示与项目视频",
    description: "查看壁炉产品演示、项目应用和技术视频。",
  },
  cases: {
    title: "经典案例 | 电子壁炉、雾化壁炉定制、酒精壁炉与投影壁炉项目",
    description: "壁炉宗师经典案例，覆盖电子壁炉、雾化壁炉、雾化壁炉定制、酒精壁炉和投影壁炉在住宅、酒店、会所、商业空间中的应用。",
  },
  caseDetail: {
    title: "壁炉项目案例 | 壁炉宗师",
    description: "壁炉项目案例，展示产品选型、尺寸定制、安装规划和工程交付方式。",
  },
};

const english: Record<PageKey, { title: string; description: string }> = {
  home: {
    title: "Fireplace Master | Fireplace Manufacturer for OEM/ODM and Wholesale Projects",
    description:
      "Fireplace Master manufactures ethanol fireplaces, water vapor fireplaces, electric fireplaces and holographic fireplaces for OEM/ODM, wholesale and international project delivery.",
  },
  news: {
    title: "Fireplace News and Buying Guides | Fireplace Master",
    description:
      "Product knowledge, project applications and wholesale buying guides for ethanol, water vapor, electric, projection and holographic fireplaces.",
  },
  newsDetail: {
    title: "Fireplace Product Insight | Fireplace Master",
    description: "Product selection, installation, maintenance and wholesale purchasing guidance for international fireplace projects.",
  },
  about: {
    title: "About Fireplace Master | Fireplace Manufacturer and OEM/ODM Factory",
    description: "Learn about Fireplace Master manufacturing, OEM/ODM customization, project support and export delivery.",
  },
  contact: {
    title: "Contact | Fireplace Wholesale and OEM/ODM Inquiry",
    description: "Contact Fireplace Master for catalogues, technical data, OEM/ODM customization and project wholesale pricing.",
  },
  videos: {
    title: "Fireplace Videos | Product Demonstrations and Project Applications",
    description: "Videos for fireplace products, project applications and technical details.",
  },
  cases: {
    title: "Fireplace Project Cases | Ethanol, Water Vapor, Electric and Holographic Fireplaces",
    description: "Project stories for fireplace solutions in hotels, villas, homes, clubs, showrooms and commercial spaces.",
  },
  caseDetail: {
    title: "Fireplace Project Case | Fireplace Master",
    description: "Project fireplace solution with product selection, customization, installation planning and B2B delivery.",
  },
};

export function pageMetadata(lang: string, page: PageKey): Metadata {
  const table = lang === "de" ? german : lang === "zh" ? chinese : english;
  const item = table[page];
  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      siteName: "Fireplace Master",
    },
  };
}
