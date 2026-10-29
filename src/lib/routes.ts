/**
 * Single source of truth for localized URLs.
 * ES is the primary language and lives at the root; EN under /en; PL under /pl.
 */
export type Locale = "es" | "en" | "pl";
export const LOCALES: Locale[] = ["es", "en", "pl"];
export const DEFAULT_LOCALE: Locale = "es";

export type LocalePaths = Record<Locale, string>;

export const HTML_LANG: Record<Locale, string> = { es: "es", en: "en", pl: "pl" };
export const OG_LOCALE: Record<Locale, string> = { es: "es_US", en: "en_US", pl: "pl_PL" };
export const IN_LANGUAGE: Record<Locale, string> = { es: "es-US", en: "en-US", pl: "pl-PL" };

export function prefix(locale: Locale): string {
  return locale === "es" ? "" : `/${locale}`;
}

export function homePath(locale: Locale): string {
  return locale === "es" ? "/" : `/${locale}`;
}

const SERVICES_SEGMENT: LocalePaths = { es: "servicios", en: "services", pl: "uslugi" };

/** Order matches dictionary services.items: new, used, alignment, balancing, repair, install, mobile. */
export const SERVICE_SLUGS: LocalePaths[] = [
  { es: "llantas-nuevas", en: "new-tires", pl: "nowe-opony" },
  { es: "llantas-usadas", en: "used-tires", pl: "uzywane-opony" },
  { es: "alineacion", en: "wheel-alignment", pl: "ustawianie-geometrii" },
  { es: "balanceo", en: "tire-balancing", pl: "wywazanie-kol" },
  { es: "reparacion-de-llantas", en: "tire-repair", pl: "naprawa-opon" },
  { es: "instalacion-de-llantas", en: "tire-installation", pl: "montaz-opon" },
  { es: "servicio-movil", en: "mobile-tire-service", pl: "mobilny-serwis-opon" },
];
export const MOBILE_SERVICE_INDEX = 6;
export const MOBILE_CITIES = ["greenacres", "lake-worth-beach", "palm-springs"] as const;

const LOCATION_SEGMENT: LocalePaths = { es: "ubicacion", en: "location", pl: "lokalizacja" };
const CONTACT_SEGMENT: LocalePaths = { es: "contacto", en: "contact", pl: "kontakt" };

/** Blog slug per locale, one entry per article. */
export const BLOG_SLUGS: LocalePaths[] = [
  { en: "used-tires-west-palm-beach", es: "llantas-usadas-west-palm-beach", pl: "uzywane-opony-west-palm-beach" },
  { en: "flat-tire-sunday-military-trail", es: "llanta-ponchada-domingo-military-trail", pl: "zlapana-guma-w-niedziele-military-trail" },
  { en: "wheel-balancing-no-hidden-fees", es: "balanceo-sin-sorpresas", pl: "wywazanie-kol-bez-ukrytych-oplat" },
  { en: "why-drivers-trust-los-paisas-west-palm-beach", es: "por-que-confiar-en-los-paisas-west-palm-beach", pl: "dlaczego-kierowcy-ufaja-los-paisas-west-palm-beach" },
  { en: "wheel-alignment-military-trail-west-palm-beach", es: "alineacion-geometria-military-trail-west-palm-beach", pl: "ustawianie-geometrii-military-trail-west-palm-beach" },
  { en: "tire-repair-vulcanization-west-palm-beach", es: "reparacion-vulcanizacion-llantas-west-palm-beach", pl: "naprawa-i-wulkanizacja-opon-west-palm-beach" },
  { en: "install-customer-tires-west-palm-beach", es: "instalacion-llantas-del-cliente-west-palm-beach", pl: "montaz-opon-klienta-west-palm-beach" },
  { en: "mobile-tire-service-west-palm-beach", es: "servicio-movil-llantas-west-palm-beach", pl: "mobilny-serwis-opon-west-palm-beach" },
  { en: "new-tires-west-palm-beach-military-trail", es: "llantas-nuevas-west-palm-beach-military-trail", pl: "nowe-opony-west-palm-beach-military-trail" },
  { en: "used-tire-prices-west-palm-beach", es: "precio-llantas-usadas-west-palm-beach", pl: "ceny-uzywanych-opon-west-palm-beach" },
  { en: "used-vs-new-tires-florida-heat", es: "llantas-usadas-o-nuevas-calor-florida", pl: "uzywane-czy-nowe-opony-upal-floryda" },
  { en: "driving-on-a-tire-patch-or-plug", es: "manejar-con-llanta-parcheada", pl: "jazda-na-zalatanej-oponie" },
  { en: "tire-pressure-palm-beach-summer", es: "presion-llantas-verano-huracanes", pl: "cisnienie-w-oponach-latem-palm-beach" },
  { en: "car-shakes-at-highway-speed-west-palm-beach", es: "carro-vibra-en-carretera-volante-asiento", pl: "auto-drga-przy-duzej-predkosci-west-palm-beach" },
  { en: "tire-shop-spanish-creole-west-palm-beach", es: "taller-llantas-espanol-criollo-west-palm-beach", pl: "serwis-opon-po-hiszpansku-i-kreolsku-west-palm-beach" },
  { en: "do-i-need-four-new-tires", es: "necesito-cuatro-llantas-nuevas", pl: "czy-potrzebuje-czterech-nowych-opon" },
  { en: "tire-shop-no-appointment-walk-in", es: "llantas-sin-cita-west-palm-beach", pl: "serwis-opon-bez-umawiania-west-palm-beach" },
  // Posts dated in the future are hidden until a build on/after their date (lib/blog.ts isPublished).
  { en: "hit-curb-or-pothole-alignment-check", es: "alineacion-despues-de-golpe-bache-cuneta", pl: "geometria-po-uderzeniu-w-kraweznik-lub-dziure" },
  { en: "hurricane-season-tire-prep-palm-beach-county", es: "temporada-huracanes-llantas-palm-beach", pl: "sezon-huraganow-opony-palm-beach" },
  { en: "new-tire-sizes-r15-r18-lt-west-palm-beach", es: "medidas-llantas-nuevas-r15-r18-lt", pl: "nowe-opony-r15-r18-lt-west-palm-beach" },
  { en: "tire-age-dot-date-florida-heat", es: "fecha-dot-edad-llanta-calor-florida", pl: "data-dot-wiek-opony-upal-floryda" },
  { en: "used-tire-inspection-checklist", es: "revision-llantas-usadas-antes-de-montar", pl: "kontrola-uzywanych-opon-przed-montazem" },
  { en: "how-to-read-tire-size-on-sidewall", es: "como-leer-medida-llanta-costado", pl: "jak-odczytac-rozmiar-opony" },
  { en: "sidewall-bulge-or-cut-tire", es: "bulto-corte-costado-llanta", pl: "wybrzuszenie-lub-rozciecie-boku-opony" },
  { en: "slow-leak-after-storm-nails-debris", es: "llanta-pierde-aire-despues-tormenta", pl: "opona-traci-powietrze-po-burzy" },
  { en: "donut-spare-tire-limits", es: "llanta-de-repuesto-donut-limites", pl: "dojazdowka-kolo-zapasowe-ograniczenia" },
  { en: "full-set-four-tires-one-visit", es: "juego-cuatro-llantas-una-visita", pl: "komplet-czterech-opon-jedna-wizyta" },
  { en: "new-or-used-tires-by-how-you-drive", es: "llantas-nuevas-o-usadas-segun-como-manejas", pl: "nowe-czy-uzywane-opony-styl-jazdy" },
  { en: "lt-tires-work-trucks-suvs", es: "llantas-lt-trocas-de-trabajo", pl: "opony-lt-do-pickupow-i-suv" },
  { en: "thanksgiving-road-trip-tire-check", es: "revisar-llantas-antes-de-viajar-thanksgiving", pl: "sprawdz-opony-przed-podroza-thanksgiving" },
];

