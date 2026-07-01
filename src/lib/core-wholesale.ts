export const coreCategoryIds = new Set(["p3", "p4", "p7", "p9"]);

type Locale = "en" | "de" | "fr" | "it" | "es" | "ru" | "ja" | "zh" | "pt" | "ar";

type WholesaleConfig = {
  moq: number;
  sample: number;
  leadTime: string;
  size: string;
  keySpec: string;
  packing: string;
  packingSize?: string;
  grossWeight?: string;
  load20?: string;
  load40?: string;
  containerRows?: ContainerRow[];
};

type ContainerRow = {
  model: string;
  packingSize: string;
  grossWeight: string;
  load20: string;
  load40: string;
};

const configs: Record<string, WholesaleConfig> = {
  p3_14: { moq: 10, sample: 1, leadTime: "20–30 days", size: "600 / 800 / 1000 mm", keySpec: "3.5–6.5 L · 4–6 h", packing: "Export carton / wooden crate optional" },
  p3_15: {
    moq: 5,
    sample: 1,
    leadTime: "25–35 days",
    size: "600 / 800 / 1000 / 1200 / 1500 / 1800 mm customizable",
    keySpec: "Automatic ignition · flame failure protection · sensors · remote control",
    packing: "Protective foam + reinforced export carton / wooden crate optional",
    packingSize: "Based on standard length",
    grossWeight: "Based on standard length",
    load20: "Based on standard length",
    load40: "Based on standard length",
    containerRows: [
      { model: "600 mm", packingSize: "720 × 360 × 260 mm", grossWeight: "≈22 kg", load20: "≈360 pcs", load40: "≈880 pcs" },
      { model: "800 mm", packingSize: "920 × 360 × 260 mm", grossWeight: "≈27 kg", load20: "≈280 pcs", load40: "≈690 pcs" },
      { model: "1000 mm", packingSize: "1120 × 360 × 260 mm", grossWeight: "≈32 kg", load20: "≈230 pcs", load40: "≈565 pcs" },
      { model: "1200 mm", packingSize: "1320 × 360 × 260 mm", grossWeight: "≈36 kg", load20: "≈195 pcs", load40: "≈480 pcs" },
      { model: "1500 mm", packingSize: "1620 × 360 × 260 mm", grossWeight: "≈42 kg", load20: "≈160 pcs", load40: "≈390 pcs" },
      { model: "1800 mm", packingSize: "1920 × 360 × 260 mm", grossWeight: "≈48 kg", load20: "≈135 pcs", load40: "≈330 pcs" },
    ],
  },
  p3_16: { moq: 2, sample: 1, leadTime: "25–35 days", size: "1000–2400 mm customizable", keySpec: "Double-sided real flame", packing: "Knock-down export crate", packingSize: "2500 × 520 × 620 mm", grossWeight: "≈95 kg", load20: "≈70 pcs", load40: "≈170 pcs" },
  p3_17: { moq: 2, sample: 1, leadTime: "25–35 days", size: "1000–2200 mm customizable", keySpec: "Three-sided real flame", packing: "Wooden export crate", packingSize: "2300 × 620 × 680 mm", grossWeight: "≈105 kg", load20: "≈58 pcs", load40: "≈145 pcs" },
  p3_18: { moq: 20, sample: 1, leadTime: "15–25 days", size: "300–600 mm", keySpec: "0.5–1.5 L · manual burner", packing: "Individual carton", packingSize: "680 × 260 × 240 mm", grossWeight: "≈8 kg", load20: "≈1200 pcs", load40: "≈2850 pcs" },
  p3_19: { moq: 5, sample: 1, leadTime: "20–30 days", size: "500–1000 mm", keySpec: "Freestanding · no chimney", packing: "Export carton / crate", packingSize: "1120 × 520 × 760 mm", grossWeight: "≈45 kg", load20: "≈135 pcs", load40: "≈320 pcs" },
  p3_20: { moq: 5, sample: 1, leadTime: "20–30 days", size: "Ø600–1200 mm", keySpec: "Round real-flame fire bowl", packing: "Wooden export crate", packingSize: "1280 × 1280 × 620 mm", grossWeight: "≈85 kg", load20: "≈54 pcs", load40: "≈130 pcs" },
  p3_21: { moq: 2, sample: 1, leadTime: "25–35 days", size: "1200–2400 mm", keySpec: "Outdoor linear fire table", packing: "Wooden export crate", packingSize: "2500 × 900 × 760 mm", grossWeight: "≈145 kg", load20: "≈32 pcs", load40: "≈78 pcs" },
  p3_22: { moq: 1, sample: 1, leadTime: "30–40 days", size: "1200–2600 mm", keySpec: "Stone island + ethanol burner", packing: "Reinforced wooden crate", packingSize: "2700 × 980 × 920 mm", grossWeight: "≈260 kg", load20: "≈22 pcs", load40: "≈52 pcs" },
  p3_23: { moq: 1, sample: 1, leadTime: "30–45 days", size: "2000–6000 mm", keySpec: "Multi-burner project system", packing: "Sectional wooden crates", packingSize: "2200 × 680 × 620 mm / section", grossWeight: "≈120 kg / section", load20: "≈48 sections", load40: "≈116 sections" },
  p3_24: { moq: 3, sample: 1, leadTime: "25–35 days", size: "800–2000 mm", keySpec: "Frame + burner + glass guard", packing: "Export carton / crate", packingSize: "2100 × 420 × 360 mm", grossWeight: "≈55 kg", load20: "≈125 pcs", load40: "≈300 pcs" },
  p3_25: { moq: 10, sample: 1, leadTime: "20–30 days", size: "400–1600 mm", keySpec: "Private-label burner kit", packing: "Custom branded carton", packingSize: "1680 × 300 × 220 mm", grossWeight: "≈24 kg", load20: "≈430 pcs", load40: "≈1020 pcs" },
  p3_26: { moq: 2, sample: 1, leadTime: "30–40 days", size: "Ø800–1200 mm", keySpec: "Suspended sculptural fireplace", packing: "Custom wooden crate", packingSize: "1280 × 1280 × 1500 mm", grossWeight: "≈155 kg", load20: "≈22 pcs", load40: "≈54 pcs" },
  p4_70: {
    moq: 10,
    sample: 1,
    leadTime: "20–30 days",
    size: "600–3000 mm",
    keySpec: "220–240 V · water vapor · LED",
    packing: "Export carton / wooden crate optional",
    packingSize: "Based on standard length",
    grossWeight: "Based on standard length",
    load20: "Based on standard length",
    load40: "Based on standard length",
    containerRows: [
      { model: "600 mm", packingSize: "680 × 270 × 270 mm", grossWeight: "≈14 kg", load20: "≈484 pcs", load40: "≈1170 pcs" },
      { model: "700 mm", packingSize: "780 × 270 × 270 mm", grossWeight: "≈15 kg", load20: "≈422 pcs", load40: "≈1020 pcs" },
      { model: "800 mm", packingSize: "880 × 270 × 270 mm", grossWeight: "≈16 kg", load20: "≈374 pcs", load40: "≈904 pcs" },
      { model: "900 mm", packingSize: "980 × 270 × 270 mm", grossWeight: "≈17 kg", load20: "≈335 pcs", load40: "≈811 pcs" },
      { model: "1000 mm", packingSize: "1080 × 270 × 270 mm", grossWeight: "≈18 kg", load20: "≈304 pcs", load40: "≈736 pcs" },
      { model: "1200 mm", packingSize: "1280 × 270 × 270 mm", grossWeight: "≈21 kg", load20: "≈257 pcs", load40: "≈621 pcs" },
      { model: "1400 mm", packingSize: "1480 × 270 × 270 mm", grossWeight: "≈24 kg", load20: "≈222 pcs", load40: "≈537 pcs" },
      { model: "1500 mm", packingSize: "1580 × 270 × 270 mm", grossWeight: "≈26 kg", load20: "≈208 pcs", load40: "≈503 pcs" },
      { model: "1600 mm", packingSize: "1680 × 270 × 270 mm", grossWeight: "≈28 kg", load20: "≈195 pcs", load40: "≈473 pcs" },
      { model: "1800 mm", packingSize: "1880 × 270 × 270 mm", grossWeight: "≈32 kg", load20: "≈175 pcs", load40: "≈423 pcs" },
      { model: "2000 mm", packingSize: "2080 × 270 × 270 mm", grossWeight: "≈36 kg", load20: "≈158 pcs", load40: "≈382 pcs" },
      { model: "2400 mm", packingSize: "2480 × 270 × 270 mm", grossWeight: "≈42 kg", load20: "≈132 pcs", load40: "≈320 pcs" },
      { model: "2500 mm", packingSize: "2580 × 270 × 270 mm", grossWeight: "≈45 kg", load20: "≈127 pcs", load40: "≈308 pcs" },
      { model: "2800 mm", packingSize: "2880 × 270 × 270 mm", grossWeight: "≈52 kg", load20: "≈114 pcs", load40: "≈276 pcs" },
      { model: "3000 mm", packingSize: "3080 × 270 × 270 mm", grossWeight: "≈56 kg", load20: "≈106 pcs", load40: "≈258 pcs" },
    ],
  },
  p4_69: {
    moq: 10,
    sample: 1,
    leadTime: "20–30 days",
    size: "600–3000 mm",
    keySpec: "Double-sided water-vapor flame with glass panel",
    packing: "Export carton / wooden crate optional",
    packingSize: "Based on standard length",
    grossWeight: "Based on standard length",
    load20: "Based on standard length",
    load40: "Based on standard length",
    containerRows: [
      { model: "600 mm", packingSize: "680 × 270 × 270 mm", grossWeight: "≈14.7 kg", load20: "≈484 pcs", load40: "≈1170 pcs" },
      { model: "700 mm", packingSize: "780 × 270 × 270 mm", grossWeight: "≈15.75 kg", load20: "≈422 pcs", load40: "≈1020 pcs" },
      { model: "800 mm", packingSize: "880 × 270 × 270 mm", grossWeight: "≈16.8 kg", load20: "≈374 pcs", load40: "≈904 pcs" },
      { model: "900 mm", packingSize: "980 × 270 × 270 mm", grossWeight: "≈17.85 kg", load20: "≈335 pcs", load40: "≈811 pcs" },
      { model: "1000 mm", packingSize: "1080 × 270 × 270 mm", grossWeight: "≈18.9 kg", load20: "≈304 pcs", load40: "≈736 pcs" },
      { model: "1200 mm", packingSize: "1280 × 270 × 270 mm", grossWeight: "≈22.05 kg", load20: "≈257 pcs", load40: "≈621 pcs" },
      { model: "1400 mm", packingSize: "1480 × 270 × 270 mm", grossWeight: "≈25.2 kg", load20: "≈222 pcs", load40: "≈537 pcs" },
      { model: "1500 mm", packingSize: "1580 × 270 × 270 mm", grossWeight: "≈27.3 kg", load20: "≈208 pcs", load40: "≈503 pcs" },
      { model: "1600 mm", packingSize: "1680 × 270 × 270 mm", grossWeight: "≈29.4 kg", load20: "≈195 pcs", load40: "≈473 pcs" },
      { model: "1800 mm", packingSize: "1880 × 270 × 270 mm", grossWeight: "≈33.6 kg", load20: "≈175 pcs", load40: "≈423 pcs" },
      { model: "2000 mm", packingSize: "2080 × 270 × 270 mm", grossWeight: "≈37.8 kg", load20: "≈158 pcs", load40: "≈382 pcs" },
      { model: "2400 mm", packingSize: "2480 × 270 × 270 mm", grossWeight: "≈44.1 kg", load20: "≈132 pcs", load40: "≈320 pcs" },
      { model: "2500 mm", packingSize: "2580 × 270 × 270 mm", grossWeight: "≈47.25 kg", load20: "≈127 pcs", load40: "≈308 pcs" },
      { model: "2800 mm", packingSize: "2880 × 270 × 270 mm", grossWeight: "≈54.6 kg", load20: "≈114 pcs", load40: "≈276 pcs" },
      { model: "3000 mm", packingSize: "3080 × 270 × 270 mm", grossWeight: "≈58.8 kg", load20: "≈106 pcs", load40: "≈258 pcs" },
    ],
  },
  p4_68: { moq: 3, sample: 1, leadTime: "25–35 days", size: "1200–3000 mm", keySpec: "Panoramic water-vapor flame", packing: "Export carton / crate", packingSize: "1880 × 430 × 360 mm", grossWeight: "≈58 kg", load20: "≈185 pcs", load40: "≈440 pcs" },
  p4_67: { moq: 2, sample: 1, leadTime: "25–35 days", size: "1000–2400 mm", keySpec: "Three-sided 270° view", packing: "Wooden export crate", packingSize: "2200 × 620 × 620 mm", grossWeight: "≈96 kg", load20: "≈65 pcs", load40: "≈156 pcs" },
  p4_66: {
    moq: 10,
    sample: 1,
    leadTime: "20–30 days",
    size: "Ø300–650 mm",
    keySpec: "Round mist flame system",
    packing: "Export carton / wooden crate optional",
    packingSize: "Based on standard diameter",
    grossWeight: "Based on standard diameter",
    load20: "Based on standard diameter",
    load40: "Based on standard diameter",
    containerRows: [
      { model: "Ø300 mm", packingSize: "380 × 380 × 360 mm", grossWeight: "≈7 kg", load20: "≈461 pcs", load40: "≈1115 pcs" },
      { model: "Ø350 mm", packingSize: "430 × 430 × 360 mm", grossWeight: "≈8 kg", load20: "≈360 pcs", load40: "≈871 pcs" },
      { model: "Ø400 mm", packingSize: "480 × 480 × 360 mm", grossWeight: "≈9 kg", load20: "≈289 pcs", load40: "≈699 pcs" },
      { model: "Ø450 mm", packingSize: "530 × 530 × 360 mm", grossWeight: "≈10 kg", load20: "≈237 pcs", load40: "≈573 pcs" },
      { model: "Ø500 mm", packingSize: "580 × 580 × 360 mm", grossWeight: "≈11 kg", load20: "≈198 pcs", load40: "≈478 pcs" },
      { model: "Ø550 mm", packingSize: "630 × 630 × 360 mm", grossWeight: "≈12 kg", load20: "≈167 pcs", load40: "≈405 pcs" },
      { model: "Ø600 mm", packingSize: "680 × 680 × 360 mm", grossWeight: "≈13 kg", load20: "≈144 pcs", load40: "≈348 pcs" },
      { model: "Ø650 mm", packingSize: "730 × 730 × 360 mm", grossWeight: "≈14 kg", load20: "≈125 pcs", load40: "≈302 pcs" },
    ],
  },
  p4_65: { moq: 2, sample: 1, leadTime: "30–40 days", size: "Ø800–1200 mm", keySpec: "Suspended mist fireplace", packing: "Custom wooden crate", packingSize: "1280 × 1280 × 1480 mm", grossWeight: "≈145 kg", load20: "≈24 pcs", load40: "≈56 pcs" },
  p4_64: { moq: 2, sample: 1, leadTime: "25–35 days", size: "1200–3000 mm", keySpec: "Divider / screen structure", packing: "Sectional export crate", packingSize: "2200 × 560 × 620 mm / section", grossWeight: "≈95 kg / section", load20: "≈58 sections", load40: "≈138 sections" },
  p4_63: { moq: 2, sample: 1, leadTime: "30–40 days", size: "Ø1000–1800 mm", keySpec: "Circular art mist installation", packing: "Custom wooden crate", packingSize: "1900 × 420 × 1900 mm", grossWeight: "≈180 kg", load20: "≈18 pcs", load40: "≈42 pcs" },
  p4_62: { moq: 5, sample: 1, leadTime: "20–30 days", size: "800–2400 mm", keySpec: "Single-sided water-vapor flame", packing: "Export carton / crate", packingSize: "1680 × 360 × 300 mm", grossWeight: "≈42 kg", load20: "≈260 pcs", load40: "≈620 pcs" },
  p4_11: {
    moq: 10,
    sample: 1,
    leadTime: "20–30 days",
    size: "600–3000 mm",
    keySpec: "Smart control · LED · water vapor",
    packing: "Export carton / wooden crate optional",
    packingSize: "Based on standard length",
    grossWeight: "Based on standard length",
    load20: "Based on standard length",
    load40: "Based on standard length",
    containerRows: [
      { model: "600 mm", packingSize: "680 × 270 × 270 mm", grossWeight: "≈14 kg", load20: "≈484 pcs", load40: "≈1170 pcs" },
      { model: "700 mm", packingSize: "780 × 270 × 270 mm", grossWeight: "≈15 kg", load20: "≈422 pcs", load40: "≈1020 pcs" },
      { model: "800 mm", packingSize: "880 × 270 × 270 mm", grossWeight: "≈16 kg", load20: "≈374 pcs", load40: "≈904 pcs" },
      { model: "900 mm", packingSize: "980 × 270 × 270 mm", grossWeight: "≈17 kg", load20: "≈335 pcs", load40: "≈811 pcs" },
      { model: "1000 mm", packingSize: "1080 × 270 × 270 mm", grossWeight: "≈18 kg", load20: "≈304 pcs", load40: "≈736 pcs" },
      { model: "1200 mm", packingSize: "1280 × 270 × 270 mm", grossWeight: "≈21 kg", load20: "≈257 pcs", load40: "≈621 pcs" },
      { model: "1400 mm", packingSize: "1480 × 270 × 270 mm", grossWeight: "≈24 kg", load20: "≈222 pcs", load40: "≈537 pcs" },
      { model: "1500 mm", packingSize: "1580 × 270 × 270 mm", grossWeight: "≈26 kg", load20: "≈208 pcs", load40: "≈503 pcs" },
      { model: "1600 mm", packingSize: "1680 × 270 × 270 mm", grossWeight: "≈28 kg", load20: "≈195 pcs", load40: "≈473 pcs" },
      { model: "1800 mm", packingSize: "1880 × 270 × 270 mm", grossWeight: "≈32 kg", load20: "≈175 pcs", load40: "≈423 pcs" },
      { model: "2000 mm", packingSize: "2080 × 270 × 270 mm", grossWeight: "≈36 kg", load20: "≈158 pcs", load40: "≈382 pcs" },
      { model: "2400 mm", packingSize: "2480 × 270 × 270 mm", grossWeight: "≈42 kg", load20: "≈132 pcs", load40: "≈320 pcs" },
      { model: "2500 mm", packingSize: "2580 × 270 × 270 mm", grossWeight: "≈45 kg", load20: "≈127 pcs", load40: "≈308 pcs" },
      { model: "2800 mm", packingSize: "2880 × 270 × 270 mm", grossWeight: "≈52 kg", load20: "≈114 pcs", load40: "≈276 pcs" },
      { model: "3000 mm", packingSize: "3080 × 270 × 270 mm", grossWeight: "≈56 kg", load20: "≈106 pcs", load40: "≈258 pcs" },
    ],
  },
  p7_6: { moq: 10, sample: 1, leadTime: "20–30 days", size: "800–2400 mm", keySpec: "110–240 V · flame-only / heating option", packing: "Foam + export carton", packingSize: "1600 × 280 × 520 mm", grossWeight: "≈34 kg", load20: "≈260 pcs", load40: "≈620 pcs" },
  p7_7: { moq: 5, sample: 1, leadTime: "25–35 days", size: "1200–3000 mm", keySpec: "Panoramic flame screen · optional heat", packing: "Reinforced export carton", packingSize: "2200 × 320 × 620 mm", grossWeight: "≈58 kg", load20: "≈125 pcs", load40: "≈300 pcs" },
  p7_8: { moq: 20, sample: 1, leadTime: "20–30 days", size: "450–700 mm", keySpec: "Freestanding · plug-in", packing: "Individual export carton", packingSize: "760 × 420 × 690 mm", grossWeight: "≈22 kg", load20: "≈250 pcs", load40: "≈600 pcs" },
  p7_9: { moq: 20, sample: 1, leadTime: "20–30 days", size: "600–2400 mm", keySpec: "OEM core · control board · flame screen", packing: "Custom branded carton", packingSize: "1280 × 260 × 360 mm", grossWeight: "≈24 kg", load20: "≈520 pcs", load40: "≈1240 pcs" },
  p9_1: { moq: 3, sample: 1, leadTime: "25–35 days", size: "800–2400 mm", keySpec: "Holographic flame display · remote control", packing: "Flight case / wooden crate", packingSize: "1450 × 420 × 520 mm", grossWeight: "≈62 kg", load20: "≈170 pcs", load40: "≈410 pcs" },
  p9_2: { moq: 1, sample: 1, leadTime: "30–45 days", size: "Project-based", keySpec: "Projection system · custom flame media", packing: "Flight cases", packingSize: "720 × 520 × 420 mm / case", grossWeight: "≈38 kg / case", load20: "≈330 cases", load40: "≈790 cases" },
  p9_3: { moq: 1, sample: 1, leadTime: "30–45 days", size: "Modular 2–10 m+", keySpec: "Modular immersive flame wall", packing: "Sectional flight cases", packingSize: "980 × 680 × 520 mm / module", grossWeight: "≈55 kg / module", load20: "≈150 modules", load40: "≈360 modules" },
};

