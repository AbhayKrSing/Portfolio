import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styled from "styled-components";

const Computers = () => {
  const meshRef = useRef();
  const Wrapper = styled.div`
    canvas {
      width: 80%;
    }
  `;
  const Mesh = () => {
    // useFrame(()=>{
    //  meshRef.current.position()
    // })
    React.useEffect(() => {
      meshRef.current.position.set(-5, -2, 3);
    }, []);
    const Computer = useGLTF("/desktop_pc/scene.gltf");
    return (
      <mesh scale={1} ref={meshRef}>
        <primitive object={Computer.scene} />
      </mesh>
    );
  };
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
        <Mesh></Mesh>
      </Canvas>
    </Wrapper>
  );
};

export default Computers;
