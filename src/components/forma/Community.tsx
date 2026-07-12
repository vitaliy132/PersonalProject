import Image from "next/image";
import { FadeIn as Reveal } from "@/components/ui/FadeIn";
import { formaCommunity } from "@/lib/forma-content";

export function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="scroll-mt-24 border-t border-[var(--fo-border)] py-16 sm:py-20"
    >
      <div className="fo-container">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="fo-eyebrow">@formastudio</p>
            <h2
              id="community-heading"
              className="font-display mt-3 text-4xl leading-[1.05] sm:text-5xl"
            >
              In the wild.
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[0.72rem] tracking-[0.12em] uppercase underline-offset-4 hover:underline"
          >
            Follow the feed
          </a>
        </Reveal>

        <div className="mt-10 grid auto-rows-[11rem] grid-cols-2 gap-2 sm:auto-rows-[13rem] sm:grid-cols-4 sm:gap-3">
          {formaCommunity.map((image, index) => {
            const span =
              index === 0
                ? "sm:col-span-2 sm:row-span-2"
                : index === 3
                  ? "sm:col-span-2"
                  : "";
            return (
              <Reveal key={image.src} delay={index * 0.04} className={span}>
                <div className="group relative h-full min-h-[11rem] overflow-hidden border border-[var(--fo-border)] bg-[var(--fo-bg-elevated)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                  <p className="absolute bottom-3 left-3 font-mono text-[0.62rem] tracking-[0.14em] text-white uppercase opacity-0 transition-opacity group-hover:opacity-100">
                    Frame {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
