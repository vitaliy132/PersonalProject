import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            id="process-heading"
            eyebrow="Process"
            title="A clear path from brief to growth"
            description="Simple stages, senior attention, and measurable progress at every step."
          />
        </FadeIn>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.06}>
              <li className="relative h-full rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <span className="font-display text-sm font-semibold text-accent">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                {index < process.length - 1 ? (
                  <div
                    aria-hidden
                    className="gradient-line absolute -right-2 top-1/2 hidden h-px w-4 lg:block"
                  />
                ) : null}
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
