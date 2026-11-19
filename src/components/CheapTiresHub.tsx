import Link from "next/link";
import BlogShell from "@/components/BlogShell";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PhotoStrip from "@/components/PhotoStrip";
import { rich } from "@/components/RichText";
import { BUSINESS } from "@/lib/constants";
import { CHEAP_HUB } from "@/lib/cheap-hub";
import { getDictionary } from "@/lib/i18n";
import { PHOTOS } from "@/lib/photos";
import { cheapHubPath, homePath, IN_LANGUAGE, type Locale } from "@/lib/routes";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { absoluteUrl, SITE_URL } from "@/lib/site";

const BUSINESS_ID = `${SITE_URL}/#business`;
const AREA = ["West Palm Beach", "Greenacres", "Palm Springs", "Lake Worth Beach"];

function offer(minPrice: number, description: string) {
  return {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: minPrice,
      minPrice,
      priceCurrency: "USD",
      unitText: "per tire",
      description,
    },
    seller: { "@id": BUSINESS_ID },
  };
}

function hubServicesJsonLd(url: string, names: { used: string; new: string }, inLanguage: string, name: string) {
  const areaServed = AREA.map((name) => ({ "@type": "City", name }));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        inLanguage,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": BUSINESS_ID },
      },
      {
        "@type": "Service",
        "@id": `${url}#used-tires`,
        name: names.used,
        serviceType: "Used tires",
        url,
        provider: { "@id": BUSINESS_ID },
        areaServed,
        offers: offer(65, "Used tires from $65 per tire. Mounting and balancing included. Final price depends on size and tread."),
      },
      {
        "@type": "Service",
        "@id": `${url}#new-tires`,
        name: names.new,
        serviceType: "New tires",
        url,
        provider: { "@id": BUSINESS_ID },
        areaServed,
        offers: offer(120, "New Cosmo tires from $120 per tire. Mounting and balancing included. Free alignment with 4 new tires."),
      },
    ],
  };
}

export default function CheapTiresHub({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const c = CHEAP_HUB[locale];
  const path = cheapHubPath(locale);
  const url = absoluteUrl(path);
  const home = homePath(locale);

  return (
    <BlogShell locale={locale}>
      <JsonLd data={hubServicesJsonLd(url, { used: c.serviceUsed, new: c.serviceNew }, IN_LANGUAGE[locale], c.h1)} />
      <JsonLd data={faqPageJsonLd(c.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, url: absoluteUrl(home) },
          { name: c.crumb, url },
        ])}
      />
      <article>
        <PageHero
          locale={locale}
          crumbs={[{ name: t.nav.home, href: home }, { name: c.crumb }]}
          breadcrumbLabel={t.a11y.breadcrumb}
          eyebrow={c.eyebrow}
          title={c.h1}
          titleId="hub-heading"
          intro={<p>{c.lead}</p>}
          extra={
            <ul className="flex flex-wrap gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-white/85">
              {c.facts.map((f) => (
                <li key={f} className="border border-brand-gold/40 px-2.5 py-1">
                  {f}
                </li>
              ))}
            </ul>
          }
          cta
        />

        <section className="section-pad-after-hero border-b border-white/15" aria-labelledby="hub-prices">
          <div className="container-site max-w-3xl">
            <SectionHeading id="hub-prices" title={c.tableHeading} />
            <p className="mt-5 text-base leading-relaxed text-white/80">{c.tableIntro}</p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm text-white/85">
                <thead>
                  <tr className="border-b border-brand-gold/50 text-xs uppercase tracking-[0.14em] text-brand-gold">
                    {c.tableCols.map((col) => (
                      <th key={col} scope="col" className="py-3 pr-4 font-extrabold">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((row) => (
                    <tr key={row.option} className="border-b border-white/15 align-top">
                      <th scope="row" className="py-4 pr-4 font-bold text-white">
                        {row.option}
                      </th>
                      <td className="whitespace-nowrap py-4 pr-4 font-black text-brand-gold">{row.price}</td>
                      <td className="py-4 leading-relaxed">{row.included}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">{rich(c.tableNote)}</p>
            <PhotoStrip
              className="mt-8"
              locale={locale}
              photos={[PHOTOS.poleSign, PHOTOS.newTiresRack, PHOTOS.balancer1, PHOTOS.storefront]}
            />
          </div>
        </section>

        {c.sections.map((s) => (
          <section key={s.id} className="section-pad border-b border-white/15" aria-labelledby={`hub-${s.id}`}>
            <div className="container-site max-w-3xl">
              <SectionHeading id={`hub-${s.id}`} title={s.heading} />
              <div className="mt-5 space-y-4 text-base leading-relaxed text-white/80">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{rich(p)}</p>
                ))}
              </div>
              {s.bullets?.length ? (
                <ul className="mt-5 space-y-2 border-t border-white/15 pt-5 text-white/80">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-brand-gold" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}

        <section className="section-pad border-b border-white/15" aria-labelledby="hub-cities">
          <div className="container-site max-w-3xl">
            <SectionHeading id="hub-cities" title={c.citiesHeading} />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-white/80">
              {c.citiesText.map((p, i) => (
                <p key={i}>{rich(p)}</p>
              ))}
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {c.cityLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="card-dark block h-full text-sm text-white hover:text-brand-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-pad border-b border-white/15" aria-labelledby="hub-reviews">
          <div className="container-site max-w-3xl">
            <SectionHeading id="hub-reviews" title={c.reviewsHeading} />
            <p className="mt-4 text-sm text-white/60">{c.reviewsIntro}</p>
            <div className="mt-6 space-y-5">
              {c.reviews.map((r) => (
                <figure key={r.author} className="card-dark">
                  <blockquote className="leading-relaxed text-white/90">“{r.quote}”</blockquote>
                  {r.translation ? <p className="mt-2 text-sm italic text-white/60">{r.translation}</p> : null}
                  <figcaption className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-gold">
                    {r.author} · Google · {r.date}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-6">
              <a
                href={BUSINESS.reviewsListUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-[0.14em] text-brand-gold hover:underline"
              >
                {c.reviewsLink}
              </a>
            </p>
          </div>
        </section>

        <section className="section-pad border-b border-white/15" aria-labelledby="hub-faq">
          <div className="container-site max-w-3xl">
            <SectionHeading id="hub-faq" title={c.faqHeading} />
            <div className="mt-8 space-y-8">
              {c.faqs.map((f) => (
                <div key={f.question} className="border-t border-white/15 pt-6">
                  <h3 className="headline text-2xl font-bold leading-tight text-white">{f.question}</h3>
                  <p className="mt-3 leading-relaxed text-white/80">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" aria-labelledby="hub-nap">
          <div className="container-site max-w-3xl">
            <SectionHeading id="hub-nap" title={c.napHeading} />
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
                <a href={BUSINESS.mapsCidUrl} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
                  {c.mapLabel}
                </a>
                <a href={BUSINESS.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-gold">
                  {c.directionsLabel}
                </a>
              </p>
            </address>
            <p className="mt-5 text-sm text-white/70">{c.tireOnly}</p>
          </div>
        </section>
      </article>
    </BlogShell>
  );
}
