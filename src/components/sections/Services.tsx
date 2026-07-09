import {
  Megaphone,
  Monitor,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  monitor: Monitor,
  palette: Palette,
  megaphone: Megaphone,
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="Everything you need to grow online"
            description="Three focused disciplines — web, brand and marketing — working together so your business attracts more of the right customers."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <FadeIn key={service.id} delay={index * 0.06}>
                <GlassCard className="h-full">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {service.description}
                  </p>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
