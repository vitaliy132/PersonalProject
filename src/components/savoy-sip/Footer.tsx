import { savoySip, savoySipNav } from "@/lib/savoy-sip-content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[var(--ss-ink)] text-[var(--ss-on-dark)]">
      <div className="ss-container py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--ss-on-dark)]/55">
              {savoySip.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {savoySipNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--ss-on-dark)]/45 transition-colors hover:text-[var(--ss-on-dark)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={savoySip.instagram}
            target="_blank"
            rel="noreferrer"
            className="ss-link text-[var(--ss-on-dark)]"
          >
            Instagram
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--ss-on-dark)]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--ss-on-dark)]/35">
            © {new Date().getFullYear()} {savoySip.name}
          </p>
          <p className="text-xs tracking-[0.16em] text-[var(--ss-on-dark)]/35 uppercase">
            {savoySip.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
