import { FadeIn as Reveal } from "@/components/ui/FadeIn";
import { formaWhyUs } from "@/lib/forma-content";

export function WhyChooseUs() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="scroll-mt-24 border-y border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] py-16 sm:py-20"
    >
      <div className="fo-container">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="fo-eyebrow">Why FORMA</p>
            <h2
              id="why-heading"
              className="font-display mt-3 text-4xl leading-[1.05] sm:text-5xl"
            >
              Specs over slogans.
            </h2>
          </div>
          <p className="max-w-xl text-[var(--fo-stone)] lg:justify-self-end">
            Trust is designed into the product system — materials, longevity,
            logistics and returns treated as part of the experience.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-[var(--fo-border)] border-y border-[var(--fo-border)]">
          {formaWhyUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="grid gap-3 py-6 transition-colors hover:bg-[var(--fo-bg)]/70 sm:grid-cols-[5rem_14rem_1fr] sm:items-baseline sm:gap-8 sm:py-7">
                <p className="font-mono text-[0.7rem] tracking-[0.14em] text-[var(--fo-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-base font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--fo-stone)] sm:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