type CoreProductDetail = {
  eyebrow: string;
  title: string;
  description: string;
  specTitle: string;
  specRows: [string, string][];
  tradeTitle: string;
  tradeRows: [string, string][];
};

const coreProductDetails: Record<string, Partial<Record<Locale, CoreProductDetail>>> = {
  p3_15: {
    zh: {
      eyebrow: "自动酒精燃烧器 · 外贸批发资料",
      title: "面向品牌商和工程项目的自动生物乙醇燃烧器",
      description:
        "这款产品不是零售装饰品，而是用于壁龛、台面、岛台、酒店会所和定制壁炉结构的自动真火燃烧器。页面参数按海外批发采购、OEM/ODM 打样和工程报价场景整理，方便客户快速判断尺寸、控制、安全、包装和装柜条件。",
      specTitle: "建议给客户确认的核心技术参数",
      specRows: [
        ["产品类型", "嵌入式自动生物乙醇燃烧器 / 酒精壁炉核心模块"],
        ["常规长度", "600 / 800 / 1000 / 1200 / 1500 / 1800 mm，可按图纸微调"],
        ["燃料容量", "约 4–12 L，随长度、箱体深度和项目结构调整"],
        ["参考燃烧时间", "约 4–8 小时，受燃料容量、火焰档位和现场通风影响"],
        ["控制方式", "遥控器 + 面板按键，可按项目讨论智能控制接口"],
        ["安全配置", "液位检测、温度保护、异常状态保护和自动熄火逻辑"],
        ["主体材质", "304 不锈钢燃烧槽，外露面板可做黑色喷涂或拉丝饰面"],
        ["适用客户", "进口商、壁炉品牌、酒店工程、设计公司和当地安装商"],
      ],
      tradeTitle: "批发采购与打样建议",
      tradeRows: [
        ["起订方式", "建议 5 台起订；项目款可先按 1 台样品确认控制、火焰和包装"],
        ["报价资料", "请提供目标长度、数量、安装结构、目的港、认证要求和包装要求"],
        ["包装方案", "常规为珍珠棉防护 + 加厚出口纸箱；长尺寸或工程件建议加木箱"],
        ["贴牌支持", "支持铭牌、说明书、外箱标签、条码、控制面板语言和包装文件定制"],
        ["参数说明", "装柜表已按 600–1800 mm 标准长度分别估算，最终以实际包装尺寸和装柜图为准"],
      ],
    },
    en: {
      eyebrow: "Automatic Ethanol Burner · Wholesale Data",
      title: "Automatic bio ethanol burner for brands and project buyers",
      description:
        "This is not a retail decorative item. It is an automatic real-flame burner module for niches, counters, islands, hotel lounges, clubs, and custom fireplace structures. The data is organized for overseas wholesale quotation, OEM/ODM sampling, and project purchasing.",
      specTitle: "Core technical parameters to confirm",
      specRows: [
        ["Product type", "Built-in automatic bio ethanol burner / ethanol fireplace core module"],
        ["Standard lengths", "600 / 800 / 1000 / 1200 / 1500 / 1800 mm, adjustable by drawing"],
        ["Fuel capacity", "Approx. 4–12 L depending on length, box depth, and project structure"],
        ["Burning time", "Approx. 4–8 hours, depending on fuel volume, flame level, and ventilation"],
        ["Control", "Remote control + panel button; smart control interface can be discussed"],
        ["Safety", "Level detection, temperature protection, abnormal-state protection, auto shut-off"],
        ["Main material", "304 stainless steel burner tray with black coated or brushed visible panel"],
        ["Buyer type", "Importers, fireplace brands, hotel projects, design firms, local installers"],
      ],
      tradeTitle: "Wholesale purchasing notes",
      tradeRows: [
        ["Order basis", "MOQ 5 units; one paid sample can confirm control, flame, and packing"],
        ["Quotation data", "Send target length, quantity, installation structure, destination port, certification, and packing needs"],
        ["Packing", "Protective foam + reinforced export carton; wooden crate recommended for long or project units"],
        ["Private label", "Nameplate, manual, carton label, barcode, panel language, and packing documents available"],
        ["Loading note", "Container loading is estimated by each 600–1800 mm standard length and confirmed by final packing plan"],
      ],
    },
  },
  p4_11: {
    zh: {
      eyebrow: "M10 智能3D雾化壁炉 · 工厂批发资料",
      title: "按 M10 报价表整理的智能雾化壁炉批发页面",
      description:
        "M10 是面向海外经销商、设计公司、酒店工程和品牌客户的智能 3D 雾化壁炉系列。页面已按 600–3000 mm 全尺寸报价表整理，客户可以直接查看尺寸型号、批发价、零售参考价、产品尺寸、包装尺寸、毛重、木架加价和装柜参考，方便做进口采购、项目报价和 OEM/ODM 选型。",
      specTitle: "M10 报价对应核心参数",
      specRows: [
        ["产品类型", "智能 3D 雾化壁炉 / 水雾壁炉核心模块"],
        ["尺寸范围", "600 / 700 / 800 / 900 / 1000 / 1200 / 1400 / 1500 / 1600 / 1800 / 2000 / 2400 / 2500 / 2800 / 3000 mm"],
        ["产品截面", "深度 210 mm，高度 200 mm，长度按尺寸型号变化"],
        ["包装截面", "270 × 270 mm，包装长度按产品长度增加约 80 mm"],
        ["毛重范围", "约 14–56 kg，随长度增加"],
        ["木架包装", "可选木架加固包装，木架加价和重量已按尺寸型号单独列出"],
        ["适用客户", "海外进口商、壁炉品牌、室内设计项目、酒店会所工程和定制安装商"],
      ],
      tradeTitle: "报价、包装和采购说明",
      tradeRows: [
        ["价格口径", "尺寸报价按 M10 报价表人民币“批发价 起订量10”导入，页面自动换算各语种参考货币"],
        ["起订数量", "10 台起订；可先购买 1 台样品确认雾化火焰、控制方式、包装和安装细节"],
        ["包装方式", "常规为出口纸箱，长尺寸或工程采购建议选择木架加固包装"],
        ["定制支持", "支持长度组合、控制方式、外箱标签、说明书语言、品牌铭牌和项目包装文件定制"],
        ["最终确认", "最终成交价以确认尺寸、数量、包装方式、目的港、贸易条款和订单合同为准"],
      ],
    },
    en: {
      eyebrow: "M10 Smart 3D Water Vapor Fireplace · Factory Wholesale Data",
      title: "Smart mist fireplace wholesale page organized from the M10 quotation sheet",
      description:
        "M10 is a smart 3D water vapor fireplace series for overseas distributors, design firms, hotel projects, and private-label buyers. The page now follows the full 600–3000 mm quotation sheet, including size model, wholesale price, sample price, product dimensions, packing dimensions, gross weight, wooden-crate add-on, and container loading reference.",
      specTitle: "Core parameters linked to the M10 quotation",
      specRows: [
        ["Product type", "Smart 3D water vapor fireplace / mist fireplace core module"],
        ["Size range", "600 / 700 / 800 / 900 / 1000 / 1200 / 1400 / 1500 / 1600 / 1800 / 2000 / 2400 / 2500 / 2800 / 3000 mm"],
        ["Product section", "210 mm depth, 200 mm height, length varies by size model"],
        ["Packing section", "270 × 270 mm; packing length is about 80 mm longer than product length"],
        ["Gross weight range", "Approx. 14–56 kg depending on length"],
        ["Wooden crate packing", "Optional reinforced wooden-crate packing; add-on price and weight are listed by size model"],
        ["Buyer type", "Overseas importers, fireplace brands, interior design projects, hotel projects, and custom installers"],
      ],
      tradeTitle: "Quotation, packing, and purchasing notes",
      tradeRows: [
        ["Price basis", "Size prices are imported from the M10 quotation sheet in CNY as wholesale prices for MOQ 10 and converted by the website into reference currencies"],
        ["MOQ", "MOQ 10 units; one paid sample can be ordered first to confirm mist flame, control, packing, and installation details"],
        ["Packing", "Standard export carton; reinforced wooden crate is recommended for long sizes or project purchasing"],
        ["Customization", "Length combination, control method, carton label, manual language, brand nameplate, and project packing documents can be customized"],
        ["Final confirmation", "Final price depends on confirmed size, quantity, packing method, destination port, trade terms, and sales contract"],
      ],
    },
  },
};

