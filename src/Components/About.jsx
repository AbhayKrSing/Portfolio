import React, { useEffect, useRef } from "react";
import { aboutme } from "../Constants";
import { motion, useInView } from "framer-motion";
import { textvariants } from "../variants";
const About = () => {
  const ref = useRef();
  const InView = useInView(ref);

  return (
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
  );
};

export default About;
