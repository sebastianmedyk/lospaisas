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
  const quotes = REVIEW_QUOTES.filter((q) => q.quote.trim() && q.author.trim());

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
              ? `${BUSINESS.ratingValue} estrellas en Google. Lee las opiniones de nuestros clientes o cuéntanos cómo te fue.`
              : `${BUSINESS.ratingValue} stars on Google. Read what customers wrote, or tell us how your visit went.`}
          </p>
        </div>

        {quotes.length > 0 && (
          <ul className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {quotes.map((q) => (
              <li key={`${q.author}-${q.quote.slice(0, 20)}`} className="card-dark">
                <blockquote lang={q.locale}>
                  <p className="text-white/85">&ldquo;{q.quote}&rdquo;</p>
                  <footer className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                    {q.author}
                    {q.date ? ` · ${q.date}` : ""} · Google
                  </footer>
                </blockquote>
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
            {es ? "Ver opiniones en Google" : "Read Google reviews"}
          </a>
        </div>
      </div>
    </section>
  );
}
