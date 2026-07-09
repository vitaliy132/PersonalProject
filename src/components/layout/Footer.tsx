import { agency, services } from "@/lib/content";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">
            {agency.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            A UK digital studio helping small and medium businesses attract more
            customers online through websites, SEO and performance marketing.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Services
          </p>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="text-sm text-text/90 transition-colors hover:text-accent"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Contact
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <span className="text-sm text-text/90">{agency.email}</span>
            </li>
            <li>
              <a
                href={agency.linkedIn}
                className="inline-flex items-center gap-2 text-sm text-text/90 transition-colors hover:text-accent"
                aria-label="Northline Digital on LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {agency.name}. All rights reserved.
          </p>
          <p>Built for businesses that want to grow online.</p>
        </div>
      </div>
    </footer>
  );
}
