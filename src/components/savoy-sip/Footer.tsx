import { savoyNav, savoySip } from "@/lib/savoy-sip-content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--ss-border)] bg-[var(--ss-ivory)] text-[var(--ss-black)]">
      <div className="ss-container py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-[var(--ss-stone)]">
              {savoySip.location}
            </p>
            <p className="mt-1 max-w-xs text-sm leading-relaxed text-[var(--ss-stone)]">
              {savoySip.address}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            aria-label="Footer"
          >
            {savoyNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--ss-stone)] transition-colors hover:text-[var(--ss-black)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[0.7rem] font-medium uppercase tracking-[0.16em]">
            <a
              href={savoySip.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--ss-stone)] transition-colors hover:text-[var(--ss-black)]"
            >
              Instagram
            </a>
            <a
              href={`mailto:${savoySip.email}`}
              className="text-[var(--ss-stone)] transition-colors hover:text-[var(--ss-black)]"
            >
              Contact
            </a>
            <a
              href="#location"
              className="text-[var(--ss-stone)] transition-colors hover:text-[var(--ss-black)]"
            >
              Visit
            </a>
          </div>
        </div>

        <hr className="ss-rule mt-14" />
        <p className="mt-6 text-xs text-[var(--ss-stone-soft)]">
          © {new Date().getFullYear()} {savoySip.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