const translatedNames: Partial<Record<Locale, Record<string, string>>> = {
  de: {
    p3_15:"Automatischer Bioethanol-Brenner",p3_16:"Doppelseitiger Bioethanol-Raumteiler",p3_17:"Dreiseitiger Bioethanol-Kamin",p3_18:"Tisch-Bioethanol-Kamin",p3_19:"Freistehender Bioethanol-Kamin",p3_20:"Runde Bioethanol-Feuerschale",p3_21:"Outdoor-Bioethanol-Feuertisch",p3_22:"Bioethanol-Kamin als Steininsel",p3_23:"Linearer Bioethanol-Kamin für Hotellobbys",p3_24:"Einbau-Nischenbausatz für Bioethanol-Kamine",p3_25:"OEM-Bioethanol-Brennerbausatz",p3_26:"Hängender Bioethanol-Kamin",p4_63:"Design-Wasserdampf-Kamin „Auge der Sonne“",p7_7:"Panorama-Elektrokamin",p7_8:"Freistehender Elektrokamin",p7_9:"OEM-Elektrokamin-Kernmodul",p9_1:"Holografisches Kamin-Displaymodul",p9_2:"Projektionskamin-System",p9_3:"Immersive Flammenbildwand",
  },
  fr: {
    p3_15:"Brûleur automatique au bioéthanol",p3_16:"Cheminée éthanol double face de séparation",p3_17:"Cheminée éthanol trois faces",p3_18:"Cheminée de table au bioéthanol",p3_19:"Cheminée éthanol autonome",p3_20:"Brasero rond au bioéthanol",p3_21:"Table brasero extérieure au bioéthanol",p3_22:"Cheminée îlot en pierre au bioéthanol",p3_23:"Cheminée éthanol linéaire pour hall d’hôtel",p3_24:"Kit de niche encastrable au bioéthanol",p3_25:"Kit brûleur bioéthanol OEM",p3_26:"Cheminée suspendue au bioéthanol",p4_63:"Cheminée à brume « Œil du soleil »",p7_7:"Cheminée électrique panoramique",p7_8:"Poêle électrique autonome",p7_9:"Module central de cheminée électrique OEM",p9_1:"Module d’affichage de cheminée holographique",p9_2:"Système de cheminée par projection",p9_3:"Mur d’images de flammes immersif",
  },
  it: {
    p3_15:"Bruciatore automatico a bioetanolo",p3_16:"Camino divisorio bifacciale a bioetanolo",p3_17:"Camino a bioetanolo su tre lati",p3_18:"Camino da tavolo a bioetanolo",p3_19:"Camino a bioetanolo freestanding",p3_20:"Braciere rotondo a bioetanolo",p3_21:"Tavolo fuoco da esterno a bioetanolo",p3_22:"Camino a isola in pietra a bioetanolo",p3_23:"Camino lineare a bioetanolo per hall hotel",p3_24:"Kit camino a nicchia da incasso a bioetanolo",p3_25:"Kit bruciatore a bioetanolo OEM",p3_26:"Camino sospeso a bioetanolo",p4_63:"Camino a nebbia «Occhio del Sole»",p7_7:"Camino elettrico panoramico",p7_8:"Camino elettrico freestanding",p7_9:"Modulo centrale per camino elettrico OEM",p9_1:"Modulo display per camino olografico",p9_2:"Sistema camino a proiezione",p9_3:"Parete immersiva con immagini di fiamma",
  },
  es: {
    p3_15:"Quemador automático de bioetanol",p3_16:"Chimenea divisoria de bioetanol de doble cara",p3_17:"Chimenea de bioetanol de tres caras",p3_18:"Chimenea de mesa de bioetanol",p3_19:"Chimenea de bioetanol independiente",p3_20:"Brasero redondo de bioetanol",p3_21:"Mesa de fuego exterior de bioetanol",p3_22:"Chimenea isla de piedra de bioetanol",p3_23:"Chimenea lineal de bioetanol para vestíbulo de hotel",p3_24:"Kit de nicho empotrable de bioetanol",p3_25:"Kit de quemador de bioetanol OEM",p3_26:"Chimenea suspendida de bioetanol",p4_63:"Chimenea de niebla «Ojo del Sol»",p7_7:"Chimenea eléctrica panorámica",p7_8:"Chimenea eléctrica independiente",p7_9:"Módulo central de chimenea eléctrica OEM",p9_1:"Módulo de visualización de chimenea holográfica",p9_2:"Sistema de chimenea de proyección",p9_3:"Muro inmersivo de imágenes de llamas",
  },
  pt: {
    p3_15:"Queimador automático a bioetanol",p3_16:"Lareira divisória dupla face a bioetanol",p3_17:"Lareira a bioetanol de três faces",p3_18:"Lareira de mesa a bioetanol",p3_19:"Lareira independente a bioetanol",p3_20:"Braseiro redondo a bioetanol",p3_21:"Mesa de fogo exterior a bioetanol",p3_22:"Lareira ilha de pedra a bioetanol",p3_23:"Lareira linear a bioetanol para lobby de hotel",p3_24:"Kit de nicho embutido a bioetanol",p3_25:"Kit queimador a bioetanol OEM",p3_26:"Lareira suspensa a bioetanol",p4_63:"Lareira de névoa «Olho do Sol»",p7_7:"Lareira elétrica panorâmica",p7_8:"Lareira elétrica independente",p7_9:"Módulo central de lareira elétrica OEM",p9_1:"Módulo de exibição de lareira holográfica",p9_2:"Sistema de lareira por projeção",p9_3:"Parede imersiva de imagens de chama",
  },
  ru: {
    p3_15:"Автоматическая горелка на биоэтаноле",p3_16:"Двусторонний биокамин-перегородка",p3_17:"Трёхсторонний биокамин",p3_18:"Настольный биокамин",p3_19:"Отдельностоящий биокамин",p3_20:"Круглая чаша на биоэтаноле",p3_21:"Уличный стол-огонь на биоэтаноле",p3_22:"Островной биокамин из камня",p3_23:"Линейный биокамин для холла гостиницы",p3_24:"Комплект встраиваемого биокамина для ниши",p3_25:"OEM-комплект горелки на биоэтаноле",p3_26:"Подвесной биокамин",p4_63:"Тумановый камин «Глаз Солнца»",p7_7:"Панорамный электрокамин",p7_8:"Отдельностоящий электрокамин",p7_9:"OEM-модуль электрокамина",p9_1:"Модуль голографического камина",p9_2:"Проекционная каминная система",p9_3:"Иммерсивная стена с изображением пламени",
  },
  ja: {
    p3_15:"自動バイオエタノールバーナー",p3_16:"両面式バイオエタノール暖炉パーティション",p3_17:"三面式バイオエタノール暖炉",p3_18:"卓上バイオエタノール暖炉",p3_19:"独立式バイオエタノール暖炉",p3_20:"円形バイオエタノール火鉢",p3_21:"屋外用バイオエタノールファイヤーテーブル",p3_22:"石材アイランド型バイオエタノール暖炉",p3_23:"ホテルロビー用リニア型バイオエタノール暖炉",p3_24:"埋込ニッチ型バイオエタノール暖炉キット",p3_25:"OEMバイオエタノールバーナーキット",p3_26:"吊り下げ式バイオエタノール暖炉",p4_63:"「太陽の眼」ミスト暖炉",p7_7:"パノラマ電気暖炉",p7_8:"独立式電気暖炉",p7_9:"OEM電気暖炉コアモジュール",p9_1:"ホログラフィック暖炉表示モジュール",p9_2:"投影式暖炉システム",p9_3:"没入型炎映像ウォール",
  },
  ar: {
    p3_15:"موقد أوتوماتيكي بالإيثانول الحيوي",p3_16:"مدفأة إيثانول مزدوجة كفاصل",p3_17:"مدفأة إيثانول ثلاثية الجوانب",p3_18:"مدفأة إيثانول للطاولة",p3_19:"مدفأة إيثانول مستقلة",p3_20:"وعاء نار دائري بالإيثانول",p3_21:"طاولة نار خارجية بالإيثانول",p3_22:"مدفأة إيثانول جزيرية من الحجر",p3_23:"مدفأة إيثانول خطية لبهو الفندق",p3_24:"طقم مدفأة إيثانول مدمجة للتجويف",p3_25:"طقم موقد إيثانول OEM",p3_26:"مدفأة إيثانول معلقة",p4_63:"مدفأة ضباب «عين الشمس»",p7_7:"مدفأة كهربائية بانورامية",p7_8:"مدفأة كهربائية مستقلة",p7_9:"وحدة مدفأة كهربائية OEM",p9_1:"وحدة عرض مدفأة هولوغرافية",p9_2:"نظام مدفأة بالإسقاط",p9_3:"جدار صور لهب غامر",
  },
};

