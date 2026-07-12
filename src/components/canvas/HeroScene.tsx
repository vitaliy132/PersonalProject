"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CatmullRomCurve3,
  DoubleSide,
  Group,
  MathUtils,
  PointLight,
  Points,
  TubeGeometry,
  Vector3,
  type Mesh,
} from "three";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";

function makeRibbon(
  points: [number, number, number][],
  radius: number,
  tubularSegments = 120,
) {
  const curve = new CatmullRomCurve3(
    points.map(([x, y, z]) => new Vector3(x, y, z)),
    false,
    "catmullrom",
    0.5,
  );
  return new TubeGeometry(curve, tubularSegments, radius, 8, false);
}

function FlowField({
  mouse,
}: {
  mouse: React.RefObject<{ x: number; y: number }>;
}) {
  const group = useRef<Group>(null);
  const plane = useRef<Mesh>(null);
  const ribbonA = useRef<Mesh>(null);
  const ribbonB = useRef<Mesh>(null);
  const ribbonC = useRef<Mesh>(null);
  const dust = useRef<Points>(null);
  const accentLight = useRef<PointLight>(null);

  const ribbonGeos = useMemo(
    () => [
      makeRibbon(
        [
          [-4.2, 1.4, -0.6],
          [-2.1, 0.2, 0.3],
          [0.1, 1.1, -0.2],
          [2.4, -0.3, 0.5],
          [4.0, 0.8, -0.4],
        ],
        0.018,
      ),
      makeRibbon(
        [
          [-3.8, -1.2, 0.2],
          [-1.6, -0.1, -0.5],
          [0.6, -1.0, 0.1],
          [2.8, 0.4, -0.3],
          [4.2, -0.7, 0.2],
        ],
        0.014,
      ),
      makeRibbon(
        [
          [-3.2, 0.6, 0.8],
          [-1.0, -0.8, 0.4],
          [1.2, 0.3, 0.9],
          [3.4, -0.5, 0.3],
        ],
        0.011,
      ),
    ],
    [],
  );

  const dustGeo = useMemo(() => {
    const count = 90;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = MathUtils.randFloatSpread(10);
      positions[i * 3 + 1] = MathUtils.randFloatSpread(6.5);
      positions[i * 3 + 2] = MathUtils.randFloat(-1.8, 1.2);
    }
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const mx = mouse.current?.x ?? 0;
    const my = mouse.current?.y ?? 0;

    if (group.current) {
      group.current.rotation.x = MathUtils.lerp(
        group.current.rotation.x,
        my * 0.12,
        0.04,
      );
      group.current.rotation.y = MathUtils.lerp(
        group.current.rotation.y,
        mx * 0.16,
        0.04,
      );
      group.current.position.x = MathUtils.lerp(
        group.current.position.x,
        mx * 0.35,
        0.05,
      );
      group.current.position.y = MathUtils.lerp(
        group.current.position.y,
        my * 0.22,
        0.05,
      );
    }

    if (plane.current) {
      const pos = plane.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const wave =
          Math.sin(x * 0.55 + t * 0.55) * 0.18 +
          Math.cos(y * 0.7 + t * 0.4) * 0.14 +
          Math.sin((x + y) * 0.35 + t * 0.25) * 0.1;
        pos.setZ(i, wave);
      }
      pos.needsUpdate = true;
      plane.current.rotation.x = -0.55 + my * 0.05;
    }

    if (ribbonA.current) {
      ribbonA.current.rotation.z = Math.sin(t * 0.18) * 0.08;
      ribbonA.current.position.y = Math.sin(t * 0.35) * 0.12;
    }
    if (ribbonB.current) {
      ribbonB.current.rotation.z = Math.cos(t * 0.15) * 0.1;
      ribbonB.current.position.y = Math.cos(t * 0.28) * 0.1;
    }
    if (ribbonC.current) {
      ribbonC.current.rotation.z = Math.sin(t * 0.22 + 1) * 0.07;
      ribbonC.current.position.y = Math.sin(t * 0.4 + 0.5) * 0.14;
    }

    if (dust.current) {
      dust.current.rotation.y = t * 0.03;
      const mat = dust.current.material as { opacity: number };
      mat.opacity = 0.28 + Math.sin(t * 0.6) * 0.06;
    }

    if (accentLight.current) {
      accentLight.current.position.x = MathUtils.lerp(
        accentLight.current.position.x,
        mx * 2.2,
        0.06,
      );
      accentLight.current.position.y = MathUtils.lerp(
        accentLight.current.position.y,
        my * 1.6,
        0.06,
      );
    }
  });

  return (
    <group ref={group}>
      <mesh ref={plane} position={[0.4, -0.15, -1.4]} rotation={[-0.55, 0.08, 0]}>
        <planeGeometry args={[9.5, 6.2, 28, 18]} />
        <meshStandardMaterial
          color="#5c6b4a"
          wireframe
          transparent
          opacity={0.22}
          roughness={0.8}
          metalness={0.05}
          side={DoubleSide}
        />
      </mesh>

      <mesh ref={ribbonA} position={[0, 0.35, 0.2]}>
        <primitive object={ribbonGeos[0]} attach="geometry" />
        <meshStandardMaterial
          color="#7a8f62"
          roughness={0.35}
          metalness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>

      <mesh ref={ribbonB} position={[0, -0.15, -0.15]}>
        <primitive object={ribbonGeos[1]} attach="geometry" />
        <meshStandardMaterial
          color="#c4bfb6"
          roughness={0.4}
          metalness={0.15}
          transparent
          opacity={0.45}
        />
      </mesh>

      <mesh ref={ribbonC} position={[0, 0.1, 0.55]}>
        <primitive object={ribbonGeos[2]} attach="geometry" />
        <meshStandardMaterial
          color="#8a857c"
          roughness={0.45}
          metalness={0.1}
          transparent
          opacity={0.55}
        />
      </mesh>

      <points ref={dust}>
        <primitive object={dustGeo} attach="geometry" />
        <pointsMaterial
          color="#f4f2ee"
          size={0.025}
          transparent
          opacity={0.3}
          depthWrite={false}
          blending={AdditiveBlending}
          sizeAttenuation
        />
      </points>

      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 3]} intensity={0.95} color="#f4f2ee" />
      <directionalLight
        position={[-4, -1, -3]}
        intensity={0.4}
        color="#5c6b4a"
      />
      <pointLight
        ref={accentLight}
        position={[0, 0, 2]}
        intensity={0.55}
        color="#7a8f62"
      />
    </group>
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
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-75">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.4], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <FlowField mouse={mouse} />
      </Canvas>
    </div>
  );
}
