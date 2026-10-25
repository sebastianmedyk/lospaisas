import BlogShell from "@/components/BlogShell";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import LangSwitch from "@/components/LangSwitch";
import ServiceCards from "@/components/ServiceCards";
import { getDictionary, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd } from "@/lib/seo";
import { servicesPath } from "@/lib/service-routes";
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
      <PageHero
        crumbs={[{ name: t.nav.home, href: "/" }, { name: t.nav.services }]}
        breadcrumbLabel={t.a11y.breadcrumb}
        eyebrow={t.nav.services}
        title={t.services.title}
        titleId="services-listing-heading"
        intro={<p>{t.services.subtitle}</p>}
        extra={<LangSwitch locale={locale} enHref="/services" esHref="/es/servicios" />}
      />
      <section className="section-pad" aria-labelledby="services-listing-heading">
        <div className="container-site">
          <ServiceCards showDescriptions headingLevel="h2" />
        </div>
      </section>
    </BlogShell>
  );
}
