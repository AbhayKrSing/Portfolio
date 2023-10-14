import React, { useRef } from "react";
import { aboutme } from "../Constants";
import { motion, useInView } from "framer-motion";
import { textvariants } from "../variants";
import Tilt from "./Tilts";
import { TechStack } from "../assets";
import Hoc from "../HOC/Hoc";
const About = ({ isMobile }) => {
  const ref = useRef();
  const InView = useInView(ref);
  return (
    <>
      <motion.div
        ref={ref}
        variants={textvariants}
        animate={InView ? "visible" : "hidden"}
      >
        <h2 className="text-xl font-semibold">
          <span className="text-secondary font-light tracking-widest">
            Introduction
          </span>
        </h2>
        <h1 className="text-6xl font-black my-6">
          <span className="text-secondary">Overview.</span>
        </h1>
        <p className="font-light tracking-widest">{aboutme}</p>
      </motion.div>
      <div className="flex flex-wrap m-4">
        {TechStack.map((element, index) => {
          return <Tilt element={element} key={index} isMobile={isMobile} />;
        })}
      </div>
    </>
  );
};

export default Hoc(About, "about");
