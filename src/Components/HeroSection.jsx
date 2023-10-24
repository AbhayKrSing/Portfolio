import React, { useEffect, useState } from "react";
import { blackgradient } from "../Style";
import Computer from "./Computer";
import { motion } from "framer-motion";
import About from "./About";
import { ProvideValue } from "../Context/StateContext";
import WorkExperience from "./WorkExperience";
import SphereModel from "./SphereModel";
import Project from "./Project";
import { aboutme } from "../Constants";
import Feedback from "./Feedback";
import Contact from "./Contact";
import Earth from "./Earth";
const HeroSection = ({ togglemode }) => {
  const [isMobile, setisMobile] = useState(false);
  const { scrollToParticular_section } = ProvideValue();
  useEffect(() => {
    // Create a match function
    function handleMediaQueryChange(event) {
      if (event.matches) {
        setisMobile(true); //matched
      } else {
        setisMobile(false); //unmatched
      }
    }

    // // Create a MediaQueryList object
    const MediaQuery = window.matchMedia("(max-width: 500px)");
    // Add the match function as a listener for state changes:
    MediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      MediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      <div
        className={`w-full min-h-[92vh] ${
          togglemode ? "absolute -z-10" : "relative"
        } top-16 ${blackgradient} overflow-y-scroll`}
      >
        <div className="absolute text-white md:inset-16 inset-8 flex">
          <ul className="flex-col">
            <li className="w-6 h-6 violet-gradient rounded-full"></li>
            <li className="w-1 h-[40vh] violet-gradient mx-auto"></li>
          </ul>
          <ul>
            <li className="text-7xl font-extrabold">
              Hi,I m <span className="text-[#804dee]">Abhay</span>
            </li>
            <br />
            <li className="text-3xl font-medium tracking-widest">
              I develop 3d visuals,user interfaces and web applications
            </li>
            <li className="tracking-widest">{aboutme}</li>
            <div>
              <Computer isMobile={isMobile}></Computer>
            </div>
            <div className="flex justify-center relative bottom-10">
              {" "}
              {/*scrolling to about*/}
              <a href="#about">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center">
                  <motion.div
                    animate={{
                      y: [0, 35, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    onClick={() => {
                      scrollToParticular_section("about", "start");
                    }}
                    className="w-3 h-3 rounded full bg-secondary mb-1"
                  />
                </div>
              </a>
            </div>
            <About isMobile={isMobile} />
            <WorkExperience />
            <SphereModel />
            <Project isMobile={isMobile} />
            <Feedback isMobile={isMobile} />
            <div className="flex items-center flex-wrap-reverse xl:justify-between justify-center">
              <Contact />
              <Earth />
            </div>
            <div>more</div>
            <div className="h-[40px]"></div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
