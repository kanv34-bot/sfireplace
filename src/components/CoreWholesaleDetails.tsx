import Link from "next/link";
import {
  getCoreContainerCopy,
  getCoreProductDetail,
  getCoreWholesaleDisplayConfig,
  getCoreWholesaleCopy,
  getCoreWholesaleValueCopy,
} from "@/lib/core-wholesale";
import { formatLocalizedPrice, getPriceCopy } from "@/lib/product-pricing";

type Props = {
  lang: string;
  productId: string;
  productName: string;
  priceCny?: number;
};

const whatsappUrl =
  "https://wa.me/8618028181668?text=Hello%2C%20I%20would%20like%20a%20wholesale%20quotation.%20Please%20send%20MOQ%2C%20specifications%2C%20lead%20time%2C%20and%20OEM%2FODM%20options.";

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

        {hasContainerData && (
          <section className="mt-12 rounded-[8px] border border-[#ece7e1] bg-white p-5 sm:p-6">
            <h2 className="text-xl font-bold text-[#1d1d1f]">{container.title}</h2>
            <div className="mt-5 overflow-x-auto rounded-[8px] border border-[#e5e5ea]">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead className="bg-[#f5f5f7] text-[#1d1d1f]">
                  <tr>
                    {[
                      ...(containerRows?.length ? [container.model] : []),
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
                  {(containerRows?.length
                    ? containerRows
                    : [{
                        model: "",
                        packingSize: config.packingSize,
                        grossWeight: config.grossWeight,
                        load20: config.load20,
                        load40: config.load40,
                      }]
                  ).map((row) => (
                    <tr key={`${row.model}-${row.packingSize}`} className="border-t border-[#e5e5ea] odd:bg-white even:bg-[#fafafa]">
                      {containerRows?.length && (
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
