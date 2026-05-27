import Link from "next/link";
import { getDictionary, localizedText } from "@/lib/dictionary";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  const content = {
    title: t.about_title,
    description: t.about_desc,
    sections: [
      {
        title: localizedText(lang, "我们的故事", "Our Story"),
        content: localizedText(
          lang,
          "壁炉宗师是一家自有品牌壁炉源头工厂，专注电子壁炉、雾化壁炉、酒精壁炉、全息壁炉和OEM/ODM定制。我们为住宅、酒店、会所、展厅和商业空间提供产品研发、生产、深化设计、供货安装和售后服务。",
          "Fireplace Master is an own-brand fireplace source factory focused on electric fireplaces, mist fireplaces, ethanol fireplaces, holographic fireplaces, and OEM/ODM customization. We provide product R&D, manufacturing, detailed design, supply, installation, and after-sales service for homes, hotels, clubs, showrooms, and commercial spaces.",
        ),
      },
      {
        title: localizedText(lang, "企业文化", "Our Culture"),
        content: localizedText(
          lang,
          "专业、品质、服务是我们的核心价值观。我们相信，一个好的壁炉不仅是取暖设备，更是家庭温暖与幸福的象征。每一个壁炉都承载着我们对品质的执着追求和对客户的真挚关怀。",
          "Professionalism, Quality, and Service are our core values. We believe a good fireplace is not just a heating device, but a symbol of family warmth and happiness. Every fireplace embodies our relentless pursuit of quality and sincere care for our customers.",
        ),
      },
      {
        title: localizedText(lang, "发展历程", "Our History"),
        content: localizedText(
          lang,
          "多年行业深耕，我们已累计服务数百个高端住宅和商业项目，积累了丰富的设计安装经验，成为华北地区领先的壁炉解决方案提供商。我们的客户遍布北京、南京、黄山、河北等全国各地，涵盖私人别墅、高端公寓、商业空间等多种项目类型。",
          "With years of industry experience, we have served hundreds of high-end residential and commercial projects, accumulating rich design and installation expertise. We have become a leading fireplace solution provider in North China, with clients across Beijing, Nanjing, Huangshan, Hebei, and beyond.",
        ),
      },
    ],
  };

  return (
    <div>
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f]">{content.title}</h1>
          <p className="mt-2 text-sm text-[#6e6e73]">{content.description}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-10">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mb-4">{section.title}</h2>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[#f5f5f7] rounded-2xl text-center">
          <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
            {t.contact_us}
          </h3>
          <p className="text-sm text-[#6e6e73] mb-4">
            +86 18028181668 | kanv34@gmail.com
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#c2410c] text-white rounded-full text-sm font-medium hover:bg-[#ea580c] transition-colors"
          >
            {t.send_message}
          </Link>
        </div>
      </div>
    </div>
  );
}
