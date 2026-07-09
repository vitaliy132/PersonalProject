import Image from "next/image";
import { Reveal } from "@/components/forma/Reveal";
import { formaImages } from "@/lib/forma-content";

const pillars = [
  {
    code: "01",
    title: "Philosophy",
    text: "Fewer objects, higher utility. Every product must earn permanent space in a daily system.",
  },
  {
    code: "02",
    title: "Materials",
    text: "Full-grain leather, recycled technical shells and hardware chosen for feel, strength and quiet ageing.",
  },
  {
    code: "03",
    title: "Craft",
    text: "Patterns are stress-tested across prototypes until seams, closures and load paths feel inevitable.",
  },
  {
    code: "04",
    title: "Impact",
    text: "Smaller runs, responsible mills and packaging that protects without surplus waste.",
  },
];

export function BrandStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <div className="fo-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="fo-eyebrow">Brand system</p>
            <h2
              id="story-heading"
              className="font-display mt-4 text-4xl leading-[1.02] sm:text-5xl lg:text-[3.5rem]"
            >
              Less clutter.
              <br />
              Better design.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--fo-stone)]">
              FORMA Studio builds timeless carry goods for people who value
              simplicity, functionality and craftsmanship — products that
              disappear into your life until you notice how well they work.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            <Reveal className="relative min-h-[18rem] overflow-hidden border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] sm:col-span-2 sm:min-h-[22rem]">
              <Image
                src={formaImages.story.src}
                alt={formaImages.story.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                <p className="font-mono text-[0.65rem] tracking-[0.16em] uppercase">
                  Studio notes · Materials lab
                </p>
              </div>
            </Reveal>

            {pillars.map((item, index) => (
              <Reveal key={item.code} delay={index * 0.05}>
                <article className="flex h-full flex-col border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)] p-5 transition-colors hover:border-[var(--fo-border-strong)]">
                  <p className="font-mono text-[0.68rem] tracking-[0.14em] text-[var(--fo-accent)]">
                    {item.code}
                  </p>
                  <h3 className="mt-3 text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fo-stone)]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
