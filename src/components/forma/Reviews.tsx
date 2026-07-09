import { Reveal } from "@/components/forma/Reveal";
import { formaReviews } from "@/lib/forma-content";

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="scroll-mt-24 py-16 sm:py-20"
    >
      <div className="fo-container">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="fo-eyebrow">Signal / Reviews</p>
            <h2
              id="reviews-heading"
              className="font-display mt-3 max-w-xl text-4xl leading-[1.05] sm:text-5xl"
            >
              Field notes from people who carry less.
            </h2>
          </div>
          <p className="font-mono text-[0.72rem] tracking-[0.12em] text-[var(--fo-stone)] uppercase">
            4.9 avg · 400+ reviews
          </p>
        </Reveal>
      </div>

      <div className="mt-10 pl-5 sm:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <div className="fo-rail pr-5 sm:pr-8">
          {formaReviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.06}>
              <blockquote className="flex h-full min-h-[18rem] flex-col border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] p-6">
                <div className="flex items-center justify-between font-mono text-[0.65rem] tracking-[0.14em] text-[var(--fo-stone)] uppercase">
                  <span>Verified</span>
                  <span>{"★".repeat(review.rating)}</span>
                </div>
                <p className="font-display mt-6 text-2xl leading-snug tracking-tight">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-auto border-t border-[var(--fo-border)] pt-5">
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="mt-1 font-mono text-[0.68rem] tracking-[0.1em] text-[var(--fo-stone)] uppercase">
                    {review.role}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
