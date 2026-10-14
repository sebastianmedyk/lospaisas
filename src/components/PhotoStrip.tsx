import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Photo } from "@/lib/photos";

export default function PhotoStrip({
  photos,
  locale,
  className = "",
}: {
  photos: Photo[];
  locale: Locale;
  className?: string;
}) {
  if (!photos.length) return null;
  const cols = photos.length === 1 ? "grid-cols-1 max-w-sm" : "grid-cols-2 max-w-2xl";
  return (
    <div className={`grid gap-3 ${cols} ${className}`}>
      {photos.map((p) => (
        <figure key={p.src} className="overflow-hidden rounded-none border border-white/15 bg-black">
          <Image
            src={p.src}
            alt={p.alt[locale]}
            width={p.width}
            height={p.height}
            sizes="(max-width: 640px) 50vw, 340px"
            loading="lazy"
            className="aspect-[3/4] h-auto w-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
