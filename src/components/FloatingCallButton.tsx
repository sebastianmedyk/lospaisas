"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { PhoneIcon } from "./Icons";

/**
 * Mobile sticky call button — tap to dial Google Business number.
 * Hidden on md+ where header Call CTA is enough. Icon-only FAB in the
 * bottom-right corner: small footprint so it stops covering section
 * headings/body text (left-aligned) as the page scrolls underneath it.
 */
export default function FloatingCallButton() {
  const { t } = useLanguage();

  return (
    <a
      href={BUSINESS.phoneTel}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold bg-brand-gold text-brand-bg shadow-lg shadow-black/50 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg active:scale-[0.98] md:hidden"
      aria-label={t.hero.floatingCallAria}
    >
      <PhoneIcon className="h-6 w-6" />
    </a>
  );
}
