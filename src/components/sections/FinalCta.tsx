import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { finalCta } from "@/lib/content";

export function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-gradient-to-br from-accent/15 via-bg-elevated to-bg-elevated px-6 py-14 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,159,255,0.18),transparent_55%)]"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2
                id="contact-heading"
                className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
              >
                {finalCta.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {finalCta.subheadline}
              </p>
              <div className="mt-8 flex justify-center">
                <Button href={finalCta.cta.href}>{finalCta.cta.label}</Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
