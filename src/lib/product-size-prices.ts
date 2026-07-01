export type ProductSizePriceRow = {
  productId: string;
  sizeModel: string;
  size: string;
  wholesalePriceCny: number;
  retailPriceCny?: number;
  woodCratePriceCny?: number;
  sourceWholesaleUsd?: number;
};

export const productSizePriceTable: ProductSizePriceRow[] = [
  { productId: "p4_11", sizeModel: "M1006", size: "600 mm", wholesalePriceCny: 6530, retailPriceCny: 7180, woodCratePriceCny: 270, sourceWholesaleUsd: 913.60 },
  { productId: "p4_11", sizeModel: "M1007", size: "700 mm", wholesalePriceCny: 6900, retailPriceCny: 7590, woodCratePriceCny: 290, sourceWholesaleUsd: 966.31 },
  { productId: "p4_11", sizeModel: "M1008", size: "800 mm", wholesalePriceCny: 7140, retailPriceCny: 7860, woodCratePriceCny: 310, sourceWholesaleUsd: 999.85 },
  { productId: "p4_11", sizeModel: "M1009", size: "900 mm", wholesalePriceCny: 7550, retailPriceCny: 8310, woodCratePriceCny: 340, sourceWholesaleUsd: 1057.35 },
  { productId: "p4_11", sizeModel: "M1010", size: "1000 mm", wholesalePriceCny: 7960, retailPriceCny: 8760, woodCratePriceCny: 360, sourceWholesaleUsd: 1114.85 },
  { productId: "p4_11", sizeModel: "M1012", size: "1200 mm", wholesalePriceCny: 9200, retailPriceCny: 10110, woodCratePriceCny: 400, sourceWholesaleUsd: 1287.34 },
  { productId: "p4_11", sizeModel: "M1014", size: "1400 mm", wholesalePriceCny: 10170, retailPriceCny: 11180, woodCratePriceCny: 440, sourceWholesaleUsd: 1423.11 },
  { productId: "p4_11", sizeModel: "M1015", size: "1500 mm", wholesalePriceCny: 10670, retailPriceCny: 11730, woodCratePriceCny: 460, sourceWholesaleUsd: 1493.38 },
  { productId: "p4_11", sizeModel: "M1016", size: "1600 mm", wholesalePriceCny: 11120, retailPriceCny: 12240, woodCratePriceCny: 490, sourceWholesaleUsd: 1557.27 },
  { productId: "p4_11", sizeModel: "M1018", size: "1800 mm", wholesalePriceCny: 11590, retailPriceCny: 12750, woodCratePriceCny: 530, sourceWholesaleUsd: 1622.76 },
  { productId: "p4_11", sizeModel: "M1020", size: "2000 mm", wholesalePriceCny: 11960, retailPriceCny: 13150, woodCratePriceCny: 570, sourceWholesaleUsd: 1673.87 },
  { productId: "p4_11", sizeModel: "M1024", size: "2400 mm", wholesalePriceCny: 14400, retailPriceCny: 15840, woodCratePriceCny: 660, sourceWholesaleUsd: 2015.67 },
  { productId: "p4_11", sizeModel: "M1025", size: "2500 mm", wholesalePriceCny: 14830, retailPriceCny: 16310, woodCratePriceCny: 680, sourceWholesaleUsd: 2076.36 },
  { productId: "p4_11", sizeModel: "M1028", size: "2800 mm", wholesalePriceCny: 16140, retailPriceCny: 17760, woodCratePriceCny: 740, sourceWholesaleUsd: 2260.04 },
  { productId: "p4_11", sizeModel: "M1030", size: "3000 mm", wholesalePriceCny: 17000, retailPriceCny: 18700, woodCratePriceCny: 790, sourceWholesaleUsd: 2379.83 },
];

const productSizePriceMap = new Map(productSizePriceTable.map((row) => [`${row.productId}:${row.sizeModel}`, row]));

export function getProductSizePrice(productId: string, sizeModel: string): ProductSizePriceRow | undefined {
  return productSizePriceMap.get(`${productId}:${sizeModel}`);
}

export function getProductSizePrices(productId: string): ProductSizePriceRow[] {
  return productSizePriceTable.filter((row) => row.productId === productId);
}
