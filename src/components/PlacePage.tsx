import Link from "next/link";
import BlogShell, { BlogBackLinks } from "@/components/BlogShell";
import JsonLd from "@/components/JsonLd";
import PromoPanel from "@/components/PromoPanel";
import {
  AppleMapsIcon,
  CatalogIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  SmsIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { BUSINESS } from "@/lib/constants";
import { getDictionary, type Locale } from "@/lib/i18n";
import { contactPath, locationPath } from "@/lib/place-routes";
import { breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl, SITE_URL } from "@/lib/site";

const H1 = {
  location: {
    en: "The Shop on S Military Trl",
    es: "El taller en S Military Trl",
  },
  contact: {
    en: "Call, WhatsApp, or Visit",
    es: "Llama, WhatsApp o visítanos",
  },
} as const;

type Kind = keyof typeof H1;

type Props = {
  locale: Locale;
  kind: Kind;
};

export default function PlacePage({ locale, kind }: Props) {
  const t = getDictionary(locale);
  const path = kind === "location" ? locationPath(locale) : contactPath(locale);
  const h1 = H1[kind][locale];
  const label = kind === "location" ? t.nav.location : t.nav.contact;
  const pageUrl = absoluteUrl(path);
  const otherPath = kind === "location" ? contactPath(locale) : locationPath(locale);
  const otherLabel = kind === "location" ? t.nav.contact : t.nav.location;

  return (
    <BlogShell locale={locale}>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, url: absoluteUrl("/") },
          { name: label, url: pageUrl },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": kind === "contact" ? "ContactPage" : "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: h1,
          inLanguage: locale === "es" ? "es-US" : "en-US",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#business` },
          mainEntity: { "@id": `${SITE_URL}/#business` },
        }}
      />
      <section className="section-pad" aria-labelledby="place-heading">
        <div className="container-site">
          <BlogBackLinks
            locale={locale}
            homeLabel={t.nav.home}
            blogLabel={label}
            breadcrumbLabel={t.a11y.breadcrumb}
            sectionHref={path}
          />
          <p className="section-label mb-3">{label}</p>
          <h1
            id="place-heading"
            className="headline max-w-[16ch] text-3xl leading-[0.95] text-white sm:max-w-none sm:text-4xl lg:text-5xl"
          >
            {h1}
          </h1>
          <span className="accent-rule" aria-hidden />
          <p className="mt-4 max-w-2xl text-white/70">
            {kind === "location" ? t.location.subtitle : t.contact.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide">
            <Link
              href={kind === "location" ? locationPath("en") : contactPath("en")}
              className={`rounded-none border px-3 py-1.5 ${
                locale === "en"
                  ? "border-brand-gold/40 bg-transparent text-brand-gold"
                  : "border-white/15 text-white/60 hover:border-brand-gold/50 hover:text-brand-gold"
              }`}
            >
              English
            </Link>
            <Link
              href={kind === "location" ? locationPath("es") : contactPath("es")}
              className={`rounded-none border px-3 py-1.5 ${
                locale === "es"
                  ? "border-brand-gold/40 bg-transparent text-brand-gold"
                  : "border-white/15 text-white/60 hover:border-brand-gold/50 hover:text-brand-gold"
              }`}
            >
              Español
            </Link>
          </div>

          {kind === "location" ? <LocationBody locale={locale} /> : <ContactBody locale={locale} />}

          <p className="mt-8">
            <Link
              href={otherPath}
              className="inline-flex text-sm font-bold uppercase tracking-wide text-brand-gold underline-offset-4 hover:underline"
            >
              {otherLabel}
            </Link>
          </p>
        </div>
      </section>
    </BlogShell>
  );
}

