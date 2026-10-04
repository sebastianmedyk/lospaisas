export type ServiceLocale = "en" | "es";

/** Index order matches `translations.*.services.items`. */
export const SERVICE_LINKS = [
  { en: "/services/new-tires", es: "/es/servicios/llantas-nuevas" },
  { en: "/services/used-tires", es: "/es/servicios/llantas-usadas" },
  { en: "/services/wheel-alignment", es: "/es/servicios/alineacion" },
  { en: "/services/tire-balancing", es: "/es/servicios/balanceo" },
  { en: "/services/tire-repair", es: "/es/servicios/reparacion-de-llantas" },
  { en: "/services/tire-installation", es: "/es/servicios/instalacion-de-llantas" },
  { en: "/services/mobile-tire-service", es: "/es/servicios/servicio-movil" },
] as const;

export const MOBILE_CITIES = ["greenacres", "lake-worth-beach", "palm-springs"] as const;

export function servicesPath(locale: ServiceLocale): string {
  return locale === "es" ? "/es/servicios" : "/services";
}

export function serviceHref(locale: ServiceLocale, index: number): string {
  const link = SERVICE_LINKS[index];
  if (!link) return servicesPath(locale);
  return locale === "es" ? link.es : link.en;
}

/** EN path -> ES path, including the section index and mobile city pages. */
export function servicePathPairs(): Record<string, string> {
  const pairs: Record<string, string> = {
    [servicesPath("en")]: servicesPath("es"),
  };
  for (const link of SERVICE_LINKS) {
    pairs[link.en] = link.es;
  }
  const mobile = SERVICE_LINKS[SERVICE_LINKS.length - 1];
  for (const city of MOBILE_CITIES) {
    pairs[`${mobile.en}/${city}`] = `${mobile.es}/${city}`;
  }
  return pairs;
}

export function serviceLanguageAlternates(): Record<string, string> {
  return {
    en: servicesPath("en"),
    es: servicesPath("es"),
    "x-default": servicesPath("en"),
  };
}
