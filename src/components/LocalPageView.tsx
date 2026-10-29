import Link from "next/link";
import BlogShell from "@/components/BlogShell";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import InfoStrip from "@/components/InfoStrip";
import SectionHeading from "@/components/SectionHeading";
import Reviews from "@/components/Reviews";
import { BUSINESS } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n";
import type { LocalPage } from "@/lib/local-pages";
import { breadcrumbJsonLd, faqPageJsonLd, pageServiceJsonLd } from "@/lib/seo";
import { homePath, servicesPath } from "@/lib/routes";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import PhotoStrip from "@/components/PhotoStrip";
import { SERVICE_PHOTOS } from "@/lib/photos";

export default function LocalPageView({ page }: { page: LocalPage }) {
  const t = getDictionary(page.locale);
  const pageUrl = absoluteUrl(page.path);
  const sectionPath = servicesPath(page.locale);
  const crumbs = [
    { name: t.nav.home, url: absoluteUrl(homePath(page.locale)) },
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
        <PageHero
          locale={page.locale}
          crumbs={crumbs.map((crumb, index) => ({
            name: crumb.name,
            href:
              index < crumbs.length - 1
                ? crumb.url.replace(absoluteUrl(""), "") || "/"
                : undefined,
          }))}
          breadcrumbLabel={t.a11y.breadcrumb}
          eyebrow={page.eyebrow}
          title={page.h1}
          intro={page.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          cta
        />
        <InfoStrip />

        {page.kind === "service" && SERVICE_PHOTOS[page.paths.en] ? (
          <section className="border-b border-white/15 py-8">
            <div className="container-site max-w-3xl">
              <PhotoStrip photos={SERVICE_PHOTOS[page.paths.en]} locale={page.locale} />
            </div>
          </section>
        ) : null}

        {page.sections.map((section) => (
          <section key={section.heading} className="section-pad border-b border-white/15">
            <div className="container-site max-w-3xl">
              <SectionHeading title={section.heading} />
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
            <SectionHeading id="page-faq" title={page.faqHeading} />
            <div className="mt-8 space-y-8">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="border-t border-white/15 pt-6">
                  <h3 className="headline text-2xl font-bold leading-tight text-white">{faq.question}</h3>
                  <p className="mt-3 leading-relaxed text-white/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Reviews locale={page.locale} />

        <section className="section-pad" aria-labelledby="page-more">
          <div className="container-site max-w-3xl">
            <SectionHeading id="page-more" title={page.moreHeading} />
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

function NapCard({ locale }: { locale: Locale }) {
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
