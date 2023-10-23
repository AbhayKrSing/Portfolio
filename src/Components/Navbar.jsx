import React, { Children } from "react";
import { logo } from "../assets";
import { navLinks } from "../Constants";
import Hamburger from "hamburger-react";
import HamburgerList from "./HamburgerList";
import { Link } from "react-router-dom";
import { ProvideValue } from "../Context/StateContext";

const Navbar = ({ children, togglemode, settogglemode }) => {
  const { scrollToParticular_section } = ProvideValue();
  return (
    <>
      <div className="flex items-center justify-between w-full bg-primary fixed z-10">
        <ul className="flex items-center p-5 ml-4 text-secondary">
          <li>
            {" "}
            <img src={logo} alt="" srcSet="" width={50} />
          </li>
          <li className="font-bold">Abhay | Web Dev</li>
        </ul>
        <ul className="md:flex space-x-7 p-5  text-secondary hidden font-extrabold">
          {navLinks.map((element) => {
            return (
              <li key={element.id}>
                <Link
                  onClick={() => {
                    scrollToParticular_section(element.id, "start");
                  }}
                >
                  {element.title}
                </Link>
              </li>
            );
          })}
          <li></li>
          <li></li>
        </ul>
        <ul className="text-secondary  md:hidden mr-3">
          <Hamburger
            onToggle={() => {
              if (!togglemode) {
                settogglemode(true);
              } else {
                settogglemode(false);
              }
            }}
          />
        </ul>
      </div>
      <div className={!togglemode ? "hidden" : "relative top-16"}>
        <HamburgerList />
      </div>
      {Children.map(children, (child) => {
        return React.cloneElement(child, { togglemode: togglemode }); //sending props to children
      })}
    </>
  );
};

export default Navbar;
