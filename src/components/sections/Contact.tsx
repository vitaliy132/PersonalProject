"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { GsapReveal } from "@/components/motion/GsapReveal";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          payload?.error || "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
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

          <div className="mt-10">
            <a
              href={`mailto:${contact.email}`}
              className="block text-lg text-off-white transition-colors hover:text-accent-strong"
              data-cursor="hover"
            >
              {contact.email}
            </a>
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
                disabled={status === "sending"}
                className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-off-white outline-none transition-colors focus:border-accent-strong disabled:opacity-60"
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
                disabled={status === "sending"}
                className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-off-white outline-none transition-colors focus:border-accent-strong disabled:opacity-60"
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
                disabled={status === "sending"}
                className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-sm text-off-white outline-none transition-colors focus:border-accent-strong disabled:opacity-60"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full sm:w-auto"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </Button>
            </div>

            {status === "sent" ? (
              <p className="text-sm text-accent-strong">
                Thanks — your enquiry has been sent.
              </p>
            ) : null}

            {status === "error" ? (
              <p className="text-sm text-red-400">
                {errorMessage}{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="underline underline-offset-2"
                >
                  Email us directly
                </a>
              </p>
            ) : null}
          </form>
        </GsapReveal>
      </div>
    </section>
  );
}
