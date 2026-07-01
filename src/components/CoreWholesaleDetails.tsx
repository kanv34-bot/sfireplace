import Link from "next/link";
import {
  getCoreContainerCopy,
  getCoreProductDetail,
  getCoreWholesaleDisplayConfig,
  getCoreWholesaleCopy,
  getCoreWholesaleValueCopy,
} from "@/lib/core-wholesale";
import { formatLocalizedPrice, getPriceCopy } from "@/lib/product-pricing";
import { getModelLabel, getProductModel, getProductSizeModels } from "@/lib/product-models";
import { getProductSizePrices } from "@/lib/product-size-prices";

type Props = {
  lang: string;
  productId: string;
  productName: string;
  priceCny?: number;
};

const whatsappUrl =
  "https://wa.me/8618028181668?text=Hello%2C%20I%20would%20like%20a%20wholesale%20quotation.%20Please%20send%20MOQ%2C%20specifications%2C%20lead%20time%2C%20and%20OEM%2FODM%20options.";

const sizeQuoteCopy = {
  zh: {
    title: "尺寸报价明细",
    note: "价格来自产品人民币报价表，页面按网站固定汇率换算为各语种参考价；最终报价按规格、数量、包装和贸易条款确认。",
    model: "型号",
    size: "尺寸",
    productSize: "产品尺寸",
    packingSize: "包装尺寸",
    grossWeight: "毛重",
    wholesale: "批发价（起订量10）",
    retail: "零售价参考",
    woodCrate: "木架加价",
    woodCrateSize: "木架尺寸 / 重量",
    kg: "kg",
  },
  en: {
    title: "Size Quotation Details",
    note: "Prices are imported from the product quotation sheet in CNY and converted by the website's fixed reference rates. Final quotation depends on specification, quantity, packing, and trade terms.",
    model: "Model",
    size: "Size",
    productSize: "Product size",
    packingSize: "Packing size",
    grossWeight: "G.W.",
    wholesale: "Wholesale price (MOQ 10)",
    retail: "Retail reference",
    woodCrate: "Wood crate add-on",
    woodCrateSize: "Wood crate size / weight",
    kg: "kg",
  },
  de: {
    title: "Preisdetails nach Größe",
    note: "Die Preise stammen aus dem Produkt-Angebotsblatt in CNY und werden mit den festen Referenzkursen der Website umgerechnet. Das endgültige Angebot hängt von Spezifikation, Menge, Verpackung und Handelsbedingungen ab.",
    model: "Modell",
    size: "Größe",
    productSize: "Produktgröße",
    packingSize: "Verpackungsmaß",
    grossWeight: "Bruttogewicht",
    wholesale: "Großhandelspreis (MOQ 10)",
    retail: "Retail-Referenz",
    woodCrate: "Aufpreis Holzkiste",
    woodCrateSize: "Holzkistenmaß / Gewicht",
    kg: "kg",
  },
  fr: {
    title: "Détails de prix par taille",
    note: "Les prix proviennent de la feuille de devis produit en CNY et sont convertis avec les taux de référence fixes du site. Le devis final dépend des spécifications, de la quantité, de l'emballage et des conditions commerciales.",
    model: "Modèle",
    size: "Taille",
    productSize: "Dimensions produit",
    packingSize: "Dimensions colis",
    grossWeight: "Poids brut",
    wholesale: "Prix de gros (MOQ 10)",
    retail: "Référence détail",
    woodCrate: "Supplément caisse bois",
    woodCrateSize: "Caisse bois / poids",
    kg: "kg",
  },
  it: {
    title: "Dettagli prezzo per misura",
    note: "I prezzi derivano dal foglio di quotazione prodotto in CNY e sono convertiti con i tassi di riferimento fissi del sito. Il preventivo finale dipende da specifiche, quantità, imballo e condizioni commerciali.",
    model: "Modello",
    size: "Misura",
    productSize: "Dimensioni prodotto",
    packingSize: "Dimensioni imballo",
    grossWeight: "Peso lordo",
    wholesale: "Prezzo wholesale (MOQ 10)",
    retail: "Riferimento retail",
    woodCrate: "Supplemento cassa legno",
    woodCrateSize: "Cassa legno / peso",
    kg: "kg",
  },
  es: {
    title: "Detalles de precio por tamaño",
    note: "Los precios provienen de la hoja de cotización del producto en CNY y se convierten con los tipos de referencia fijos del sitio. La cotización final depende de especificación, cantidad, embalaje y términos comerciales.",
    model: "Modelo",
    size: "Tamaño",
    productSize: "Medida producto",
    packingSize: "Medida embalaje",
    grossWeight: "Peso bruto",
    wholesale: "Precio mayorista (MOQ 10)",
    retail: "Referencia minorista",
    woodCrate: "Extra caja madera",
    woodCrateSize: "Caja madera / peso",
    kg: "kg",
  },
  pt: {
    title: "Detalhes de preço por tamanho",
    note: "Os preços vêm da planilha de cotação do produto em CNY e são convertidos pelas taxas fixas de referência do site. A cotação final depende de especificação, quantidade, embalagem e termos comerciais.",
    model: "Modelo",
    size: "Tamanho",
    productSize: "Dimensão produto",
    packingSize: "Dimensão embalagem",
    grossWeight: "Peso bruto",
    wholesale: "Preço atacado (MOQ 10)",
    retail: "Referência varejo",
    woodCrate: "Adicional caixa madeira",
    woodCrateSize: "Caixa madeira / peso",
    kg: "kg",
  },
  ru: {
    title: "Цены по размерам",
    note: "Цены импортированы из прайс-листа продукта в CNY и пересчитаны по фиксированным справочным курсам сайта. Итоговое предложение зависит от спецификации, количества, упаковки и условий поставки.",
    model: "Модель",
    size: "Размер",
    productSize: "Размер изделия",
    packingSize: "Размер упаковки",
    grossWeight: "Вес брутто",
    wholesale: "Оптовая цена (MOQ 10)",
    retail: "Розничный ориентир",
    woodCrate: "Доплата за обрешетку",
    woodCrateSize: "Обрешетка / вес",
    kg: "кг",
  },
  ja: {
    title: "サイズ別見積詳細",
    note: "価格は製品の CNY 見積表から取り込み、サイト固定の参考レートで各言語の通貨へ換算しています。最終見積は仕様、数量、梱包、取引条件により確定します。",
    model: "型番",
    size: "サイズ",
    productSize: "製品寸法",
    packingSize: "梱包寸法",
    grossWeight: "総重量",
    wholesale: "卸売価格（MOQ 10）",
    retail: "小売参考",
    woodCrate: "木枠追加費",
    woodCrateSize: "木枠寸法 / 重量",
    kg: "kg",
  },
  ar: {
    title: "تفاصيل السعر حسب المقاس",
    note: "تم استيراد الأسعار من جدول عرض المنتج باليوان الصيني وتحويلها حسب أسعار الصرف المرجعية الثابتة في الموقع. يعتمد السعر النهائي على المواصفات والكمية والتغليف وشروط التجارة.",
    model: "الموديل",
    size: "المقاس",
    productSize: "مقاس المنتج",
    packingSize: "مقاس التغليف",
    grossWeight: "الوزن الإجمالي",
    wholesale: "سعر الجملة (MOQ 10)",
    retail: "مرجع التجزئة",
    woodCrate: "إضافة صندوق خشبي",
    woodCrateSize: "مقاس الصندوق / الوزن",
    kg: "كجم",
  },
};