const copy: Record<Locale, {
  wholesaleOnly: string; factoryPrice: string; indicative: string; moq: string; sample: string;
  leadTime: string; trade: string; requestQuote: string; whatsapp: string; specs: string;
  size: string; keySpec: string; packing: string; voltage: string; voltageValue: string;
  oem: string; oemText: string; applications: string; applicationsText: string; quality: string;
  qualityText: string; terms: string; payment: string; paymentValue: string; warranty: string;
  inspection: string; certification: string; note: string; workflow: string;
  steps: [string, string][]; faq: string; faqs: [string, string][];
}> = {
  en: { wholesaleOnly:"Wholesale only · Factory direct · No retail",factoryPrice:"Indicative wholesale price",indicative:"Final quotation depends on specification, quantity, packaging, certification, and trade terms.",moq:"MOQ",sample:"Sample order",leadTime:"Production lead time",trade:"Trade terms",requestQuote:"Request formal wholesale quote",whatsapp:"WhatsApp wholesale inquiry",specs:"Wholesale specifications",size:"Standard / custom size",keySpec:"Core configuration",packing:"Export packing",voltage:"Power / fuel",voltageValue:"Configured by product and destination market",oem:"OEM/ODM customization",oemText:"Custom size, structure, finish, logo, manual, control system, and export packaging for overseas brands and project buyers.",applications:"Recommended applications",applicationsText:"Suitable for villas, hotels, clubs, restaurants, showrooms, retail spaces, and controlled commercial projects according to product type.",quality:"Sample and quality approval",qualityText:"One sample can be supplied before mass production. Appearance, function, packaging, and order specifications are confirmed before batch production.",terms:"Wholesale order terms",payment:"Payment",paymentValue:"30% deposit / 70% before shipment",warranty:"Warranty",inspection:"Inspection",certification:"Certification",note:"The displayed dimensions, configuration, packing, and price are preliminary purchasing references. Final data follow the approved drawing, sample, and sales contract.",workflow:"Wholesale project workflow",steps:[["1. Requirement","Send model, quantity, destination, size, and customization needs."],["2. Quotation","We confirm configuration, price, lead time, packing, and trade terms."],["3. Sample / production","Approve the sample or drawing before batch production and inspection."],["4. Delivery","We provide export packing, shipping documents, manuals, and installation support."]],faq:"Wholesale FAQ",faqs:[["Can the product carry our brand?","Yes. Private label, nameplate, manual, carton, barcode, and selected appearance details can be customized."],["Is one sample available?","Yes. A paid sample is available for function, finish, and packaging approval before a bulk order."],["Are the displayed parameters final?","No. They are preliminary reference values and must be confirmed against the approved sample and order sheet."],["How is the final wholesale price calculated?","It depends on model, dimensions, quantity, materials, control options, packaging, certification, and Incoterms."]]},
  zh: { wholesaleOnly:"仅限批发 · 厂家直供 · 不做零售",factoryPrice:"参考批发价",indicative:"最终报价根据规格、数量、包装、认证及贸易条款确认。",moq:"最低起订量",sample:"样品订单",leadTime:"量产交期",trade:"贸易条款",requestQuote:"索取正式批发报价",whatsapp:"WhatsApp 批发询价",specs:"批发产品参数",size:"标准 / 定制尺寸",keySpec:"核心配置",packing:"出口包装",voltage:"电源 / 燃料",voltageValue:"根据产品类型和目的国市场配置",oem:"OEM/ODM 定制服务",oemText:"面向海外品牌商、进口商和工程采购，支持尺寸、结构、饰面、铭牌、说明书、控制系统和出口包装定制。",applications:"推荐应用场景",applicationsText:"根据产品类型适用于别墅、酒店、会所、餐厅、展厅、商业零售空间及受控工程项目。",quality:"样品与质量确认",qualityText:"量产前可提供 1 台付费样品，确认外观、功能、包装和订单规格后再进入批量生产。",terms:"批发订单条件",payment:"付款方式",paymentValue:"30% 定金 / 发货前付清 70%",warranty:"质保期",inspection:"验货",certification:"认证",note:"页面展示的尺寸、配置、包装和价格为前期采购参考，最终数据以确认图纸、样品和销售合同为准。",workflow:"批发项目流程",steps:[["1. 需求确认","提供型号、数量、目的地、尺寸和定制要求。"],["2. 正式报价","确认配置、价格、交期、包装及贸易条款。"],["3. 样品 / 生产","确认样品或图纸后进入批量生产和质量检查。"],["4. 出口交付","提供出口包装、运输文件、说明书和安装支持。"]],faq:"批发采购常见问题",faqs:[["可以贴客户自己的品牌吗？","可以，支持私有铭牌、说明书、纸箱、条码和部分外观细节定制。"],["可以先买一台样品吗？","可以，批量下单前可购买付费样品确认功能、饰面和包装。"],["页面参数是最终参数吗？","不是，页面参数为前期参考，最终以确认样品和订单规格书为准。"],["最终批发价如何计算？","根据型号、尺寸、数量、材料、控制配置、包装、认证和贸易条款计算。"]]},
  de: { wholesaleOnly:"Nur für Großhandel · Direkt ab Werk · Kein Einzelhandel",factoryPrice:"Unverbindlicher Großhandelspreis",indicative:"Das endgültige Angebot richtet sich nach Spezifikation, Menge, Verpackung, Zertifizierung und Lieferbedingungen.",moq:"Mindestbestellmenge",sample:"Musterbestellung",leadTime:"Produktionszeit",trade:"Lieferbedingungen",requestQuote:"Formelles Großhandelsangebot anfordern",whatsapp:"Großhandelsanfrage per WhatsApp",specs:"Großhandelsspezifikationen",size:"Standard- / Sondermaß",keySpec:"Kernkonfiguration",packing:"Exportverpackung",voltage:"Strom / Brennstoff",voltageValue:"Je nach Produkt und Zielmarkt konfiguriert",oem:"OEM/ODM-Anpassung",oemText:"Maße, Konstruktion, Oberfläche, Logo, Anleitung, Steuerung und Exportverpackung für internationale Marken und Projekte.",applications:"Empfohlene Anwendungen",applicationsText:"Je nach Produkttyp geeignet für Villen, Hotels, Clubs, Restaurants, Ausstellungen und Gewerbeprojekte.",quality:"Muster- und Qualitätsfreigabe",qualityText:"Vor der Serienfertigung ist ein kostenpflichtiges Muster zur Freigabe von Funktion, Oberfläche und Verpackung möglich.",terms:"Großhandelskonditionen",payment:"Zahlung",paymentValue:"30 % Anzahlung / 70 % vor Versand",warranty:"Garantie",inspection:"Prüfung",certification:"Zertifizierung",note:"Maße, Konfiguration, Verpackung und Preis sind vorläufige Einkaufswerte. Endgültig gelten freigegebene Zeichnung, Muster und Vertrag.",workflow:"Ablauf des Großhandelsprojekts",steps:[["1. Anfrage","Modell, Menge, Zielort, Maße und Anpassungsbedarf senden."],["2. Angebot","Konfiguration, Preis, Produktionszeit, Verpackung und Lieferbedingungen bestätigen."],["3. Muster / Fertigung","Muster oder Zeichnung vor Serienfertigung und Prüfung freigeben."],["4. Lieferung","Exportverpackung, Dokumente, Anleitung und Montagesupport bereitstellen."]],faq:"FAQ für Großhandel",faqs:[["Ist Private Label möglich?","Ja. Typenschild, Anleitung, Karton, Barcode und ausgewählte Details sind anpassbar."],["Ist ein Muster möglich?","Ja, ein kostenpflichtiges Muster kann vor der Großbestellung geprüft werden."],["Sind die Daten endgültig?","Nein. Endgültig gelten freigegebenes Muster und Auftragsspezifikation."],["Wie entsteht der Endpreis?","Nach Modell, Maß, Menge, Material, Steuerung, Verpackung, Zertifizierung und Incoterms."]]},
  fr: { wholesaleOnly:"Vente en gros uniquement · Direct usine · Pas de détail",factoryPrice:"Prix grossiste indicatif",indicative:"Le devis final dépend des spécifications, de la quantité, de l’emballage, des certifications et des Incoterms.",moq:"Commande minimale",sample:"Commande d’échantillon",leadTime:"Délai de production",trade:"Incoterms",requestQuote:"Demander un devis grossiste",whatsapp:"Demande grossiste sur WhatsApp",specs:"Spécifications grossistes",size:"Dimensions standard / sur mesure",keySpec:"Configuration principale",packing:"Emballage export",voltage:"Alimentation / combustible",voltageValue:"Configuré selon le produit et le marché",oem:"Personnalisation OEM/ODM",oemText:"Dimensions, structure, finition, logo, notice, commande et emballage export pour marques et projets internationaux.",applications:"Applications recommandées",applicationsText:"Selon le produit : villas, hôtels, clubs, restaurants, showrooms et projets commerciaux contrôlés.",quality:"Échantillon et validation qualité",qualityText:"Un échantillon payant permet de valider fonction, finition et emballage avant la série.",terms:"Conditions de vente en gros",payment:"Paiement",paymentValue:"30 % d’acompte / 70 % avant expédition",warranty:"Garantie",inspection:"Inspection",certification:"Certification",note:"Dimensions, configuration, emballage et prix sont indicatifs. Les données finales suivent le plan, l’échantillon et le contrat approuvés.",workflow:"Processus du projet grossiste",steps:[["1. Besoin","Envoyer modèle, quantité, destination, dimensions et personnalisation."],["2. Devis","Confirmer configuration, prix, délai, emballage et Incoterms."],["3. Échantillon / production","Valider l’échantillon ou le plan avant production et contrôle."],["4. Livraison","Emballage export, documents, notices et assistance de pose."]],faq:"FAQ grossiste",faqs:[["La marque privée est-elle possible ?","Oui : plaque, notice, carton, code-barres et certains détails sont personnalisables."],["Un échantillon est-il disponible ?","Oui, un échantillon payant est disponible avant la commande en volume."],["Les données affichées sont-elles définitives ?","Non, elles doivent être confirmées par l’échantillon et la fiche de commande."],["Comment le prix final est-il calculé ?","Selon modèle, dimensions, quantité, matériaux, options, emballage, certification et Incoterms."]]},
  it: { wholesaleOnly:"Solo ingrosso · Direttamente dalla fabbrica · Nessuna vendita al dettaglio",factoryPrice:"Prezzo all’ingrosso indicativo",indicative:"Il preventivo finale dipende da specifiche, quantità, imballo, certificazioni e condizioni commerciali.",moq:"Ordine minimo",sample:"Ordine campione",leadTime:"Tempi di produzione",trade:"Condizioni commerciali",requestQuote:"Richiedi preventivo all’ingrosso",whatsapp:"Richiesta ingrosso su WhatsApp",specs:"Specifiche all’ingrosso",size:"Dimensioni standard / su misura",keySpec:"Configurazione principale",packing:"Imballo export",voltage:"Alimentazione / combustibile",voltageValue:"Configurato secondo prodotto e mercato",oem:"Personalizzazione OEM/ODM",oemText:"Dimensioni, struttura, finitura, logo, manuale, controllo e imballo export per marchi e progetti internazionali.",applications:"Applicazioni consigliate",applicationsText:"Secondo il prodotto: ville, hotel, club, ristoranti, showroom e progetti commerciali controllati.",quality:"Campione e approvazione qualità",qualityText:"È disponibile un campione a pagamento per approvare funzione, finitura e imballo prima della serie.",terms:"Condizioni dell’ordine all’ingrosso",payment:"Pagamento",paymentValue:"30% di acconto / 70% prima della spedizione",warranty:"Garanzia",inspection:"Ispezione",certification:"Certificazione",note:"Dimensioni, configurazione, imballo e prezzo sono indicativi. I dati finali seguono disegno, campione e contratto approvati.",workflow:"Processo del progetto all’ingrosso",steps:[["1. Requisiti","Inviare modello, quantità, destinazione, dimensioni e personalizzazione."],["2. Preventivo","Confermare configurazione, prezzo, tempi, imballo e condizioni."],["3. Campione / produzione","Approvare campione o disegno prima della produzione e ispezione."],["4. Consegna","Imballo export, documenti, manuali e supporto installazione."]],faq:"FAQ ingrosso",faqs:[["È possibile il private label?","Sì. Targhetta, manuale, cartone, barcode e dettagli selezionati sono personalizzabili."],["È disponibile un campione?","Sì, è disponibile un campione a pagamento prima dell’ordine in volume."],["I dati sono definitivi?","No, vanno confermati con campione e scheda d’ordine approvati."],["Come si calcola il prezzo finale?","Secondo modello, dimensioni, quantità, materiali, opzioni, imballo, certificazioni e Incoterms."]]},
  es: { wholesaleOnly:"Solo venta al por mayor · Directo de fábrica · Sin venta minorista",factoryPrice:"Precio mayorista orientativo",indicative:"La cotización final depende de especificaciones, cantidad, embalaje, certificación y términos comerciales.",moq:"Pedido mínimo",sample:"Pedido de muestra",leadTime:"Plazo de producción",trade:"Términos comerciales",requestQuote:"Solicitar cotización mayorista",whatsapp:"Consulta mayorista por WhatsApp",specs:"Especificaciones mayoristas",size:"Medida estándar / personalizada",keySpec:"Configuración principal",packing:"Embalaje de exportación",voltage:"Alimentación / combustible",voltageValue:"Configurado según producto y mercado",oem:"Personalización OEM/ODM",oemText:"Medidas, estructura, acabado, logotipo, manual, control y embalaje de exportación para marcas y proyectos internacionales.",applications:"Aplicaciones recomendadas",applicationsText:"Según el producto: villas, hoteles, clubes, restaurantes, showrooms y proyectos comerciales controlados.",quality:"Muestra y aprobación de calidad",qualityText:"Se ofrece una muestra pagada para aprobar función, acabado y embalaje antes de la producción.",terms:"Condiciones de venta mayorista",payment:"Pago",paymentValue:"30 % de anticipo / 70 % antes del envío",warranty:"Garantía",inspection:"Inspección",certification:"Certificación",note:"Dimensiones, configuración, embalaje y precio son referencias. Los datos finales siguen el plano, muestra y contrato aprobados.",workflow:"Proceso del proyecto mayorista",steps:[["1. Requisitos","Enviar modelo, cantidad, destino, medidas y personalización."],["2. Cotización","Confirmar configuración, precio, plazo, embalaje y términos."],["3. Muestra / producción","Aprobar muestra o plano antes de producción e inspección."],["4. Entrega","Embalaje, documentos, manuales y soporte de instalación."]],faq:"Preguntas frecuentes mayoristas",faqs:[["¿Se admite marca privada?","Sí. Placa, manual, caja, código de barras y detalles seleccionados son personalizables."],["¿Hay una muestra disponible?","Sí, se ofrece una muestra pagada antes del pedido al por mayor."],["¿Los datos son definitivos?","No, deben confirmarse con la muestra y la hoja de pedido."],["¿Cómo se calcula el precio final?","Según modelo, dimensiones, cantidad, materiales, opciones, embalaje, certificación e Incoterms."]]},
  pt: { wholesaleOnly:"Somente atacado · Direto da fábrica · Sem varejo",factoryPrice:"Preço de atacado indicativo",indicative:"A cotação final depende das especificações, quantidade, embalagem, certificação e termos comerciais.",moq:"Pedido mínimo",sample:"Pedido de amostra",leadTime:"Prazo de produção",trade:"Termos comerciais",requestQuote:"Solicitar cotação de atacado",whatsapp:"Consulta de atacado pelo WhatsApp",specs:"Especificações de atacado",size:"Tamanho padrão / personalizado",keySpec:"Configuração principal",packing:"Embalagem de exportação",voltage:"Alimentação / combustível",voltageValue:"Configurado conforme produto e mercado",oem:"Personalização OEM/ODM",oemText:"Tamanho, estrutura, acabamento, logotipo, manual, controle e embalagem para marcas e projetos internacionais.",applications:"Aplicações recomendadas",applicationsText:"Conforme o produto: moradias, hotéis, clubes, restaurantes, showrooms e projetos comerciais controlados.",quality:"Amostra e aprovação de qualidade",qualityText:"Uma amostra paga pode ser fornecida para aprovar função, acabamento e embalagem antes da produção.",terms:"Condições do pedido no atacado",payment:"Pagamento",paymentValue:"30% de sinal / 70% antes do embarque",warranty:"Garantia",inspection:"Inspeção",certification:"Certificação",note:"Dimensões, configuração, embalagem e preço são referências. Os dados finais seguem desenho, amostra e contrato aprovados.",workflow:"Processo do projeto de atacado",steps:[["1. Requisitos","Enviar modelo, quantidade, destino, tamanho e personalização."],["2. Cotação","Confirmar configuração, preço, prazo, embalagem e termos."],["3. Amostra / produção","Aprovar amostra ou desenho antes da produção e inspeção."],["4. Entrega","Embalagem, documentos, manuais e suporte de instalação."]],faq:"Perguntas frequentes de atacado",faqs:[["É possível marca própria?","Sim. Placa, manual, caixa, código de barras e detalhes selecionados são personalizáveis."],["Há amostra disponível?","Sim, uma amostra paga está disponível antes do pedido em volume."],["Os dados são finais?","Não, devem ser confirmados pela amostra e ficha do pedido."],["Como é calculado o preço final?","Conforme modelo, dimensões, quantidade, materiais, opções, embalagem, certificação e Incoterms."]]},
  ru: { wholesaleOnly:"Только оптом · Напрямую с завода · Без розницы",factoryPrice:"Ориентировочная оптовая цена",indicative:"Итоговая цена зависит от характеристик, количества, упаковки, сертификации и условий поставки.",moq:"Минимальный заказ",sample:"Заказ образца",leadTime:"Срок производства",trade:"Условия поставки",requestQuote:"Запросить оптовое предложение",whatsapp:"Оптовый запрос в WhatsApp",specs:"Оптовые характеристики",size:"Стандартный / заказной размер",keySpec:"Основная конфигурация",packing:"Экспортная упаковка",voltage:"Питание / топливо",voltageValue:"По изделию и рынку назначения",oem:"Настройка OEM/ODM",oemText:"Размеры, конструкция, отделка, логотип, инструкция, управление и упаковка для международных брендов и проектов.",applications:"Рекомендуемое применение",applicationsText:"По типу изделия: виллы, гостиницы, клубы, рестораны, шоурумы и контролируемые коммерческие проекты.",quality:"Образец и контроль качества",qualityText:"Платный образец позволяет утвердить функцию, отделку и упаковку до серийного производства.",terms:"Условия оптового заказа",payment:"Оплата",paymentValue:"30% предоплата / 70% до отгрузки",warranty:"Гарантия",inspection:"Инспекция",certification:"Сертификация",note:"Размеры, конфигурация, упаковка и цена являются предварительными. Итоговые данные определяются чертежом, образцом и договором.",workflow:"Этапы оптового проекта",steps:[["1. Требования","Отправить модель, количество, страну, размеры и доработки."],["2. Предложение","Подтвердить комплектацию, цену, срок, упаковку и условия."],["3. Образец / производство","Утвердить образец или чертёж до производства и проверки."],["4. Поставка","Экспортная упаковка, документы, инструкции и поддержка монтажа."]],faq:"Оптовые вопросы",faqs:[["Доступен private label?","Да. Настраиваются шильдик, инструкция, коробка, штрихкод и отдельные детали."],["Доступен образец?","Да, платный образец доступен до оптового заказа."],["Характеристики окончательные?","Нет, их подтверждают утверждённый образец и заказ."],["Как рассчитывается цена?","По модели, размерам, количеству, материалам, опциям, упаковке, сертификации и Incoterms."]]},
  ja: { wholesaleOnly:"卸売専用・工場直販・小売不可",factoryPrice:"参考卸売価格",indicative:"最終見積は仕様、数量、梱包、認証、取引条件により決定します。",moq:"最低注文数量",sample:"サンプル注文",leadTime:"量産納期",trade:"取引条件",requestQuote:"正式な卸売見積を依頼",whatsapp:"WhatsAppで卸売問い合わせ",specs:"卸売製品仕様",size:"標準 / 特注サイズ",keySpec:"主要仕様",packing:"輸出梱包",voltage:"電源 / 燃料",voltageValue:"製品と仕向市場に応じて設定",oem:"OEM/ODMカスタマイズ",oemText:"海外ブランドとプロジェクト向けに寸法、構造、仕上げ、ロゴ、説明書、制御、輸出梱包を特注できます。",applications:"推奨用途",applicationsText:"製品タイプに応じて住宅、ホテル、クラブ、レストラン、ショールーム、管理された商業施設に適します。",quality:"サンプル・品質承認",qualityText:"量産前に有償サンプルで機能、仕上げ、梱包を承認できます。",terms:"卸売注文条件",payment:"支払条件",paymentValue:"30%前金 / 出荷前に残金70%",warranty:"保証",inspection:"検品",certification:"認証",note:"表示寸法、仕様、梱包、価格は初期参考値です。最終データは承認図面、サンプル、契約に従います。",workflow:"卸売プロジェクトの流れ",steps:[["1. 要件確認","型式、数量、仕向地、寸法、特注内容を送付。"],["2. 見積","仕様、価格、納期、梱包、取引条件を確認。"],["3. サンプル / 生産","サンプルまたは図面承認後に量産・検品。"],["4. 納品","輸出梱包、書類、説明書、設置支援を提供。"]],faq:"卸売FAQ",faqs:[["自社ブランドにできますか？","はい。銘板、説明書、箱、バーコード、一部外観を特注できます。"],["サンプルはありますか？","はい。量産前に有償サンプルを確認できます。"],["表示仕様は確定ですか？","いいえ。承認サンプルと注文仕様書で確定します。"],["最終価格はどう決まりますか？","型式、寸法、数量、材料、オプション、梱包、認証、取引条件で決定します。"]]},
  ar: { wholesaleOnly:"للبيع بالجملة فقط · مباشرة من المصنع · بدون تجزئة",factoryPrice:"سعر جملة استرشادي",indicative:"يتحدد العرض النهائي حسب المواصفات والكمية والتغليف والشهادات وشروط التجارة.",moq:"الحد الأدنى للطلب",sample:"طلب عينة",leadTime:"مدة الإنتاج",trade:"شروط التجارة",requestQuote:"طلب عرض جملة رسمي",whatsapp:"استفسار جملة عبر واتساب",specs:"مواصفات الجملة",size:"مقاس قياسي / مخصص",keySpec:"التكوين الرئيسي",packing:"تغليف التصدير",voltage:"الطاقة / الوقود",voltageValue:"حسب المنتج وسوق الوجهة",oem:"تخصيص OEM/ODM",oemText:"تخصيص المقاس والهيكل والتشطيب والشعار والدليل والتحكم والتغليف للعلامات والمشروعات الدولية.",applications:"الاستخدامات الموصى بها",applicationsText:"حسب نوع المنتج: الفلل والفنادق والنوادي والمطاعم وصالات العرض والمشروعات التجارية الخاضعة للإدارة.",quality:"العينة واعتماد الجودة",qualityText:"تتوفر عينة مدفوعة لاعتماد الوظيفة والتشطيب والتغليف قبل الإنتاج.",terms:"شروط طلب الجملة",payment:"الدفع",paymentValue:"دفعة مقدمة 30% / 70% قبل الشحن",warranty:"الضمان",inspection:"الفحص",certification:"الشهادات",note:"الأبعاد والتكوين والتغليف والسعر المعروضة مراجع أولية. البيانات النهائية حسب الرسم والعينة والعقد المعتمد.",workflow:"مراحل مشروع الجملة",steps:[["1. المتطلبات","إرسال الموديل والكمية والوجهة والمقاس والتخصيص."],["2. العرض","تأكيد التكوين والسعر والمدة والتغليف والشروط."],["3. العينة / الإنتاج","اعتماد العينة أو الرسم قبل الإنتاج والفحص."],["4. التسليم","تغليف التصدير والمستندات والأدلة ودعم التركيب."]],faq:"الأسئلة الشائعة للجملة",faqs:[["هل تتوفر علامة خاصة؟","نعم، يمكن تخصيص اللوحة والدليل والكرتون والباركود وبعض التفاصيل."],["هل تتوفر عينة؟","نعم، تتوفر عينة مدفوعة قبل طلب الكمية."],["هل المواصفات نهائية؟","لا، تؤكد حسب العينة ومواصفات الطلب المعتمدة."],["كيف يحسب السعر النهائي؟","حسب الموديل والمقاس والكمية والمواد والخيارات والتغليف والشهادات وشروط التجارة."]]},
};

