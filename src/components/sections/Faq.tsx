"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeIn>
            <SectionHeading
              id="faq-heading"
              eyebrow="FAQ"
              title="Questions we hear most often"
              description="Straight answers on cost, timelines, deadlines and how we work together."
            />
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <div key={faq.question}>
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-surface-hover sm:px-6"
                        onClick={() =>
                          setOpenIndex(isOpen ? null : index)
                        }
                      >
                        <span className="font-display text-base font-semibold tracking-tight text-text sm:text-lg">
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={18}
                          className={[
                            "mt-1 shrink-0 text-muted transition-transform duration-200",
                            isOpen ? "rotate-180 text-accent" : "",
                          ].join(" ")}
                        />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="px-5 pb-5 sm:px-6"
                    >
                      <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
