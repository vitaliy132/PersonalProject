"use client";

import { useEffect } from "react";
import { lockScroll, unlockScroll } from "@/lib/lenis-control";

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    lockScroll();
    return () => unlockScroll();
  }, [locked]);
}
