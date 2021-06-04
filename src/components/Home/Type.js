import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ing. Sistemas Computacionales",
          "Desarrollador Full Stack",
          "Aficionado a la tecnología",
          "Amante de los sapitos 🐸",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 50,

      }}
    />
  );
}

export default Type;
