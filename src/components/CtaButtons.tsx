"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

/** Call (primary) + Directions (secondary), optional quiet WhatsApp. Shared by hero, page heroes and CTA band. */
export default function CtaButtons({
  size = "md",
  whatsapp = false,
  className = "",
}: {
  size?: "md" | "lg";
  whatsapp?: boolean;
  className?: string;
}) {
  const { t } = useLanguage();
  const lg = size === "lg";
  return (
    <div className={`flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap ${className}`}>
      <a
        href={BUSINESS.phoneTel}
        className={`btn-gold !border-brand-gold !bg-brand-gold !text-brand-bg hover:!bg-white min-h-[56px] ${lg ? "!py-4 !text-base min-[420px]:min-w-[200px]" : ""}`}
      >
        <PhoneIcon className={lg ? "h-5 w-5" : "h-4 w-4"} />
        {t.hero.ctaCall}
      </a>
      <a
        href={BUSINESS.mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-outline !border-white/40 !bg-black/40 !text-white min-h-[56px] ${lg ? "!py-4 !text-base min-[420px]:min-w-[200px]" : ""}`}
      >
        <MapPinIcon className={lg ? "h-5 w-5" : "h-4 w-4"} />
        {t.hero.ctaDirections}
      </a>
      {whatsapp ? (
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-quiet min-h-[56px]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {t.hero.ctaWhatsApp}
        </a>
      ) : null}
    </div>
  );
}
