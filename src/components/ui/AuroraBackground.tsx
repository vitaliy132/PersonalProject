"use client";

import { useEffect, useRef, useState } from "react";
import { Mesh, Program, Renderer, Triangle, Vec2 } from "ogl";
import { useReducedMotion } from "framer-motion";
import { AURORA_FRAGMENT, AURORA_VERTEX } from "@/components/ui/aurora-shaders";

function StaticAuroraFallback() {
  return (
    <>
      <div className="absolute inset-x-[-10%] top-[-8%] h-[70%] bg-[radial-gradient(ellipse_50%_60%_at_32%_18%,rgba(56,255,189,0.28),transparent_65%)]" />
      <div className="absolute inset-x-[-10%] top-[-5%] h-[65%] bg-[radial-gradient(ellipse_45%_55%_at_62%_14%,rgba(80,180,255,0.22),transparent_60%)]" />
      <div className="absolute inset-x-[-10%] top-0 h-[55%] bg-[radial-gradient(ellipse_40%_50%_at_78%_10%,rgba(140,100,255,0.16),transparent_58%)]" />
    </>
  );
}

export function AuroraBackground() {
  const reduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({
        canvas,
        alpha: true,
        premultipliedAlpha: false,
        dpr: Math.min(window.devicePixelRatio || 1, 1.5),
        width: canvas.clientWidth || 1,
        height: canvas.clientHeight || 1,
      });
    } catch {
      setWebglFailed(true);
      return;
    }

    const { gl } = renderer;
    gl.clearColor(0, 0, 0, 0);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: AURORA_VERTEX,
      fragment: AURORA_FRAGMENT,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Vec2(
            gl.canvas.width || 1,
            gl.canvas.height || 1,
          ),
        },
      },
      transparent: true,
      depthTest: false,
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value.set(
        gl.canvas.width,
        gl.canvas.height,
      );
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    let raf = 0;
    let running = true;

    const tick = (t: number) => {
      if (!running) return;
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
      geometry.remove();
      program.remove();
      const lose = gl.getExtension("WEBGL_lose_context");
      lose?.loseContext();
    };
  }, [reduceMotion]);

  const useFallback = reduceMotion || webglFailed;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
    >
      {/* Deep night sky */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,#0b1220_0%,#07090d_55%,#050608_100%)]" />

      {/* Soft horizon glow */}
      <div className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(80,180,255,0.1),transparent_70%)]" />

      {/* Star field */}
      <div className="aurora-stars absolute inset-0 opacity-70" />
      <div className="aurora-stars aurora-stars-dense absolute inset-0 opacity-40" />

      {useFallback ? (
        <StaticAuroraFallback />
      ) : (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
      )}

      {/* Bottom fade into page background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--bg)]" />
    </div>
  );
}
