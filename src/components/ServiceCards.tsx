"use client";

import Link from "next/link";
import Image from "next/image";
import { PHOTOS, type Photo } from "@/lib/photos";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceHref } from "@/lib/service-routes";
import Reveal from "./Reveal";

const focus =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";

/* i18n service indexes: 0 new, 1 used, 2 alignment, 3 balancing, 4 repair, 5 install, 6 mobile */
const OTHER: [number, Photo][] = [
  [4, PHOTOS.repair1],
  [3, PHOTOS.balancer1],
  [2, PHOTOS.balancer2],
  [5, PHOTOS.install],
  [6, PHOTOS.truck1],
];
const PHOTO_BY_INDEX: Record<number, Photo> = {
  0: PHOTOS.newTread,
  1: PHOTOS.poleSign,
  2: PHOTOS.balancer2,
  3: PHOTOS.balancer1,
  4: PHOTOS.repair1,
  5: PHOTOS.install,
  6: PHOTOS.truck1,
};

export type ServiceLayout = "default" | "list" | "bento" | "index";

/**
 * New vs Used + the other services. One data source, four layouts:
 * default (split + photo cards), list (numbered rows with thumbnails),
 * bento (mosaic), index (text only, photos live elsewhere on the page).
 */
export default function ServiceCards({
  showDescriptions = false,
  headingLevel = "h3",
  layout = "default",
}: {
  showDescriptions?: boolean;
  headingLevel?: "h2" | "h3";
  layout?: ServiceLayout;
}) {
  const { t, locale } = useLanguage();
  const es = locale === "es";
  const items = t.services.items;
  const Heading = headingLevel;
  const tagFor = (index: number) =>
    index === 0
      ? { text: es ? "Nuevas" : "New", cls: "bg-brand-gold text-brand-bg" }
      : index === 1
        ? { text: es ? "Usadas" : "Used", cls: "bg-brand-red text-white" }
        : null;
  const order = [0, 1, 4, 3, 2, 5, 6];

  if (layout === "list") {
    return (
      <ol className="border-b border-white/15">
        {order.map((index, i) => {
          const tag = tagFor(index);
          const photo = PHOTO_BY_INDEX[index];
          return (
            <li key={index} className="border-t border-white/15">
              <Reveal>
                <Link
                  href={serviceHref(locale, index)}
                  className={`group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 sm:gap-8 sm:py-6 ${focus}`}
                >
                  <span className="headline w-10 text-s3 font-bold text-brand-gold sm:w-16 sm:text-s4" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    {tag ? (
                      <span className={`mb-2 inline-block px-2.5 py-0.5 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] ${tag.cls}`}>
                        {tag.text}
                      </span>
                    ) : null}
                    <Heading className="headline text-s2 font-bold text-white transition group-hover:text-brand-gold sm:text-s3">
                      {items[index].title}
                    </Heading>
                    <span className="mt-1 hidden max-w-xl text-white/70 sm:block">{items[index].description}</span>
                  </span>
                  <span className="relative block h-16 w-24 overflow-hidden bg-black sm:h-24 sm:w-40">
                    <Image
                      src={photo.src}
                      alt={photo.alt[locale]}
                      fill
                      sizes="160px"
                      loading="lazy"
                      className="object-cover opacity-85 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
                    />
                  </span>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ol>
    );
  }

  if (layout === "index") {
    return (
      <ol className="grid gap-x-12 md:grid-cols-2">
        {order.map((index, i) => {
          const tag = tagFor(index);
          return (
            <li key={index} className="border-t border-white/15">
              <Link
                href={serviceHref(locale, index)}
                className={`group flex gap-4 py-5 ${focus}`}
              >
                <span className="headline w-8 shrink-0 text-s2 font-bold text-brand-gold" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <Heading className="headline flex flex-wrap items-center gap-3 text-s2 font-bold text-white transition group-hover:text-brand-gold">
                    {items[index].title}
                    {tag ? (
                      <span className={`px-2.5 py-0.5 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] ${tag.cls}`}>
                        {tag.text}
                      </span>
                    ) : null}
                  </Heading>
                  <span className="mt-1 block text-white/70">{items[index].description}</span>
                </span>
                <span className="self-center text-brand-gold transition group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    );
  }

  if (layout === "bento") {
    /* cols (2 mobile / 4 desktop), tile spans */
    const span: Record<number, string> = {
      0: "col-span-2 row-span-2",
      1: "col-span-2",
      4: "",
      3: "",
      2: "",
      5: "",
      6: "col-span-2",
    };
    return (
      <ul className="grid auto-rows-[190px] grid-cols-2 gap-3 lg:auto-rows-[220px] lg:grid-cols-4">
        {[0, 1, 4, 3, 2, 5, 6].map((index, i) => {
          const tag = tagFor(index);
          const photo = PHOTO_BY_INDEX[index];
          const big = index === 0;
          return (
            <li key={index} className={span[index]}>
              <Reveal delay={i * 60} className="h-full">
                <Link
                  href={serviceHref(locale, index)}
                  className={`group relative block h-full overflow-hidden border border-white/15 bg-black transition hover:border-brand-gold/60 ${focus}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt[locale]}
                    fill
                    sizes={big ? "(max-width: 1024px) 100vw, 560px" : "(max-width: 1024px) 50vw, 280px"}
                    loading="lazy"
                    className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    {tag ? (
                      <span className={`mb-2 inline-block px-2.5 py-0.5 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] ${tag.cls}`}>
                        {tag.text}
                      </span>
                    ) : null}
                    <Heading
                      className={`headline font-bold leading-none text-white ${big ? "text-s5" : "text-s2"}`}
                    >
                      {items[index].title}
                    </Heading>
                    {big ? <p className="mt-2 max-w-sm text-sm text-white/80">{items[index].description}</p> : null}
                  </div>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    );
  }

  const split: { index: number; photo: Photo }[] = [
    { index: 0, photo: PHOTOS.newTread },
    { index: 1, photo: PHOTOS.poleSign },
  ];

  return (
    <>
      <ul className="grid gap-4 md:grid-cols-2">
        {split.map(({ index, photo }, i) => {
          const tag = tagFor(index)!;
          return (
            <li key={index}>
              <Reveal delay={i * 120}>
                <Link
                  href={serviceHref(locale, index)}
                  className={`group relative block aspect-[4/3] overflow-hidden border border-white/15 bg-black sm:aspect-[16/10] ${focus}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    loading="lazy"
                    className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className={`inline-block px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.25em] ${tag.cls}`}>
                      {tag.text}
                    </span>
                    <Heading className="headline mt-3 text-4xl font-bold leading-none text-white sm:text-5xl">
                      {items[index].title}
                    </Heading>
                    <p className="mt-2 max-w-sm text-sm text-white/80">{items[index].description}</p>
                    <span className="mt-3 inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-brand-gold transition group-hover:translate-x-1">
                      {t.services.view} →
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {OTHER.map(([index, photo], i) => (
          <li key={index}>
            <Reveal delay={i * 70} className="h-full">
              <Link
                href={serviceHref(locale, index)}
                className={`group flex h-full flex-col border border-white/15 bg-[#141414] transition hover:border-brand-gold/60 ${focus}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={photo.src}
                    alt={photo.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    loading="lazy"
                    className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="flex-1 border-t-2 border-brand-gold px-3 py-3">
                  <Heading className="headline text-xl font-bold leading-tight text-white group-hover:text-brand-gold">
                    {items[index].title}
                  </Heading>
                  {showDescriptions ? (
                    <p className="mt-1.5 text-sm leading-snug text-white/70">{items[index].description}</p>
                  ) : null}
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  );
}
