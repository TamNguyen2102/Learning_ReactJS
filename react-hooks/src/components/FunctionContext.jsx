import React from "react";
import { useTheme, useUpdatedTheme } from "./ThemeContext";

function FunctionContext() {
  const darkTheme = useTheme();
  const toggleTheme = useUpdatedTheme();
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
    borderRadius: "5px",
    transition: "all 300ms ease",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>Dark Theme</div>
    </>
  );
}

export default FunctionContext;
