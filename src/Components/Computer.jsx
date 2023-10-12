import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
// import { TextureLoader } from "three";
// import texture from "/CodingImage.png";
import styled from "styled-components";
import CanvasLoader from "./Loader";
const Mesh = ({ isMobile }) => {
  // const colormap = useLoader(TextureLoader, texture);
  // const meshRef = useRef();
  const computer = useGLTF("/desktop_pc/scene.gltf");
  return (
    <mesh>
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
        scale={isMobile ? 1.1 : 1.3}
        position={[0, -4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
const Computer = ({ isMobile }) => {
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
        style={{ height: isMobile ? "40vh" : "60vh", width: "100%" }} //for mobile width=100%
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
          <Mesh isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </Wrapper>
  );
};

export default Computer;
