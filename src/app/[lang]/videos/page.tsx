import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { getSiteCopy } from "@/lib/site-i18n";
import { pageMetadata } from "@/lib/page-seo";

const OSS = "/media/oss";

const videoList = [
  // 丹麦Rais
  { brand: "Rais", brandZh: "丹麦Rais", title: "Q-Tee 2", titleZh: "Rais Q-Tee 2 燃木壁炉", src: `${OSS}/%E8%A7%86%E9%A2%91/%E4%B8%B9%E9%BA%A6Rais%E8%A7%86%E9%A2%91/%E7%87%83%E6%9C%A8/%E7%8B%AC%E7%AB%8B%E5%BC%8F/Q-Tee%202.mp4` },
  { brand: "Rais", brandZh: "丹麦Rais", title: "Scene", titleZh: "Rais 场景展示", src: `${OSS}/%E8%A7%86%E9%A2%91/%E4%B8%B9%E9%BA%A6Rais%E8%A7%86%E9%A2%91/%E5%85%B6%E4%BB%96/%E5%9C%BA%E6%99%AF.mp4` },
  // 奥地利Haas+sohn
  { brand: "Haas+sohn", brandZh: "奥地利Haas+sohn", title: "Factory", titleZh: "Haas+sohn 工厂生产视频", src: `${OSS}/%E8%A7%86%E9%A2%91/%E5%A5%A5%E5%9C%B0%E5%88%A9Haas%2Bsohn%E8%A7%86%E9%A2%91/%E5%B7%A5%E5%8E%82%E7%94%9F%E4%BA%A7%E8%A7%86%E9%A2%91.mp4` },
  { brand: "Haas+sohn", brandZh: "奥地利Haas+sohn", title: "Brand Ad", titleZh: "Haas+sohn 品牌广告", src: `${OSS}/%E8%A7%86%E9%A2%91/%E5%A5%A5%E5%9C%B0%E5%88%A9Haas%2Bsohn%E8%A7%86%E9%A2%91/Haas-sohn.mp4` },
  { brand: "Haas+sohn", brandZh: "奥地利Haas+sohn", title: "Easy Control", titleZh: "Easy Control 专利进气控制", src: `${OSS}/%E8%A7%86%E9%A2%91/%E5%A5%A5%E5%9C%B0%E5%88%A9Haas%2Bsohn%E8%A7%86%E9%A2%91/Easy%20Control%20%E4%B8%93%E5%88%A9%E8%BF%9B%E6%B0%94%E6%8E%A7%E5%88%B6.mp4` },
  // 瑞士Ruegg
  { brand: "Ruegg", brandZh: "瑞士Ruegg", title: "Accessories & Operation", titleZh: "Ruegg 产品配套及使用说明", src: `${OSS}/%E8%A7%86%E9%A2%91/%E7%91%9E%E5%A3%ABRuegg%E8%A7%86%E9%A2%91/%E4%BA%A7%E5%93%81%E9%85%8D%E4%BB%B6%E5%8F%8A%E6%93%8D%E4%BD%9C.mp4` },
  { brand: "Ruegg", brandZh: "瑞士Ruegg", title: "Hotel Case", titleZh: "Ruegg 燃气壁炉酒店案例", src: `${OSS}/%E8%A7%86%E9%A2%91/%E7%91%9E%E5%A3%ABRuegg%E8%A7%86%E9%A2%91/%E6%A1%88%E4%BE%8B.mp4` },
  { brand: "Ruegg", brandZh: "瑞士Ruegg", title: "Surprise Launch 2016", titleZh: "2016年爱尔兰Surprise发布会", src: `${OSS}/%E8%A7%86%E9%A2%91/%E7%91%9E%E5%A3%ABRuegg%E8%A7%86%E9%A2%91/2016%E7%88%B1%E5%B0%94%E5%85%B0%E7%A7%91%E5%85%8BSurprise%E5%8F%91%E5%B8%83%E4%BC%9A.mp4` },
  { brand: "Ruegg", brandZh: "瑞士Ruegg", title: "Outdoor Surprise", titleZh: "Ruegg 户外Surprise", src: `${OSS}/%E8%A7%86%E9%A2%91/%E7%91%9E%E5%A3%ABRuegg%E8%A7%86%E9%A2%91/Surprise.mp4` },
  // 荷兰Element 4
  { brand: "Element 4", brandZh: "荷兰Element 4", title: "Sky T", titleZh: "Element 4 Sky T 燃气壁炉", src: `${OSS}/%E8%A7%86%E9%A2%91/%E8%8D%B7%E5%85%B0Emlement%204%E8%A7%86%E9%A2%91/%E7%87%83%E6%B0%94%E5%A3%81%E7%82%89%20%20/%20Sky%20T%20Medium%20%20.mp4` },
  { brand: "Element 4", brandZh: "荷兰Element 4", title: "Bidore 140", titleZh: "Element 4 Bidore 140", src: `${OSS}/%E8%A7%86%E9%A2%91/%E8%8D%B7%E5%85%B0Emlement%204%E8%A7%86%E9%A2%91/%E7%87%83%E6%B0%94%E5%A3%81%E7%82%89%20%20/Bidore%20140.mp4` },
  { brand: "Element 4", brandZh: "荷兰Element 4", title: "Club 240", titleZh: "Element 4 Club 240", src: `${OSS}/%E8%A7%86%E9%A2%91/%E8%8D%B7%E5%85%B0Emlement%204%E8%A7%86%E9%A2%91/%E7%87%83%E6%B0%94%E5%A3%81%E7%82%89%20%20/Club%20240.mp4` },
  { brand: "Element 4", brandZh: "荷兰Element 4", title: "Lucius 100", titleZh: "Element 4 Lucius 100 实拍", src: `${OSS}/%E8%A7%86%E9%A2%91/%E8%8D%B7%E5%85%B0Emlement%204%E8%A7%86%E9%A2%91/%E7%87%83%E6%B0%94%E5%A3%81%E7%82%89%20%20/Lucius100%E5%AE%9E%E6%8B%8D.mp4` },
  { brand: "Element 4", brandZh: "荷兰Element 4", title: "Modore 100E", titleZh: "Element 4 Modore 100E", src: `${OSS}/%E8%A7%86%E9%A2%91/%E8%8D%B7%E5%85%B0Emlement%204%E8%A7%86%E9%A2%91/%E7%87%83%E6%B0%94%E5%A3%81%E7%82%89%20%20/Modore%20100E.mp4` },
  { brand: "Element 4", brandZh: "荷兰Element 4", title: "Summum 100", titleZh: "Element 4 Summum 100", src: `${OSS}/%E8%A7%86%E9%A2%91/%E8%8D%B7%E5%85%B0Emlement%204%E8%A7%86%E9%A2%91/%E7%87%83%E6%B0%94%E5%A3%81%E7%82%89%20%20/Summum%20100.mp4` },
  // 西班牙Lacunza
  { brand: "Lacunza", brandZh: "西班牙Lacunza", title: "Lyon Expo", titleZh: "Lacunza 法国里昂展会", src: `${OSS}/%E8%A7%86%E9%A2%91/%E8%A5%BF%E7%8F%AD%E7%89%99Lacunza%20%E8%A7%86%E9%A2%91/%E5%93%81%E5%AE%A3/%E5%B1%95%E4%BC%9A1.mp4` },
];

const brandColors: Record<string, string> = {
  "Rais": "bg-blue-50 text-blue-700",
  "Haas+sohn": "bg-green-50 text-green-700",
  "Ruegg": "bg-purple-50 text-purple-700",
  "Element 4": "bg-amber-50 text-amber-700",
  "Lacunza": "bg-red-50 text-red-700",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata(lang, "videos");
}

export default async function VideosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const site = getSiteCopy(lang);

  return (
    <div>
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f]">
            {t.videos_title}
          </h1>
          <p className="mt-2 text-sm text-[#6e6e73]">
            {t.videos_desc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videoList.map((video, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-[#e5e5ea] card-hover"
            >
              <div className="aspect-video bg-black relative">
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="w-full h-full object-contain"
                  playsInline
                >
                  {t.videos_no_support}
                </video>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${brandColors[video.brand] || "bg-gray-50 text-gray-700"}`}>
                    {lang === "zh" ? video.brandZh : video.brand}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-[#1d1d1f]">
                  {lang === "zh" ? video.titleZh : lang === "en" ? video.title : `${site.wholesaleFactory} · ${t.videos_title}`}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
