import React, { useRef } from "react";
import { textvariants } from "../variants";
import { motion, useInView } from "framer-motion";
import { Projectdetails } from "../Constants";

const Project = () => {
  const Introref = useRef();
  const IntroView = useInView(Introref);
  return (
    <motion.div
      ref={Introref}
      variants={textvariants}
      animate={IntroView ? "visible" : "hidden"}
      className="mt-10"
    >
      <h2 className="text-xl font-semibold">
        <span className="text-secondary font-light tracking-widest">
          My Work
        </span>
      </h2>
      <h1 className="text-6xl font-black my-6">
        <span className="text-secondary">Projects.</span>
      </h1>
      <p className="font-light tracking-widest">{Projectdetails}</p>
    </motion.div>
  );
};

export default Project;