function NapFacts({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <div className="space-y-3">
      <div className="card-dark">
        <div className="mb-2 flex items-center gap-2 text-brand-gold">
          <MapPinIcon className="h-5 w-5" />
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em]">
            {t.location.addressLabel}
          </span>
        </div>
        <p className="text-lg font-semibold text-white">{BUSINESS.address}</p>
        <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-brand-gold">
          {t.trust.areaLabel}
        </p>
        <p className="mt-2 text-sm text-white/55">{t.location.servingNote}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
          <a
            href={BUSINESS.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full min-h-[48px] sm:w-auto"
          >
            <MapPinIcon className="h-4 w-4" />
            {t.location.getDirections}
          </a>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-bold uppercase tracking-wide text-brand-gold underline-offset-4 hover:underline"
          >
            {t.location.directions}
          </a>
        </div>
      </div>

      <div className="card-dark">
        <div className="mb-2 flex items-center gap-2 text-brand-gold">
          <ClockIcon className="h-5 w-5" />
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em]">
            {t.location.hoursLabel}
          </span>
        </div>
        <p className="text-lg font-semibold text-white">{t.location.hoursNap}</p>
        <p className="cut-sm mt-2 inline-flex items-center gap-2 rounded-none border border-brand-red/40 bg-transparent px-3 py-1.5 text-sm font-bold text-brand-red">
          {t.location.sundayNote}
        </p>
      </div>

      <div className="card-dark">
        <div className="mb-2 flex items-center gap-2 text-brand-gold">
          <PhoneIcon className="h-5 w-5" />
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em]">
            {t.location.phoneLabel}
          </span>
        </div>
        <a href={BUSINESS.phoneTel} className="text-lg font-semibold text-white hover:text-brand-gold">
          {BUSINESS.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

function LocationBody({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
      <NapFacts locale={locale} />
      <div className="cut-md overflow-hidden rounded-none border border-white/15 bg-black/40">
        <iframe
          title={t.location.mapTitle}
          src={BUSINESS.mapsEmbed}
          className="h-[280px] w-full min-h-[280px] border-0 sm:h-[360px] sm:min-h-[360px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function ContactBody({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const secondary = [
    { href: BUSINESS.whatsapp, label: t.contact.whatsapp, icon: WhatsAppIcon, external: true },
    { href: BUSINESS.sms, label: t.contact.sms, icon: SmsIcon, external: false },
    { href: BUSINESS.instagram, label: t.contact.instagram, icon: InstagramIcon, external: true },
    { href: BUSINESS.tiktok, label: t.contact.tiktok, icon: TikTokIcon, external: true },
    { href: BUSINESS.facebook, label: t.contact.facebook, icon: FacebookIcon, external: true },
    { href: BUSINESS.mapsUrl, label: t.contact.googleMaps, icon: MapPinIcon, external: true },
    { href: BUSINESS.appleMaps, label: t.contact.appleMaps, icon: AppleMapsIcon, external: true },
    { href: BUSINESS.catalogue, label: t.contact.catalogue, icon: CatalogIcon, external: true },
  ] as const;

  return (
    <div className="mt-10 grid min-w-0 items-start gap-10 lg:grid-cols-2">
      <div>
        <p className="cut-tr inline-block rounded-none border-l border-brand-gold/40 bg-transparent px-3 py-1.5 text-sm font-bold tracking-wide text-brand-gold">
          {t.contact.hours}
        </p>
        <div className="mt-8 flex min-w-0 flex-col gap-3 sm:max-w-xl sm:flex-row">
          <a href={BUSINESS.phoneTel} className="btn-gold min-h-[48px] w-full flex-1">
            <PhoneIcon className="h-4 w-4" />
            <span className="min-w-0 break-words text-center leading-snug">{t.contact.call}</span>
          </a>
          <a
            href={BUSINESS.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline min-h-[48px] w-full flex-1"
          >
            <MapPinIcon className="h-4 w-4" />
            {t.hero.ctaDirections}
          </a>
        </div>
        <p className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/55">
          {t.contact.secondaryLabel}
        </p>
        <div className="mt-3 grid min-w-0 grid-cols-2 gap-2 min-[480px]:grid-cols-4 sm:max-w-xl">
          {secondary.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.href + channel.label}
                href={channel.href}
                className="btn-quiet !justify-start !px-3 !py-2.5 text-[0.7rem]"
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 opacity-70" />
                <span className="min-w-0 truncate">{channel.label}</span>
              </a>
            );
          })}
        </div>
        <address className="card-dark mt-8 not-italic">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-brand-gold">
            {t.location.addressLabel}
          </p>
          <p className="mt-2 text-lg font-semibold text-white">{BUSINESS.address}</p>
          <p className="mt-3">
            <a href={BUSINESS.phoneTel} className="text-lg font-semibold text-white hover:text-brand-gold">
              {BUSINESS.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-white/80">{t.location.hoursNap}</p>
          <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-brand-gold">
            {t.trust.areaLabel}
          </p>
          <p className="mt-2 text-sm text-white/55">{t.location.servingNote}</p>
        </address>
      </div>
      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <PromoPanel imageSrc={`/brand/locale/balance-${locale}.png`} alt={t.promo.balance} />
      </div>
    </div>
  );
}
