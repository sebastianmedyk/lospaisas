import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { translations } from "@/lib/i18n";

const t = translations.en.meta;

export const metadata: Metadata = {
  title: { absolute: t.title },
  description: t.description,
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es", "x-default": "/" },
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}
