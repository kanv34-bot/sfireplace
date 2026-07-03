export type ProductSizeModel = {
  size: string;
  model: string;
};

export type ProductModelRow = {
  productId: string;
  series: "A" | "M" | "E" | "H";
  model: string;
  sizeModels?: ProductSizeModel[];
};

export const productModelTable: ProductModelRow[] = [
  {
    productId: "p3_14",
    series: "A",
    model: "A01",
    sizeModels: [
      { size: "600 mm", model: "A0106" },
      { size: "800 mm", model: "A0108" },
      { size: "1000 mm", model: "A0110" },
    ],
  },
  {
    productId: "p3_15",
    series: "A",
    model: "A02",
    sizeModels: [
      { size: "600 mm", model: "A0206" },
      { size: "800 mm", model: "A0208" },
      { size: "1000 mm", model: "A0210" },
      { size: "1200 mm", model: "A0212" },
      { size: "1500 mm", model: "A0215" },
      { size: "1800 mm", model: "A0218" },
    ],
  },
  { productId: "p3_16", series: "A", model: "A03", sizeModels: [{ size: "1000 mm", model: "A0310" }, { size: "1200 mm", model: "A0312" }, { size: "1500 mm", model: "A0315" }, { size: "1800 mm", model: "A0318" }, { size: "2400 mm", model: "A0324" }] },
  { productId: "p3_17", series: "A", model: "A04", sizeModels: [{ size: "1000 mm", model: "A0410" }, { size: "1200 mm", model: "A0412" }, { size: "1500 mm", model: "A0415" }, { size: "1800 mm", model: "A0418" }, { size: "2200 mm", model: "A0422" }] },
  { productId: "p3_18", series: "A", model: "A05", sizeModels: [{ size: "300 mm", model: "A0503" }, { size: "400 mm", model: "A0504" }, { size: "600 mm", model: "A0506" }] },
  { productId: "p3_19", series: "A", model: "A06", sizeModels: [{ size: "500 mm", model: "A0605" }, { size: "800 mm", model: "A0608" }, { size: "1000 mm", model: "A0610" }] },
  { productId: "p3_20", series: "A", model: "A07", sizeModels: [{ size: "Ø600 mm", model: "A0706" }, { size: "Ø800 mm", model: "A0708" }, { size: "Ø1000 mm", model: "A0710" }, { size: "Ø1200 mm", model: "A0712" }] },
  { productId: "p3_21", series: "A", model: "A08", sizeModels: [{ size: "1200 mm", model: "A0812" }, { size: "1500 mm", model: "A0815" }, { size: "1800 mm", model: "A0818" }, { size: "2400 mm", model: "A0824" }] },
  { productId: "p3_22", series: "A", model: "A09", sizeModels: [{ size: "1200 mm", model: "A0912" }, { size: "1600 mm", model: "A0916" }, { size: "2000 mm", model: "A0920" }, { size: "2600 mm", model: "A0926" }] },
  { productId: "p3_23", series: "A", model: "A10", sizeModels: [{ size: "2000 mm", model: "A1020" }, { size: "3000 mm", model: "A1030" }, { size: "4000 mm", model: "A1040" }, { size: "6000 mm", model: "A1060" }] },
  { productId: "p3_24", series: "A", model: "A11", sizeModels: [{ size: "800 mm", model: "A1108" }, { size: "1200 mm", model: "A1112" }, { size: "1600 mm", model: "A1116" }, { size: "2000 mm", model: "A1120" }] },
  { productId: "p3_25", series: "A", model: "A12", sizeModels: [{ size: "400 mm", model: "A1204" }, { size: "800 mm", model: "A1208" }, { size: "1200 mm", model: "A1212" }, { size: "1600 mm", model: "A1216" }] },
  { productId: "p3_26", series: "A", model: "A13", sizeModels: [{ size: "Ø800 mm", model: "A1308" }, { size: "Ø1000 mm", model: "A1310" }, { size: "Ø1200 mm", model: "A1312" }] },

  { productId: "p4_70", series: "M", model: "M01", sizeModels: [{ size: "600 mm", model: "M0106" }, { size: "700 mm", model: "M0107" }, { size: "800 mm", model: "M0108" }, { size: "900 mm", model: "M0109" }, { size: "1000 mm", model: "M0110" }, { size: "1200 mm", model: "M0112" }, { size: "1400 mm", model: "M0114" }, { size: "1500 mm", model: "M0115" }, { size: "1600 mm", model: "M0116" }, { size: "1800 mm", model: "M0118" }, { size: "2000 mm", model: "M0120" }, { size: "2400 mm", model: "M0124" }, { size: "2500 mm", model: "M0125" }, { size: "2800 mm", model: "M0128" }, { size: "3000 mm", model: "M0130" }] },
  { productId: "p4_61", series: "M", model: "M11", sizeModels: [{ size: "600 mm", model: "M1106" }, { size: "700 mm", model: "M1107" }, { size: "800 mm", model: "M1108" }, { size: "900 mm", model: "M1109" }, { size: "1000 mm", model: "M1110" }, { size: "1200 mm", model: "M1112" }, { size: "1400 mm", model: "M1114" }, { size: "1500 mm", model: "M1115" }, { size: "1600 mm", model: "M1116" }, { size: "1800 mm", model: "M1118" }, { size: "2000 mm", model: "M1120" }, { size: "2400 mm", model: "M1124" }, { size: "2500 mm", model: "M1125" }, { size: "2800 mm", model: "M1128" }, { size: "3000 mm", model: "M1130" }] },
  { productId: "p4_69", series: "M", model: "M02", sizeModels: [{ size: "600 mm", model: "M0206" }, { size: "700 mm", model: "M0207" }, { size: "800 mm", model: "M0208" }, { size: "900 mm", model: "M0209" }, { size: "1000 mm", model: "M0210" }, { size: "1200 mm", model: "M0212" }, { size: "1400 mm", model: "M0214" }, { size: "1500 mm", model: "M0215" }, { size: "1600 mm", model: "M0216" }, { size: "1800 mm", model: "M0218" }, { size: "2000 mm", model: "M0220" }, { size: "2400 mm", model: "M0224" }, { size: "2500 mm", model: "M0225" }, { size: "2800 mm", model: "M0228" }, { size: "3000 mm", model: "M0230" }] },
  { productId: "p4_68", series: "M", model: "M03", sizeModels: [{ size: "1200 mm", model: "M0312" }, { size: "1500 mm", model: "M0315" }, { size: "1800 mm", model: "M0318" }, { size: "2400 mm", model: "M0324" }, { size: "3000 mm", model: "M0330" }] },
  { productId: "p4_67", series: "M", model: "M04", sizeModels: [{ size: "1000 mm", model: "M0410" }, { size: "1200 mm", model: "M0412" }, { size: "1500 mm", model: "M0415" }, { size: "1800 mm", model: "M0418" }, { size: "2400 mm", model: "M0424" }] },
  { productId: "p4_66", series: "M", model: "M05", sizeModels: [{ size: "Ø300 mm", model: "M0503" }, { size: "Ø350 mm", model: "M0535" }, { size: "Ø400 mm", model: "M0504" }, { size: "Ø450 mm", model: "M0545" }, { size: "Ø500 mm", model: "M0505" }, { size: "Ø550 mm", model: "M0555" }, { size: "Ø600 mm", model: "M0506" }, { size: "Ø650 mm", model: "M0565" }] },
  { productId: "p4_65", series: "M", model: "M06", sizeModels: [{ size: "Ø800 mm", model: "M0608" }, { size: "Ø1000 mm", model: "M0610" }, { size: "Ø1200 mm", model: "M0612" }] },
  { productId: "p4_64", series: "M", model: "M07", sizeModels: [{ size: "1200 mm", model: "M0712" }, { size: "1500 mm", model: "M0715" }, { size: "2000 mm", model: "M0720" }, { size: "3000 mm", model: "M0730" }] },
  { productId: "p4_63", series: "M", model: "M08", sizeModels: [{ size: "Ø1000 mm", model: "M0810" }, { size: "Ø1200 mm", model: "M0812" }, { size: "Ø1500 mm", model: "M0815" }, { size: "Ø1800 mm", model: "M0818" }] },
  { productId: "p4_62", series: "M", model: "M09", sizeModels: [{ size: "800 mm", model: "M0908" }, { size: "1200 mm", model: "M0912" }, { size: "1500 mm", model: "M0915" }, { size: "1800 mm", model: "M0918" }, { size: "2400 mm", model: "M0924" }] },
  { productId: "p4_71", series: "M", model: "M12", sizeModels: [{ size: "600 mm", model: "M1206" }, { size: "700 mm", model: "M1207" }, { size: "800 mm", model: "M1208" }, { size: "900 mm", model: "M1209" }, { size: "1000 mm", model: "M1210" }, { size: "1200 mm", model: "M1212" }, { size: "1400 mm", model: "M1214" }, { size: "1500 mm", model: "M1215" }, { size: "1600 mm", model: "M1216" }, { size: "1800 mm", model: "M1218" }, { size: "2000 mm", model: "M1220" }, { size: "2400 mm", model: "M1224" }, { size: "2500 mm", model: "M1225" }, { size: "2800 mm", model: "M1228" }, { size: "3000 mm", model: "M1230" }] },
  { productId: "p4_72", series: "M", model: "M13", sizeModels: [{ size: "600 mm", model: "M1306" }, { size: "700 mm", model: "M1307" }, { size: "800 mm", model: "M1308" }, { size: "900 mm", model: "M1309" }, { size: "1000 mm", model: "M1310" }, { size: "1200 mm", model: "M1312" }, { size: "1400 mm", model: "M1314" }, { size: "1500 mm", model: "M1315" }, { size: "1600 mm", model: "M1316" }, { size: "1800 mm", model: "M1318" }, { size: "2000 mm", model: "M1320" }, { size: "2400 mm", model: "M1324" }, { size: "2500 mm", model: "M1325" }, { size: "2800 mm", model: "M1328" }, { size: "3000 mm", model: "M1330" }] },
  { productId: "p4_73", series: "M", model: "M14", sizeModels: [{ size: "600 mm", model: "M1406" }, { size: "700 mm", model: "M1407" }, { size: "800 mm", model: "M1408" }, { size: "900 mm", model: "M1409" }, { size: "1000 mm", model: "M1410" }, { size: "1200 mm", model: "M1412" }, { size: "1400 mm", model: "M1414" }, { size: "1500 mm", model: "M1415" }, { size: "1600 mm", model: "M1416" }, { size: "1800 mm", model: "M1418" }, { size: "2000 mm", model: "M1420" }, { size: "2400 mm", model: "M1424" }, { size: "2500 mm", model: "M1425" }, { size: "2800 mm", model: "M1428" }, { size: "3000 mm", model: "M1430" }] },
  { productId: "p4_74", series: "M", model: "M15", sizeModels: [{ size: "Ø500 mm", model: "M1505" }, { size: "Ø550 mm", model: "M1555" }, { size: "Ø600 mm", model: "M1506" }] },
  { productId: "p4_75", series: "M", model: "M16", sizeModels: [{ size: "Ø556 mm", model: "M1656" }, { size: "Ø600 mm", model: "M1606" }, { size: "Ø650 mm", model: "M1665" }] },

  { productId: "p4_11", series: "M", model: "M10", sizeModels: [{ size: "600 mm", model: "M1006" }, { size: "700 mm", model: "M1007" }, { size: "800 mm", model: "M1008" }, { size: "900 mm", model: "M1009" }, { size: "1000 mm", model: "M1010" }, { size: "1200 mm", model: "M1012" }, { size: "1400 mm", model: "M1014" }, { size: "1500 mm", model: "M1015" }, { size: "1600 mm", model: "M1016" }, { size: "1800 mm", model: "M1018" }, { size: "2000 mm", model: "M1020" }, { size: "2400 mm", model: "M1024" }, { size: "2500 mm", model: "M1025" }, { size: "2800 mm", model: "M1028" }, { size: "3000 mm", model: "M1030" }] },

  { productId: "p7_6", series: "E", model: "E01", sizeModels: [{ size: "800 mm", model: "E0108" }, { size: "1200 mm", model: "E0112" }, { size: "1500 mm", model: "E0115" }, { size: "1800 mm", model: "E0118" }, { size: "2400 mm", model: "E0124" }] },
  { productId: "p7_7", series: "E", model: "E02", sizeModels: [{ size: "1200 mm", model: "E0212" }, { size: "1500 mm", model: "E0215" }, { size: "1800 mm", model: "E0218" }, { size: "2400 mm", model: "E0224" }, { size: "3000 mm", model: "E0230" }] },
  { productId: "p7_8", series: "E", model: "E03", sizeModels: [{ size: "450 mm", model: "E0304" }, { size: "600 mm", model: "E0306" }, { size: "700 mm", model: "E0307" }] },
  { productId: "p7_9", series: "E", model: "E04", sizeModels: [{ size: "600 mm", model: "E0406" }, { size: "800 mm", model: "E0408" }, { size: "1200 mm", model: "E0412" }, { size: "1800 mm", model: "E0418" }, { size: "2400 mm", model: "E0424" }] },
  { productId: "p7_10", series: "E", model: "E1", sizeModels: [{ size: "500 mm", model: "E1050" }, { size: "600 mm", model: "E1060" }, { size: "700 mm", model: "E1070" }, { size: "800 mm", model: "E1080" }, { size: "900 mm", model: "E1090" }, { size: "1000 mm", model: "E1100" }, { size: "1200 mm", model: "E1120" }, { size: "1400 mm", model: "E1140" }, { size: "1500 mm", model: "E1150" }, { size: "1600 mm", model: "E1160" }, { size: "1800 mm", model: "E1180" }, { size: "2000 mm", model: "E1200" }, { size: "2400 mm", model: "E1240" }, { size: "2500 mm", model: "E1250" }, { size: "2800 mm", model: "E1280" }, { size: "3000 mm", model: "E1300" }] },
  { productId: "p7_11", series: "E", model: "E2", sizeModels: [{ size: "1000+300 mm", model: "E2130" }] },
  { productId: "p7_12", series: "E", model: "E3", sizeModels: [{ size: "300+1000 mm", model: "E3130" }] },
  { productId: "p7_13", series: "E", model: "E4", sizeModels: [{ size: "300+1000+300 mm", model: "E4160" }] },
  { productId: "p7_14", series: "E", model: "E5", sizeModels: [{ size: "1000+300+1000 mm", model: "E5230" }] },
  { productId: "p7_15", series: "E", model: "E6", sizeModels: [{ size: "4S", model: "E6S01" }] },
  { productId: "p7_16", series: "E", model: "E7", sizeModels: [{ size: "Ø500 mm", model: "E7050" }, { size: "Ø550 mm", model: "E7055" }, { size: "Ø600 mm", model: "E7060" }, { size: "Ø650 mm", model: "E7065" }, { size: "Ø700 mm", model: "E7070" }] },
  { productId: "p7_17", series: "E", model: "E8", sizeModels: [{ size: "500 mm", model: "E8050" }, { size: "550 mm", model: "E8055" }, { size: "600 mm", model: "E8060" }, { size: "650 mm", model: "E8065" }, { size: "700 mm", model: "E8070" }] },
  { productId: "p7_18", series: "E", model: "E9", sizeModels: [{ size: "500 mm", model: "E9050" }, { size: "550 mm", model: "E9055" }, { size: "600 mm", model: "E9060" }, { size: "650 mm", model: "E9065" }, { size: "700 mm", model: "E9070" }] },
  { productId: "p7_19", series: "E", model: "EA", sizeModels: [{ size: "500 mm", model: "EA050" }, { size: "550 mm", model: "EA055" }, { size: "600 mm", model: "EA060" }, { size: "650 mm", model: "EA065" }, { size: "700 mm", model: "EA070" }] },
  { productId: "p7_20", series: "E", model: "EB", sizeModels: [{ size: "2DN500", model: "EB050" }, { size: "2DN550", model: "EB055" }, { size: "2DN600", model: "EB060" }] },

  { productId: "p9_1", series: "H", model: "H01", sizeModels: [{ size: "800 mm", model: "H0108" }, { size: "1200 mm", model: "H0112" }, { size: "1800 mm", model: "H0118" }, { size: "2400 mm", model: "H0124" }] },
  { productId: "p9_2", series: "H", model: "H02", sizeModels: [{ size: "Project S", model: "H02S" }, { size: "Project M", model: "H02M" }, { size: "Project L", model: "H02L" }] },
  { productId: "p9_3", series: "H", model: "H03", sizeModels: [{ size: "2 m", model: "H0302" }, { size: "5 m", model: "H0305" }, { size: "10 m", model: "H0310" }] },
];

const productModelMap = new Map(productModelTable.map((row) => [row.productId, row]));

export function getProductModelRow(productId: string): ProductModelRow | undefined {
  return productModelMap.get(productId);
}

export function getProductModel(productId: string): string | undefined {
  return getProductModelRow(productId)?.model;
}

export function getProductSizeModels(productId: string): ProductSizeModel[] {
  return getProductModelRow(productId)?.sizeModels ?? [];
}

export function getModelLabel(lang: string): string {
  if (lang === "zh") return "型号";
  if (lang === "ja") return "型番";
  if (lang === "de") return "Modell";
  if (lang === "fr") return "Modèle";
  if (lang === "es" || lang === "pt") return "Modelo";
  if (lang === "ar") return "الموديل";
  return "Model";
}
