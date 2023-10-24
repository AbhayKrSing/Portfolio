import React from "react";
import { Tilt } from "react-tilt";
import { GithubLogo } from "../assets";

const Tilts = ({ isMobile, element, identifier }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.,
  };

  return (
    <Tilt
      options={defaultOptions}
      style={{
        display: "flex",
        height: identifier === "projects" ? "100%" : 250,
        width: isMobile ? "90%" : identifier === "projects" ? 350 : 250,
        border: "1px solid white",
        borderRadius: "3%",
        justifyContent: "center",
        alignItems: identifier === "about" ? "center" : "",
        backgroundColor: "#003153",
        margin: "5px",
      }}
    >
      <div>
        {identifier === "projects" ? (
          <div className="relative">
            <div className="absolute right-1">
              <a href={element.url}>
                <img src={GithubLogo} alt="" srcSet="" width={40} />
              </a>
            </div>
            <img
              src={element.img}
              alt="img"
              srcSet=""
              style={{ borderRadius: "3% 3% 0 0" }}
              className="block"
            />
            <p className="m-3">{element.about}</p>
          </div>
        ) : (
          <img src={element} alt="img" srcSet="" width={200} height={200} />
        )}
      </div>
    </Tilt>
  );
};

export default Tilts;
