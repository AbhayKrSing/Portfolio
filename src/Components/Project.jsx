import React, { useRef } from "react";
import { Projectdetails } from "../Constants";
import { motion, useInView } from "framer-motion";
import { parentvariants, textvariants } from "../variants";
import Tilt from "./Tilts";
import { ProjectsPhoto } from "../assets";
import { project_childvariants } from "../variants/variants";
import Hoc from "../HOC/Hoc";
const Project = ({ isMobile }) => {
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
      <motion.div
        className="flex flex-wrap"
        variants={parentvariants}
        ref={Techstackref}
        initial="hidden"
        animate={Techstackview ? "visible" : "hidden"}
      >
        {ProjectsPhoto.map((element, index) => {
          return (
            <motion.div
              variants={project_childvariants}
              key={index}
              className="mt-5"
            >
              <Tilt
                element={element}
                isMobile={isMobile}
                identifier={"projects"}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Hoc(Project, "work");
