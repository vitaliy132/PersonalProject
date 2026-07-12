"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BufferAttribute, BufferGeometry, Points } from "three";
import { useReducedMotion } from "framer-motion";

function Particles({ count = 48 }: { count?: number }) {
  const ref = useRef<Points>(null);

  const geometry = useMemo(() => {
    const geo = new BufferGeometry();
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    geo.setAttribute("position", new BufferAttribute(arr, 3));
    return geo;
  }, [count]);

  useFrame(({ clock }) => {
    const points = ref.current;
    if (!points) return;
    points.rotation.y = clock.elapsedTime * 0.03;
    points.rotation.x = Math.sin(clock.elapsedTime * 0.08) * 0.04;
    const pos = points.geometry.attributes.position as BufferAttribute;
    for (let i = 0; i < count; i++) {
      const y = pos.getY(i);
      pos.setY(i, y + Math.sin(clock.elapsedTime * 0.4 + i) * 0.0008);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        color="#f5f1e8"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function HeroCanvas() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] opacity-70">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
