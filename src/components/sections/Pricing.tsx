import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn className="flex justify-center">
          <SectionHeading
            id="pricing-heading"
            eyebrow="Pricing"
            title="Packages built for real growth stages"
            description="Transparent starting points. Final scope is tailored after a short discovery conversation."
            align="center"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {pricing.map((tier, index) => (
            <FadeIn key={tier.id} delay={index * 0.06}>
              <div
                className={[
                  "relative flex h-full flex-col rounded-2xl border p-6 sm:p-7",
                  tier.highlighted
                    ? "border-accent/40 bg-gradient-to-b from-accent/10 to-surface shadow-[0_0_0_1px_rgba(91,159,255,0.12),0_30px_60px_-30px_var(--accent-glow)]"
                    : "border-border bg-surface",
                ].join(" ")}
              >
                {tier.highlighted ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-[#061018]">
                    Recommended
                  </span>
                ) : null}

                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {tier.tagline}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {tier.name}
                </h3>
                <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-text">
                  {tier.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tier.description}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-text/90"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                        strokeWidth={2.25}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={tier.cta.href}
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {tier.cta.label}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
