import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import ProductGallery from "@/components/ProductGallery";
import CoreWholesaleDetails from "@/components/CoreWholesaleDetails";
import { getProductById, categories, products } from "@/lib/products";
import { notFound } from "next/navigation";
import { locales, getDictionary, localizedText } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";
import {
  convertCnyPrice,
  formatReferencePrice,
  getPriceCopy,
  getPricingRule,
} from "@/lib/product-pricing";
import {
  getEthanolWholesaleCopy,
  getEthanolWholesaleKeywords,
} from "@/lib/ethanol-wholesale-i18n";
import {
  coreCategoryIds,
  getCoreWholesaleDisplayConfig,
  getCoreProductName,
  getCoreProductDetail,
  getCoreWholesaleConfig,
  getCoreWholesaleCopy,
  getCoreWholesaleValueCopy,
} from "@/lib/core-wholesale";

const ethanolImages = {
  villa: "/media/products/ethanol-fireplace/ethanol-fireplace-villa-scene.png",
  burner: "/media/products/ethanol-fireplace/ethanol-fireplace-burner-detail.png",
  hotel: "/media/products/ethanol-fireplace/ethanol-fireplace-hotel-lounge.png",
};

const mistImages = {
  villa: "/media/products/mist-fireplace/mist-fireplace-villa-scene.png",
  module: "/media/products/mist-fireplace/mist-fireplace-module-detail.png",
  hotel: "/media/products/mist-fireplace/mist-fireplace-hotel-lounge.png",
};

const whatsappWholesaleUrl =
  "https://wa.me/8618028181668?text=Hello%2C%20I%20am%20interested%20in%20the%20linear%20bio%20ethanol%20burner.%20Please%20send%20me%20your%20wholesale%20quotation%2C%20MOQ%2C%20and%20catalog.";

const ethanolWholesaleModels = [
  {
    model: "FM-EB600",
    size: "600 × 180 × 100 mm",
    capacity: "3.5 L",
    burnTime: "4–6 h",
    netWeight: "≈6.3 kg",
    packing: "660 × 240 × 170 mm",
    grossWeight: "≈7.8 kg",
    load20: "≈800 pcs",
    load40: "≈1,900 pcs",
    price10: "US$285",
    price30: "US$258",
    price100: "US$228",
  },
  {
    model: "FM-EB800",
    size: "800 × 180 × 100 mm",
    capacity: "5.0 L",
    burnTime: "4–6 h",
    netWeight: "≈8.3 kg",
    packing: "860 × 240 × 170 mm",
    grossWeight: "≈9.8 kg",
    load20: "≈620 pcs",
    load40: "≈1,500 pcs",
    price10: "US$355",
    price30: "US$325",
    price100: "US$292",
  },
  {
    model: "FM-EB1000",
    size: "1000 × 180 × 100 mm",
    capacity: "6.5 L",
    burnTime: "4–6 h",
    netWeight: "≈10.3 kg",
    packing: "1060 × 240 × 170 mm",
    grossWeight: "≈11.8 kg",
    load20: "≈500 pcs",
    load40: "≈1,200 pcs",
    price10: "US$425",
    price30: "US$388",
    price100: "US$348",
  },
];

const ethanolFaqZh = [
  {
    q: "酒精壁炉需要烟道吗？",
    a: "酒精壁炉通常不需要传统烟道或燃气管线，但它是真火产品，项目设计时仍要确认通风、材料耐受性、操作空间和安全距离。",
  },
  {
    q: "酒精壁炉适合哪些项目？",
    a: "酒精壁炉适合别墅客厅、酒店大堂、会所、餐厅、商业展厅、样板间和局部景观火装置，尤其适合需要真实火焰氛围但不方便做烟道的空间。",
  },
  {
    q: "壁炉宗师能做酒精壁炉 OEM/ODM 吗？",
    a: "可以。壁炉宗师作为自有品牌源头工厂，可根据项目图纸、尺寸、火槽长度、安装结构、外观材质和批量需求进行 OEM/ODM 定制。",
  },
  {
    q: "酒精壁炉和雾化壁炉、电子壁炉有什么区别？",
    a: "酒精壁炉是真火氛围，视觉更接近真实燃烧；雾化壁炉无明火，更适合长时间展示和商业运营；电子壁炉安装维护更简单，适合背景墙和酒店客房。",
  },
];

const mistFaqZh = [
  {
    q: "雾化壁炉是真火吗？",
    a: "雾化壁炉不是真火，它通过水雾、灯光和结构风道形成火焰视觉效果。它没有明火，更适合酒店、会所、展厅和住宅中需要长时间展示的氛围空间。",
  },
  {
    q: "雾化壁炉适合做定制吗？",
    a: "适合。雾化壁炉常用于长条背景墙、中岛、隔断、屏风、悬挂造型和商业装置，可定制长度、分段控制、出雾方式、灯光效果、补水排水和检修结构。",
  },
  {
    q: "雾化壁炉需要预留什么条件？",
    a: "设计阶段应确认电源、给水、排水、雾气出口、检修口、周边防潮、风口干扰和日常维护方式。商业项目还要考虑长时间运行后的补水和清洁周期。",
  },
  {
    q: "雾化壁炉和酒精壁炉有什么区别？",
    a: "雾化壁炉无明火，适合长时间展示和商业运营；酒精壁炉是真火，适合需要真实燃烧仪式感的可控场景。两者都可以定制，但安全和维护重点不同。",
  },
];

const mistFaqEn = [
  {
    q: "Is a mist fireplace a real fire?",
    a: "No. A mist fireplace uses water vapor, lighting, and airflow structure to create a flame-like visual effect. It has no open flame and is suitable for long display hours in hotels, clubs, showrooms, and homes.",
  },
  {
    q: "Can a mist fireplace be customized?",
    a: "Yes. Mist fireplaces are often customized for linear feature walls, islands, room dividers, screens, suspended forms, and commercial installations, including length, zone control, mist outlet, lighting, water supply, drainage, and service access.",
  },
  {
    q: "What should be reserved before installing a mist fireplace?",
    a: "Power, water supply, drainage, mist outlet, service access, moisture protection, airflow interference, and maintenance method should be confirmed during design. Commercial projects should also plan water refilling and cleaning cycles.",
  },
  {
    q: "What is the difference between a mist fireplace and an ethanol fireplace?",
    a: "A mist fireplace has no open flame and is suitable for long commercial display hours. An ethanol fireplace provides a real flame and is better for controlled spaces that need real-flame atmosphere. Both can be customized, but their safety and maintenance requirements differ.",
  },
];

