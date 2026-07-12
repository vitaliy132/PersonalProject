"use client";

import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
  light?: boolean;
  markOnly?: boolean;
};

function Mark({ light }: { light?: boolean }) {
  const stroke = light ? "var(--aw-mist)" : "var(--aw-ink)";
  const accent = light ? "var(--aw-champagne)" : "var(--aw-verdant)";

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M16 3 L27 28 H21.2 L16 15.5 L10.8 28 H5 Z"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 20.5 H20.5"
        stroke={accent}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="16" cy="8.5" r="1.35" fill={accent} />
    </svg>
  );
}

export function Logo({
  className = "",
  href = "/work/arden-wealth",
  light = false,
  markOnly = false,
}: LogoProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 ${
        light ? "text-[var(--aw-mist)]" : "text-[var(--aw-ink)]"
      } ${className}`}
      aria-label="Arden Wealth"
    >
      <Mark light={light} />
      {!markOnly && (
        <span className="font-display text-[1.1rem] tracking-[-0.04em] sm:text-[1.28rem]">
          Arden<span className="font-normal opacity-55"> Wealth</span>
        </span>
      )}
    </Link>
  );
}
