import Link from "next/link";
import BlogShell, { BlogBackLinks } from "@/components/BlogShell";
import JsonLd from "@/components/JsonLd";
import { getDictionary, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd } from "@/lib/seo";
import { serviceHref, servicesPath } from "@/lib/service-routes";
import { absoluteUrl } from "@/lib/site";

type Props = {
  locale: Locale;
};

export default function ServicesListing({ locale }: Props) {
  const t = getDictionary(locale);
  const listingPath = servicesPath(locale);
  const listingUrl = absoluteUrl(listingPath);

  return (
    <BlogShell locale={locale}>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, url: absoluteUrl("/") },
          { name: t.nav.services, url: listingUrl },
        ])}
      />
      <section className="section-pad" aria-labelledby="services-listing-heading">
        <div className="container-site">
          <BlogBackLinks
            locale={locale}
            homeLabel={t.nav.home}
            blogLabel={t.nav.services}
            breadcrumbLabel={t.a11y.breadcrumb}
            sectionHref={listingPath}
          />
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
            {t.nav.services}
          </p>
          <h1
            id="services-listing-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {t.services.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">{t.services.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide">
            <Link
              href="/services"
              className={`rounded-none border px-3 py-1.5 ${
                locale === "en"
                  ? "border-brand-gold/40 bg-transparent text-brand-gold"
                  : "border-white/15 text-white/60 hover:border-brand-gold/50 hover:text-brand-gold"
              }`}
            >
              English
            </Link>
            <Link
              href="/es/servicios"
              className={`rounded-none border px-3 py-1.5 ${
                locale === "es"
                  ? "border-brand-gold/40 bg-transparent text-brand-gold"
                  : "border-white/15 text-white/60 hover:border-brand-gold/50 hover:text-brand-gold"
              }`}
            >
              Español
            </Link>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.services.items.map((service, index) => (
              <li key={service.title} className="card-dark !p-0">
                <Link
                  href={serviceHref(locale, index)}
                  className="block p-5 transition hover:bg-white/[0.04]"
                >
                  <h2 className="headline text-lg text-white sm:text-xl">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{service.description}</p>
                  <span className="mt-4 inline-block text-xs font-black uppercase tracking-wider text-brand-gold">
                    {t.services.view} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </BlogShell>
  );
}
