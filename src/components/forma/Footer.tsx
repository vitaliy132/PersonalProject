import Link from "next/link";
import { Logo } from "@/components/forma/Logo";

const shopLinks = [
  { label: "Shop all", href: "/work/forma-studio/shop" },
  { label: "Backpacks", href: "/work/forma-studio/shop?category=backpacks" },
  { label: "Wallets", href: "/work/forma-studio/shop?category=wallets" },
  { label: "Travel", href: "/work/forma-studio/shop?category=travel" },
];

const helpLinks = [
  { label: "About", href: "/work/forma-studio#story" },
  { label: "Shipping", href: "/work/forma-studio#why" },
  { label: "Returns", href: "/work/forma-studio#why" },
  { label: "Contact", href: "mailto:hello@forma.studio" },
  { label: "Newsletter", href: "/work/forma-studio#newsletter" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--fo-border)] bg-[var(--fo-panel)] pt-16 pb-8 text-white">
      <div className="fo-container">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Minimal, functional products designed for modern lifestyles.
            </p>
          </div>

          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-white/40 uppercase">
              Shop
            </p>
            <ul className="mt-4 space-y-2">
              {shopLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-white/40 uppercase">
              Help
            </p>
            <ul className="mt-4 space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-white/40 uppercase">
              Social
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[0.65rem] tracking-[0.12em] text-white/35 uppercase sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} FORMA Studio</p>
          <p>Case study · Northline Digital</p>
        </div>
      </div>
    </footer>
  );
}
