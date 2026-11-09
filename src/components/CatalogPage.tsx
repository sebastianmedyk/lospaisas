import BlogShell from "@/components/BlogShell";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import CatalogGrid from "@/components/CatalogGrid";
import { BUSINESS } from "@/lib/constants";
import { getDictionary, type Locale } from "@/lib/i18n";
import { NEW_TIRE_MIN_PRICE } from "@/lib/new-tire-catalog";
import { catalogPath, homePath, IN_LANGUAGE } from "@/lib/routes";
import { breadcrumbJsonLd, newTireOffersJsonLd, pageServiceJsonLd } from "@/lib/seo";
import { absoluteUrl, SITE_URL } from "@/lib/site";

const WHATSAPP_URL = "https://wa.me/15614294041";

const COPY: Record<
  Locale,
  {
    crumb: string;
    h1: string;
    promo: string;
    disclaimer: string;
    whatsapp: string;
    serviceName: string;
    serviceDescription: string;
    grid: { filterLabel: string; all: string; perTire: string; altTemplate: string; countTemplate: string };
  }
> = {
  en: {
    crumb: "Catalog",
    h1: "New Tire Catalog",
    promo: `Cosmo new tires from $${NEW_TIRE_MIN_PRICE}, R15–R18. Catalog price includes alignment and balancing.`,
    disclaimer: `Prices subject to change without notice. Call or WhatsApp ${BUSINESS.phoneDisplay} to confirm your size is in stock before you come.`,
    whatsapp: "WhatsApp for availability",
    serviceName: "New tires (Cosmo catalog)",
    serviceDescription: `New Cosmo tires R15–R18 from $${NEW_TIRE_MIN_PRICE} at Los Paisas Tires Shop in West Palm Beach. Catalog price includes alignment and balancing.`,
    grid: {
      filterLabel: "Filter by rim size",
      all: "All",
      perTire: "per tire",
      altTemplate: "Cosmo {size}: Cosmo catalog illustration, the same image is shared by several sizes",
      countTemplate: "{n} sizes",
    },
  },
  es: {
    crumb: "Catálogo",
    h1: "Catálogo de llantas nuevas",
    promo: `Llantas nuevas Cosmo desde $${NEW_TIRE_MIN_PRICE}, R15–R18. El precio del catálogo incluye alineación y balanceo.`,
    disclaimer: `Precios sujetos a cambio sin previo aviso. Llama o escribe por WhatsApp al ${BUSINESS.phoneDisplay} para confirmar que tu medida está disponible antes de venir.`,
    whatsapp: "WhatsApp para disponibilidad",
    serviceName: "Llantas nuevas (catálogo Cosmo)",
    serviceDescription: `Llantas nuevas Cosmo R15–R18 desde $${NEW_TIRE_MIN_PRICE} en Los Paisas Tires Shop, West Palm Beach. El precio del catálogo incluye alineación y balanceo.`,
    grid: {
      filterLabel: "Filtrar por rin",
      all: "Todas",
      perTire: "por llanta",
      altTemplate: "Cosmo {size}: ilustración del catálogo Cosmo, la misma imagen se usa para varias medidas",
      countTemplate: "{n} medidas",
    },
  },
  pl: {
    crumb: "Katalog",
    h1: "Katalog nowych opon",
    promo: `Nowe opony Cosmo od $${NEW_TIRE_MIN_PRICE}, R15–R18. Cena z katalogu obejmuje geometrię i wyważanie.`,
    disclaimer: `Ceny mogą się zmienić bez uprzedzenia. Zadzwoń lub napisz na WhatsApp ${BUSINESS.phoneDisplay}, żeby potwierdzić dostępność rozmiaru przed przyjazdem.`,
    whatsapp: "WhatsApp — dostępność",
    serviceName: "Nowe opony (katalog Cosmo)",
    serviceDescription: `Nowe opony Cosmo R15–R18 od $${NEW_TIRE_MIN_PRICE} w Los Paisas Tires Shop, West Palm Beach. Cena z katalogu obejmuje geometrię i wyważanie.`,
    grid: {
      filterLabel: "Filtruj według felgi",
      all: "Wszystkie",
      perTire: "za oponę",
      altTemplate: "Cosmo {size}: ilustracja z katalogu Cosmo, to samo zdjęcie służy kilku rozmiarom",
      countTemplate: "Rozmiary: {n}",
    },
  },
};

export default function CatalogPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const c = COPY[locale];
  const path = catalogPath(locale);
  const pageUrl = absoluteUrl(path);

  return (
    <BlogShell locale={locale}>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, url: absoluteUrl(homePath(locale)) },
          { name: c.crumb, url: pageUrl },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: c.h1,
          inLanguage: IN_LANGUAGE[locale],
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#business` },
        }}
      />
      <JsonLd
        data={pageServiceJsonLd({
          name: c.serviceName,
          description: c.serviceDescription,
          url: pageUrl,
          areaServed: ["West Palm Beach"],
          offers: newTireOffersJsonLd(pageUrl),
        })}
      />
      <PageHero
        locale={locale}
        crumbs={[{ name: t.nav.home, href: homePath(locale) }, { name: c.crumb }]}
        breadcrumbLabel={t.a11y.breadcrumb}
        title={c.h1}
        titleId="catalog-heading"
        intro={<p>{c.promo}</p>}
      />
      <section className="section-pad-after-hero" aria-labelledby="catalog-heading">
        <div className="container-site">
          <p className="max-w-3xl text-sm leading-relaxed text-white/70">{c.disclaimer}</p>
          <p className="mt-4 mb-8 flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.14em]">
            <a href={BUSINESS.phoneTel} className="inline-flex min-h-[44px] items-center text-brand-gold hover:underline">
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center text-brand-gold hover:underline"
            >
              {c.whatsapp}
            </a>
          </p>
          <CatalogGrid labels={c.grid} />
        </div>
      </section>
    </BlogShell>
  );
}
