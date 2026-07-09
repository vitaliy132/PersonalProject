import { Reveal } from "@/components/north-oak/Reveal";
import { northOakTestimonials } from "@/lib/north-oak-content";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 border-t border-[var(--no-border)] bg-[var(--no-espresso)] py-24 text-[var(--no-cream)] sm:py-28"
    >
      <div className="no-container">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-[0.18em] text-[var(--no-sand)] uppercase">
            Voices from the café
          </p>
          <h2
            id="testimonials-heading"
            className="font-display mt-4 max-w-xl text-4xl leading-[1.1] sm:text-5xl"
          >
            What our guests say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {northOakTestimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <blockquote className="flex h-full flex-col border-t border-[var(--no-cream)]/15 pt-8">
                <p className="font-display text-2xl leading-snug text-[var(--no-cream)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="text-sm font-medium tracking-wide">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--no-sand)]">
                    {item.role}
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
