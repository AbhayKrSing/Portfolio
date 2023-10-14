import React from "react";

const Hoc = (Component, id) => {
  return function hoc() {
    return (
      <>
        <div id={id}>
          <Component />
        </div>
      </>
    );
  };
};

export default Hoc;
