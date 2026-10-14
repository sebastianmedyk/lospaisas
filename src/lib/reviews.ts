/**
 * Real Google review quotes for the homepage "Reviews" section.
 *
 * TODO(Sebastian): add ONLY real quotes copied from the Google Business Profile,
 * and only ones you have approved. Never invent or paraphrase a review.
 * Keep `author` as it appears on Google (first name + initial is fine) and
 * `date` as shown there (e.g. "2026-09"). While this list is empty, the quote
 * slots are not rendered at all — only the heading, intro and review buttons.
 *
 * Example shape (do not uncomment with made-up text):
 * { quote: "…", author: "…", locale: "en", date: "2026-09" },
 */
export type ReviewQuote = {
  quote: string;
  author: string;
  locale: "en" | "es";
  date?: string;
};

export const REVIEW_QUOTES: ReviewQuote[] = [];