const ethanolFaqEn = [
  {
    q: "Does an ethanol fireplace need a chimney?",
    a: "A bio ethanol fireplace usually does not require a traditional chimney or gas line, but it is a real-flame product. Ventilation, heat-resistant materials, operation space, and safety distance should be confirmed during project design.",
  },
  {
    q: "Where is an ethanol fireplace suitable?",
    a: "Ethanol fireplaces are suitable for villa living rooms, hotel lobbies, clubs, restaurants, commercial showrooms, model rooms, and decorative flame features where a real flame is desired without a complex chimney system.",
  },
  {
    q: "Can Fireplace Master provide ethanol fireplace OEM/ODM?",
    a: "Yes. Fireplace Master is an own-brand source factory and can customize ethanol fireplaces by project drawings, size, burner length, installation structure, finish, and batch production needs.",
  },
  {
    q: "How is an ethanol fireplace different from mist and electric fireplaces?",
    a: "An ethanol fireplace provides a real flame. A mist fireplace uses water mist with no open flame and is better for long display hours. An electric fireplace is easier to install and maintain for feature walls and hotel rooms.",
  },
];

function getEnhancedContent(categoryId: string, lang: string, productName: string) {
  const common = {
    p3: {
      eyebrow: localizedText(lang, "Bio Ethanol Fireplace Product Detail", "Bio Ethanol Fireplace Product Detail"),
      title: localizedText(lang, `${productName} 详细方案`, `${productName} Detail Solution`),
      intro: localizedText(
        lang,
        `${productName} 属于壁炉宗师酒精壁炉产品线，适合需要真实火焰、灵活安装和空间高级感的住宅及商业项目。页面展示的是标准方向，实际可根据尺寸、火槽长度、材质、控制方式和批量需求做 OEM/ODM 定制。`,
        `${productName} belongs to Fireplace Master's bio ethanol fireplace line for residential and commercial projects that need real flame, flexible installation, and premium atmosphere. The shown product is a standard direction and can be customized by size, burner length, material, control method, and OEM/ODM quantity.`,
      ),
      features: [
        localizedText(lang, "真实生物乙醇火焰，不依赖传统烟道。", "Real bio ethanol flame without a traditional chimney."),
        localizedText(lang, "支持嵌入、岛台、桌面、隔断、户外火景等结构。", "Supports built-in, island, tabletop, divider, and outdoor structures."),
        localizedText(lang, "适合别墅、酒店、会所、餐厅和商业展示。", "Suitable for villas, hotels, clubs, restaurants, and commercial displays."),
        localizedText(lang, "可按工程图纸和品牌需求批量定制。", "Batch customization by project drawings and brand requirements."),
      ],
      checks: [
        localizedText(lang, "确认通风、可燃物距离、台面耐热和操作空间。", "Confirm ventilation, combustible distance, heat-resistant surface, and operation space."),
        localizedText(lang, "确认燃料管理、点火流程、玻璃挡火和检修方式。", "Confirm fuel management, ignition process, glass guard, and maintenance access."),
        localizedText(lang, "商业项目需明确使用人员和日常管理规则。", "Commercial projects need clear operator and daily management rules."),
      ],
      faq: [
        [localizedText(lang, "价格为什么是参考价？", "Why is the price indicative?"), localizedText(lang, "酒精壁炉价格受火槽长度、材质、玻璃、控制方式、包装和采购数量影响，最终按图纸和数量报价。", "Ethanol fireplace pricing depends on burner length, material, glass, control method, packaging, and quantity. Final quotation is based on drawings and order volume.")],
        [localizedText(lang, "是否能做自有品牌？", "Can it be made for private label?"), localizedText(lang, "可以。支持外观、铭牌、说明书、包装和批量参数的 OEM/ODM 定制。", "Yes. Appearance, nameplate, manual, packaging, and batch parameters can be customized for OEM/ODM.")],
      ],
    },
    p4: {
      eyebrow: localizedText(lang, "3D Mist Fireplace Product Detail", "3D Mist Fireplace Product Detail"),
      title: localizedText(lang, `${productName} 详细方案`, `${productName} Detail Solution`),
      intro: localizedText(
        lang,
        `${productName} 属于3D水雾壁炉产品，利用水雾、灯光和风道结构形成火焰视觉效果。它没有明火，更适合酒店大堂、会所、展厅、样板间和住宅空间做长时间展示。`,
        `${productName} is a 3D water vapor fireplace product that creates flame-like visuals through mist, lighting, and airflow. With no open flame, it suits hotel lobbies, clubs, showrooms, model rooms, and residential interiors for long display hours.`,
      ),
      features: [
        localizedText(lang, "无明火，适合长时间展示和商业运营。", "No open flame, suitable for long display hours and commercial operation."),
        localizedText(lang, "支持长度、出雾段数、灯光颜色和控制方式定制。", "Custom length, mist sections, lighting color, and control method."),
        localizedText(lang, "可做背景墙、中岛、隔断、悬挂和异形装置。", "Can be used for feature walls, islands, dividers, suspended forms, and custom installations."),
        localizedText(lang, "适合水电深化和批量工程供货。", "Suitable for MEP detailing and batch project supply."),
      ],
      checks: [
        localizedText(lang, "确认电源、给水、排水、水箱和检修口。", "Confirm power, water supply, drainage, tank, and access panel."),
        localizedText(lang, "确认雾气出口、风口干扰、周边防潮和清洁周期。", "Confirm mist outlet, airflow interference, moisture protection, and cleaning cycle."),
        localizedText(lang, "商业项目需规划补水和长期维护方式。", "Commercial projects need water refilling and long-term maintenance planning."),
      ],
      faq: [
        [localizedText(lang, "雾化壁炉是真火吗？", "Is a mist fireplace real fire?"), localizedText(lang, "不是。它通过水雾和灯光模拟火焰视觉效果，没有明火。", "No. It uses water vapor and lighting to simulate flame visuals with no open flame.")],
        [localizedText(lang, "能否做非标长度？", "Can it be made in custom length?"), localizedText(lang, "可以。长度、分段、结构、水路和控制系统都可按项目深化。", "Yes. Length, sections, structure, water lines, and control system can be customized by project.")],
      ],
    },
    p7: {
      eyebrow: localizedText(lang, "Electric Fireplace Product Detail", "Electric Fireplace Product Detail"),
      title: localizedText(lang, `${productName} 详细方案`, `${productName} Detail Solution`),
      intro: localizedText(
        lang,
        `${productName} 属于电子壁炉产品线，适合电视背景墙、酒店客房、公寓、样板间和商业展示空间。它安装门槛低、维护简单，可围绕尺寸、火焰屏、炭床、加热功能和控制方式进行定制。`,
        `${productName} belongs to the electric fireplace line for media walls, hotel rooms, apartments, show flats, and commercial displays. It is easy to install and maintain, with customization for size, flame screen, ember bed, heating function, and controls.`,
      ),
      features: [
        localizedText(lang, "无需烟道和燃料，适合已装修空间。", "No chimney or fuel required, suitable for finished interiors."),
        localizedText(lang, "支持电视墙、柜体、壁龛和独立式应用。", "Supports media walls, cabinetry, niches, and freestanding use."),
        localizedText(lang, "可定制火焰颜色、炭床、尺寸和控制方式。", "Custom flame color, ember bed, size, and control method."),
        localizedText(lang, "适合酒店、公寓和批量工程交付。", "Suitable for hotels, apartments, and batch project delivery."),
      ],
      checks: [
        localizedText(lang, "确认开孔尺寸、嵌入深度、电源位置和散热空间。", "Confirm opening size, built-in depth, power location, and ventilation space."),
        localizedText(lang, "确认检修方式、遥控/智能控制和加热需求。", "Confirm service access, remote/smart control, and heating requirements."),
        localizedText(lang, "与电视墙结合时需提前规划线路和设备间距。", "Plan wiring and appliance distance when integrated with a media wall."),
      ],
      faq: [
        [localizedText(lang, "电子壁炉可以不加热只看火焰吗？", "Can the flame run without heat?"), localizedText(lang, "可以，具体功能按机芯和控制方案配置。", "Yes, depending on the core module and control configuration.")],
        [localizedText(lang, "适合酒店批量采购吗？", "Is it suitable for hotel bulk purchase?"), localizedText(lang, "适合。尺寸、包装、控制方式和交付标准都可按项目统一。", "Yes. Size, packaging, control method, and delivery standard can be unified for projects.")],
      ],
    },
    p9: {
      eyebrow: localizedText(lang, "Holographic / Projection Fireplace Product Detail", "Holographic / Projection Fireplace Product Detail"),
      title: localizedText(lang, `${productName} 详细方案`, `${productName} Detail Solution`),
      intro: localizedText(
        lang,
        `${productName} 属于全息壁炉和投影壁炉产品线，重点是大画面火焰视觉和沉浸式氛围。它适合展厅、商业橱窗、酒店大堂、影音室、舞台和品牌展示空间。`,
        `${productName} belongs to the holographic and projection fireplace line, focused on large-scale flame visuals and immersive atmosphere for showrooms, retail windows, hotel lobbies, cinema rooms, stages, and brand spaces.`,
      ),
      features: [
        localizedText(lang, "无真实明火，适合视觉展示和内容变化。", "No real open flame, suitable for visual display and content changes."),
        localizedText(lang, "支持画面比例、播放内容、控制系统和安装结构定制。", "Custom image ratio, media content, control system, and installation structure."),
        localizedText(lang, "可做橱窗、展厅、沉浸式空间和商业主景。", "Can be used for windows, showrooms, immersive spaces, and commercial focal features."),
        localizedText(lang, "适合与灯光、音响和空间装置联动。", "Suitable for integration with lighting, audio, and spatial installations."),
      ],
      checks: [
        localizedText(lang, "确认环境亮度、投影距离、屏幕材料和检修通道。", "Confirm ambient light, projection distance, screen material, and service access."),
        localizedText(lang, "确认播放内容、控制方式、散热和设备隐藏方案。", "Confirm media content, control method, heat dissipation, and equipment concealment."),
        localizedText(lang, "商业项目需提前规划安全、维护和日常开关流程。", "Commercial projects need safety, maintenance, and daily operation planning."),
      ],
      faq: [
        [localizedText(lang, "全息壁炉和投影壁炉有热量吗？", "Do holographic and projection fireplaces produce heat?"), localizedText(lang, "通常以视觉氛围为主，不作为取暖设备，具体可按项目搭配其他系统。", "They are usually visual atmosphere products, not heating equipment, though other systems can be combined by project.")],
        [localizedText(lang, "火焰内容可以定制吗？", "Can the flame content be customized?"), localizedText(lang, "可以。可按空间比例、品牌活动和播放设备制作不同火焰内容。", "Yes. Flame content can be created for space ratio, brand events, and playback equipment.")],
      ],
    },
  } as const;

  return common[categoryId as keyof typeof common] ?? common.p7;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const product = getProductById(id);
  if (!product) return {};

  if (id === "p3_14") {
    const copy = getEthanolWholesaleCopy(lang);
    const languageAlternates = Object.fromEntries(
      locales.map((locale) => [
        locale,
        `https://sfireplace.com/${locale}/products/p3_14`,
      ]),
    );
    return {
      title: copy.metaTitle,
      description: copy.metaDescription,
      keywords: getEthanolWholesaleKeywords(lang),
      openGraph: {
        title: copy.metaTitle,
        description: copy.metaDescription,
        images: [ethanolImages.villa],
      },
      alternates: {
        canonical: `https://sfireplace.com/${lang}/products/p3_14`,
        languages: {
          ...languageAlternates,
          "x-default": "https://sfireplace.com/en/products/p3_14",
        },
      },
    };
  }

  if (coreCategoryIds.has(product.category)) {
    const langMap = await loadLangData(lang);
    const t = getCoreWholesaleCopy(lang);
    const localizedName = getCoreProductName(
      product.id,
      lang,
      localizedField(product, "name", lang, langMap),
    );
    return {
      title: `${localizedName} | OEM/ODM ${t.wholesaleOnly}`,
      description: `${localizedName}. ${t.oemText} ${t.indicative}`,
      openGraph: {
        title: `${localizedName} | Fireplace Master`,
        description: t.oemText,
        images: [product.coverImage],
      },
      alternates: {
        canonical: `https://sfireplace.com/${lang}/products/${product.id}`,
        languages: Object.fromEntries([
          ...locales.map((locale) => [
            locale,
            `https://sfireplace.com/${locale}/products/${product.id}`,
          ]),
          ["x-default", `https://sfireplace.com/en/products/${product.id}`],
        ]),
      },
    };
  }

  return {
    title: `${product.name} | 壁炉宗师`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const params: { lang: string; id: string }[] = [];
  for (const lang of locales) {
    for (const p of products) {
      params.push({ lang, id: p.id });
    }
  }
  return params;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);

  const product = getProductById(id);
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.category);
  const productHoverImage = product.images[1];
  const hasProductScenePair = Boolean(productHoverImage?.includes("/scene/"));
  const isEthanol = product.id === "p3_14";
  const isMist = false;
  const isCoreWholesale = coreCategoryIds.has(product.category);
  const coreCopy = getCoreWholesaleCopy(lang);
  const coreConfig = getCoreWholesaleConfig(product.id);
  const coreDisplayConfig = getCoreWholesaleDisplayConfig(product.id, lang);
  const coreValues = getCoreWholesaleValueCopy(lang);
  const coreProductDetail = getCoreProductDetail(product.id, lang);
  const priceCopy = getPriceCopy(lang);
  const pricingRule = getPricingRule(lang);
  const localizedOfferPrice = convertCnyPrice(product.priceCny, lang);
  const ethanolCopy = getEthanolWholesaleCopy(lang);
  const localizedBrand = localizedField(product, "brand", lang, langMap);
  const localizedProductName = localizedField(product, "name", lang, langMap);
  const productName = isEthanol
    ? ethanolCopy.name
    : isCoreWholesale
      ? getCoreProductName(product.id, lang, localizedProductName)
      : localizedProductName;
  const productDescription = isEthanol
    ? ethanolCopy.description
    : isCoreWholesale
      ? coreProductDetail?.description ?? `${productName}. ${coreCopy.oemText}`
      : localizedField(product, "description", lang, langMap);
  const enhancedContent = getEnhancedContent(product.category, lang, localizedField(product, "name", lang, langMap));
  const ethanolFaq = ethanolCopy.faq;
  const mistFaq = lang === "zh" ? mistFaqZh : mistFaqEn;
  const ethanolGallery = [
    {
      src: product.coverImage,
      alt: `${ethanolCopy.name} - ${ethanolCopy.gallery[0]}`,
      label: ethanolCopy.gallery[0],
      fit: "contain" as const,
    },
    {
      src: productHoverImage,
      alt: `${ethanolCopy.name} - ${ethanolCopy.gallery[1]}`,
      label: ethanolCopy.gallery[1],
      fit: "cover" as const,
    },
    {
      src: ethanolImages.burner,
      alt: `${ethanolCopy.name} - ${ethanolCopy.gallery[2]}`,
      label: ethanolCopy.gallery[2],
      fit: "cover" as const,
    },
    {
      src: ethanolImages.hotel,
      alt: `${ethanolCopy.name} - ${ethanolCopy.gallery[3]}`,
      label: ethanolCopy.gallery[3],
      fit: "cover" as const,
    },
  ];
  const ethanolQuantityUnit = lang === "de" ? "Stück" : "pcs";
  const formatEthanolLoad = (value: string) =>
    lang === "de" ? value.replace("pcs", "Stück") : value;
  const ethanolProductSchema = isEthanol
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: ethanolCopy.name,
        brand: { "@type": "Brand", name: localizedBrand },
        manufacturer: { "@type": "Organization", name: localizedBrand },
        category: localizedText(lang, "酒精壁炉 / 生物乙醇壁炉", "Ethanol Fireplace / Bio Ethanol Fireplace"),
        description: ethanolCopy.description,
        image: Object.values(ethanolImages).map((src) => `https://sfireplace.com${src}`),
        additionalProperty: [
          { "@type": "PropertyValue", name: "Product type", value: "Bio ethanol fireplace" },
          { "@type": "PropertyValue", name: "Customization", value: "Burner length, size, finish, structure, OEM/ODM" },
          { "@type": "PropertyValue", name: "Applications", value: "Villa, hotel, club, restaurant, commercial showroom" },
          { "@type": "PropertyValue", name: "Installation", value: "Built-in, tabletop, island, wall feature, custom structure" },
          { "@type": "PropertyValue", name: "MOQ", value: "10 units" },
          { "@type": "PropertyValue", name: "Lead time", value: "15–25 days after sample approval and deposit" },
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "228",
          highPrice: "425",
          offerCount: "9",
          availability: "https://schema.org/InStock",
        },
      }
    : null;
  const mistProductSchema = isMist
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: localizedText(lang, "悬挂-分体款雾化壁炉（可定制）", "Custom Wall-Mounted Split Mist Fireplace"),
        brand: { "@type": "Brand", name: localizedBrand },
        manufacturer: { "@type": "Organization", name: localizedBrand },
        category: localizedText(lang, "雾化壁炉 / 3D水雾壁炉", "Mist Fireplace / 3D Water Vapor Fireplace"),
        description: localizedText(
          lang,
          "壁炉宗师雾化壁炉源头工厂产品，支持长度、结构、出雾方式、灯光效果、水电检修、酒店会所别墅项目和 OEM/ODM 批量定制。",
          "Fireplace Master custom mist fireplace source-factory product with length, structure, mist outlet, lighting effect, water and power access, project, and OEM/ODM customization.",
        ),
        image: Object.values(mistImages).map((src) => `https://sfireplace.com${src}`),
        additionalProperty: [
          { "@type": "PropertyValue", name: "Product type", value: "3D water vapor mist fireplace" },
          { "@type": "PropertyValue", name: "Customization", value: "Length, structure, mist outlet, lighting, water access, OEM/ODM" },
          { "@type": "PropertyValue", name: "Applications", value: "Villa, hotel, club, showroom, commercial lobby" },
          { "@type": "PropertyValue", name: "Installation", value: "Wall-mounted, built-in, island, divider, suspended, custom structure" },
        ],
      }
    : null;
  const ethanolFaqSchema = isEthanol
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: ethanolFaq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;
  const mistFaqSchema = isMist
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: mistFaq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;
  const coreProductSchema = isCoreWholesale && !isEthanol
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: productName,
        description: productDescription,
        image: product.images.map((src) => `https://sfireplace.com${src}`),
        brand: { "@type": "Brand", name: "Fireplace Master" },
        manufacturer: { "@type": "Organization", name: "Fireplace Master" },
        sku: product.id,
        additionalProperty: [
          { "@type": "PropertyValue", name: coreCopy.moq, value: `${coreConfig.moq} units` },
          { "@type": "PropertyValue", name: coreCopy.size, value: coreDisplayConfig.size },
          { "@type": "PropertyValue", name: coreCopy.keySpec, value: coreDisplayConfig.keySpec },
          { "@type": "PropertyValue", name: coreCopy.leadTime, value: coreDisplayConfig.leadTime },
          { "@type": "PropertyValue", name: coreCopy.packing, value: coreDisplayConfig.packing },
        ],
        ...(localizedOfferPrice
          ? {
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: pricingRule.currency,
                lowPrice: String(localizedOfferPrice),
                offerCount: "1",
                availability: "https://schema.org/InStock",
              },
            }
          : {}),
      }
    : null;
  const coreFaqSchema = isCoreWholesale && !isEthanol
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: coreCopy.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }
    : null;

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      {ethanolProductSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ethanolProductSchema) }}
        />
      )}
      {ethanolFaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ethanolFaqSchema) }}
        />
      )}
      {mistProductSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mistProductSchema) }}
        />
      )}
      {mistFaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mistFaqSchema) }}
        />
      )}
      {coreProductSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(coreProductSchema) }}
        />
      )}
      {coreFaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(coreFaqSchema) }}
        />
      )}
      {/* Breadcrumb */}
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-[#6e6e73]">
            <Link href={`/${lang}`} className="hover:text-[#c2410c] transition-colors">
              {t.home}
            </Link>
            <span>/</span>
            <Link href={`/${lang}/products`} className="hover:text-[#c2410c] transition-colors">
              {t.products}
            </Link>
            <span>/</span>
            <span className="text-[#1d1d1f]">{productName}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Image */}
          {isEthanol ? (
            <ProductGallery
              images={ethanolGallery}
              category={product.category}
              brand={localizedBrand}
            />
          ) : <div className="group aspect-[4/3] bg-white rounded-[8px] overflow-hidden relative border border-[#f0f0f0]">
            <ProductImage
              src={product.coverImage}
              alt={localizedField(product, "name", lang, langMap)}
              category={product.category}
              brand={localizedBrand}
              className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                hasProductScenePair
                  ? "object-contain p-8 sm:p-10 group-hover:opacity-0"
                  : "object-cover"
              }`}
            />
            {productHoverImage && (
              <ProductImage
                src={productHoverImage}
                alt={`${localizedField(product, "name", lang, langMap)} scene`}
                category={product.category}
                brand={localizedBrand}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            )}
          </div>}

          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {category && (
                <Link
                  href={`/${lang}/products?category=${category.id}`}
                  className="text-xs text-[#c2410c] bg-[#fff7ed] px-2.5 py-1 rounded-full font-medium hover:bg-[#ffedd5] transition-colors"
                >
                  {localizedField(category, "name", lang, langMap)}
                </Link>
              )}
              <span className="text-xs text-[#6e6e73] bg-[#f5f5f7] px-2.5 py-1 rounded-full">
                {isEthanol
                  ? ethanolCopy.manualBurner
                  : isCoreWholesale
                    ? coreCopy.specs
                  : localizedField(product, "installation", lang, langMap)}
              </span>
            </div>

            {isCoreWholesale && (
              <p className="mt-4 text-xs font-semibold uppercase text-[#c2410c]">
                {isEthanol ? ethanolCopy.wholesaleOnly : coreCopy.wholesaleOnly}
              </p>
            )}

            <h1 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mt-3">
              {productName}
            </h1>

            <p className="mt-4 text-sm text-[#6e6e73] leading-relaxed">
              {productDescription}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-[#e5e5ea] bg-[#e5e5ea]">
              {(isCoreWholesale
                ? [
                    [
                      isEthanol ? ethanolCopy.moq : coreCopy.moq,
                      isEthanol ? ethanolCopy.tenUnits : `${coreConfig.moq} ${coreValues.units}`,
                    ],
                    [
                      isEthanol ? ethanolCopy.sampleOrder : coreCopy.sample,
                      isEthanol ? ethanolCopy.oneUnit : `${coreConfig.sample} ${coreValues.unit}`,
                    ],
                    [
                      isEthanol ? ethanolCopy.leadTime : coreCopy.leadTime,
                      isEthanol ? ethanolCopy.days15 : coreDisplayConfig.leadTime,
                    ],
                    [
                      isEthanol ? ethanolCopy.tradeTerms : coreCopy.trade,
                      "EXW / FOB / CIF",
                    ],
                  ]
                : [
                    [t.brand, localizedField(product, "brand", lang, langMap)],
                    [t.origin, localizedField(product, "brandCountry", lang, langMap)],
                    [t.installation, localizedField(product, "installation", lang, langMap)],
                  ]
              ).map(([label, value]) => (
                <div key={label} className="bg-white p-3 sm:p-4">
                  <p className="text-xs text-[#6e6e73]">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-[#1d1d1f]">{value}</p>
                </div>
              ))}
            </div>

            {!isCoreWholesale && <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6e6e73] w-16">{t.brand}</span>
                <span className="font-medium text-[#1d1d1f]">{localizedField(product, "brand", lang, langMap)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6e6e73] w-16">{t.origin}</span>
                <span className="font-medium text-[#1d1d1f]">
                  {localizedField(product, "brandCountry", lang, langMap)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6e6e73] w-16">{t.installation}</span>
                <span className="font-medium text-[#1d1d1f]">{localizedField(product, "installation", lang, langMap)}</span>
              </div>
            </div>}

            <div className="mt-6 p-4 bg-[#fff7ed] rounded-[8px] border border-[#fed7aa]">
              <p className="text-sm text-[#c2410c] font-medium">
                {isCoreWholesale
                  ? isEthanol
                    ? ethanolCopy.priceFrom
                    : product.priceCny
                      ? formatReferencePrice(product.priceCny, lang)
                      : coreCopy.requestQuote
                  : product.priceCny
                  ? formatReferencePrice(product.priceCny, lang)
                  : t.contact_for_price}
              </p>
              <p className="text-xs text-[#ea580c] mt-1">
                {isCoreWholesale
                  ? isEthanol
                    ? ethanolCopy.priceNote
                    : priceCopy.note
                  : priceCopy.note}
              </p>
              <p className="text-xs text-[#ea580c] mt-1">
                WhatsApp: +86 180 2818 1668 | kanv34@gmail.com
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {isCoreWholesale && (
                <a
                  href={whatsappWholesaleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#128c4a] text-white rounded-[6px] text-sm font-medium hover:bg-[#0d6f3a] transition-colors"
                >
                  {isEthanol ? ethanolCopy.whatsapp : coreCopy.whatsapp}
                </a>
              )}
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c2410c] text-white rounded-[6px] text-sm font-medium hover:bg-[#ea580c] transition-colors shadow-lg shadow-[#c2410c]/20"
              >
                {isCoreWholesale
                  ? isEthanol
                    ? ethanolCopy.quoteCatalog
                    : coreCopy.requestQuote
                  : t.inquire_now}
              </Link>
              <Link
                href={`/${lang}/products`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#e5e5ea] text-[#1d1d1f] rounded-[6px] text-sm font-medium hover:bg-[#f5f5f7] transition-colors"
              >
                ← {t.back_to_products}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isEthanol && (
        <div className="bg-white border-t border-[#f2f2f3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <section>
              <p className="text-xs font-semibold uppercase text-[#c2410c]">
                {ethanolCopy.standardModels}
              </p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
                    {ethanolCopy.specsTitle}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6e6e73]">
                    {ethanolCopy.specsIntro}
                  </p>
                </div>
                <div className="shrink-0 rounded-[6px] bg-[#1d1d1f] px-4 py-3 text-white">
                  <p className="text-[11px] text-white/60">{ethanolCopy.minimumOrder}</p>
                  <p className="mt-1 text-lg font-bold">{ethanolCopy.tenPerModel}</p>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto rounded-[8px] border border-[#e5e5ea]">
                <table className="w-full min-w-[1120px] border-collapse text-left text-sm">
                  <thead className="bg-[#1d1d1f] text-white">
                    <tr>
                      {[
                        ethanolCopy.model,
                        ethanolCopy.productSize,
                        ethanolCopy.fuelCapacity,
                        ethanolCopy.burnTime,
                        ethanolCopy.netWeight,
                        ethanolCopy.packingEstimated,
                        `10–29 ${ethanolQuantityUnit}`,
                        `30–99 ${ethanolQuantityUnit}`,
                        `100+ ${ethanolQuantityUnit}`,
                      ].map((heading) => (
                        <th key={heading} className="whitespace-nowrap px-4 py-3 font-semibold">{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ethanolWholesaleModels.map((model) => (
                      <tr key={model.model} className="border-t border-[#e5e5ea] odd:bg-white even:bg-[#fafafa]">
                        <td className="px-4 py-4 font-bold text-[#1d1d1f]">{model.model}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-[#5f5f64]">{model.size}</td>
                        <td className="px-4 py-4 text-[#5f5f64]">{model.capacity}</td>
                        <td className="px-4 py-4 text-[#5f5f64]">{model.burnTime}</td>
                        <td className="px-4 py-4 text-[#5f5f64]">{model.netWeight}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-[#5f5f64]">{model.packing}</td>
                        <td className="px-4 py-4 font-semibold text-[#c2410c]">{model.price10}</td>
                        <td className="px-4 py-4 font-semibold text-[#c2410c]">{model.price30}</td>
                        <td className="px-4 py-4 font-semibold text-[#c2410c]">{model.price100}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs leading-5 text-[#86868b]">
                {ethanolCopy.estimateNote}
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-bold text-[#1d1d1f]">
                {ethanolCopy.packingTitle}
              </h2>
              <div className="mt-5 overflow-x-auto rounded-[8px] border border-[#e5e5ea]">
                <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                  <thead className="bg-[#f5f5f7] text-[#1d1d1f]">
                    <tr>
                      {[
                        ethanolCopy.model,
                        ethanolCopy.grossWeight,
                        ethanolCopy.unitPacking,
                        "20GP",
                        "40HQ",
                      ].map((heading) => (
                        <th key={heading} className="whitespace-nowrap px-4 py-3 font-semibold">{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ethanolWholesaleModels.map((model) => (
                      <tr key={model.model} className="border-t border-[#e5e5ea]">
                        <td className="px-4 py-4 font-bold">{model.model}</td>
                        <td className="px-4 py-4">{model.grossWeight}</td>
                        <td className="px-4 py-4">{model.packing}</td>
                        <td className="px-4 py-4">{formatEthanolLoad(model.load20)}</td>
                        <td className="px-4 py-4">{formatEthanolLoad(model.load40)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs leading-5 text-[#86868b]">
                {ethanolCopy.loadingNote}
              </p>
            </section>

            <section className="mt-12 grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-6">
              <div className="rounded-[8px] bg-[#f5f5f7] p-5 sm:p-6">
                <h2 className="text-xl font-bold text-[#1d1d1f]">
                  {ethanolCopy.standardParams}
                </h2>
                <dl className="mt-5 divide-y divide-[#dedee3]">
                  {[
                    [ethanolCopy.productType, ethanolCopy.manualBurner],
                    [ethanolCopy.mainMaterial, ethanolCopy.materialValue],
                    [ethanolCopy.fuel, ethanolCopy.fuelValue],
                    [ethanolCopy.fuelCapacity, ethanolCopy.capacityValue],
                    [ethanolCopy.estimatedBurnTime, ethanolCopy.burnTimeValue],
                    [ethanolCopy.ignition, ethanolCopy.ignitionValue],
                    [ethanolCopy.glassGuard, ethanolCopy.optionalCustom],
                    [ethanolCopy.installation, ethanolCopy.installationValue],
                    [ethanolCopy.exportPacking, ethanolCopy.exportPackingValue],
                  ].map(([term, value]) => (
                    <div key={term} className="grid grid-cols-[0.38fr_0.62fr] gap-3 py-3 text-sm">
                      <dt className="text-[#6e6e73]">{term}</dt>
                      <dd className="font-medium text-[#1d1d1f]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-[8px] border border-[#e5e5ea] p-5 sm:p-6">
                <h2 className="text-xl font-bold text-[#1d1d1f]">
                  {ethanolCopy.oemTitle}
                </h2>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    [ethanolCopy.importerTitle, ethanolCopy.importerText],
                    [ethanolCopy.brandTitle, ethanolCopy.brandText],
                    [ethanolCopy.projectTitle, ethanolCopy.projectText],
                    [ethanolCopy.sampleTitle, ethanolCopy.sampleText],
                  ].map(([title, desc]) => (
                    <div key={title} className="border-l-2 border-[#c2410c] bg-[#fffaf6] p-4">
                      <h3 className="text-sm font-bold text-[#1d1d1f]">{title}</h3>
                      <p className="mt-2 text-xs leading-5 text-[#6e6e73]">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={whatsappWholesaleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-[6px] bg-[#128c4a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0d6f3a]">
                    {ethanolCopy.whatsappQuote}
                  </a>
                  <Link href={`/${lang}/contact`} className="inline-flex items-center rounded-[6px] bg-[#c2410c] px-5 py-3 text-sm font-semibold text-white hover:bg-[#ea580c]">
                    {ethanolCopy.formalQuote}
                  </Link>
                  <a href="mailto:kanv34@gmail.com?subject=Bio%20Ethanol%20Burner%20Wholesale%20Inquiry" className="inline-flex items-center rounded-[6px] border border-[#d6d6da] px-5 py-3 text-sm font-semibold text-[#1d1d1f] hover:bg-[#f5f5f7]">
                    kanv34@gmail.com
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-10 border-y border-[#e5e5ea] py-8">
              <h2 className="text-xl font-bold text-[#1d1d1f]">
                {ethanolCopy.orderTerms}
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-[#e5e5ea] bg-[#e5e5ea] lg:grid-cols-4">
                {[
                  [ethanolCopy.sampleLead, ethanolCopy.sampleDays],
                  [ethanolCopy.productionLead, ethanolCopy.productionDays],
                  [ethanolCopy.payment, ethanolCopy.paymentValue],
                  [ethanolCopy.warranty, ethanolCopy.months12],
                  [ethanolCopy.inspection, ethanolCopy.inspectionValue],
                  [ethanolCopy.certification, ethanolCopy.certificationValue],
                  [ethanolCopy.customPacking, ethanolCopy.customPackingValue],
                  [ethanolCopy.quoteValidity, ethanolCopy.validityValue],
                ].map(([label, value]) => (
                  <div key={label} className="bg-white p-4">
                    <p className="text-xs text-[#6e6e73]">{label}</p>
                    <p className="mt-2 text-sm font-semibold leading-5 text-[#1d1d1f]">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <figure className="overflow-hidden rounded-[8px] border border-[#ece7e1] bg-white">
                <div className="relative aspect-[16/9] bg-[#f5f2ee]">
                  <Image
                    src={ethanolImages.burner}
                    alt={`${ethanolCopy.name} - ${ethanolCopy.detailTitle}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <h2 className="text-lg font-bold text-[#1d1d1f]">
                    {ethanolCopy.detailTitle}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#6e6e73]">
                    {ethanolCopy.detailText}
                  </p>
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-[8px] border border-[#ece7e1] bg-white">
                <div className="relative aspect-[16/9] bg-[#f5f2ee]">
                  <Image
                    src={ethanolImages.hotel}
                    alt={`${ethanolCopy.name} - ${ethanolCopy.commercialTitle}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <h2 className="text-lg font-bold text-[#1d1d1f]">
                    {ethanolCopy.commercialTitle}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#6e6e73]">
                    {ethanolCopy.commercialText}
                  </p>
                </figcaption>
              </figure>
            </div>

            <section className="mt-12 rounded-[8px] border border-[#ece7e1] bg-[#fbfaf8] p-5 sm:p-6">
              <h2 className="text-xl font-bold text-[#1d1d1f]">
                {ethanolCopy.processTitle}
              </h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ethanolCopy.process.map(([title, desc]) => (
                  <div key={title} className="rounded-[8px] bg-white p-4 border border-[#ece7e1]">
                    <h3 className="text-sm font-bold text-[#c2410c]">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#6e6e73]">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-xl font-bold text-[#1d1d1f]">
                {ethanolCopy.faqTitle}
              </h2>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {ethanolFaq.map((item) => (
                  <div key={item.q} className="rounded-[8px] border border-[#ece7e1] bg-white p-5">
                    <h3 className="text-sm font-bold text-[#1d1d1f]">{item.q}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#6e6e73]">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}

      {isCoreWholesale && !isEthanol && (
        <CoreWholesaleDetails
          lang={lang}
          productId={product.id}
          productName={productName}
          priceCny={product.priceCny}
        />
      )}

      {isMist && (
        <div className="bg-white border-t border-[#f2f2f3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-[0.62fr_0.38fr] gap-8 lg:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c2410c]">
                  {localizedText(lang, "3D Water Vapor Fireplace OEM/ODM", "3D Water Vapor Fireplace OEM/ODM")}
                </p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
                  {localizedText(lang, "雾化壁炉是什么？适合做什么项目？", "What is a 3D mist fireplace and where is it used?")}
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-8 text-[#5f5f64]">
                  {localizedText(
                    lang,
                    "雾化壁炉，也常被称为3D水雾壁炉，是通过水雾、灯光和风道结构模拟火焰视觉的壁炉产品。它没有明火，适合酒店大堂、会所、展厅、别墅客厅、商业接待区和样板间等需要长时间展示火焰氛围的空间。壁炉宗师作为自有品牌源头工厂，可围绕长度、出雾方式、灯光效果、补水排水、安装结构和批量交付进行 OEM/ODM 定制。",
                    "A 3D mist fireplace, also called a water vapor fireplace, creates a flame-like visual effect through water vapor, lighting, and airflow structure. With no open flame, it is suitable for hotel lobbies, clubs, showrooms, villa living rooms, reception areas, and model rooms that need long display hours. As an own-brand source factory, Fireplace Master supports OEM/ODM customization for length, mist outlet, lighting effect, water supply, drainage, installation structure, and batch delivery.",
                  )}
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    [localizedText(lang, "无明火氛围", "No open flame"), localizedText(lang, "适合酒店、会所、展厅和住宅中需要长期展示的火焰视觉。", "For hotels, clubs, showrooms, and homes that need long-hour flame visuals.")],
                    [localizedText(lang, "水雾火焰效果", "Water vapor flame effect"), localizedText(lang, "通过水雾与灯光形成柔和火焰观感，空间表现力强。", "Soft flame-like visuals created by water vapor and lighting.")],
                    [localizedText(lang, "支持工程定制", "Project customization"), localizedText(lang, "可定制长度、分段控制、出雾结构、灯光和检修方式。", "Custom length, zone control, mist outlet, lighting, and service access.")],
                    [localizedText(lang, "适合商业运营", "Commercial operation"), localizedText(lang, "便于长时间展示，适合大堂、接待区和展示空间。", "Designed for long display hours in lobbies, reception areas, and display spaces.")],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-[8px] border border-[#ece7e1] bg-[#fbfaf8] p-4">
                      <h3 className="text-sm font-bold text-[#1d1d1f]">{title}</h3>
                      <p className="mt-2 text-xs leading-5 text-[#6e6e73]">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[280px] overflow-hidden rounded-[8px] bg-[#f5f2ee]">
                <Image
                  src={mistImages.villa}
                  alt={localizedText(
                    lang,
                    "别墅客厅长条雾化壁炉水雾火焰场景，适合3D水雾壁炉定制和背景墙方案",
                    "Long 3D water vapor mist fireplace in a villa living room for custom feature wall design",
                  )}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
              {[
                {
                  title: localizedText(lang, "应用场景", "Applications"),
                  items: [
                    localizedText(lang, "酒店大堂、会所、商业接待区", "Hotel lobbies, clubs, commercial reception areas"),
                    localizedText(lang, "别墅客厅、开放式住宅、样板间", "Villa living rooms, open-plan homes, model rooms"),
                    localizedText(lang, "展厅、品牌展示、沉浸式空间", "Showrooms, brand displays, immersive spaces"),
                    localizedText(lang, "中岛、隔断、屏风、长条背景墙", "Islands, dividers, screens, linear feature walls"),
                  ],
                },
                {
                  title: localizedText(lang, "可定制内容", "Customization"),
                  items: [
                    localizedText(lang, "长度、出雾段数、火焰高度和灯光颜色", "Length, mist sections, flame height, and lighting color"),
                    localizedText(lang, "悬挂式、嵌入式、双面、三面、隔断式结构", "Suspended, built-in, double-sided, three-sided, divider structures"),
                    localizedText(lang, "给水、排水、水箱、检修口和防潮处理", "Water supply, drainage, tank, access panel, moisture protection"),
                    localizedText(lang, "按工程图纸、样品或品牌需求做 OEM/ODM", "OEM/ODM by drawings, samples, or brand requirements"),
                  ],
                },
                {
                  title: localizedText(lang, "设计预留重点", "Design Checks"),
                  items: [
                    localizedText(lang, "确认电源、给水、排水和检修空间", "Confirm power, water supply, drainage, and service access"),
                    localizedText(lang, "确认雾气出口、风口干扰和周边防潮", "Confirm mist outlet, airflow interference, and moisture protection"),
                    localizedText(lang, "预留雾化模块、灯光和水路维护方式", "Reserve maintenance access for mist modules, lighting, and water lines"),
                    localizedText(lang, "商业空间应规划补水、清洁和运行周期", "Commercial spaces need refilling, cleaning, and operation schedules"),
                  ],
                },
              ].map((section) => (
                <section key={section.title} className="rounded-[8px] border border-[#ece7e1] bg-white p-5">
                  <h2 className="text-lg font-bold text-[#1d1d1f]">{section.title}</h2>
                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[#5f5f64]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c2410c]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <figure className="overflow-hidden rounded-[8px] border border-[#ece7e1] bg-white">
                <div className="relative aspect-[16/9] bg-[#f5f2ee]">
                  <Image
                    src={mistImages.module}
                    alt={localizedText(
                      lang,
                      "雾化壁炉模块与出雾结构细节，支持水路检修、灯光效果和长度定制",
                      "3D mist fireplace module and mist outlet detail with water access, lighting, and custom length",
                    )}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <h2 className="text-lg font-bold text-[#1d1d1f]">
                    {localizedText(lang, "模块、水路和检修结构可定制", "Custom module, water line, and service structure")}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#6e6e73]">
                    {localizedText(
                      lang,
                      "雾化壁炉的重点在于雾化模块、灯光、风道、水路和检修口的综合设计。设计阶段应提前确认给排水位置、设备深度、雾气出口、灯光维护和长期运行后的清洁方式。",
                      "A mist fireplace depends on the combined design of mist modules, lighting, airflow, water lines, and service access. Water supply, drainage, equipment depth, mist outlet, lighting maintenance, and cleaning method should be confirmed during design.",
                    )}
                  </p>
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-[8px] border border-[#ece7e1] bg-white">
                <div className="relative aspect-[16/9] bg-[#f5f2ee]">
                  <Image
                    src={mistImages.hotel}
                    alt={localizedText(
                      lang,
                      "酒店会所长条雾化壁炉项目场景，适合商业空间无明火氛围和OEM定制",
                      "Long 3D mist fireplace for hotel lounge and club commercial project customization",
                    )}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <h2 className="text-lg font-bold text-[#1d1d1f]">
                    {localizedText(lang, "适合酒店、会所和展示空间", "Suitable for hotels, clubs, and display spaces")}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#6e6e73]">
                    {localizedText(
                      lang,
                      "在酒店大堂、会所和展厅项目中，雾化壁炉常用于长时间展示火焰氛围。它不依赖明火，便于运营人员管理，也更适合开放式客流区域和需要稳定视觉效果的商业空间。",
                      "In hotel lobbies, clubs, and showrooms, mist fireplaces are often used for long-hour flame atmosphere. With no open flame, they are easier for operators to manage and suitable for open traffic areas and commercial interiors that need stable visual effects.",
                    )}
                  </p>
                </figcaption>
              </figure>
            </div>

            <section className="mt-12 rounded-[8px] border border-[#ece7e1] bg-[#fbfaf8] p-5 sm:p-6">
              <h2 className="text-xl font-bold text-[#1d1d1f]">
                {localizedText(lang, "雾化壁炉项目流程", "Mist Fireplace Project Process")}
              </h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  [localizedText(lang, "1. 方案确认", "1. Planning"), localizedText(lang, "确认空间用途、安装位置、展示时长、雾化长度和控制方式。", "Confirm use, location, display hours, mist length, and control method.")],
                  [localizedText(lang, "2. 水电深化", "2. MEP Detail"), localizedText(lang, "确认电源、给排水、设备深度、检修口和防潮处理。", "Confirm power, water supply, drainage, equipment depth, access, and moisture protection.")],
                  [localizedText(lang, "3. 工厂生产", "3. Factory Production"), localizedText(lang, "按项目参数生产雾化模块、结构件、灯光和控制系统。", "Produce mist modules, structure, lighting, and control system by project parameters.")],
                  [localizedText(lang, "4. 调试交付", "4. Commissioning"), localizedText(lang, "提供安装建议、出雾调试、使用说明和后期维护支持。", "Provide installation advice, mist adjustment, usage guidance, and maintenance support.")],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-[8px] bg-white p-4 border border-[#ece7e1]">
                    <h3 className="text-sm font-bold text-[#c2410c]">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#6e6e73]">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-xl font-bold text-[#1d1d1f]">
                {localizedText(lang, "雾化壁炉常见问题", "Mist Fireplace FAQ")}
              </h2>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {mistFaq.map((item) => (
                  <div key={item.q} className="rounded-[8px] border border-[#ece7e1] bg-white p-5">
                    <h3 className="text-sm font-bold text-[#1d1d1f]">{item.q}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#6e6e73]">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}

      {!isCoreWholesale && !isMist && (
        <div className="bg-white border-t border-[#f2f2f3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c2410c]">
                  {enhancedContent.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
                  {enhancedContent.title}
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-8 text-[#5f5f64]">
                  {enhancedContent.intro}
                </p>
                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {enhancedContent.features.map((feature) => (
                    <div key={feature} className="rounded-[8px] border border-[#ece7e1] bg-[#fbfaf8] p-4">
                      <p className="text-sm leading-6 text-[#1d1d1f]">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <figure className="overflow-hidden rounded-[8px] border border-[#ece7e1] bg-white">
                  <div className="relative aspect-[16/10] bg-white">
                    <Image
                      src={product.coverImage}
                      alt={`${localizedField(product, "name", lang, langMap)} product image`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-contain p-8"
                    />
                  </div>
                </figure>
                {productHoverImage && (
                  <figure className="overflow-hidden rounded-[8px] border border-[#ece7e1] bg-white">
                    <div className="relative aspect-[16/10] bg-[#f5f2ee]">
                      <Image
                        src={productHoverImage}
                        alt={`${localizedField(product, "name", lang, langMap)} application scene`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                )}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
              <section className="rounded-[8px] border border-[#ece7e1] bg-white p-5">
                <h2 className="text-lg font-bold text-[#1d1d1f]">
                  {localizedText(lang, "核心优势", "Key Advantages")}
                </h2>
                <ul className="mt-4 space-y-3">
                  {enhancedContent.features.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[#5f5f64]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c2410c]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[8px] border border-[#ece7e1] bg-white p-5">
                <h2 className="text-lg font-bold text-[#1d1d1f]">
                  {localizedText(lang, "定制内容", "Customization")}
                </h2>
                <ul className="mt-4 space-y-3">
                  {[
                    localizedText(lang, "尺寸比例、外观材质和安装结构", "Size ratio, finish material, and installation structure"),
                    localizedText(lang, "控制方式、功能配置和工程批量参数", "Control method, function configuration, and project batch parameters"),
                    localizedText(lang, "品牌铭牌、说明书、包装和 OEM/ODM 交付", "Brand label, manual, packaging, and OEM/ODM delivery"),
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[#5f5f64]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c2410c]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[8px] border border-[#ece7e1] bg-white p-5">
                <h2 className="text-lg font-bold text-[#1d1d1f]">
                  {localizedText(lang, "设计预留重点", "Design Checks")}
                </h2>
                <ul className="mt-4 space-y-3">
                  {enhancedContent.checks.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[#5f5f64]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c2410c]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="mt-12 rounded-[8px] border border-[#ece7e1] bg-[#fbfaf8] p-5 sm:p-6">
              <h2 className="text-xl font-bold text-[#1d1d1f]">
                {localizedText(lang, "项目配合流程", "Project Workflow")}
              </h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  [localizedText(lang, "1. 需求确认", "1. Requirement"), localizedText(lang, "确认空间用途、安装位置、目标效果、数量和预算。", "Confirm space use, location, desired effect, quantity, and budget.")],
                  [localizedText(lang, "2. 方案深化", "2. Detailing"), localizedText(lang, "根据图纸确认尺寸、结构、材料、电源和检修方式。", "Confirm size, structure, material, power, and service access by drawings.")],
                  [localizedText(lang, "3. 工厂生产", "3. Production"), localizedText(lang, "按确认参数生产样品或批量产品，并控制包装与交付标准。", "Produce samples or batch products by confirmed parameters, packaging, and delivery standard.")],
                  [localizedText(lang, "4. 交付支持", "4. Support"), localizedText(lang, "提供供货、安装建议、使用说明和后期维护支持。", "Provide supply, installation advice, user guide, and maintenance support.")],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-[8px] bg-white p-4 border border-[#ece7e1]">
                    <h3 className="text-sm font-bold text-[#c2410c]">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#6e6e73]">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-xl font-bold text-[#1d1d1f]">
                {localizedText(lang, "常见问题", "FAQ")}
              </h2>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {enhancedContent.faq.map(([question, answer]) => (
                  <div key={question} className="rounded-[8px] border border-[#ece7e1] bg-white p-5">
                    <h3 className="text-sm font-bold text-[#1d1d1f]">{question}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#6e6e73]">{answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
