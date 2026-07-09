import Image from "next/image";
import { Reveal } from "@/components/copper-pan/Reveal";
import { copperPanMenu } from "@/lib/copper-pan-content";

export function Menu() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="scroll-mt-24 border-t border-[var(--cp-border)] py-24 sm:py-28"
    >
      <div className="cp-container">
        <Reveal>
          <p className="cp-eyebrow">Signature plates</p>
          <h2
            id="menu-heading"
            className="font-display mt-4 max-w-xl text-4xl leading-[1.1] text-[var(--cp-ink)] sm:text-5xl"
          >
            A menu built around the season.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--cp-muted)]">
            A rotating selection of starters, mains and sides — fire, butter and
            British produce.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copperPanMenu.map((dish, index) => (
            <Reveal key={dish.id} delay={index * 0.05}>
              <article className="group overflow-hidden border border-[var(--cp-border)] bg-[var(--cp-bg-elevated)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--cp-surface)]">
                  <Image
                    src={dish.image}
                    alt={dish.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--cp-copper)] uppercase">
                        {dish.course}
                      </p>
                      <h3 className="font-display mt-2 text-xl text-[var(--cp-ink)] sm:text-2xl">
                        {dish.name}
                      </h3>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-[var(--cp-stone)]">
                      {dish.price}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--cp-muted)]">
                    {dish.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
