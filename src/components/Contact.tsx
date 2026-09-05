"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  AppleMapsIcon,
  CatalogIcon,
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  SmsIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "./Icons";
import PromoPanel from "./PromoPanel";

export default function Contact() {
  const { t, locale } = useLanguage();

  const secondary = [
    { href: BUSINESS.whatsapp, label: t.contact.whatsapp, icon: WhatsAppIcon, external: true },
    { href: BUSINESS.sms, label: t.contact.sms, icon: SmsIcon, external: false },
    { href: BUSINESS.instagram, label: t.contact.instagram, icon: InstagramIcon, external: true },
    { href: BUSINESS.tiktok, label: t.contact.tiktok, icon: TikTokIcon, external: true },
    { href: BUSINESS.facebook, label: t.contact.facebook, icon: FacebookIcon, external: true },
    { href: BUSINESS.mapsUrl, label: t.contact.googleMaps, icon: MapPinIcon, external: true },
    { href: BUSINESS.appleMaps, label: t.contact.appleMaps, icon: AppleMapsIcon, external: true },
    { href: BUSINESS.catalogue, label: t.contact.catalogue, icon: CatalogIcon, external: true },
  ] as const;

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden border-t border-white/10 bg-black/50"
      aria-labelledby="contact-heading"
    >
      <div className="container-site relative grid min-w-0 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
            {t.nav.contact}
          </p>
          <h2
            id="contact-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-lg text-white/70">{t.contact.subtitle}</p>
          <p className="mt-3 inline-block rounded-r-xl border-l-2 border-brand-gold bg-brand-gold/10 px-3 py-1.5 text-sm font-bold text-brand-gold">
            {t.contact.hours}
          </p>

          {/* Max 2 primary actions */}
          <div className="mt-8 flex min-w-0 flex-col gap-3 sm:max-w-xl sm:flex-row">
            <a href={BUSINESS.phoneTel} className="btn-gold min-h-[48px] w-full flex-1">
              <PhoneIcon className="h-4 w-4" />
              <span className="min-w-0 break-words text-center leading-snug">
                {t.contact.call}
              </span>
            </a>
            <a
              href={BUSINESS.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline min-h-[48px] w-full flex-1"
            >
              <MapPinIcon className="h-4 w-4" />
              {t.hero.ctaDirections}
            </a>
          </div>

          {/* Quieter secondary channel grid */}
          <p className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40">
            {t.contact.secondaryLabel}
          </p>
          <div className="mt-3 grid min-w-0 grid-cols-2 gap-2 min-[480px]:grid-cols-4 sm:max-w-xl">
            {secondary.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.href + channel.label}
                  href={channel.href}
                  className="btn-quiet !justify-start !px-3 !py-2.5 text-[0.7rem]"
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 opacity-70" />
                  <span className="min-w-0 truncate">{channel.label}</span>
                </a>
              );
            })}
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
