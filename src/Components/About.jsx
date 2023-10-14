import React, { useRef } from "react";
import { aboutme } from "../Constants";
import { motion, useInView } from "framer-motion";
import { childvariants, parentvariants, textvariants } from "../variants";
import Tilt from "./Tilts";
import { TechStack } from "../assets";
import Hoc from "../HOC/Hoc";
const About = ({ isMobile }) => {
  const Introref = useRef();
  const IntroView = useInView(Introref);
  const Techstackref = useRef();
  // const Techstackview = useInView(Techstackref, { once: true }); //will return value only ones.
  const Techstackview = useInView(Techstackref);

  return (
    <>
      <motion.div
        ref={Introref}
        variants={textvariants}
        animate={IntroView ? "visible" : "hidden"}
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
      <motion.div
        className="flex flex-wrap m-4"
        variants={parentvariants}
        ref={Techstackref}
        initial="hidden"
        animate={Techstackview ? "visible" : "hidden"}
      >
        {TechStack.map((element, index) => {
          return (
            <motion.div variants={childvariants} key={index}>
              <Tilt element={element} isMobile={isMobile} />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Hoc(About, "about");
