import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { textvariants } from "../variants";
import Cards from "./Cards";
import { Testimonials } from "../Constants";

const Feedback = ({ isMobile }) => {
  const Introref = useRef();
  const IntroView = useInView(Introref);

  return (
    <>
      <motion.div
        ref={Introref}
        variants={textvariants}
        animate={IntroView ? "visible" : "hidden"}
        className="flex justify-center py-20 mt-20 rounded-lg"
        style={{
          background:
            "linear-gradient(to top, #00223a 0%, #00223a 40%, #003153 50%, #003153 100%)",
        }}
      >
        <div className="w-[90%]">
          <h2 className="text-xl font-semibold">
            <span className="text-secondary font-light tracking-widest">
              what other says
            </span>
          </h2>
          <h1 className="text-6xl font-black my-6">
            <span className="text-secondary">Testimonials.</span>
          </h1>
          <div className="flex space-x-10 flex-wrap">
            <div></div>
            {Testimonials.map((element, index) => {
              return (
                <Cards key={index} element={element} isMobile={isMobile} />
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Feedback;