export function getCoreWholesaleConfig(id: string): WholesaleConfig {
  return configs[id] ?? { moq: 10, sample: 1, leadTime: "20–30 days", size: "Customizable", keySpec: "Configured by project", packing: "Export carton / crate" };
}

function localizeCoreValue(value: string, lang: string): string {
  if (lang === "zh") {
    return value
      .replace(/(\d+)[–-](\d+) days/g, "$1-$2 天")
      .replace(/customizable/g, "可定制")
      .replace(/Customizable/g, "可定制")
      .replace(/Based on standard length/g, "按标准长度分别计算")
      .replace(/Project-based/g, "按项目定制")
      .replace(/Configured by project/g, "按项目配置")
      .replace(/Export carton \/ wooden crate optional/g, "出口纸箱 / 可选木箱")
      .replace(/Protective foam \+ reinforced export carton \/ wooden crate optional/g, "珍珠棉防护 + 加厚出口纸箱 / 可选木箱")
      .replace(/Knock-down export crate/g, "拆装式出口木箱")
      .replace(/Wooden export crate/g, "出口木箱")
      .replace(/Export carton \/ crate/g, "出口纸箱 / 木箱")
      .replace(/Export carton \/ wooden crate/g, "出口纸箱 / 木箱")
      .replace(/Individual carton/g, "单台纸箱")
      .replace(/Reinforced wooden crate/g, "加固木箱")
      .replace(/Sectional wooden crates/g, "分段木箱")
      .replace(/Custom branded carton/g, "定制品牌纸箱")
      .replace(/Custom wooden crate/g, "定制木箱")
      .replace(/Sectional export crate/g, "分段出口箱")
      .replace(/Foam \+ export carton/g, "泡沫防护 + 出口纸箱")
      .replace(/Reinforced export carton/g, "加固出口纸箱")
      .replace(/Individual export carton/g, "单台出口纸箱")
      .replace(/Flight case \/ wooden crate/g, "航空箱 / 木箱")
      .replace(/Sectional flight cases/g, "分段航空箱")
      .replace(/Flight cases/g, "航空箱")
      .replace(/Automatic ignition · flame failure protection · sensors · remote control/g, "自动点火 · 熄火保护 · 传感器 · 遥控控制")
      .replace(/Automatic ignition · sensors · remote control/g, "自动点火 · 传感器 · 遥控控制")
      .replace(/Double-sided real flame/g, "双面真火")
      .replace(/Three-sided real flame/g, "三面真火")
      .replace(/manual burner/g, "手动燃烧器")
      .replace(/Freestanding · no chimney/g, "独立式 · 无需烟囱")
      .replace(/Round real-flame fire bowl/g, "圆形真火火盆")
      .replace(/Outdoor linear fire table/g, "户外线性火桌")
      .replace(/Stone island \+ ethanol burner/g, "石材岛台 + 酒精燃烧器")
      .replace(/Multi-burner project system/g, "多燃烧器工程系统")
      .replace(/Frame \+ burner \+ glass guard/g, "框架 + 燃烧器 + 防护玻璃")
      .replace(/Private-label burner kit/g, "贴牌燃烧器套件")
      .replace(/Suspended sculptural fireplace/g, "悬挂式造型壁炉")
      .replace(/water vapor/g, "水雾")
      .replace(/Double-sided water-vapor flame/g, "双面水雾火焰")
      .replace(/Panoramic water-vapor flame/g, "全景水雾火焰")
      .replace(/Three-sided 270° view/g, "三面 270° 观火")
      .replace(/Round mist flame system/g, "圆形水雾火焰系统")
      .replace(/Suspended mist fireplace/g, "悬挂式雾化壁炉")
      .replace(/Divider \/ screen structure/g, "隔断 / 屏风结构")
      .replace(/Circular art mist installation/g, "圆形艺术雾化装置")
      .replace(/Single-sided water-vapor flame/g, "单面水雾火焰")
      .replace(/Smart control · LED · water vapor/g, "智能控制 · LED · 水雾")
      .replace(/flame-only \/ heating option/g, "单火焰效果 / 可选加热")
      .replace(/Panoramic flame screen · optional heat/g, "全景火焰屏 · 可选加热")
      .replace(/Freestanding · plug-in/g, "独立式 · 插电即用")
      .replace(/OEM core · control board · flame screen/g, "OEM 核心模块 · 控制板 · 火焰屏")
      .replace(/Holographic flame display · remote control/g, "全息火焰显示 · 遥控控制")
      .replace(/Projection system · custom flame media/g, "投影系统 · 定制火焰内容")
      .replace(/Modular immersive flame wall/g, "模块化沉浸式火焰墙")
      .replace(/pcs/g, "台")
      .replace(/sections/g, "段")
      .replace(/section/g, "段")
      .replace(/modules/g, "模块")
      .replace(/module/g, "模块")
      .replace(/cases/g, "箱")
      .replace(/case/g, "箱");
  }
  if (lang !== "de") return value;
  return value
    .replace(/(\d+)[–-](\d+) days/g, "$1-$2 Tage")
    .replace(/customizable/g, "anpassbar")
    .replace(/Customizable/g, "Anpassbar")
    .replace(/Based on standard length/g, "Nach Standardlänge")
    .replace(/Project-based/g, "Projektbezogen")
    .replace(/Configured by project/g, "Projektbezogen konfiguriert")
    .replace(/Export carton \/ wooden crate optional/g, "Exportkarton / Holzkiste optional")
    .replace(/Export carton \+ protective foam/g, "Exportkarton mit Schutzschaum")
    .replace(/Knock-down export crate/g, "Zerlegte Export-Holzkiste")
    .replace(/Wooden export crate/g, "Export-Holzkiste")
    .replace(/Export carton \/ crate/g, "Exportkarton / Holzkiste")
    .replace(/Export carton \/ wooden crate/g, "Exportkarton / Holzkiste")
    .replace(/Individual carton/g, "Einzelkarton")
    .replace(/Reinforced wooden crate/g, "Verstärkte Holzkiste")
    .replace(/Sectional wooden crates/g, "Segmentierte Holzkisten")
    .replace(/Custom branded carton/g, "Kundenspezifischer Markenkarton")
    .replace(/Custom wooden crate/g, "Kundenspezifische Holzkiste")
    .replace(/Sectional export crate/g, "Segmentierte Exportkiste")
    .replace(/Foam \+ export carton/g, "Schaumstoff + Exportkarton")
    .replace(/Reinforced export carton/g, "Verstärkter Exportkarton")
    .replace(/Individual export carton/g, "Einzelner Exportkarton")
    .replace(/Flight case \/ wooden crate/g, "Transportkoffer / Holzkiste")
    .replace(/Sectional flight cases/g, "Segmentierte Transportkoffer")
    .replace(/Flight cases/g, "Transportkoffer")
    .replace(/Automatic ignition · sensors · remote control/g, "Automatische Zündung · Sensorik · Fernsteuerung")
    .replace(/Double-sided real flame/g, "Doppelseitige echte Flamme")
    .replace(/Three-sided real flame/g, "Dreiseitige echte Flamme")
    .replace(/manual burner/g, "manueller Brenner")
    .replace(/Freestanding · no chimney/g, "Freistehend · kein Schornstein")
    .replace(/Round real-flame fire bowl/g, "Runde Feuerschale mit echter Flamme")
    .replace(/Outdoor linear fire table/g, "Linearer Outdoor-Feuertisch")
    .replace(/Stone island \+ ethanol burner/g, "Steininsel + Ethanol-Brenner")
    .replace(/Multi-burner project system/g, "Projektanlage mit mehreren Brennern")
    .replace(/Frame \+ burner \+ glass guard/g, "Rahmen + Brenner + Glasschutz")
    .replace(/Private-label burner kit/g, "Private-Label-Brennerbausatz")
    .replace(/Suspended sculptural fireplace/g, "Hängender Designkamin")
    .replace(/water vapor/g, "Wasserdampf")
    .replace(/Double-sided water-vapor flame/g, "Doppelseitiger Wasserdampf-Flammeneffekt")
    .replace(/Panoramic water-vapor flame/g, "Panorama-Wasserdampf-Flammeneffekt")
    .replace(/Three-sided 270° view/g, "Dreiseitige 270°-Sicht")
    .replace(/Round mist flame system/g, "Rundes Wasserdampf-Flammensystem")
    .replace(/Suspended mist fireplace/g, "Hängender Wasserdampf-Kamin")
    .replace(/Divider \/ screen structure/g, "Raumteiler-Struktur")
    .replace(/Circular art mist installation/g, "Runde Design-Wasserdampf-Installation")
    .replace(/Single-sided water-vapor flame/g, "Einseitiger Wasserdampf-Flammeneffekt")
    .replace(/Smart control · LED · Wasserdampf/g, "Smarte Steuerung · LED · Wasserdampf")
    .replace(/flame-only \/ heating option/g, "Flammeneffekt / optionale Heizfunktion")
    .replace(/Panoramic flame screen · optional heat/g, "Panorama-Flammendisplay · optionale Heizfunktion")
    .replace(/Freestanding · plug-in/g, "Freistehend · steckerfertig")
    .replace(/OEM core · control board · flame screen/g, "OEM-Kernmodul · Steuerplatine · Flammendisplay")
    .replace(/Holographic flame display · remote control/g, "Holografisches Flammendisplay · Fernsteuerung")
    .replace(/Projection system · custom flame media/g, "Projektionssystem · kundenspezifische Flammenmedien")
    .replace(/Modular immersive flame wall/g, "Modulare immersive Flammenwand")
    .replace(/pcs/g, "Stück")
    .replace(/sections/g, "Segmente")
    .replace(/section/g, "Segment")
    .replace(/modules/g, "Module")
    .replace(/module/g, "Modul")
    .replace(/cases/g, "Kisten")
    .replace(/case/g, "Kiste");
}

