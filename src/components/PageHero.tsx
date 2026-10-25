import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { PHOTOS } from "@/lib/photos";
import CtaButtons from "./CtaButtons";

export type Crumb = { name: string; href?: string };

/**
 * Hero for every inner page (service, blog, location, contact, listings).
 * Same look as the home hero, compact: dim shop photo, breadcrumb, label, bold H1.
 */
export default function PageHero({
  crumbs,
  breadcrumbLabel,
  eyebrow,
  title,
  titleId,
  intro,
  meta,
  extra,
  cta = false,
}: {
  crumbs: Crumb[];
  breadcrumbLabel: string;
  eyebrow?: string;
  title: string;
  titleId?: string;
  intro?: ReactNode;
  meta?: ReactNode;
  extra?: ReactNode;
  cta?: boolean;
}) {
  return (
    <header className="relative isolate overflow-hidden border-b border-white/15 bg-brand-bg">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Image
          src={PHOTOS.storefront.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[60%_center] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/90 to-brand-bg/60" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-brand-red via-brand-gold to-transparent" />
      </div>
      <div className="container-site section-pad-sm">
        <div className="max-w-3xl">
          <nav
            className="fade-up mb-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/50"
            aria-label={breadcrumbLabel}
          >
            {crumbs.map((crumb, index) => (
              <span key={`${crumb.name}-${index}`} className="inline-flex items-center gap-2">
                {index > 0 ? <span aria-hidden>/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition hover:text-brand-gold">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>

          {eyebrow ? <p className="section-label fade-up mb-4">{eyebrow}</p> : null}
          {meta ? <div className="fade-up mb-4">{meta}</div> : null}
          <h1
            id={titleId}
            className="fade-up headline text-[2.4rem] font-bold leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {title}
          </h1>
          <span className="accent-rule accent-rule-lg" aria-hidden />
          {intro ? (
            <div
              className="fade-up mt-5 space-y-4 text-base leading-relaxed text-white/80 sm:text-lg"
              style={{ animationDelay: "140ms" }}
            >
              {intro}
            </div>
          ) : null}
          {extra ? <div className="mt-6">{extra}</div> : null}
          {cta ? (
            <div className="fade-up mt-7" style={{ animationDelay: "200ms" }}>
              <CtaButtons whatsapp />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
