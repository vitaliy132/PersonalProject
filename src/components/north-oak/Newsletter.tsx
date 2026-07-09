"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/north-oak/Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
  }

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="no-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="no-eyebrow">Stay close</p>
          <h2
            id="newsletter-heading"
            className="font-display mt-4 text-4xl leading-[1.1] text-[var(--no-espresso)] sm:text-5xl"
          >
            Join the coffee community
          </h2>
          <p className="mt-5 text-base text-[var(--no-muted)]">
            New lots, café events and tasting notes — delivered sparingly, never
            noisily.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch"
          >
            <label htmlFor="north-oak-email" className="sr-only">
              Email address
            </label>
            <input
              id="north-oak-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "success") setStatus("idle");
              }}
              placeholder="Your email address"
              className="min-h-[3.25rem] flex-1 border border-[var(--no-border)] bg-white/60 px-4 text-sm text-[var(--no-charcoal)] outline-none transition-colors placeholder:text-[var(--no-muted)] focus:border-[var(--no-espresso)]"
            />
            <button type="submit" className="no-btn no-btn-primary min-h-[3.25rem]">
              Subscribe
            </button>
          </form>
          {status === "success" && (
            <p className="mt-4 text-sm text-[var(--no-green)]" role="status">
              Thank you — you&apos;re on the list.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
