import { Html, useProgress } from "@react-three/drei";
import React from "react";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return <Html className="text-white">{progress} %</Html>;
};

export default CanvasLoader;
