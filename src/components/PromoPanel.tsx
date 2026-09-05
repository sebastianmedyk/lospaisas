"use client";

import Image from "next/image";

type Accent = "gold" | "red";

type PromoPanelProps = {
  headline: string;
  /** Optional texture — heavily darkened so burned-in bilingual text is unreadable */
  textureSrc?: string;
  accent?: Accent;
  className?: string;
  aspect?: "portrait" | "wide";
};

export default function PromoPanel({
  headline,
  textureSrc,
  accent = "gold",
  className = "",
  aspect = "portrait",
}: PromoPanelProps) {
  const accentBar =
    accent === "gold"
      ? "from-brand-gold via-brand-gold to-brand-red"
      : "from-brand-red via-brand-red to-brand-gold";

  return (
    <div
      className={`promo-panel relative overflow-hidden border border-white/10 bg-brand-bg ${
        aspect === "portrait" ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[16/10]"
      } ${className}`}
    >
      {/* Optional darkened texture — text burned into PNG must stay unreadable */}
      {textureSrc ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={textureSrc}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-[0.18] blur-[6px] scale-110 saturate-50"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg/92 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(244,194,13,0.12),transparent_55%)]" />
        </div>
      ) : (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(244,194,13,0.14),transparent_50%),radial-gradient(ellipse_at_80%_85%,rgba(224,30,30,0.16),transparent_45%)]"
          aria-hidden
        />
      )}

      {/* Diagonal speed stripes */}
      <div className="speed-stripes pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      {/* Checker accent — top right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-16 w-24 opacity-70 sm:h-20 sm:w-32"
        aria-hidden
      >
        <div className="checker-strip h-full w-full" />
      </div>

      {/* Left gold accent rail */}
      <div
        className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${accentBar}`}
        aria-hidden
      />

      {/* Brush / racing slash accents */}
      <div
        className="pointer-events-none absolute -left-4 bottom-16 h-2 w-2/3 -skew-x-12 bg-brand-gold/80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-2 bottom-12 h-1.5 w-1/2 -skew-x-12 bg-brand-red"
        aria-hidden
      />

      {/* Headline — locale text only */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
        <p className="mb-3 inline-flex w-fit items-center gap-2 border-l-2 border-brand-gold bg-black/50 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-brand-gold">
          Los Paisas
        </p>
        <h3 className="headline max-w-[18ch] text-2xl leading-[0.95] text-white sm:text-3xl lg:text-4xl">
          {headline}
        </h3>
        <div
          className={`mt-5 h-1 w-24 bg-gradient-to-r ${accentBar}`}
          aria-hidden
        />
      </div>
    </div>
  );
}
