import Link from "next/link";
import { Logo } from "@/components/arden/Logo";
import { arden, ardenNav } from "@/lib/arden-content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--aw-ink)] pt-20 pb-10 text-[var(--aw-mist)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(42,99,70,0.18),transparent_40%)]" />

      <div className="aw-container relative z-10">
        <div className="grid gap-14 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-[1.7] text-[var(--aw-mist)]/50">
              {arden.tagline} Private wealth architecture for families who think in decades.
            </p>
          </div>

          <div>
            <p className="aw-eyebrow !text-[var(--aw-champagne)]">Navigate</p>
            <ul className="mt-5 space-y-3">
              {ardenNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--aw-mist)]/65 transition-colors hover:text-[var(--aw-mist)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="aw-eyebrow !text-[var(--aw-champagne)]">Office</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--aw-mist)]/65">
              <li>{arden.location}</li>
              <li>{arden.address}</li>
              <li>
                <a
                  href={`mailto:${arden.email}`}
                  className="transition-colors hover:text-[var(--aw-mist)]"
                >
                  {arden.email}
                </a>
              </li>
              <li>{arden.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-[0.7rem] tracking-wide text-[var(--aw-mist)]/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {arden.name}. Demo case study — not regulated advice.
          </p>
          <p className="tracking-[0.16em] uppercase">Mayfair · London</p>
        </div>
      </div>
    </footer>
  );
}