export const servicesPath = (l: Locale) => `${prefix(l)}/${SERVICES_SEGMENT[l]}`;
export const serviceHref = (l: Locale, index: number) => `${servicesPath(l)}/${SERVICE_SLUGS[index][l]}`;
export const cityHref = (l: Locale, city: string) => `${serviceHref(l, MOBILE_SERVICE_INDEX)}/${city}`;
export const locationPath = (l: Locale) => `${prefix(l)}/${LOCATION_SEGMENT[l]}`;
export const contactPath = (l: Locale) => `${prefix(l)}/${CONTACT_SEGMENT[l]}`;
export const blogPath = (l: Locale, slug?: string) => `${prefix(l)}/blog${slug ? `/${slug}` : ""}`;

const all = (fn: (l: Locale) => string): LocalePaths => ({ es: fn("es"), en: fn("en"), pl: fn("pl") });

/** Every page that exists in all three languages. */
export const PAGE_GROUPS: LocalePaths[] = [
  all(homePath),
  all(servicesPath),
  ...SERVICE_SLUGS.map((_, i) => all((l) => serviceHref(l, i))),
  ...MOBILE_CITIES.map((c) => all((l) => cityHref(l, c))),
  all(locationPath),
  all(contactPath),
  all((l) => blogPath(l)),
  ...BLOG_SLUGS.map((s) => all((l) => blogPath(l, s[l]))),
];

function normalize(path: string): string {
  const p = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export function localeFromPath(pathname: string | null | undefined): Locale {
  const p = normalize(pathname || "/");
  if (p === "/en" || p.startsWith("/en/")) return "en";
  if (p === "/pl" || p.startsWith("/pl/")) return "pl";
  return "es";
}

export function groupForPath(pathname: string): LocalePaths | undefined {
  const p = normalize(pathname);
  return PAGE_GROUPS.find((g) => g.es === p || g.en === p || g.pl === p);
}

/** Same page in another language, or that language's home page. */
export function alternatePath(pathname: string, target: Locale): string {
  return groupForPath(pathname)?.[target] ?? homePath(target);
}

/** hreflang map for Next metadata (es is x-default). */
export function languageAlternates(paths: LocalePaths): Record<string, string> {
  return { es: paths.es, en: paths.en, pl: paths.pl, "x-default": paths.es };
}

export function blogSlugsFor(slug: string, locale: Locale): LocalePaths | undefined {
  return BLOG_SLUGS.find((s) => s[locale] === slug);
}

/** Pick a string per locale. */
export function pick<T>(locale: Locale, v: Record<Locale, T>): T {
  return v[locale];
}

/** Promo graphics with baked-in text exist only in ES and EN; PL uses the EN artwork. */
export function promoLocale(locale: Locale): "es" | "en" {
  return locale === "pl" ? "en" : locale;
}
