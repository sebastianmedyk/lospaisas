import type { Locale } from "@/lib/i18n";
import { BUSINESS } from "@/lib/constants";
import { REVIEW_QUOTES } from "@/lib/reviews";

/**
 * Reviews section. Quotes come only from src/lib/reviews.ts (real, approved
 * Google reviews). With an empty list no quote slots render. No
 * aggregateRating/Review schema on purpose (self-serving reviews).
 */
export default function Reviews({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const quotes = REVIEW_QUOTES.filter((q) => q.locale === locale && q.quote.trim() && q.author.trim());

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="section-pad relative border-b border-white/15"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-3">{es ? "Opiniones" : "Reviews"}</p>
          <h2
            id="reviews-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {es ? "Lo que dicen en Google" : "What drivers say on Google"}
          </h2>
          <span className="accent-rule accent-rule-center" aria-hidden />
          <p className="mt-4 text-white/70">
            {es
              ? `${BUSINESS.ratingValue} estrellas en Google, ${BUSINESS.reviewCount} reseñas. Algunas opiniones de nuestros clientes:`
              : `${BUSINESS.ratingValue} stars on Google from ${BUSINESS.reviewCount} reviews. A few things customers wrote:`}
          </p>
        </div>

        {quotes.length > 0 && (
          <ul className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quotes.map((q) => (
              <li
                key={`${q.author}-${q.date}`}
                className="flex flex-col rounded-none border border-white/15 bg-[#141414] p-5 transition hover:border-brand-gold/40"
              >
                <figure className="flex h-full flex-col" lang={q.locale}>
                  <p className="text-lg leading-none tracking-[0.15em] text-brand-gold" aria-label={es ? `${q.stars} de 5 estrellas` : `${q.stars} out of 5 stars`}>
                    {"★".repeat(q.stars)}
                    <span className="text-white/20">{"★".repeat(5 - q.stars)}</span>
                  </p>
                  <blockquote className="mt-3 flex-1 whitespace-pre-wrap text-white/85">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 border-t border-white/15 pt-3">
                    <span className="block font-semibold text-white">{q.author}</span>
                    <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/55">
                      <span className="text-brand-red">{es ? "Reseña de Google" : "Google review"}</span> · {q.date}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
