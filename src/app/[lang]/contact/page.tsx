import { getDictionary } from "@/lib/dictionary";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div>
      <div className="bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f]">
            {t.contact_title}
          </h1>
          <p className="mt-2 text-sm text-[#6e6e73]">
            {t.contact_desc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mb-6">
              {t.contact_info}
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#fff7ed] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#c2410c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f]">
                    {t.phone}
                  </p>
                  <a href="tel:+8618028181668" className="text-sm text-[#c2410c] hover:text-[#ea580c] transition-colors">
                    +86 18028181668
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#fff7ed] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#c2410c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f]">
                    {t.email}
                  </p>
                  <a href="mailto:kanv34@gmail.com" className="text-sm text-[#c2410c] hover:text-[#ea580c] transition-colors">
                    kanv34@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#fff7ed] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#c2410c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f]">
                    {t.address}
                  </p>
                  <p className="text-sm text-[#6e6e73]">
                    {t.footer_address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`/${lang}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#e5e5ea] text-sm text-[#1d1d1f] rounded-full hover:bg-[#f5f5f7] transition-colors"
              >
                {t.weibo}
              </a>
              <a
                href={`/${lang}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#e5e5ea] text-sm text-[#1d1d1f] rounded-full hover:bg-[#f5f5f7] transition-colors"
              >
                {t.taobao}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f5f5f7] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">
              {t.form_title}
            </h3>
            <form
              action={`mailto:kanv34@gmail.com`}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-[#6e6e73] mb-1.5">
                  {t.form_name}
                </label>
                <input
                  type="text"
                  placeholder={t.form_name_placeholder}
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e5ea] rounded-xl text-sm text-[#1d1d1f] placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#c2410c]/20 focus:border-[#c2410c] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-[#6e6e73] mb-1.5">
                  {t.form_phone}
                </label>
                <input
                  type="tel"
                  placeholder={t.form_phone_placeholder}
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e5ea] rounded-xl text-sm text-[#1d1d1f] placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#c2410c]/20 focus:border-[#c2410c] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-[#6e6e73] mb-1.5">
                  {t.form_message}
                </label>
                <textarea
                  rows={4}
                  placeholder={t.form_message_placeholder}
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e5ea] rounded-xl text-sm text-[#1d1d1f] placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#c2410c]/20 focus:border-[#c2410c] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#c2410c] text-white rounded-xl text-sm font-medium hover:bg-[#ea580c] transition-colors"
              >
                {t.form_submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