export function getCoreWholesaleDisplayConfig(id: string, lang: string): WholesaleConfig {
  const config = getCoreWholesaleConfig(id);
  return {
    ...config,
    leadTime: localizeCoreValue(config.leadTime, lang),
    size: localizeCoreValue(config.size, lang),
    keySpec: localizeCoreValue(config.keySpec, lang),
    packing: localizeCoreValue(config.packing, lang),
    packingSize: config.packingSize ? localizeCoreValue(config.packingSize, lang) : undefined,
    grossWeight: config.grossWeight ? localizeCoreValue(config.grossWeight, lang) : undefined,
    load20: config.load20 ? localizeCoreValue(config.load20, lang) : undefined,
    load40: config.load40 ? localizeCoreValue(config.load40, lang) : undefined,
    containerRows: config.containerRows?.map((row) => ({
      model: localizeCoreValue(row.model, lang),
      packingSize: localizeCoreValue(row.packingSize, lang),
      grossWeight: localizeCoreValue(row.grossWeight, lang),
      load20: localizeCoreValue(row.load20, lang),
      load40: localizeCoreValue(row.load40, lang),
    })),
  };
}

export function getCoreWholesaleCopy(lang: string) {
  return copy[(lang in copy ? lang : "en") as Locale];
}

export function getCoreProductName(id: string, lang: string, fallback: string): string {
  return translatedNames[lang as Locale]?.[id] ?? fallback;
}

