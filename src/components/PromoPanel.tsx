"use client";

import Image from "next/image";

type PromoPanelProps = {
  imageSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Full promo graphic, no crop, no cheap frame — image speaks for itself.
 */
export default function PromoPanel({
  imageSrc,
  alt,
  className = "",
  priority = false,
}: PromoPanelProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl bg-brand-bg ${className}`}>
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
  );
}
