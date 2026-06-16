import Image from "next/image";
import Link from "next/link";
import { cases } from "@/lib/cases";
import { getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";
import { newsArticles } from "@/lib/news";
import { getSiteCopy } from "@/lib/site-i18n";

const home = "/media/home";

const assets = {
  hero: `${home}/section-illustrations/hero-luxury-fireplace.png`,
  factory: `${home}/section-illustrations/factory-strength-collage.png`,
  caseDark: `${home}/section-illustrations/case-living-room-dark.png`,
  caseWarm: `${home}/section-illustrations/case-living-room-warm.png`,
  caseMarble: `${home}/section-illustrations/case-living-room-marble.png`,
  caseSoft: `${home}/section-illustrations/source-extra-04-429D1457-F55A-48EC-854D-CC3D5BC5732D.PNG`,
  caseWide: `${home}/section-illustrations/source-extra-02-1FAF585D-6921-499D-AD28-58F9AA58480D.PNG`,
  projectNordic: `${home}/project-cases/北欧.png`,
  projectCozy: `${home}/project-cases/小资.png`,
  projectCozyTwo: `${home}/project-cases/小资2.png`,
  projectNew: `${home}/project-cases/新款.png`,
  projectCigar: `${home}/project-cases/雪茄会所.png`,
};

const icon = (name: string) => `${home}/ui-icons/${name}.svg`;
const cert = (name: string) => `${home}/certifications/${name}.svg`;
const categoryImage = (name: string) => `${home}/category-illustrations/${name}.png`;
const featuredImage = (name: string) => `${home}/featured-products/${name}.png`;

function IconTile({ src, value, label }: { src: string; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4 border-r border-white/10 last:border-r-0">
      <img src={src} alt="" className="h-12 w-12 shrink-0" />
      <div>
        <div className="text-2xl font-bold leading-none text-white">{value}</div>
        <div className="mt-2 text-xs text-white/55">{label}</div>
      </div>
    </div>
  );
}

function siteDescription(site: ReturnType<typeof getSiteCopy>, productType: string) {
  return `${productType} · ${site.wholesaleFactory} · OEM/ODM`;
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);
  const s = getSiteCopy(lang);

  const categoryCards = [
    {
      title: s.ethanol,
      sub: "Ethanol Fireplace",
      href: `/${lang}/products?category=p3`,
      img: "/media/oss/%E4%BA%A7%E5%93%81/%E9%85%92%E7%B2%BE%E5%A3%81%E7%82%89/%E5%86%85%E5%AE%B9%E9%A1%B51.png",
    },
    {
      title: s.mist,
      sub: "Mist Fireplace",
      href: `/${lang}/products?category=p4`,
      img: "/media/oss/%E4%BA%A7%E5%93%81/%E9%9B%BE%E5%8C%96%E5%A3%81%E7%82%89/1.png",
    },
    { title: s.electric, sub: "Electric Fireplace", href: `/${lang}/products?category=p7`, img: categoryImage("electric-fireplace") },
    { title: s.holographic, sub: "Holographic Fireplace", href: `/${lang}/products?category=p9`, img: featuredImage("featured-product-4") },
  ];

  const featuredSolutions = [
    {
      title: lang === "zh" ? "酒精壁炉真火定制方案" : `${s.ethanol} OEM/ODM`,
      label: s.ethanol,
      href: `/${lang}/products?category=p3`,
      image: featuredImage("featured-product-1"),
      alt: lang === "zh" ? "现代客厅中的酒精壁炉真火氛围，适合别墅、会所和商业空间定制" : `${s.ethanol} project solution`,
      description: lang === "zh" ? "适合别墅、会所、餐厅和商业展示空间，支持火槽长度、外观材质、嵌入结构和OEM/ODM定制，突出真实火焰氛围。" : siteDescription(s, s.ethanol),
    },
    {
      title: lang === "zh" ? "电子壁炉背景墙方案" : `${s.electric} OEM/ODM`,
      label: s.electric,
      href: `/${lang}/products?category=p7`,
      image: featuredImage("featured-product-2"),
      alt: lang === "zh" ? "电视背景墙下方的嵌入式电子壁炉，适合现代住宅和精装公寓" : `${s.electric} project solution`,
      description: lang === "zh" ? "适合电视背景墙、大理石背景墙和精装住宅项目，安装维护简单，适合需要无烟道、低维护壁炉氛围的空间。" : siteDescription(s, s.electric),
    },
    {
      title: lang === "zh" ? "雾化壁炉定制方案" : `${s.mist} OEM/ODM`,
      label: s.mist,
      href: `/${lang}/products?category=p4`,
      image: featuredImage("featured-product-3"),
      alt: lang === "zh" ? "现代客厅背景墙中的长条雾化壁炉定制方案，适合酒店和商业空间" : `${s.mist} project solution`,
      description: lang === "zh" ? "适合酒店大堂、会所、别墅和商业接待区，水雾火焰无明火，支持长度、结构、水电检修、背景墙和灯光效果定制。" : siteDescription(s, s.mist),
    },
    {
      title: lang === "zh" ? "全息壁炉沉浸式方案" : `${s.holographic} OEM/ODM`,
      label: s.holographic,
      href: `/${lang}/products?category=p9`,
      image: featuredImage("featured-product-4"),
      alt: lang === "zh" ? "酒店、展厅和会所空间中的全息壁炉沉浸式火焰效果" : `${s.holographic} project solution`,
      description: lang === "zh" ? "适合展厅、酒店大堂、商业橱窗、会所和沉浸式空间，可定制全息火焰影像、画面比例、安装结构和控制系统。" : siteDescription(s, s.holographic),
    },
  ];

  const projectCards = [
    { image: assets.projectCozy, title: lang === "zh" ? "小资住宅项目" : s.projectTitle, location: lang === "zh" ? "现代家居" : s.electric },
    { image: assets.projectCigar, title: lang === "zh" ? "雪茄会所项目" : s.projectTitle, location: lang === "zh" ? "商业空间" : s.mist },
    { image: assets.projectNordic, title: lang === "zh" ? "北欧住宅项目" : s.projectTitle, location: lang === "zh" ? "别墅空间" : s.ethanol },
    { image: assets.projectNew, title: lang === "zh" ? "新款壁炉项目" : s.projectTitle, location: lang === "zh" ? "客厅空间" : s.holographic },
    { image: assets.projectCozyTwo, title: lang === "zh" ? "小资生活项目" : s.projectTitle, location: lang === "zh" ? "精品住宅" : s.wholesaleFactory },
  ];

  const news = newsArticles.slice(0, 4);

  return (
    <div className="bg-white text-[#1f1c19]">
      <section className="relative min-h-[640px] overflow-hidden bg-[#0b0907] lg:min-h-[700px]">
        <Image
          src={assets.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,5,4,0.92)_0%,rgba(6,5,4,0.72)_40%,rgba(6,5,4,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/75 to-transparent" />

        <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:min-h-[700px] lg:px-8">
          <div className="max-w-[1040px]">
            <p className="text-sm font-bold text-[#fb923c]">{s.yearsFocus}</p>
            <h1 className="mt-5 text-[40px] font-bold leading-[1.12] tracking-normal text-white sm:text-[58px] lg:text-[70px] xl:text-[76px]">
              {s.heroTitleBefore}<span className="text-[#f97316]">{s.heroTitleBrand}</span>
            </h1>
            <p className="mt-6 max-w-4xl text-base font-semibold leading-8 text-white sm:text-xl">
              {s.heroLine}
            </p>

            <div className="mt-8 grid max-w-4xl grid-cols-2 gap-0 sm:grid-cols-4">
              {[
                ["20+", s.productionExperience],
                ["2000㎡", s.factoryArea],
                ["CE / RoHS / ISO", t.footer_products],
                ["60+", s.exportGlobal],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-[#f97316]/60 bg-black/34 px-5 py-4 backdrop-blur-sm">
                  <div className="text-lg font-bold text-white sm:text-xl">{value}</div>
                  <div className="mt-2 text-xs text-white/62">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={`/${lang}/products`} className="rounded-[4px] bg-[#f97316] px-10 py-4 text-sm font-bold text-white shadow-lg shadow-black/30 hover:bg-[#ea580c]">
                {s.browseProducts}
              </Link>
              <Link href={`/${lang}/contact`} className="rounded-[4px] border border-white/42 bg-black/20 px-10 py-4 text-sm font-bold text-white backdrop-blur hover:bg-white/10">
                {s.contactConsult}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">{s.productCategories}</h2>
            <p className="mt-2 text-sm text-[#7a746e]">{s.productCategoriesDesc}</p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4">
            {categoryCards.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="group rounded-[6px] border border-[#e8e3de] bg-white p-4 text-center shadow-sm hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[1.12] overflow-hidden rounded-[4px] bg-[#faf8f5]">
                  <img src={item.img} alt={item.title} className="h-full w-full object-contain p-3" />
                </div>
                <h3 className="mt-4 text-sm font-bold">{item.title}</h3>
                <div className="mx-auto mt-2 h-0.5 w-9 bg-[#f97316]" />
                <p className="mt-2 text-xs text-[#7a746e]">{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ec]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-normal text-[#1f1c19]">{s.factoryTitle}</h2>
            <p className="mt-5 text-sm leading-8 text-[#625b55]">
              {s.factoryDesc}
            </p>
            <ul className="mt-7 space-y-4 text-sm font-semibold text-[#2c2723]">
              {s.factoryBullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f97316]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href={`/${lang}/about`} className="mt-8 inline-flex w-fit rounded-[4px] bg-[#f97316] px-8 py-3 text-sm font-bold text-white hover:bg-[#ea580c]">
              {s.learnAbout}
            </Link>
          </div>

          <div className="relative min-h-[520px] overflow-hidden bg-white">
            <Image src={assets.factory} alt={s.factoryTitle} fill sizes="(max-width: 1024px) 100vw, 62vw" className="object-cover" />
          </div>
        </div>

        <div className="bg-[#0d0c0b] py-7">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
            <IconTile src={icon("factory")} value="20+" label={s.productionExperience} />
            <IconTile src={icon("plant-area")} value="2000㎡" label={s.factoryArea} />
            <IconTile src={icon("team")} value="20" label={s.staff} />
            <IconTile src={icon("global-export")} value="60+" label={s.exportGlobal} />
            <IconTile src={icon("partners")} value="300+" label={s.partners} />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold">{s.certTitle}</h2>
            <p className="mt-2 text-sm text-[#7a746e]">{s.certDesc}</p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-6">
            {[
              ["ce", "CE"],
              ["rohs", "RoHS"],
              ["iso-9001", "ISO 9001"],
              ["ukca", "UKCA"],
              ["bsci", "BSCI"],
            ].map(([file, label]) => (
              <div key={file} className="flex h-24 items-center justify-center rounded-[6px] border border-[#e8e3de] bg-white shadow-sm">
                <img src={cert(file)} alt={label} className="h-full w-full object-contain p-3" />
              </div>
            ))}
            <div className="rounded-[6px] border border-[#fed7aa] bg-[#fff7ed] p-4">
              <img src={icon("shield-cert")} alt="" className="h-12 w-12" />
              <h3 className="mt-3 text-sm font-bold">{s.strictInspection}</h3>
              <p className="mt-1 text-xs leading-5 text-[#7a746e]">{s.strictInspectionDesc}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold">{s.whyTitle}</h2>
            <p className="mt-2 text-sm text-[#7a746e]">{s.whyDesc}</p>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              [icon("factory"), ...s.advantages[0]],
              [icon("custom-service"), ...s.advantages[1]],
              [icon("shield-cert"), ...s.advantages[2]],
              [icon("delivery"), ...s.advantages[3]],
              [icon("after-sales"), ...s.advantages[4]],
            ].map(([src, title, desc]) => (
              <div key={title} className="rounded-[6px] border border-[#e8e3de] bg-white p-5 shadow-sm">
                <img src={src} alt="" className="h-11 w-11" />
                <h3 className="mt-4 text-sm font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#7a746e]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf8] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">{s.featuredTitle}</h2>
              <p className="mt-2 text-sm text-[#7a746e]">{s.featuredDesc}</p>
            </div>
            <Link href={`/${lang}/products`} className="hidden text-sm font-bold text-[#f97316] sm:inline-flex">
              {s.viewAll}
            </Link>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSolutions.map((item) => (
              <Link key={item.title} href={item.href} className="group overflow-hidden rounded-[6px] border border-[#e8e3de] bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f2ee]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold text-[#f97316]">{item.label}</div>
                  <h3 className="mt-2 min-h-12 text-sm font-bold leading-6">{item.title}</h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#7a746e]">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">{s.projectTitle}</h2>
              <p className="mt-2 text-sm text-[#7a746e]">{s.projectDesc}</p>
            </div>
            <Link href={`/${lang}/cases`} className="hidden text-sm font-bold text-[#f97316] sm:inline-flex">
              {s.moreCases}
            </Link>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {projectCards.map((item) => (
              <Link key={item.title} href={`/${lang}/cases`} className="group overflow-hidden rounded-[6px] bg-white">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-[#e8e3de]">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, 20vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-3 line-clamp-1 text-sm font-bold">{item.title}</h3>
                <p className="mt-1 text-xs text-[#7a746e]">{item.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf8] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">{s.newsTitle}</h2>
              <p className="mt-2 text-sm text-[#7a746e]">{s.newsDesc}</p>
            </div>
            <Link href={`/${lang}/news`} className="hidden text-sm font-bold text-[#f97316] sm:inline-flex">
              {s.moreNews}
            </Link>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-4">
            {news.map((item, index) => (
              <Link key={item.id} href={`/${lang}/news/${item.id}`} className="group overflow-hidden rounded-[6px] border border-[#e8e3de] bg-white shadow-sm hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e3de]">
                  <Image src={`/media/news/${item.date}.png`} alt={localizedField(item, "title", lang, langMap)} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#7a746e]">{item.date}</p>
                  <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-6">{localizedField(item, "title", lang, langMap)}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#7a746e]">{localizedField(item, "summary", lang, langMap)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#120f0c] py-10">
        <Image src={assets.caseDark} alt="" fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-black/58" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white">{s.ctaTitle}</h2>
            <p className="mt-2 text-sm text-white/68">{s.ctaDesc}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={`/${lang}/contact`} className="rounded-[4px] bg-[#f97316] px-10 py-3 text-sm font-bold text-white hover:bg-[#ea580c]">
              {s.consultNow}
            </Link>
            <Link href={`/${lang}/products`} className="rounded-[4px] border border-white/35 px-10 py-3 text-sm font-bold text-white hover:bg-white/10">
              {s.catalog}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
