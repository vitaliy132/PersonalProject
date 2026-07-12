"use client";

import { useState, type FormEvent } from "react";
import { contact, agency } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GsapReveal } from "@/components/motion/GsapReveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-pad scroll-mt-24 border-t border-border"
    >
      <div className="container-nl grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <GsapReveal>
          <p className="text-[0.7rem] tracking-[0.24em] text-accent-strong uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-off-white"
          >
            <span className="block">{contact.headline}</span>
            <span className="mt-2 block text-stone-light">
              {contact.subheadline}
            </span>
          </h2>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="block text-lg text-off-white transition-colors hover:text-accent-strong"
              data-cursor="hover"
            >
              {contact.email}
            </a>
            <div className="flex flex-wrap gap-5 pt-2 text-sm text-stone">
              <a
                href={agency.linkedIn}
                className="transition-colors hover:text-off-white"
                data-cursor="hover"
              >
                LinkedIn
              </a>
              <a
                href={agency.instagram}
                className="transition-colors hover:text-off-white"
                data-cursor="hover"
              >
                Instagram
              </a>
              <a
                href={agency.twitter}
                className="transition-colors hover:text-off-white"
                data-cursor="hover"
              >
                X
              </a>
            </div>
          </div>
        </GsapReveal>

        <GsapReveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="space-y-5 border border-border bg-bg-elevated p-6 sm:p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="text-[0.7rem] tracking-[0.16em] text-stone uppercase"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-off-white outline-none transition-colors focus:border-accent-strong"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[0.7rem] tracking-[0.16em] text-stone uppercase"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-off-white outline-none transition-colors focus:border-accent-strong"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-[0.7rem] tracking-[0.16em] text-stone uppercase"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-sm text-off-white outline-none transition-colors focus:border-accent-strong"
              />
            </div>

            <Magnetic className="pt-2">
              <Button type="submit" className="w-full sm:w-auto">
                Send enquiry
              </Button>
            </Magnetic>

            {status === "sent" ? (
              <p className="text-sm text-accent-strong">
                Opening your email client…
              </p>
            ) : null}
          </form>
        </GsapReveal>
      </div>
    </section>
  );
}
