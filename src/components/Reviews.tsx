import type { Locale } from "@/lib/i18n";
import { BUSINESS } from "@/lib/constants";
import { REVIEW_QUOTES } from "@/lib/reviews";
import SectionHeading from "./SectionHeading";

type Quote = (typeof REVIEW_QUOTES)[number];
export type ReviewsLayout = "grid" | "featured" | "scroll" | "columns";

function QuoteCard({ q, es, large = false, className = "" }: { q: Quote; es: boolean; large?: boolean; className?: string }) {
  return (
    <figure
      className={`flex h-full flex-col border border-white/15 bg-[#141414] p-5 transition hover:border-brand-gold/40 ${large ? "sm:p-8" : ""} ${className}`}
      lang={q.locale}
    >
      <p
        className="text-lg leading-none tracking-[0.15em] text-brand-gold"
        aria-label={es ? `${q.stars} de 5 estrellas` : `${q.stars} out of 5 stars`}
      >
        {"★".repeat(q.stars)}
        <span className="text-white/20">{"★".repeat(5 - q.stars)}</span>
      </p>
      <blockquote
        className={`mt-3 flex-1 whitespace-pre-wrap text-white/85 ${large ? "text-s1 leading-snug sm:text-s2" : ""}`}
      >
        &ldquo;{q.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 border-t border-white/15 pt-3">
        <span className="block font-semibold text-white">{q.author}</span>
        <span className="mt-1 block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/60">
          <span className="text-brand-red-text">{es ? "Reseña de Google" : "Google review"}</span> · {q.date}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Reviews section. Quotes come only from src/lib/reviews.ts (real, approved
 * Google reviews). With an empty list no quote slots render. No
 * aggregateRating/Review schema on purpose (self-serving reviews).
 * Layouts: grid (default), featured (one large + rest), scroll (swipe row), columns (staggered).
 */
export default function Reviews({ locale, layout = "grid" }: { locale: Locale; layout?: ReviewsLayout }) {
  const es = locale === "es";
  const quotes = REVIEW_QUOTES.filter((q) => q.locale === locale && q.quote.trim() && q.author.trim());
  const key = (q: Quote) => `${q.author}-${q.date}`;
  const [first, ...rest] = quotes;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="section-pad relative border-b border-white/15"
    >
      <div className="container-site">
        <SectionHeading
          id="reviews-heading"
          label={es ? "Opiniones" : "Reviews"}
          title={es ? "Lo que dicen en Google" : "What drivers say on Google"}
        >
          <p className="mt-4 max-w-2xl text-white/70">
            {es
              ? `${BUSINESS.ratingValue} estrellas en Google, ${BUSINESS.reviewCount} reseñas. Algunas opiniones de nuestros clientes:`
              : `${BUSINESS.ratingValue} stars on Google from ${BUSINESS.reviewCount} reviews. A few things customers wrote:`}
          </p>
        </SectionHeading>

        {quotes.length > 0 && layout === "grid" && (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quotes.map((q) => (
              <li key={key(q)}>
                <QuoteCard q={q} es={es} />
              </li>
            ))}
          </ul>
        )}

        {quotes.length > 0 && layout === "featured" && (
          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <QuoteCard q={first} es={es} large />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {rest.slice(0, 2).map((q) => (
                <li key={key(q)}>
                  <QuoteCard q={q} es={es} />
                </li>
              ))}
            </ul>
            <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-12">
              {rest.slice(2).map((q) => (
                <li key={key(q)}>
                  <QuoteCard q={q} es={es} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {quotes.length > 0 && layout === "scroll" && (
          <ul
            className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            tabIndex={0}
            aria-label={es ? "Opiniones, desliza para ver más" : "Reviews, swipe for more"}
          >
            {quotes.map((q) => (
              <li key={key(q)} className="w-[85%] shrink-0 snap-start sm:w-[380px]">
                <QuoteCard q={q} es={es} />
              </li>
            ))}
          </ul>
        )}

        {quotes.length > 0 && layout === "columns" && (
          <ul className="mt-10 gap-4 md:columns-2">
            {quotes.map((q, i) => (
              <li key={key(q)} className={`mb-4 break-inside-avoid ${i % 2 ? "md:mt-10" : ""}`}>
                <QuoteCard q={q} es={es} />
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={BUSINESS.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold min-h-[48px] w-full sm:w-auto"
          >
            {es ? "Déjanos tu opinión" : "Leave a review"}
          </a>
          <a
            href={BUSINESS.reviewsListUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline min-h-[48px] w-full sm:w-auto"
          >
            {es ? `Ver reseñas en Google (${BUSINESS.ratingValue} ★, ${BUSINESS.reviewCount})` : `See Google reviews (${BUSINESS.ratingValue} ★, ${BUSINESS.reviewCount})`}
          </a>
        </div>
      </div>
    </section>
  );
}
