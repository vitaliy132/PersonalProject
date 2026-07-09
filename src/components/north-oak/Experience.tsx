import Image from "next/image";
import { Reveal } from "@/components/north-oak/Reveal";
import { northOakExperiences, northOakImages } from "@/lib/north-oak-content";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="no-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
          <Reveal className="relative min-h-[28rem] overflow-hidden bg-[var(--no-beige)] lg:min-h-full">
            <Image
              src={northOakImages.experience.src}
              alt={northOakImages.experience.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="no-eyebrow">The coffee experience</p>
              <h2
                id="experience-heading"
                className="font-display mt-4 text-4xl leading-[1.1] text-[var(--no-espresso)] sm:text-5xl"
              >
                Brewed with intention, shared with care.
              </h2>
              <p className="mt-5 max-w-md text-base text-[var(--no-muted)]">
                From quiet morning pour-overs to evening workshops, every ritual
                is designed to deepen how you taste.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-0 border-t border-[var(--no-border)]">
              {northOakExperiences.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <li className="grid gap-2 border-b border-[var(--no-border)] py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                    <h3 className="font-display text-xl text-[var(--no-espresso)]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--no-muted)] sm:text-base">
                      {item.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
