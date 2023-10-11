import React, { Suspense } from "react";
import { blackgradient } from "../Style";
import Computer from "./Computer";
const HeroSection = ({ togglemode }) => {
  return (
    <>
      <div
        className={`w-full min-h-[100vh] ${
          togglemode ? "absolute -z-10" : "relative"
        } top-16 ${blackgradient} overflow-hidden`}
      >
        <div className="absolute text-white md:inset-20 inset-16 flex">
          <ul className="flex-col">
            <li className="w-6 h-6 violet-gradient rounded-full"></li>
            <li className="w-1 h-[40vh] violet-gradient mx-auto"></li>
          </ul>
          <ul>
            <li className="text-7xl font-extrabold">
              Hi,I m <span className="text-[#804dee]">Abhay</span>
            </li>
            <br />
            <li className="text-3xl font-medium">
              I develop 3d visuals,user interfaces and web applications
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              qui itaque ex eum ut pariatur libero dolor sed, temporibus, dolore
              at delectus numquam modi nemo deserunt cupiditate dicta. Expedita,
              illo? Praesentium accusantium aspernatur deserunt, ipsam error
              obcaecati iste
            </li>
            <div>
              <Suspense fallback={"loading"}>
                <Computer></Computer>
              </Suspense>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
