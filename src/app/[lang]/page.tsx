import Image from "next/image";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { cases } from "@/lib/cases";
import { products } from "@/lib/products";
import { getDictionary } from "@/lib/dictionary";
import { localizedField } from "@/lib/localize";
import { loadLangData } from "@/lib/lang-data";
import { newsArticles } from "@/lib/news";

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

function getProduct(id: string) {
  return products.find((product) => product.id === id) ?? products[0];
}

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

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const langMap = await loadLangData(lang);

  const categoryCards = [
    { title: "嵌入式壁炉", sub: "Built-in Fireplace", href: `/${lang}/products?category=p1`, img: categoryImage("built-in-fireplace") },
    { title: "独立式壁炉", sub: "Freestanding Stove", href: `/${lang}/products?category=p1`, img: categoryImage("freestanding-stove") },
    { title: "壁挂式壁炉", sub: "Wall-mounted Fireplace", href: `/${lang}/products?category=p4`, img: categoryImage("wall-mounted-fireplace") },
    { title: "电壁炉", sub: "Electric Fireplace", href: `/${lang}/products?category=p7`, img: categoryImage("electric-fireplace") },
    { title: "户外壁炉", sub: "Outdoor Fireplace", href: `/${lang}/products?category=p88`, img: categoryImage("outdoor-fireplace") },
    { title: "壁炉配件", sub: "Accessories", href: `/${lang}/products?category=p8`, img: categoryImage("accessories") },
  ];

  const featuredProducts = [
    getProduct("p1_1"),
    getProduct("p1_61"),
    getProduct("p2_56"),
    getProduct("p4_70"),
  ];

  const projectCards = [
    { image: assets.projectCozy, title: "小资住宅项目", location: "现代家居" },
    { image: assets.projectCigar, title: "雪茄会所项目", location: "商业空间" },
    { image: assets.projectNordic, title: "北欧住宅项目", location: "别墅空间" },
    { image: assets.projectNew, title: "新款壁炉项目", location: "客厅空间" },
    { image: assets.projectCozyTwo, title: "小资生活项目", location: "精品住宅" },
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
            <p className="text-sm font-bold text-[#fb923c]">20年专注壁炉研发制造</p>
            <h1 className="mt-5 text-[40px] font-bold leading-[1.12] tracking-normal text-white sm:text-[58px] lg:text-[70px] xl:text-[76px]">
              温暖生活 · 源自<span className="text-[#f97316]">壁炉宗师</span>
            </h1>
            <p className="mt-6 max-w-4xl text-base font-semibold leading-8 text-white sm:text-xl">
              源头工厂 | 支持 OEM/ODM 定制 | 畅销全球 60+ 国家和地区
            </p>

            <div className="mt-8 grid max-w-4xl grid-cols-2 gap-0 sm:grid-cols-4">
              {[
                ["20+年", "生产经验"],
                ["10000㎡+", "现代化厂房"],
                ["CE / RoHS / ISO", "多项认证"],
                ["60+国家", "出口全球"],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-[#f97316]/60 bg-black/34 px-5 py-4 backdrop-blur-sm">
                  <div className="text-lg font-bold text-white sm:text-xl">{value}</div>
                  <div className="mt-2 text-xs text-white/62">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={`/${lang}/products`} className="rounded-[4px] bg-[#f97316] px-10 py-4 text-sm font-bold text-white shadow-lg shadow-black/30 hover:bg-[#ea580c]">
                浏览产品 →
              </Link>
              <Link href={`/${lang}/contact`} className="rounded-[4px] border border-white/42 bg-black/20 px-10 py-4 text-sm font-bold text-white backdrop-blur hover:bg-white/10">
                联系咨询 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">产品分类</h2>
            <p className="mt-2 text-sm text-[#7a746e]">多种类型壁炉，满足不同项目需求</p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
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
            <h2 className="text-3xl font-bold tracking-normal text-[#1f1c19]">源头工厂 · 实力保障</h2>
            <p className="mt-5 text-sm leading-8 text-[#625b55]">
              坚持从项目方案、产品选型、深化设计、供货安装到售后维护的一体化服务，让客户看到真实生产能力和稳定交付能力。
            </p>
            <ul className="mt-7 space-y-4 text-sm font-semibold text-[#2c2723]">
              {["10000㎡+现代化生产基地", "专业研发团队与先进生产设备", "严格质量检测体系", "支持定制方案与项目服务"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f97316]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href={`/${lang}/about`} className="mt-8 inline-flex w-fit rounded-[4px] bg-[#f97316] px-8 py-3 text-sm font-bold text-white hover:bg-[#ea580c]">
              了解更多关于我们
            </Link>
          </div>

          <div className="relative min-h-[520px] overflow-hidden bg-white">
            <Image src={assets.factory} alt="壁炉宗师工厂实力" fill sizes="(max-width: 1024px) 100vw, 62vw" className="object-cover" />
          </div>
        </div>

        <div className="bg-[#0d0c0b] py-7">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
            <IconTile src={icon("factory")} value="20+年" label="生产经验" />
            <IconTile src={icon("plant-area")} value="10000㎡+" label="工厂面积" />
            <IconTile src={icon("team")} value="150+名" label="专业员工" />
            <IconTile src={icon("global-export")} value="60+国家" label="出口全球" />
            <IconTile src={icon("partners")} value="300+家" label="全球合作伙伴" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold">权威认证 · 品质保障</h2>
            <p className="mt-2 text-sm text-[#7a746e]">产品通过多项国际认证，安全可靠，畅销全球</p>
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
              <h3 className="mt-3 text-sm font-bold">严格检测</h3>
              <p className="mt-1 text-xs leading-5 text-[#7a746e]">每一台壁炉出厂前多重检测</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold">为什么选择壁炉宗师</h2>
            <p className="mt-2 text-sm text-[#7a746e]">我们不仅提供优质产品，更提供专业服务与支持</p>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              [icon("factory"), "源头工厂", "价格优势，质量可控，供货稳定"],
              [icon("custom-service"), "支持定制服务", "OEM/ODM，满足个性化需求"],
              [icon("shield-cert"), "品质严格把控", "多重检测，确保每一台壁炉品质"],
              [icon("delivery"), "快速交付", "完善供应链，按时交付"],
              [icon("after-sales"), "售后无忧", "安装指导，维护支持"],
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
              <h2 className="text-2xl font-bold">精选产品</h2>
              <p className="mt-2 text-sm text-[#7a746e]">精选欧洲高端壁炉型号，覆盖多种空间方案</p>
            </div>
            <Link href={`/${lang}/products`} className="hidden text-sm font-bold text-[#f97316] sm:inline-flex">
              查看全部 →
            </Link>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/${lang}/products/${product.id}`} className="group overflow-hidden rounded-[6px] border border-[#e8e3de] bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] bg-[#f5f2ee]">
                  <ProductImage
                    src={product.coverImage}
                    alt={localizedField(product, "name", lang, langMap)}
                    category={product.category}
                    brand={product.brand}
                    className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold text-[#f97316]">{localizedField(product, "brandCountry", lang, langMap)}</div>
                  <h3 className="mt-2 min-h-12 text-sm font-bold leading-6">{localizedField(product, "name", lang, langMap)}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#7a746e]">{localizedField(product, "description", lang, langMap)}</p>
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
              <h2 className="text-2xl font-bold">项目案例</h2>
              <p className="mt-2 text-sm text-[#7a746e]">我们的产品已广泛应用于家装、酒店、别墅、商业空间等</p>
            </div>
            <Link href={`/${lang}/cases`} className="hidden text-sm font-bold text-[#f97316] sm:inline-flex">
              查看更多案例 →
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
              <h2 className="text-2xl font-bold">新闻中心</h2>
              <p className="mt-2 text-sm text-[#7a746e]">了解行业动态与公司最新资讯</p>
            </div>
            <Link href={`/${lang}/news`} className="hidden text-sm font-bold text-[#f97316] sm:inline-flex">
              查看更多新闻 →
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
            <h2 className="text-2xl font-bold text-white">准备好为您的项目选择合适的壁炉了吗？</h2>
            <p className="mt-2 text-sm text-white/68">联系我们的专业团队，获取产品目录和专属解决方案</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={`/${lang}/contact`} className="rounded-[4px] bg-[#f97316] px-10 py-3 text-sm font-bold text-white hover:bg-[#ea580c]">
              立即咨询
            </Link>
            <Link href={`/${lang}/products`} className="rounded-[4px] border border-white/35 px-10 py-3 text-sm font-bold text-white hover:bg-white/10">
              下载产品手册
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
