import React from "react";
import { navLinks } from "../Constants";
import { Link } from "react-router-dom";
import { ProvideValue } from "../Context/StateContext";
const HamburgerList = () => {
  const { scrollToParticular_section } = ProvideValue();
  return (
    <ul className="text-secondary bg-primary rounded-lg font-extrabold">
      {navLinks.map((element) => {
        return (
          <li key={element.id} className="p-5 text-center border-b-2">
            <Link
              to={element.id}
              onClick={() => {
                scrollToParticular_section(element.id, "start");
              }}
            >
              {element.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HamburgerList;