export function getWholesaleUsd(priceCny?: number): number | null {
  if (!priceCny) return null;
  return Math.ceil(priceCny / 7.2 / 10) * 10;
}

const valueCopy: Record<Locale, {
  units: string; unit: string; months12: string; inspection: string; certification: string;
}> = {
  en:{units:"units",unit:"unit",months12:"12 months",inspection:"Video or third-party inspection",certification:"Confirmed by destination market"},
  de:{units:"Stück",unit:"Stück",months12:"12 Monate",inspection:"Video- oder Drittprüfung",certification:"Nach Zielmarkt bestätigen"},
  fr:{units:"unités",unit:"unité",months12:"12 mois",inspection:"Inspection vidéo ou tierce partie",certification:"Selon le marché de destination"},
  it:{units:"unità",unit:"unità",months12:"12 mesi",inspection:"Ispezione video o di terze parti",certification:"Secondo il mercato di destinazione"},
  es:{units:"unidades",unit:"unidad",months12:"12 meses",inspection:"Inspección por vídeo o terceros",certification:"Según el mercado de destino"},
  pt:{units:"unidades",unit:"unidade",months12:"12 meses",inspection:"Inspeção por vídeo ou terceiros",certification:"Conforme o mercado de destino"},
  ru:{units:"шт.",unit:"шт.",months12:"12 месяцев",inspection:"Видео- или сторонняя инспекция",certification:"По рынку назначения"},
  ja:{units:"台",unit:"台",months12:"12か月",inspection:"動画検品または第三者検品",certification:"仕向市場により確認"},
  zh:{units:"台",unit:"台",months12:"12 个月",inspection:"视频验货或第三方验货",certification:"按目的国市场确认"},
  ar:{units:"وحدات",unit:"وحدة",months12:"12 شهرًا",inspection:"فحص بالفيديو أو طرف ثالث",certification:"حسب سوق الوجهة"},
};

