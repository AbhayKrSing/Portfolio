import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "./Loader";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styled from "styled-components";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={1.5} position-y={0} rotation-y={0} />
  );
};
const EarthCanvas = () => {
  const Wrapper = styled.div`
    canvas {
      width: 30rem;
      height: 40rem;
      grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    }
  `;
  return (
    <>
      <Wrapper>
        <Canvas
          className="canvas"
          shadows
          frameloop="demand"
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
          </Suspense>
        </Canvas>
      </Wrapper>
    </>
  );
};

export default EarthCanvas;
