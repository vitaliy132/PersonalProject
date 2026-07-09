import { Logo } from "@/components/north-oak/Logo";
import { northOakNav } from "@/lib/north-oak-content";

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
    <footer className="border-t border-[var(--no-border)] bg-[var(--no-beige)]/50 py-16">
      <div className="no-container">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--no-muted)]">
              Premium specialty coffee roasted with care and sourced from
              exceptional farms.
            </p>
          </div>

          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.16em] text-[var(--no-espresso)] uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {northOakNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--no-muted)] transition-colors hover:text-[var(--no-espresso)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#newsletter"
                  className="text-sm text-[var(--no-muted)] transition-colors hover:text-[var(--no-espresso)]"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.16em] text-[var(--no-espresso)] uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--no-muted)]">
              <li>
                <a
                  href="mailto:hello@northandoak.coffee"
                  className="transition-colors hover:text-[var(--no-espresso)]"
                >
                  hello@northandoak.coffee
                </a>
              </li>
              <li>42 Oak Lane, London E1 6AN</li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[var(--no-espresso)]"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--no-border)] pt-8 text-xs text-[var(--no-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} North &amp; Oak Coffee. All rights reserved.</p>
          <p>A portfolio case study by Northline Digital.</p>
        </div>
      </div>
    </footer>
  );
}
