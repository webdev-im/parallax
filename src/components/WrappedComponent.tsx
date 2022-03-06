import React from "react";
import umbrella from "../assets/images/umbrella.png";
import { Parallax } from "react-scroll-parallax";

function WrappedComponent() {
  return (
    <Parallax>
      <img src={umbrella} alt="" />
    </Parallax>
  );
}

export default WrappedComponent;
