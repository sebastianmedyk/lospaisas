"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { PhoneIcon } from "./Icons";

/**
 * Mobile sticky call button — tap to dial Google Business number.
 * Hidden on md+ screens where header/hero CTAs are enough.
 */
export default function FloatingCallButton() {
  const { t } = useLanguage();

  return (
    <a
      href={BUSINESS.phoneTel}
      className="fixed bottom-5 left-4 z-[60] flex items-center gap-2 rounded-full bg-brand-gold px-4 py-3 text-sm font-bold text-brand-bg shadow-md shadow-black/30 transition hover:bg-[#ffd84d] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg active:scale-[0.98] md:hidden"
      aria-label={t.hero.floatingCallAria}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-bg text-brand-gold">
        <PhoneIcon className="h-4 w-4" />
      </span>
      <span className="pr-1 leading-tight">
        <span className="block text-[0.65rem] font-bold uppercase tracking-wider opacity-80">
          {t.hero.floatingCall}
        </span>
        <span className="block text-sm font-black tracking-wide">
          {BUSINESS.phoneDisplay}
        </span>
      </span>
    </a>
  );
}
