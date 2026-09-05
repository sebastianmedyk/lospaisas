import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type BlogShellProps = {
  children: React.ReactNode;
};

/** Shared chrome for blog listing & article pages. */
export default function BlogShell({ children }: BlogShellProps) {
  return (
    <>
      <Header />
      <main className="min-h-[60vh]">{children}</main>
      <Footer />
    </>
  );
}

export function BlogBackLinks({
  locale,
  homeLabel,
  blogLabel,
}: {
  locale: "en" | "es";
  homeLabel: string;
  blogLabel: string;
}) {
  const blogHref = locale === "es" ? "/es/blog" : "/blog";
  return (
    <nav
      className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-wide"
      aria-label="Breadcrumb"
    >
      <Link href="/" className="text-white/55 hover:text-brand-gold">
        {homeLabel}
      </Link>
      <span className="text-white/30" aria-hidden>
        /
      </span>
      <Link href={blogHref} className="text-brand-gold hover:underline">
        {blogLabel}
      </Link>
    </nav>
  );
}
