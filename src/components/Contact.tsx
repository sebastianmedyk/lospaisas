"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import PromoPanel from "./PromoPanel";

export default function Contact() {
  const { t, locale } = useLanguage();

  return (
    <section id="contact" className="section-pad relative border-t border-white/10 bg-black/50">
      <div className="speed-stripes pointer-events-none absolute inset-0 opacity-15" aria-hidden />
      <div className="container-site relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
            {t.nav.contact}
          </p>
          <h2 className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-lg text-white/70">{t.contact.subtitle}</p>
          <p className="mt-3 inline-block border-l-2 border-brand-red bg-brand-red/10 px-3 py-1.5 text-sm font-black uppercase tracking-wider text-brand-gold">
            {t.contact.hours}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:max-w-md">
            <a href={BUSINESS.phoneTel} className="btn-gold w-full">
              <PhoneIcon className="h-4 w-4" />
              {t.contact.call}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.contact.whatsapp}
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full"
            >
              <InstagramIcon className="h-4 w-4" />
              {t.contact.instagram}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <PromoPanel
            imageSrc={`/brand/locale/balance-${locale}.png`}
            alt={t.promo.balance}
          />
        </div>
      </div>
    </section>
  );
}
