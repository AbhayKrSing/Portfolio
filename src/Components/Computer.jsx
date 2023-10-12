import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { useRef, Suspense } from "react";
import { TextureLoader } from "three";
import texture from "/CodingImage.png";
import styled from "styled-components";
import CanvasLoader from "./Loader";
const Mesh = (props) => {
  const colormap = useLoader(TextureLoader, texture);
  const meshRef = useRef();
  const computer = useGLTF("/desktop_pc/scene.gltf");
  return (
    <mesh scale={1}>
      {/* <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={colormap} /> */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={1}
        position={[0, -2.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
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
      bottom: 3rem;
    }
  `;

  return (
    <Wrapper>
      <Canvas
        className="canvas"
        style={{ height: "60vh", width: "100%" }}
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Suspense fallback={<CanvasLoader />}>
          <Mesh />
        </Suspense>
        <Preload all />
      </Canvas>
    </Wrapper>
  );
};

export default Computer;
