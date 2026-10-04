import type { Locale } from "@/lib/i18n";
import { placePathPairs } from "@/lib/place-routes";
import { servicePathPairs } from "@/lib/service-routes";

/** EN path -> ES path. Safe to import from client components. */
const PAIRS: Record<string, string> = {
  ...servicePathPairs(),
  ...placePathPairs(),
};

const REVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(PAIRS).map(([en, es]) => [es, en]),
);

export function getAlternateLocalPath(pathname: string, next: Locale): string | null {
  if (next === "es") return PAIRS[pathname] ?? null;
  return REVERSE[pathname] ?? null;
}
