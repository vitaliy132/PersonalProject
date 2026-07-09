import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className = "", href = "/work/north-and-oak" }: LogoProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="North & Oak Coffee home"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M18 8c-2.8 3.2-4.2 6.4-4.2 9.2 0 2.4 1.9 4.3 4.2 4.3s4.2-1.9 4.2-4.3C22.2 14.4 20.8 11.2 18 8z"
          fill="currentColor"
          opacity="0.9"
        />
        <path
          d="M14.5 24.5c1.1.8 2.3 1.2 3.5 1.2s2.4-.4 3.5-1.2"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-[1.35rem] leading-none tracking-tight text-[var(--no-espresso)] transition-opacity group-hover:opacity-80 sm:text-[1.5rem]">
        North &amp; Oak
      </span>
    </Link>
  );
}
