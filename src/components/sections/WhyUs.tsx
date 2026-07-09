import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyUs } from "@/lib/content";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            id="why-us-heading"
            eyebrow="Why Northline"
            title="A partner built for business outcomes"
            description="We combine modern product craft with marketing discipline — so your digital presence works as hard as you do."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-hover sm:p-7">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Check size={16} strokeWidth={2.25} />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
