import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          ".Net Developer",
          "MERN Stack Developer",
          "Windows Application Developer",
          "Web API Development",
          "Freelancer-(UpWork)"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
