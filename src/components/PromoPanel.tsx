"use client";

import Image from "next/image";

type PromoPanelProps = {
  imageSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Shows the FULL promo graphic (no crop). Locale assets are ~16:9;
 * older brand PNGs are ~4:3. Intrinsic ratio drives height.
 */
export default function PromoPanel({
  imageSrc,
  alt,
  className = "",
  priority = false,
}: PromoPanelProps) {
  return (
    <div
      className={`promo-panel relative w-full overflow-hidden border border-brand-gold/40 bg-brand-bg ${className}`}
    >
      <div className="relative w-full bg-brand-bg">
        <Image
          src={imageSrc}
          alt={alt}
          width={1280}
          height={720}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          className="h-auto w-full object-contain"
          priority={priority}
        />
      </div>

      {/* Thin gold/red frame accents — left rail (does not cover text) */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1.5 bg-gradient-to-b from-brand-gold via-brand-gold to-brand-red"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-px bg-brand-gold/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-brand-red/60"
        aria-hidden
      />
    </div>
  );
}
