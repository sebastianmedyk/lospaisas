"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { PhoneIcon } from "./Icons";

/**
 * Mobile sticky call button — tap to dial Google Business number.
 * Hidden on md+ where header Call CTA is enough. Anchored bottom-right so it
 * does not cover body text; does not duplicate a full bottom bar.
 */
export default function FloatingCallButton() {
  const { t } = useLanguage();

  return (
    <a
      href={BUSINESS.phoneTel}
      className="cut-sm fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-[60] flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-none border border-brand-gold/50 bg-brand-bg px-4 py-3 text-sm font-extrabold text-brand-gold transition hover:bg-brand-gold hover:text-brand-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg active:brightness-95 md:hidden"
      aria-label={t.hero.floatingCallAria}
    >
      <span className="cut-tr flex h-9 w-9 shrink-0 items-center justify-center rounded-none border border-brand-gold/25 bg-brand-bg text-brand-gold">
        <PhoneIcon className="h-4 w-4" />
      </span>
      <span className="pr-1 leading-tight">
        <span className="block text-[0.65rem] font-extrabold uppercase tracking-[0.2em] opacity-80">
          {t.hero.floatingCall}
        </span>
        <span className="block text-sm font-extrabold tracking-wide text-current">
          {BUSINESS.phoneDisplay}
        </span>
      </span>
    </a>
  );
}
