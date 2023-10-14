import React, { createContext, useContext, useRef } from "react";
const State = createContext(null);
const Provider = State.Provider;
const ProvideValue = () => {
  return useContext(State);
};

const StateContext = ({ children }) => {
  const scrollToParticular_section = (id, place) => {
    const anchor = document.getElementById(id);
    anchor.scrollIntoView({
      behavior: "smooth",
      block: place,
    });
  };
  return <Provider value={{ scrollToParticular_section }}>{children}</Provider>;
};
export { ProvideValue, StateContext };
