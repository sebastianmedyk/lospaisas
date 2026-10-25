"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

/** Sticky bottom action bar, mobile only: Call / Directions / WhatsApp. */
export default function MobileBar() {
  const { t } = useLanguage();
  const base =
    "flex min-h-[56px] flex-1 flex-col items-center justify-center gap-1 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-gold";

  return (
    <nav
      aria-label={t.hero.floatingCallAria}
      className="fixed inset-x-0 bottom-0 z-[60] flex border-t-2 border-brand-gold bg-brand-bg pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a href={BUSINESS.phoneTel} className={`${base} bg-brand-gold text-brand-bg`}>
        <PhoneIcon className="h-5 w-5" />
        {t.nav.call}
      </a>
      <a
        href={BUSINESS.mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-x border-white/15 text-white`}
      >
        <MapPinIcon className="h-5 w-5 text-brand-gold" />
        {t.hero.ctaDirections}
      </a>
      <a
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} text-white`}
      >
        <WhatsAppIcon className="h-5 w-5 text-brand-gold" />
        {t.nav.whatsapp}
      </a>
    </nav>
  );
}
