import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styled from "styled-components";

const Computers = () => {
  const Computer = useGLTF("/desktop_pc/scene.gltf");
  const Wrapper = styled.div`
    canvas {
      max-height: 400px;
      width: 80%;
    }
  `;
  return (
    <Wrapper>
      <Canvas
        className="canvas"
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <hemisphereLight intensity={0.15} />
        <pointLight intensity={1} />
        <mesh scale={1}>
          <primitive object={Computer.scene} />
        </mesh>
      </Canvas>
    </Wrapper>
  );
};

export default Computers;
