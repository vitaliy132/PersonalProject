"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";

function FloatingForms({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  const a = useRef<Mesh>(null);
  const b = useRef<Mesh>(null);
  const c = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const mx = mouse.current?.x ?? 0;
    const my = mouse.current?.y ?? 0;

    if (a.current) {
      a.current.rotation.x = t * 0.15 + my * 0.2;
      a.current.rotation.y = t * 0.2 + mx * 0.25;
      a.current.position.x = -1.6 + mx * 0.4;
      a.current.position.y = 0.4 + my * 0.3;
    }
    if (b.current) {
      b.current.rotation.x = t * -0.12 + my * 0.15;
      b.current.rotation.z = t * 0.18;
      b.current.position.x = 1.8 + mx * 0.35;
      b.current.position.y = -0.2 + my * 0.25;
    }
    if (c.current) {
      c.current.rotation.y = t * 0.25;
      c.current.position.x = 0.2 + mx * 0.2;
      c.current.position.y = -1.1 + my * 0.2;
    }
  });

  return (
    <>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={a} position={[-1.6, 0.4, 0]}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial
            color="#5c6b4a"
            roughness={0.45}
            metalness={0.15}
            wireframe
          />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={b} position={[1.8, -0.2, -0.4]}>
          <torusGeometry args={[0.55, 0.18, 16, 48]} />
          <meshStandardMaterial
            color="#8a857c"
            roughness={0.35}
            metalness={0.25}
          />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.7}>
        <mesh ref={c} position={[0.2, -1.1, 0.2]}>
          <octahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial
            color="#c4bfb6"
            roughness={0.5}
            metalness={0.1}
            transparent
            opacity={0.55}
          />
        </mesh>
      </Float>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 2]} intensity={1.1} color="#f4f2ee" />
      <directionalLight position={[-3, -2, -4]} intensity={0.35} color="#5c6b4a" />
    </>
  );
}

export function HeroScene({
  mouse,
}: {
  mouse: React.RefObject<{ x: number; y: number }>;
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <FloatingForms mouse={mouse} />
      </Canvas>
    </div>
  );
}
