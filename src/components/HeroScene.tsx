import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus, Octahedron } from "@react-three/drei";
import * as THREE from "three";

function GlowingSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={ref} args={[1.5, 4]} position={[2, 0.5, -1]}>
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          wireframe
          distort={0.3}
          speed={2}
        />
      </Icosahedron>
    </Float>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
      <Torus ref={ref} args={[0.8, 0.25, 16, 32]} position={[-2.5, -1, -2]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.7}
        />
      </Torus>
    </Float>
  );
}

function FloatingOctahedron() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
      <Octahedron ref={ref} args={[0.6]} position={[-1, 2, -1.5]}>
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.6}
        />
      </Octahedron>
    </Float>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#22d3ee" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#22d3ee" />
        <pointLight position={[-5, -5, 3]} intensity={0.5} color="#8b5cf6" />
        <GlowingSphere />
        <FloatingTorus />
        <FloatingOctahedron />
        <Particles />
      </Canvas>
    </div>
  );
};

export default HeroScene;
