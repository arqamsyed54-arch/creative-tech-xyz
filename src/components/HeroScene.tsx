import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus, Octahedron, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Track mouse position globally
const mouse = new THREE.Vector2(0, 0);

function MouseTracker() {
  const { gl } = useThree();
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = gl.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }, [gl]);

  useFrame(() => {});

  // attach listener
  useMemo(() => {
    gl.domElement.addEventListener("mousemove", handleMouseMove);
    return () => gl.domElement.removeEventListener("mousemove", handleMouseMove);
  }, [gl, handleMouseMove]);

  return null;
}

function GlowingSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.position.x = 2 + mouse.x * 0.5;
      ref.current.position.y = 0.5 + mouse.y * 0.3;
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
      ref.current.position.x = -2.5 + mouse.x * -0.3;
      ref.current.position.y = -1 + mouse.y * -0.2;
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
      ref.current.position.x = -1 + mouse.x * 0.4;
      ref.current.position.y = 2 + mouse.y * 0.4;
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

function EnergyRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2;
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Torus ref={ref} args={[2.8, 0.02, 16, 100]} position={[0, 0, -3]}>
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={0.8}
        transparent
        opacity={0.3}
      />
    </Torus>
  );
}

function GlowOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;
      ref.current.position.x = Math.sin(t * 0.3) * 3;
      ref.current.position.y = Math.cos(t * 0.4) * 2;
      ref.current.position.z = -2 + Math.sin(t * 0.2);
      const s = 0.15 + Math.sin(t * 2) * 0.05;
      ref.current.scale.set(s, s, s);
    }
  });

  return (
    <Sphere ref={ref} args={[1, 16, 16]}>
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={2}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
}

function Particles() {
  const count = 300;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02 + mouse.x * 0.1;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01 + mouse.y * 0.1;
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
        <MouseTracker />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#22d3ee" />
        <pointLight position={[-5, -5, 3]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[0, 3, 2]} intensity={0.3} color="#3b82f6" />
        <GlowingSphere />
        <FloatingTorus />
        <FloatingOctahedron />
        <EnergyRing />
        <GlowOrb />
        <Particles />
      </Canvas>
    </div>
  );
};

export default HeroScene;
