import { Logo } from "@/components/copper-pan/Logo";
import {
  copperPanContact,
  copperPanNav,
} from "@/lib/copper-pan-content";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--cp-border)] bg-[var(--cp-bg-elevated)]/80 py-16">
      <div className="cp-container">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--cp-muted)]">
              Seasonal British cooking in a warm corner of North London.
            </p>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-[var(--cp-ink)] uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {copperPanNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--cp-muted)] transition-colors hover:text-[var(--cp-ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-[var(--cp-ink)] uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--cp-muted)]">
              <li>
                <a
                  href={`mailto:${copperPanContact.email}`}
                  className="transition-colors hover:text-[var(--cp-ink)]"
                >
                  {copperPanContact.email}
                </a>
              </li>
              <li>{copperPanContact.address}</li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[var(--cp-ink)]"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--cp-border)] pt-8 text-xs text-[var(--cp-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} The Copper Pan. All rights reserved.
          </p>
          <p>A portfolio case study by Northline Digital.</p>
        </div>
      </div>
    </footer>
  );
}
