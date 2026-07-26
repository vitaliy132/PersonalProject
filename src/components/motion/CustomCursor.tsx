"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type CursorMode = "default" | "hover" | "press";

export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;

    const core = document.querySelector<HTMLElement>(".cursor-core");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    const trail = document.querySelector<HTMLElement>(".cursor-trail");
    if (!core || !ring || !trail) return;

    let raf = 0;
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let tx = 0;
    let ty = 0;
    let visible = false;

    const place = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        document.documentElement.classList.add("cursor-visible");
        rx = mx;
        ry = my;
        tx = mx;
        ty = my;
        place(core, mx, my);
        place(ring, mx, my);
        place(trail, mx, my);
      }
      place(core, mx, my);
    };

    const loop = () => {
      rx += (mx - rx) * 0.22;
      ry += (my - ry) * 0.22;
      tx += (mx - tx) * 0.1;
      ty += (my - ty) * 0.1;
      place(ring, rx, ry);
      place(trail, tx, ty);
      raf = requestAnimationFrame(loop);
    };

    const resolveTarget = (target: EventTarget | null) => {
      const el = target as HTMLElement | null;
      if (!el?.closest) return null;
      return el.closest<HTMLElement>(
        "a, button, input, textarea, select, label, [data-cursor='hover'], [data-cursor-label]",
      );
    };

    const onOver = (e: MouseEvent) => {
      const interactive = resolveTarget(e.target);
      if (!interactive) {
        setMode((m) => (m === "press" ? m : "default"));
        setLabel("");
        return;
      }

      const custom =
        interactive.getAttribute("data-cursor-label") ||
        (interactive.tagName === "A" && interactive.closest("#work")
          ? "View"
          : interactive.tagName === "BUTTON" ||
              interactive.getAttribute("role") === "button"
            ? "Click"
            : "");
      setLabel(custom);
      setMode((m) => (m === "press" ? m : "hover"));
    };

    const onDown = () => setMode("press");
    const onUp = (e: MouseEvent) => {
      setMode(resolveTarget(e.target) ? "hover" : "default");
    };
    const onLeave = () => {
      visible = false;
      document.documentElement.classList.remove("cursor-visible");
      setMode("default");
      setLabel("");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove(
        "has-custom-cursor",
        "cursor-visible",
      );
    };
  }, [enabled]);

  if (!enabled) return null;

  const stateClass =
    mode === "hover" ? "is-hover" : mode === "press" ? "is-press" : "";

  return (
    <>
      <div className={`cursor-trail ${stateClass}`} aria-hidden />
      <div className={`cursor-ring ${stateClass}`} aria-hidden>
        <span className={`cursor-label ${label ? "is-on" : ""}`}>{label}</span>
      </div>
      <div className={`cursor-core ${stateClass}`} aria-hidden>
        <span className="cursor-cross cursor-cross-h" />
        <span className="cursor-cross cursor-cross-v" />
        <span className="cursor-north" />
      </div>
    </>
  );
}
