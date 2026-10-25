"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { StarIcon } from "./Icons";

/** Google rating pill, links to the reviews list. */
export default function RatingBadge({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <a
      href={BUSINESS.reviewsListUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 border border-white/20 bg-black/55 px-3.5 py-2 backdrop-blur-sm transition hover:border-brand-gold/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${className}`}
      aria-label={`${t.hero.statRatingLabel} ${BUSINESS.ratingValue}, ${BUSINESS.reviewCount} ${t.hero.statReviewsLabel}`}
    >
      <span className="flex gap-0.5 text-brand-gold" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </span>
      <span className="text-sm font-extrabold tracking-wide text-white">{BUSINESS.ratingValue}★</span>
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
        Google · {BUSINESS.reviewCount} {t.hero.statReviewsLabel.toLowerCase()}
      </span>
    </a>
  );
}
