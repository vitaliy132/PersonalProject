import Link from "next/link";
import { agency, footer, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="container-nl grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-off-white">
            {agency.name}
          </p>
          <p className="mt-3 text-sm text-stone">{agency.location}</p>
          <a
            href={`mailto:${agency.email}`}
            className="mt-6 inline-block text-sm text-off-white transition-colors hover:text-accent-strong"
            data-cursor="hover"
          >
            {agency.email}
          </a>
        </div>

        <div>
          <p className="text-[0.7rem] tracking-[0.2em] text-stone uppercase">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-off-white/90 transition-colors hover:text-accent-strong"
                  data-cursor="hover"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] tracking-[0.2em] text-stone uppercase">
            Services
          </p>
          <ul className="mt-5 space-y-3">
            {footer.services.map((item) => (
              <li key={item}>
                <Link
                  href="#services"
                  className="text-sm text-off-white/90 transition-colors hover:text-accent-strong"
                  data-cursor="hover"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-nl flex flex-col gap-3 border-t border-border py-6 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {agency.name}. All rights reserved.</p>
        <p>Leeds · Northern England · UK</p>
      </div>
    </footer>
  );
}