export function getCoreWholesaleValueCopy(lang: string) {
  return valueCopy[(lang in valueCopy ? lang : "en") as Locale];
}

const containerCopy: Record<Locale, {
  title: string;
  model: string;
  packingSize: string;
  grossWeight: string;
  load20: string;
  load40: string;
  note: string;
}> = {
  en: { title: "Packing, Container Loading & Trade Terms (Estimated)", model: "Model", packingSize: "Unit packing", grossWeight: "G.W.", load20: "20GP", load40: "40HQ", note: "Packing size, gross weight and container loading are estimated for preliminary wholesale planning. Final data should be confirmed with the approved sample and packing plan." },
  zh: { title: "包装、装柜与交易参数（预估）", model: "型号", packingSize: "单台包装", grossWeight: "毛重", load20: "20GP", load40: "40HQ", note: "包装尺寸、毛重和装柜量为前期批发采购估算，最终以确认样品和实际包装方案为准。" },
  de: { title: "Verpackung, Containerbeladung und Handelsdaten (geschätzt)", model: "Modell", packingSize: "Einzelverpackung", grossWeight: "Bruttogewicht", load20: "20GP", load40: "40HQ", note: "Verpackungsmaß, Bruttogewicht und Containerbeladung sind Schätzwerte für die vorläufige Großhandelsplanung. Endgültige Daten sollten mit freigegebenem Muster und Verpackungsplan bestätigt werden." },
  fr: { title: "Emballage, chargement conteneur et conditions commerciales (estimations)", model: "Modèle", packingSize: "Emballage unitaire", grossWeight: "Poids brut", load20: "20GP", load40: "40HQ", note: "Les dimensions d'emballage, poids bruts et chargements sont estimatifs et doivent être confirmés avec l'échantillon et le plan d'emballage approuvés." },
  it: { title: "Imballo, carico container e condizioni commerciali (stima)", model: "Modello", packingSize: "Imballo unitario", grossWeight: "Peso lordo", load20: "20GP", load40: "40HQ", note: "Dimensioni imballo, peso lordo e carico container sono stime per la pianificazione all'ingrosso e vanno confermati con campione e piano imballo approvati." },
  es: { title: "Embalaje, carga de contenedor y condiciones comerciales (estimado)", model: "Modelo", packingSize: "Embalaje unitario", grossWeight: "Peso bruto", load20: "20GP", load40: "40HQ", note: "Dimensiones de embalaje, peso bruto y carga de contenedor son estimaciones para planificación mayorista y deben confirmarse con muestra y plan de embalaje aprobados." },
  pt: { title: "Embalagem, carregamento e condições comerciais (estimado)", model: "Modelo", packingSize: "Embalagem unitária", grossWeight: "Peso bruto", load20: "20GP", load40: "40HQ", note: "Dimensões da embalagem, peso bruto e carregamento são estimativas para planejamento de atacado e devem ser confirmados com amostra e plano de embalagem aprovados." },
  ru: { title: "Упаковка, загрузка контейнера и условия сделки (оценка)", model: "Модель", packingSize: "Упаковка 1 шт.", grossWeight: "Вес брутто", load20: "20GP", load40: "40HQ", note: "Размеры упаковки, вес брутто и загрузка контейнера являются оценочными и уточняются по утверждённому образцу и плану упаковки." },
  ja: { title: "梱包・コンテナ積載・取引条件（推定）", model: "型番", packingSize: "個装", grossWeight: "総重量", load20: "20GP", load40: "40HQ", note: "梱包寸法、総重量、積載数は卸売計画用の概算であり、承認サンプルと梱包計画で確定します。" },
  ar: { title: "التغليف وتحميل الحاويات وشروط التجارة (تقديري)", model: "الموديل", packingSize: "تغليف الوحدة", grossWeight: "الوزن الإجمالي", load20: "20GP", load40: "40HQ", note: "أبعاد التغليف والوزن الإجمالي وكميات التحميل تقديرية للتخطيط المبدئي للجملة، وتؤكد حسب العينة وخطة التغليف المعتمدة." },
};

export function getCoreContainerCopy(lang: string) {
  return containerCopy[(lang in containerCopy ? lang : "en") as Locale];
}

export function getCoreProductDetail(id: string, lang: string): CoreProductDetail | null {
  const detail = coreProductDetails[id];
  if (!detail) return null;
  return detail[lang as Locale] ?? detail.en ?? null;
}
