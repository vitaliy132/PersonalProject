"use client";

import { Magnetic } from "@/components/motion/Magnetic";

type MagneticButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export function MagneticButton({
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: MagneticButtonProps) {
  const external = href?.startsWith("http");

  return (
    <Magnetic strength={0.22} className="inline-block">
      {href ? (
        <a
          href={href}
          className={className}
          onClick={onClick}
          {...(external ? { target: "_blank", rel: "noreferrer" } : undefined)}
        >
          {children}
        </a>
      ) : (
        <button type={type} className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </Magnetic>
  );
}
