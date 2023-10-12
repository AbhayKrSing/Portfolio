import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { useRef, Suspense } from "react";
import { TextureLoader } from "three";
import texture from "/CodingImage.png";
import styled from "styled-components";
import CanvasLoader from "./Loader";
const Mesh = (props) => {
  const colormap = useLoader(TextureLoader, texture);
  const meshRef = useRef();
  return (
    <mesh rotation={[90, 0, 20]} scale={1}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={colormap} />
    </mesh>
  );
};
const Computer = () => {
  const Wrapper = styled.div`
    .canvas {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
      grid-gap: 1rem;
      place-items: start;
      position: relative;
      right: 3rem;
      bottom: 3rem;
    }
  `;
  const computer = useGLTF("/desktop_pc/scene.gltf");
  return (
    <Wrapper>
      <Canvas
        className="canvas"
        style={{ height: "400px", width: "min-content" }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Suspense fallback={<CanvasLoader />}>
          <Mesh />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default Computer;
