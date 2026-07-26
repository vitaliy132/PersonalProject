import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;
let lockCount = 0;
let lockedScrollY = 0;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

/** Stop Lenis + lock body scroll (safe to call from multiple overlays). */
export function lockScroll() {
  lockCount += 1;
  if (lockCount === 1) {
    lockedScrollY = window.scrollY;
    lenisInstance?.stop();
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  }
}

export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, lockedScrollY);
    lenisInstance?.start();
  }
}
