import React from "react";
import { IconContext } from "react-icons/lib";
import { FaBeer } from "react-icons/fa";
import { BiBoltCircle } from "react-icons/bi";

function IconComponent() {
  return (
    <div>
      <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
        <FaBeer></FaBeer>
        <BiBoltCircle></BiBoltCircle>
      </IconContext.Provider>
    </div>
  );
}

export default IconComponent;