export default function CoreWholesaleDetails({
  lang,
  productId,
  productName,
  priceCny,
}: Props) {
  const t = getCoreWholesaleCopy(lang);
  const container = getCoreContainerCopy(lang);
  const values = getCoreWholesaleValueCopy(lang);
  const config = getCoreWholesaleDisplayConfig(productId, lang);
  const hasContainerData = Boolean(config.packingSize && config.grossWeight && config.load20 && config.load40);
  const containerRows = config.containerRows;
  const productDetail = getCoreProductDetail(productId, lang);
  const priceCopy = getPriceCopy(lang);
  const quoteCopy = sizeQuoteCopy[(lang in sizeQuoteCopy ? lang : "en") as keyof typeof sizeQuoteCopy];
  const modelLabel = getModelLabel(lang);
  const productModel = getProductModel(productId);
  const sizePriceRows = getProductSizePrices(productId);
  const sizeModelBySize = new Map(getProductSizeModels(productId).map((item) => [item.size, item.model]));
  const hasModelColumn = Boolean(productModel || containerRows?.length);
  const displayContainerRows = containerRows?.length
    ? containerRows.map((row) => ({
        ...row,
        model: sizeModelBySize.get(row.model) ?? row.model,
      }))
    : [{
        model: productModel ?? "",
        packingSize: config.packingSize,
        grossWeight: config.grossWeight,
        load20: config.load20,
        load40: config.load40,
      }];

  return (
    <div className="border-t border-[#ece7e1] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section>
          <p className="text-xs font-semibold uppercase text-[#c2410c]">{t.wholesaleOnly}</p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[0.62fr_0.38fr]">
            <div>
              <h2 className="text-2xl font-bold text-[#1d1d1f] sm:text-3xl">
                {productName} · {t.specs}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6e6e73]">{t.note}</p>
            </div>
            <div className="rounded-[8px] bg-[#fff7ed] p-5">
              <p className="text-xs text-[#9a3412]">{t.factoryPrice}</p>
              <p className="mt-2 text-2xl font-bold text-[#c2410c]">
                {priceCny ? `${formatLocalizedPrice(priceCny, lang)} / ${values.unit}` : t.requestQuote}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#9a3412]">{priceCopy.note}</p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-[#e5e5ea] bg-[#e5e5ea] lg:grid-cols-4">
            {[
              [t.moq, `${config.moq} ${values.units}`],
              [t.sample, `${config.sample} ${values.unit}`],
              [t.leadTime, config.leadTime],
              [t.trade, "EXW / FOB / CIF"],
            ].map(([label, value]) => (
              <div key={label} className="bg-white p-4">
                <p className="text-xs text-[#6e6e73]">{label}</p>
                <p className="mt-2 text-sm font-semibold text-[#1d1d1f]">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="rounded-[8px] bg-[#f5f5f7] p-5 sm:p-6">
            <h2 className="text-xl font-bold text-[#1d1d1f]">{t.specs}</h2>
            <dl className="mt-5 divide-y divide-[#dedee3]">
              {[
                ...(productModel ? [[modelLabel, productModel]] : []),
                [t.size, config.size],
                [t.keySpec, config.keySpec],
                [t.voltage, t.voltageValue],
                [t.packing, config.packing],
                [t.warranty, values.months12],
                [t.inspection, values.inspection],
                [t.certification, values.certification],
              ].map(([term, value]) => (
                <div key={term} className="grid grid-cols-[0.4fr_0.6fr] gap-3 py-3 text-sm">
                  <dt className="text-[#6e6e73]">{term}</dt>
                  <dd className="font-medium text-[#1d1d1f]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [t.oem, t.oemText],
              [t.applications, t.applicationsText],
              [t.quality, t.qualityText],
              [t.terms, `${t.payment}: ${t.paymentValue}`],
            ].map(([title, text]) => (
              <article key={title} className="border-l-2 border-[#c2410c] bg-[#fffaf6] p-5">
                <h3 className="text-sm font-bold text-[#1d1d1f]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[6px] bg-[#128c4a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0d6f3a]"
          >
            {t.whatsapp}
          </a>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center rounded-[6px] bg-[#c2410c] px-5 py-3 text-sm font-semibold text-white hover:bg-[#ea580c]"
          >
            {t.requestQuote}
          </Link>
        </div>

        {sizePriceRows.length > 0 && (
          <section className="mt-12 rounded-[8px] border border-[#ece7e1] bg-white p-5 sm:p-6">
            <h2 className="text-xl font-bold text-[#1d1d1f]">{quoteCopy.title}</h2>
            <div className="mt-5 overflow-x-auto rounded-[8px] border border-[#e5e5ea]">
              <table className="w-full min-w-[1220px] border-collapse text-left text-sm">
                <thead className="bg-[#f5f5f7] text-[#1d1d1f]">
                  <tr>
                    {[
                      quoteCopy.model,
                      quoteCopy.size,
                      quoteCopy.productSize,
                      quoteCopy.packingSize,
                      quoteCopy.grossWeight,
                      quoteCopy.wholesale,
                      quoteCopy.retail,
                      quoteCopy.woodCrate,
                      quoteCopy.woodCrateSize,
                    ].map((heading) => (
                      <th key={heading} className="whitespace-nowrap px-4 py-3 font-semibold">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizePriceRows.map((row) => (
                    <tr key={row.sizeModel} className="border-t border-[#e5e5ea] odd:bg-white even:bg-[#fafafa]">
                      <td className="px-4 py-4 font-mono font-bold text-[#1d1d1f]">{row.sizeModel}</td>
                      <td className="px-4 py-4 font-medium text-[#1d1d1f]">{row.size}</td>
                      <td className="px-4 py-4 text-[#5f5f64]">{row.productSize ?? "-"}</td>
                      <td className="px-4 py-4 text-[#5f5f64]">{row.packingSize ?? "-"}</td>
                      <td className="px-4 py-4 text-[#5f5f64]">
                        {row.grossWeightKg ? `${row.grossWeightKg} ${quoteCopy.kg}` : "-"}
                      </td>
                      <td className="px-4 py-4 font-semibold text-[#c2410c]">
                        {formatLocalizedPrice(row.wholesalePriceCny, lang)} / {priceCopy.perUnit}
                      </td>
                      <td className="px-4 py-4 text-[#5f5f64]">
                        {row.retailPriceCny ? formatLocalizedPrice(row.retailPriceCny, lang) : "-"}
                      </td>
                      <td className="px-4 py-4 text-[#5f5f64]">
                        {row.woodCratePriceCny ? formatLocalizedPrice(row.woodCratePriceCny, lang) : "-"}
                      </td>
                      <td className="px-4 py-4 text-[#5f5f64]">
                        {row.woodCrateSize
                          ? `${row.woodCrateSize}${row.woodCrateWeightKg ? ` / ${row.woodCrateWeightKg} ${quoteCopy.kg}` : ""}`
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#86868b]">{quoteCopy.note}</p>
          </section>
        )}

        {hasContainerData && (
          <section className="mt-12 rounded-[8px] border border-[#ece7e1] bg-white p-5 sm:p-6">
            <h2 className="text-xl font-bold text-[#1d1d1f]">{container.title}</h2>
            <div className="mt-5 overflow-x-auto rounded-[8px] border border-[#e5e5ea]">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead className="bg-[#f5f5f7] text-[#1d1d1f]">
                  <tr>
                    {[
                      ...(hasModelColumn ? [container.model] : []),
                      container.packingSize,
                      container.grossWeight,
                      container.load20,
                      container.load40,
                    ].map((heading) => (
                      <th key={heading} className="whitespace-nowrap px-4 py-3 font-semibold">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {displayContainerRows.map((row) => (
                    <tr key={`${row.model}-${row.packingSize}`} className="border-t border-[#e5e5ea] odd:bg-white even:bg-[#fafafa]">
                      {hasModelColumn && (
                        <td className="px-4 py-4 font-bold text-[#1d1d1f]">{row.model}</td>
                      )}
                      <td className="px-4 py-4 font-medium text-[#1d1d1f]">{row.packingSize}</td>
                      <td className="px-4 py-4 text-[#5f5f64]">{row.grossWeight}</td>
                      <td className="px-4 py-4 text-[#5f5f64]">{row.load20}</td>
                      <td className="px-4 py-4 text-[#5f5f64]">{row.load40}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#86868b]">{container.note}</p>
          </section>
        )}

        {productDetail && (
          <section className="mt-12 rounded-[8px] border border-[#ece7e1] bg-[#fbfaf8] p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase text-[#c2410c]">{productDetail.eyebrow}</p>
            <div className="mt-3 grid gap-7 lg:grid-cols-[0.4fr_0.6fr]">
              <div>
                <h2 className="text-2xl font-bold text-[#1d1d1f]">{productDetail.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#6e6e73]">{productDetail.description}</p>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[8px] border border-[#e5e5ea] bg-white p-5">
                  <h3 className="text-base font-bold text-[#1d1d1f]">{productDetail.specTitle}</h3>
                  <dl className="mt-4 divide-y divide-[#ededf0]">
                    {productDetail.specRows.map(([term, value]) => (
                      <div key={term} className="grid gap-2 py-3 text-sm sm:grid-cols-[0.28fr_0.72fr]">
                        <dt className="font-medium text-[#6e6e73]">{term}</dt>
                        <dd className="leading-6 text-[#1d1d1f]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-[8px] border border-[#fed7aa] bg-[#fff7ed] p-5">
                  <h3 className="text-base font-bold text-[#9a3412]">{productDetail.tradeTitle}</h3>
                  <dl className="mt-4 divide-y divide-[#fed7aa]">
                    {productDetail.tradeRows.map(([term, value]) => (
                      <div key={term} className="grid gap-2 py-3 text-sm sm:grid-cols-[0.28fr_0.72fr]">
                        <dt className="font-medium text-[#c2410c]">{term}</dt>
                        <dd className="leading-6 text-[#7c2d12]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="mt-12 rounded-[8px] border border-[#ece7e1] bg-[#fbfaf8] p-5 sm:p-6">
          <h2 className="text-xl font-bold text-[#1d1d1f]">{t.workflow}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map(([title, desc]) => (
              <div key={title} className="rounded-[8px] border border-[#ece7e1] bg-white p-4">
                <h3 className="text-sm font-bold text-[#c2410c]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#6e6e73]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-[#1d1d1f]">{t.faq}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {t.faqs.map(([question, answer]) => (
              <article key={question} className="rounded-[8px] border border-[#ece7e1] bg-white p-5">
                <h3 className="text-sm font-bold text-[#1d1d1f]">{question}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6e6e73]">{answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
