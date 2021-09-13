import React from "react";
import "./myStyles.css";

function Person(props) {
  let className = props.primary ? "primary" : "";
  const font = {
    fontSize: "3rem",
    color: "blue",
  };
  return (
    <div>
      <h1
        style={font}
      >{`My name is: ${props.person.name}. My power is: ${props.person.power}`}</h1>
    </div>
  );
}

export default Person;
