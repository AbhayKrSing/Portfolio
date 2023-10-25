import React from "react";

const Hoc = (Component, id) => {
  return function hoc() {
    return (
      <>
        <div id={id} className="w-full xl:w-auto">
          <Component />
        </div>
      </>
    );
  };
};

export default Hoc;
