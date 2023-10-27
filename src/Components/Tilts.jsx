import React from "react";
import { Tilt } from "react-tilt";
import { GithubLogo, DeployLogo } from "../assets";

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
        width: isMobile ? "90%" : identifier === "projects" ? 340 : 270, //phele 350 tha.
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
            {/* For github */}
            <div className="absolute right-1">
              <a href={element.url} target="_blank">
                <img
                  src={GithubLogo}
                  alt="imgloading..."
                  srcSet=""
                  width={40}
                />
              </a>
            </div>
            {/* For Link */}
            <div className="absolute right-12">
              {element.deploy && (
                <a href={element.deploy} target="_blank">
                  <img
                    src={DeployLogo}
                    alt="imgloading..."
                    srcSet=""
                    width={50}
                  />
                </a>
              )}
            </div>
            <img
              src={element.img}
              alt="img"
              srcSet=""
              style={{ borderRadius: "3% 3% 0 0" }}
              className="block"
            />
            <p className="text-center font-bold">{element.name}</p>
            <p className="m-3">{element.about}</p>
          </div>
        ) : (
          <>
            <img src={element.logo} alt="img" srcSet="" width={150} />
            <p className="font-bold text-center">{element.name}</p>
          </>
        )}
      </div>
    </Tilt>
  );
};

export default Tilts;
