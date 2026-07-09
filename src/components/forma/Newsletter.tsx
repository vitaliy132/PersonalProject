"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/forma/Reveal";

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
      className="scroll-mt-24 py-10 sm:py-14"
    >
      <div className="fo-container">
        <Reveal>
          <div className="grid overflow-hidden border border-[var(--fo-border)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-[var(--fo-panel)] p-8 text-white sm:p-12">
              <p className="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--fo-accent)] uppercase">
                Dispatch
              </p>
              <h2
                id="newsletter-heading"
                className="font-display mt-4 text-3xl leading-[1.05] sm:text-4xl"
              >
                Join the FORMA community
              </h2>
              <p className="mt-4 max-w-md text-white/65">
                Get product updates, exclusive releases and design inspiration.
              </p>
              <ul className="mt-8 space-y-2 font-mono text-[0.68rem] tracking-[0.12em] text-white/45 uppercase">
                <li>— Early access to limited drops</li>
                <li>— Material & repair notes</li>
                <li>— No spam. Unsubscribe anytime</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center bg-[var(--fo-bg-elevated)] p-8 sm:p-12">
              <form onSubmit={onSubmit} className="space-y-4">
                <label htmlFor="forma-email" className="font-mono text-[0.68rem] tracking-[0.14em] uppercase">
                  Email address
                </label>
                <input
                  id="forma-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "success") setStatus("idle");
                  }}
                  placeholder="name@studio.com"
                  className="mt-2 w-full border border-[var(--fo-border)] bg-[var(--fo-bg)] px-4 py-3.5 text-sm outline-none focus:border-[var(--fo-ink)]"
                />
                <button type="submit" className="fo-btn fo-btn-primary w-full">
                  Subscribe
                </button>
              </form>
              {status === "success" && (
                <p className="mt-4 font-mono text-xs tracking-wide text-[var(--fo-accent)]" role="status">
                  Connected — you&apos;re on the list.
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
