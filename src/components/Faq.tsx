"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      className="section-pad relative border-t border-white/10"
      aria-labelledby="faq-heading"
    >
      <div className="container-site relative">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
            {t.nav.faq}
          </p>
          <h2
            id="faq-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {t.faq.title}
          </h2>
          <p className="mt-4 text-white/70">{t.faq.subtitle}</p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {t.faq.items.map((item) => (
            <details
              key={item.question}
              className="card-dark group !p-0 open:border-brand-gold/40"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-bold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  <span className="text-left text-sm sm:text-base">
                    {item.question}
                  </span>
                  <span
                    className="mt-0.5 shrink-0 text-brand-gold transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-white/70">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
