import React from "react";
import { blackgradient } from "../Style";
const HeroSection = ({ togglemode }) => {
  return (
    <>
      <div
        className={`w-full min-h-[100vh] ${
          togglemode ? "absolute -z-10" : "relative"
        } top-16 ${blackgradient} overflow-y-auto`}
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
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis asperiores aut dolor facere harum! Rerum aperiam magni
              iste, eligendi vitae, ullam, nostrum eaque sunt tenetur quisquam
              est! Et, consequatur voluptate? Quisquam, consequatur quo a libero
              eaque, quis, laudantium minima dolore nihil delectus optio in
              dolores neque perspiciatis ut aut. Voluptatum omnis cum harum
              corporis, est ipsam delectus consequuntur distinctio ab ducimus
              adipisci perferendis deleniti optio dolor nisi assumenda tempore
              culpa, maiores aut atque eos. Beatae reiciendis illo consectetur!
              Maxime perferendis quas repudiandae delectus nam ipsum fugit ut
              eligendi maiores placeat nesciunt alias aspernatur blanditiis
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
