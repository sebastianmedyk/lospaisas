import BlogShell from "@/components/BlogShell";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import LangSwitch from "@/components/LangSwitch";
import ServiceCards from "@/components/ServiceCards";
import { getDictionary, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd } from "@/lib/seo";
import { homePath, servicesPath } from "@/lib/routes";
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
          { name: t.nav.home, url: absoluteUrl(homePath(locale)) },
          { name: t.nav.services, url: listingUrl },
        ])}
      />
      <section className="px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pb-24" aria-labelledby="services-listing-heading">
        <div className="container-site">
          <nav
            className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/50"
            aria-label={t.a11y.breadcrumb}
          >
            <Link href={homePath(locale)} className="transition hover:text-brand-gold">
              {t.nav.home}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white/80">{t.nav.services}</span>
          </nav>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h1
              id="services-listing-heading"
              className="headline text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl"
            >
              {t.services.title}
            </h1>
            <LangSwitch locale={locale} hrefs={{ es: servicesPath("es"), en: servicesPath("en"), pl: servicesPath("pl") }} />
          </div>
          <ServiceCards showDescriptions headingLevel="h2" />
        </div>
      </section>
    </BlogShell>
  );
}
