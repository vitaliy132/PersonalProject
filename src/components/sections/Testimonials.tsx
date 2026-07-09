import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Testimonials"
            title="Trusted by growing UK businesses"
            description="Feedback from founders and marketing leads who wanted clearer digital growth — not more noise."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.06}>
              <GlassCard className="flex h-full flex-col">
                <p className="text-[15px] leading-relaxed text-text/90">
                  “{item.quote}”
                </p>
                <div className="mt-auto border-t border-border pt-5">
                  <p className="font-medium text-text">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {item.role}, {item.company}
                  </p>
                  <p className="mt-0.5 text-xs text-muted/80">{item.industry}</p>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
