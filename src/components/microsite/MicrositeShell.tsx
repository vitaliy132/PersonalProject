"use client";

import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

type MicrositeShellProps = {
  className: string;
  grain?: boolean;
  smoothScroll?: boolean;
  children: ReactNode;
};

/**
 * Thin brand wrapper: root class, optional grain, optional Lenis.
 * Layouts still own fonts, metadata, providers, Header/Footer.
 */
export function MicrositeShell({
  className,
  grain = false,
  smoothScroll = false,
  children,
}: MicrositeShellProps) {
  const body = (
    <div className={className}>
      {grain ? <div className="ms-grain" aria-hidden /> : null}
      {children}
    </div>
  );

  if (smoothScroll) {
    return <SmoothScroll>{body}</SmoothScroll>;
  }

  return body;
}
