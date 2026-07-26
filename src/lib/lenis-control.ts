import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;
let lockCount = 0;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

/** Stop Lenis + lock body scroll (safe to call from multiple overlays). */
export function lockScroll() {
  lockCount += 1;
  if (lockCount === 1) {
    lenisInstance?.stop();
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }
}

export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    lenisInstance?.start();
  }
}
