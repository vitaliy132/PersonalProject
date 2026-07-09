import { Leaf, Package, Handshake } from "lucide-react";
import { Reveal } from "@/components/north-oak/Reveal";
import { northOakSustainability } from "@/lib/north-oak-content";

const icons = [Leaf, Package, Handshake];

export function Sustainability() {
  return (
    <section
      id="sustainability"
      aria-labelledby="sustainability-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="no-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="no-eyebrow">Sustainability</p>
          <h2
            id="sustainability-heading"
            className="font-display mt-4 text-4xl leading-[1.1] text-[var(--no-espresso)] sm:text-5xl"
          >
            Coffee that respects people and place.
          </h2>
          <p className="mt-5 text-base text-[var(--no-muted)]">
            Quality and responsibility are inseparable. We invest in
            relationships that last longer than a single harvest.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {northOakSustainability.map((item, index) => {
            const Icon = icons[index] ?? Leaf;
            return (
              <Reveal key={item.title} delay={index * 0.07}>
                <article className="h-full border border-[var(--no-border)] bg-[var(--no-surface)] p-8 transition-colors duration-300 hover:border-[var(--no-espresso)]/25">
                  <Icon
                    className="text-[var(--no-green)]"
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="font-display mt-6 text-2xl text-[var(--no-espresso)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--no-muted)] sm:text-base">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
