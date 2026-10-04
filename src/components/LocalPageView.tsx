import Link from "next/link";
import BlogShell from "@/components/BlogShell";
import JsonLd from "@/components/JsonLd";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { BUSINESS } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n";
import type { LocalPage } from "@/lib/local-pages";
import { breadcrumbJsonLd, faqPageJsonLd, pageServiceJsonLd } from "@/lib/seo";
import { servicesPath } from "@/lib/service-routes";
import { absoluteUrl } from "@/lib/site";

export default function LocalPageView({ page }: { page: LocalPage }) {
  const t = getDictionary(page.locale);
  const pageUrl = absoluteUrl(page.path);
  const sectionPath = servicesPath(page.locale);
  const crumbs = [
    { name: t.nav.home, url: absoluteUrl("/") },
    { name: t.nav.services, url: absoluteUrl(sectionPath) },
    ...(page.parentPath && page.parentLabel
      ? [{ name: page.parentLabel, url: absoluteUrl(page.parentPath) }]
      : []),
    { name: page.h1, url: pageUrl },
  ];

  return (
    <BlogShell locale={page.locale}>
      <JsonLd
        data={pageServiceJsonLd({
          name: page.serviceName,
          description: page.description,
          url: pageUrl,
          areaServed: page.areaServed,
        })}
      />
      <JsonLd data={faqPageJsonLd(page.faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <article>
        <header className="hero-bleed border-b border-white/15">
          <div className="container-site section-pad-sm max-w-3xl">
            <nav
              className="mb-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/50"
              aria-label={t.a11y.breadcrumb}
            >
              {crumbs.map((crumb, index) => (
                <span key={crumb.url} className="inline-flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>/</span> : null}
                  {index < crumbs.length - 1 ? (
                    <Link href={crumb.url.replace(absoluteUrl(""), "") || "/"} className="hover:text-brand-gold">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-white/80">{crumb.name}</span>
                  )}
                </span>
              ))}
            </nav>

            <p className="section-label mb-4">{page.eyebrow}</p>
            <h1 className="headline max-w-[18ch] text-[2.35rem] leading-[0.92] text-white sm:max-w-none sm:text-5xl lg:text-6xl">
              {page.h1}
            </h1>
            <span className="accent-rule accent-rule-lg" aria-hidden />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
              {page.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={BUSINESS.phoneTel} className="btn-gold min-h-[48px]">
                <PhoneIcon className="h-4 w-4" />
                {t.hero.ctaCall}
              </a>
              <a
                href={BUSINESS.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline min-h-[48px]"
              >
                <MapPinIcon className="h-4 w-4" />
                {t.hero.ctaDirections}
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quiet min-h-[48px]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.hero.ctaWhatsApp}
              </a>
            </div>
          </div>
        </header>

        {page.sections.map((section) => (
          <section key={section.heading} className="section-pad border-b border-white/15">
            <div className="container-site max-w-3xl">
              <h2 className="headline text-3xl leading-[0.95] text-white sm:text-4xl">
                {section.heading}
              </h2>
              <span className="accent-rule" aria-hidden />
              <div className="mt-5 space-y-4 text-base leading-relaxed text-white/80">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-5 space-y-2 border-t border-white/15 pt-5 text-white/80">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-brand-gold" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.nap ? <NapCard locale={page.locale} /> : null}
            </div>
          </section>
        ))}

        <section className="section-pad border-b border-white/15" aria-labelledby="page-faq">
          <div className="container-site max-w-3xl">
            <h2 id="page-faq" className="headline text-3xl leading-[0.95] text-white sm:text-4xl">
              {page.faqHeading}
            </h2>
            <span className="accent-rule" aria-hidden />
            <div className="mt-8 space-y-8">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="border-t border-white/15 pt-6">
                  <h3 className="headline text-2xl leading-tight text-white">{faq.question}</h3>
                  <p className="mt-3 leading-relaxed text-white/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" aria-labelledby="page-more">
          <div className="container-site max-w-3xl">
            <h2 id="page-more" className="headline text-3xl leading-[0.95] text-white sm:text-4xl">
              {page.moreHeading}
            </h2>
            <span className="accent-rule" aria-hidden />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="card-dark block text-white hover:text-brand-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </BlogShell>
  );
}

function NapCard({ locale }: { locale: "en" | "es" }) {
  const t = getDictionary(locale);
  return (
    <address className="card-dark mt-6 not-italic text-white/85">
      <p className="headline text-xl text-white">{BUSINESS.name}</p>
      <p className="mt-3">{BUSINESS.address}</p>
      <p className="mt-2">
        <a href={BUSINESS.phoneTel} className="font-semibold text-brand-gold hover:brightness-110">
          {BUSINESS.phoneDisplay}
        </a>
      </p>
      <p className="mt-2">
        {t.location.hoursLabel}: {t.location.hoursValue}
      </p>
      <p className="mt-4 flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.14em]">
        <a
          href={BUSINESS.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-gold hover:underline"
        >
          {t.location.getDirections}
        </a>
        <a
          href={BUSINESS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-brand-gold"
        >
          {BUSINESS.instagramHandle}
        </a>
      </p>
    </address>
  );
}
