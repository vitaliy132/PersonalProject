import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({
  className = "",
  href = "/work/the-copper-pan",
}: LogoProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="The Copper Pan home"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 text-[var(--cp-copper)]"
      >
        <circle cx="17" cy="17" r="15.5" stroke="currentColor" strokeWidth="1.25" />
        <ellipse
          cx="17"
          cy="19"
          rx="9"
          ry="5.5"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M8 19c0-4.5 4-8 9-8s9 3.5 9 8"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <circle cx="17" cy="12" r="1.5" fill="currentColor" />
      </svg>
      <span className="font-display text-[1.25rem] leading-none tracking-tight text-[var(--cp-ink)] transition-opacity group-hover:opacity-80 sm:text-[1.4rem]">
        The Copper Pan
      </span>
    </Link>
  );
}
