import Link from "next/link";

type LogoProps = {
  className?: string;
  light?: boolean;
};

export function Logo({ className = "", light = false }: LogoProps) {
  return (
    <Link
      href="/work/forma-studio"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="FORMA Studio home"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={light ? "text-white" : "text-[var(--fo-ink)]"}
      >
        <path d="M4 4h22v22H4V4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 4l22 22M26 4L4 26" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <circle cx="15" cy="15" r="3.5" fill="currentColor" />
      </svg>
      <span
        className={`font-mono text-[0.8rem] font-medium tracking-[0.22em] uppercase transition-opacity group-hover:opacity-65 ${
          light ? "text-white" : "text-[var(--fo-ink)]"
        }`}
      >
        FORMA
      </span>
    </Link>
  );
}
