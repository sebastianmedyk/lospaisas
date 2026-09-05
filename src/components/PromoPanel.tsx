"use client";

import Image from "next/image";

type PromoPanelProps = {
  imageSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspect?: "portrait" | "wide";
};

export default function PromoPanel({
  imageSrc,
  alt,
  className = "",
  priority = false,
  aspect = "portrait",
}: PromoPanelProps) {
  return (
    <div
      className={`promo-panel relative overflow-hidden border border-brand-gold/40 bg-brand-bg ${
        aspect === "portrait" ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[16/10]"
      } ${className}`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={priority}
      />

      {/* Thin gold/red frame accents — left rail */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1.5 bg-gradient-to-b from-brand-gold via-brand-gold to-brand-red"
        aria-hidden
      />
      {/* Top thin gold edge */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-px bg-brand-gold/70"
        aria-hidden
      />
      {/* Bottom thin red edge */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-brand-red/60"
        aria-hidden
      />
    </div>
  );
}
