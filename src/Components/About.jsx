import React, { useEffect, useRef } from "react";
import { aboutme } from "../Constants";
import { motion, useInView } from "framer-motion";
import { textvariants } from "../variants";
import Tilt from "./Tilts";
const About = ({ isMobile }) => {
  const ref = useRef();
  const InView = useInView(ref);
  const samplearray = [1, 2, 3, 4, 5, 6]; //will remove after making original icons array
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
      <div className="flex flex-wrap">
        {samplearray.map((element, index) => {
          return <Tilt element={element} key={index} isMobile={isMobile} />;
        })}
      </div>
    </>
  );
};

export default About;
