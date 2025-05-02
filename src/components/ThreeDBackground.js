import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, GradientTexture } from "@react-three/drei";

const FloatingShape = ({ position, rotationSpeed = 0.01 }) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += rotationSpeed;
    meshRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh position={position} ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial>
        <GradientTexture
          stops={[0, 0.5, 1]}
          colors={["#FF3CAC", "#784BA0", "#2B86C5"]}
          size={1024}
        />
      </meshStandardMaterial>
    </mesh>
  );
};

const FloatingCube = ({ position, rotationSpeed = 0.02 }) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += rotationSpeed;
    meshRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial>
        <GradientTexture
          stops={[0, 0.5, 1]}
          colors={["#00F5A0", "#00D9F5", "#00A1F5"]}
          size={1024}
        />
      </meshStandardMaterial>
    </mesh>
  );
};

const ThreeDBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        background: "linear-gradient(to bottom, #0f172a, #1e293b)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} />

        {/* Main floating shapes */}
        <FloatingShape position={[-2, 0, 0]} rotationSpeed={0.01} />
        <FloatingShape position={[2, 0, 0]} rotationSpeed={-0.01} />

        {/* Additional floating cubes */}
        <FloatingCube position={[0, 2, -2]} rotationSpeed={0.015} />
        <FloatingCube position={[0, -2, -2]} rotationSpeed={-0.015} />

        {/* Enhanced stars with more density and better visibility */}
        <Stars
          radius={100}
          depth={50}
          count={8000}
          factor={4}
          saturation={0}
          fade
          speed={1}
          color="#ffffff"
        />

        {/* Smooth camera controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
