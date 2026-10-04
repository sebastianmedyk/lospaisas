export type PlaceLocale = "en" | "es";

export function locationPath(locale: PlaceLocale): string {
  return locale === "es" ? "/es/ubicacion" : "/location";
}

export function contactPath(locale: PlaceLocale): string {
  return locale === "es" ? "/es/contacto" : "/contact";
}

export function locationLanguageAlternates(): Record<string, string> {
  return {
    en: locationPath("en"),
    es: locationPath("es"),
    "x-default": locationPath("en"),
  };
}

export function contactLanguageAlternates(): Record<string, string> {
  return {
    en: contactPath("en"),
    es: contactPath("es"),
    "x-default": contactPath("en"),
  };
}

/** EN path -> ES path for the language toggle. */
export function placePathPairs(): Record<string, string> {
  return {
    [locationPath("en")]: locationPath("es"),
    [contactPath("en")]: contactPath("es"),
  };
}
