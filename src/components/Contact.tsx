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

  const channels = [
    {
      href: BUSINESS.phoneTel,
      label: t.contact.call,
      className: "btn-gold",
      icon: PhoneIcon,
      external: false,
    },
    {
      href: BUSINESS.whatsapp,
      label: t.contact.whatsapp,
      className: "btn-red",
      icon: WhatsAppIcon,
      external: true,
    },
    {
      href: BUSINESS.sms,
      label: t.contact.sms,
      className: "btn-outline",
      icon: SmsIcon,
      external: false,
    },
    {
      href: BUSINESS.instagram,
      label: t.contact.instagram,
      className: "btn-outline",
      icon: InstagramIcon,
      external: true,
    },
    {
      href: BUSINESS.tiktok,
      label: t.contact.tiktok,
      className: "btn-outline",
      icon: TikTokIcon,
      external: true,
    },
    {
      href: BUSINESS.facebook,
      label: t.contact.facebook,
      className: "btn-outline",
      icon: FacebookIcon,
      external: true,
    },
    {
      href: BUSINESS.mapsUrl,
      label: t.contact.googleMaps,
      className: "btn-outline",
      icon: MapPinIcon,
      external: true,
    },
    {
      href: BUSINESS.appleMaps,
      label: t.contact.appleMaps,
      className: "btn-outline",
      icon: AppleMapsIcon,
      external: true,
    },
    {
      href: BUSINESS.catalogue,
      label: t.contact.catalogue,
      className: "btn-outline",
      icon: CatalogIcon,
      external: true,
    },
  ] as const;

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

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:max-w-xl">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.href + channel.label}
                  href={channel.href}
                  className={`${channel.className} w-full`}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {channel.label}
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
