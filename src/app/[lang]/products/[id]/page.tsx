import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { getProductById, categories, products } from "@/lib/products";
import { notFound } from "next/navigation";
import { locales, getDictionary, localizedText } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";

const ethanolImages = {
  villa: "/media/products/ethanol-fireplace/ethanol-fireplace-villa-scene.png",
  burner: "/media/products/ethanol-fireplace/ethanol-fireplace-burner-detail.png",
  hotel: "/media/products/ethanol-fireplace/ethanol-fireplace-hotel-lounge.png",
};

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const product = getProductById(id);
  if (!product) return {};

  if (id === "p3_14") {
    return {
      title:
        lang === "zh"
          ? "酒精壁炉（可定制）| 生物乙醇壁炉源头工厂 OEM/ODM"
          : "Custom Ethanol Fireplace | Bio Ethanol Fireplace OEM/ODM Source Factory",
      description:
        lang === "zh"
          ? "壁炉宗师酒精壁炉源头工厂，支持生物乙醇壁炉、嵌入式酒精壁炉、长条火槽、酒店会所别墅项目和 OEM/ODM 定制。"
          : "Fireplace Master is a source factory for custom bio ethanol fireplaces, built-in ethanol fireplaces, linear burners, hotel, club, villa projects, and OEM/ODM production.",
      keywords:
        lang === "zh"
          ? ["酒精壁炉", "生物乙醇壁炉", "酒精壁炉定制", "嵌入式酒精壁炉", "壁炉源头工厂", "OEM ODM 壁炉"]
          : ["ethanol fireplace", "bio ethanol fireplace", "custom ethanol fireplace", "built-in ethanol fireplace", "fireplace source factory", "OEM ODM fireplace"],
      openGraph: {
        title:
          lang === "zh"
            ? "酒精壁炉（可定制）| 壁炉宗师源头工厂"
            : "Custom Ethanol Fireplace | Fireplace Master Source Factory",
        description:
          lang === "zh"
            ? "支持火槽长度、尺寸、外观、嵌入结构和批量 OEM/ODM 定制。"
            : "Custom burner length, size, finish, built-in structure, and OEM/ODM production.",
        images: [ethanolImages.villa],
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
  const isEthanol = product.id === "p3_14";
  const ethanolFaq = lang === "zh" ? ethanolFaqZh : ethanolFaqEn;
  const ethanolProductSchema = isEthanol
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: localizedText(lang, "酒精壁炉（可定制）", "Custom Bio Ethanol Fireplace"),
        brand: { "@type": "Brand", name: "壁炉宗师" },
        manufacturer: { "@type": "Organization", name: "壁炉宗师" },
        category: localizedText(lang, "酒精壁炉 / 生物乙醇壁炉", "Ethanol Fireplace / Bio Ethanol Fireplace"),
        description: localizedText(
          lang,
          "壁炉宗师酒精壁炉源头工厂产品，支持火槽、尺寸、外观、嵌入结构、酒店会所别墅项目和 OEM/ODM 批量定制。",
          "Fireplace Master custom bio ethanol fireplace source-factory product with burner, size, finish, built-in structure, project, and OEM/ODM customization.",
        ),
        image: Object.values(ethanolImages).map((src) => `https://sfireplace.com${src}`),
        additionalProperty: [
          { "@type": "PropertyValue", name: "Product type", value: "Bio ethanol fireplace" },
          { "@type": "PropertyValue", name: "Customization", value: "Burner length, size, finish, structure, OEM/ODM" },
          { "@type": "PropertyValue", name: "Applications", value: "Villa, hotel, club, restaurant, commercial showroom" },
          { "@type": "PropertyValue", name: "Installation", value: "Built-in, tabletop, island, wall feature, custom structure" },
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

  return (
    <div>
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
            <span className="text-[#1d1d1f]">{localizedField(product, "name", lang, langMap)}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Image */}
          <div className="aspect-[4/3] bg-[#f5f5f7] rounded-2xl overflow-hidden relative">
            <ProductImage
              src={product.coverImage}
              alt={localizedField(product, "name", lang, langMap)}
              category={product.category}
              brand={product.brand}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

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
                {localizedField(product, "installation", lang, langMap)}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mt-3">
              {localizedField(product, "name", lang, langMap)}
            </h1>

            <p className="mt-4 text-sm text-[#6e6e73] leading-relaxed">
              {localizedField(product, "description", lang, langMap)}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6e6e73] w-16">{t.brand}</span>
                <span className="font-medium text-[#1d1d1f]">{product.brand}</span>
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
            </div>

            <div className="mt-6 p-4 bg-[#fff7ed] rounded-xl border border-[#fed7aa]">
              <p className="text-sm text-[#c2410c] font-medium">{t.contact_for_price}</p>
              <p className="text-xs text-[#ea580c] mt-1">+86 18028181668 | kanv34@gmail.com</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+8618028181668"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c2410c] text-white rounded-full text-sm font-medium hover:bg-[#ea580c] transition-colors shadow-lg shadow-[#c2410c]/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.inquire_now}：+86 18028181668
              </a>
              <Link
                href={`/${lang}/products`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#e5e5ea] text-[#1d1d1f] rounded-full text-sm font-medium hover:bg-[#f5f5f7] transition-colors"
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
            <div className="grid grid-cols-1 lg:grid-cols-[0.62fr_0.38fr] gap-8 lg:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c2410c]">
                  {localizedText(lang, "Bio Ethanol Fireplace OEM/ODM", "Bio Ethanol Fireplace OEM/ODM")}
                </p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
                  {localizedText(lang, "酒精壁炉是什么？适合做什么项目？", "What is a bio ethanol fireplace and where is it used?")}
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-8 text-[#5f5f64]">
                  {localizedText(
                    lang,
                    "酒精壁炉，也常被称为生物乙醇壁炉，是以生物乙醇为燃料的真火壁炉产品。它不依赖传统烟道和燃气管线，适合在别墅客厅、酒店大堂、会所、餐厅、商业展厅和样板间中打造真实火焰氛围。壁炉宗师作为自有品牌源头工厂，可围绕火槽长度、外观材质、安装结构、控制方式和批量交付需求进行 OEM/ODM 定制。",
                    "A bio ethanol fireplace is a real-flame fireplace powered by bio ethanol fuel. It usually does not rely on a traditional chimney or gas line, making it suitable for villa living rooms, hotel lobbies, clubs, restaurants, showrooms, and model rooms. As an own-brand source factory, Fireplace Master supports OEM/ODM customization for burner length, finish, installation structure, control method, and batch delivery.",
                  )}
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    [localizedText(lang, "真实火焰氛围", "Real flame atmosphere"), localizedText(lang, "适合重视仪式感和高级氛围的住宅及商业空间。", "For residential and commercial interiors that need a real flame atmosphere.")],
                    [localizedText(lang, "无需传统烟道", "No traditional chimney"), localizedText(lang, "便于在改造项目、背景墙、岛台和展示装置中深化设计。", "Useful for retrofit projects, feature walls, islands, and display installations.")],
                    [localizedText(lang, "支持 OEM/ODM", "OEM/ODM ready"), localizedText(lang, "可按图纸、样品、批量尺寸和项目风格定制生产。", "Custom production by drawings, samples, batch size, and project style.")],
                    [localizedText(lang, "厂家直供", "Factory direct supply"), localizedText(lang, "从研发、生产、供货到安装建议，减少中间沟通成本。", "R&D, manufacturing, supply, and installation advice from one factory team.")],
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
                  src={ethanolImages.villa}
                  alt={localizedText(
                    lang,
                    "别墅客厅嵌入式酒精壁炉真火场景，适合酒精壁炉定制和背景墙方案",
                    "Built-in bio ethanol fireplace in a villa living room for custom fireplace wall design",
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
                    localizedText(lang, "别墅客厅、地下会客厅、家庭休闲区", "Villa living rooms, basement lounges, family rooms"),
                    localizedText(lang, "酒店大堂、精品酒店客房、度假空间", "Hotel lobbies, boutique rooms, resort spaces"),
                    localizedText(lang, "会所、餐厅、酒吧、商业接待区", "Clubs, restaurants, bars, reception areas"),
                    localizedText(lang, "展厅、样板间、品牌展示和景观火装置", "Showrooms, model rooms, brand displays, flame features"),
                  ],
                },
                {
                  title: localizedText(lang, "可定制内容", "Customization"),
                  items: [
                    localizedText(lang, "火槽长度、火焰段数、燃烧器结构", "Burner length, flame sections, burner structure"),
                    localizedText(lang, "嵌入式、台面式、岛台式、长条壁龛式安装", "Built-in, tabletop, island, and linear niche installation"),
                    localizedText(lang, "不锈钢、黑色金属、石材、玻璃挡火结构", "Stainless steel, black metal, stone, glass flame guard structure"),
                    localizedText(lang, "按工程图纸、样品或品牌需求做 OEM/ODM", "OEM/ODM by drawings, samples, or brand requirements"),
                  ],
                },
                {
                  title: localizedText(lang, "设计预留重点", "Design Checks"),
                  items: [
                    localizedText(lang, "确认通风条件、操作空间和使用管理方式", "Confirm ventilation, operation space, and usage management"),
                    localizedText(lang, "确认周边材料耐热性和安全距离", "Confirm heat-resistant materials and safety distance"),
                    localizedText(lang, "预留检修、加注、清洁和后期维护空间", "Reserve access for inspection, refilling, cleaning, and maintenance"),
                    localizedText(lang, "商业空间应明确人员管理和使用规范", "Commercial spaces need clear operation and management rules"),
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
                    src={ethanolImages.burner}
                    alt={localizedText(
                      lang,
                      "酒精壁炉不锈钢火槽与玻璃挡火结构细节，支持火槽长度和安装结构定制",
                      "Custom bio ethanol fireplace stainless steel burner and glass guard structure detail",
                    )}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <h2 className="text-lg font-bold text-[#1d1d1f]">
                    {localizedText(lang, "火槽和结构可按项目定制", "Custom burner and structure for project needs")}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#6e6e73]">
                    {localizedText(
                      lang,
                      "酒精壁炉的核心不是单一标准尺寸，而是火槽长度、燃烧器结构、玻璃挡火、安装收口和维护方式的系统配合。我们建议在设计阶段就确认火焰长度、台面高度、周边材料和后期操作方式。",
                      "The core of an ethanol fireplace is not a single standard size, but the coordination of burner length, burner structure, glass guard, installation finish, and maintenance method. Flame length, counter height, surrounding materials, and operation method should be confirmed during design.",
                    )}
                  </p>
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-[8px] border border-[#ece7e1] bg-white">
                <div className="relative aspect-[16/9] bg-[#f5f2ee]">
                  <Image
                    src={ethanolImages.hotel}
                    alt={localizedText(
                      lang,
                      "酒店会所长条酒精壁炉项目场景，适合商业空间真火氛围和OEM定制",
                      "Linear bio ethanol fireplace for hotel lounge and club commercial project customization",
                    )}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <h2 className="text-lg font-bold text-[#1d1d1f]">
                    {localizedText(lang, "适合酒店、会所和商业空间", "Suitable for hotels, clubs, and commercial spaces")}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#6e6e73]">
                    {localizedText(
                      lang,
                      "在酒店大堂、会所和餐厅项目中，酒精壁炉常被用作真火视觉焦点。项目方案应同时考虑火焰观感、客流动线、材料安全、操作人员和日常维护，让空间看起来高级，也能长期稳定使用。",
                      "In hotel lobbies, clubs, and restaurant projects, ethanol fireplaces are often used as real-flame focal points. The design should consider flame appearance, traffic flow, material safety, operators, and daily maintenance, so the space looks premium and works reliably over time.",
                    )}
                  </p>
                </figcaption>
              </figure>
            </div>

            <section className="mt-12 rounded-[8px] border border-[#ece7e1] bg-[#fbfaf8] p-5 sm:p-6">
              <h2 className="text-xl font-bold text-[#1d1d1f]">
                {localizedText(lang, "酒精壁炉项目流程", "Ethanol Fireplace Project Process")}
              </h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  [localizedText(lang, "1. 需求确认", "1. Requirement"), localizedText(lang, "确认空间用途、安装位置、火焰长度、使用频率和预算。", "Confirm use, location, flame length, usage frequency, and budget.")],
                  [localizedText(lang, "2. 深化设计", "2. Detailed Design"), localizedText(lang, "根据图纸确认开孔尺寸、收口、材料、安全距离和维护方式。", "Confirm opening size, finish, material, safety distance, and maintenance access.")],
                  [localizedText(lang, "3. 工厂生产", "3. Factory Production"), localizedText(lang, "按定制参数生产火槽、结构件、玻璃挡火和外观部件。", "Produce burner, structure, glass guard, and finish parts by custom parameters.")],
                  [localizedText(lang, "4. 交付安装", "4. Delivery"), localizedText(lang, "提供供货、安装建议、使用说明和后期维护支持。", "Provide supply, installation advice, usage guidance, and maintenance support.")],
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
                {localizedText(lang, "酒精壁炉常见问题", "Ethanol Fireplace FAQ")}
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
    </div>
  );
}
