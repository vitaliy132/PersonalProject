"use client";

import { Magnetic } from "@/components/motion/Magnetic";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function MagneticButton({
  href,
  children,
  className = "",
}: MagneticButtonProps) {
  const external = href.startsWith("http");

  return (
    <Magnetic strength={0.22} className="inline-block">
      <a
        href={href}
        className={className}
        {...(external
          ? { target: "_blank", rel: "noreferrer" }
          : undefined)}
      >
        {children}
      </a>
    </Magnetic>
  );
}
