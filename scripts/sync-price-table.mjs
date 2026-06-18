import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const defaultCsvPath = "/Users/x/Desktop/sfireplace产品价格总表.csv";
const csvPath = process.argv[2] ? resolve(process.argv[2]) : defaultCsvPath;
const outputPath = resolve("src/lib/product-price-table.ts");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && quoted && next === '"') {
      field += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(field);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  row.push(field);
  if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  return rows;
}

function toTsString(value) {
  return JSON.stringify(value ?? "");
}

function toPrice(value, rowNumber) {
  const normalized = String(value ?? "").replace(/[¥￥,\s]/g, "");
  const price = Number(normalized);
  if (!Number.isFinite(price) || price <= 0) {
    throw new Error(`第 ${rowNumber} 行人民币源价无效：${value}`);
  }
  return Math.round(price);
}

const rows = parseCsv(readFileSync(csvPath, "utf8"));
const headers = rows.shift()?.map((header) => header.trim()) ?? [];
const index = new Map(headers.map((header, i) => [header, i]));

for (const required of ["产品ID", "人民币源价"]) {
  if (!index.has(required)) throw new Error(`CSV 缺少必需列：${required}`);
}

const priceRows = rows.map((row, rowIndex) => {
  const rowNumber = rowIndex + 2;
  const productId = row[index.get("产品ID")]?.trim();
  if (!productId) throw new Error(`第 ${rowNumber} 行产品ID为空`);

  return {
    productId,
    priceCny: toPrice(row[index.get("人民币源价")], rowNumber),
    note: row[index.get("备注")]?.trim() || row[index.get("产品名称")]?.trim() || undefined,
  };
});

const duplicateIds = priceRows
  .map((row) => row.productId)
  .filter((id, i, ids) => ids.indexOf(id) !== i);
if (duplicateIds.length) {
  throw new Error(`CSV 有重复产品ID：${[...new Set(duplicateIds)].join(", ")}`);
}

const body = priceRows
  .map((row) => {
    const note = row.note ? `, note: ${toTsString(row.note)}` : "";
    return `  { productId: ${toTsString(row.productId)}, priceCny: ${row.priceCny}${note} },`;
  })
  .join("\n");

const ts = `export type ProductPriceRow = {
  productId: string;
  priceCny: number;
  note?: string;
};

// Source file: ${csvPath}
// Edit the local CSV on the Desktop, then run: npm run sync:prices
export const productPriceTable: ProductPriceRow[] = [
${body}
];

const productPriceMap = new Map(productPriceTable.map((row) => [row.productId, row]));

export function getProductPriceRow(productId: string): ProductPriceRow | undefined {
  return productPriceMap.get(productId);
}

export function getProductBasePriceCny(productId: string, fallbackPriceCny?: number): number | undefined {
  return getProductPriceRow(productId)?.priceCny ?? fallbackPriceCny;
}
`;

writeFileSync(outputPath, ts);
console.log(`Synced ${priceRows.length} product prices from ${csvPath}`);
