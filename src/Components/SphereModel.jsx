// import { RepeatWrapping } from "three";
import React, { Suspense, useRef } from "react";
import { Float, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { TechStack } from "../assets";
import { textvariants } from "../variants/index";
import { motion, useInView } from "framer-motion";

function AnimatedSphere({ image }) {
  const colormap = useLoader(TextureLoader, image);
  // colormap.wrapS = colormap.wrapT = RepeatWrapping;
  // colormap.repeat.set(1, 1); // Adjust these values to change the texture size

  return (
    <Float>
      <mesh rotation={[90, 0, 20]} scale={1.2}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial map={colormap} />
      </mesh>
    </Float>
  );
}

function SphereModel({ image }) {
  return (
    <Canvas className="canvas" style={{ height: "25vh", width: "160px" }}>
      <OrbitControls enableZoom={false} />
      <Suspense fallback={"loading"}>
        <ambientLight intensity={3} />
        <directionalLight position={[0, 0, 5]} intensity={3} />
        <AnimatedSphere image={image} />
      </Suspense>
    </Canvas>
  );
}

export default function SphereShape() {
  const Introref = useRef();
  const IntroView = useInView(Introref);
  return (
    <>
      <motion.div
        ref={Introref}
        variants={textvariants}
        animate={IntroView ? "visible" : "hidden"}
      >
        <h2 className="text-xl font-semibold">
          <span className="text-secondary font-light tracking-widest">
            TechStacks
          </span>
        </h2>
        <h1 className="text-6xl font-black my-6">
          <span className="text-secondary">My TechStacks.</span>
        </h1>
      </motion.div>
      <div className="flex space-x-10 flex-wrap">
        <div></div>
        {TechStack.map((element, index) => {
          return <SphereModel image={element} key={index} />;
        })}
      </div>
    </>
  );
}
