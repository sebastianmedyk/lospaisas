import type { Metadata } from "next";

/** Design previews: never indexed, never in the sitemap. */
export const metadata: Metadata = {
  title: "Design preview",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
