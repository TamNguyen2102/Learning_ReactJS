import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdatedContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useUpdatedTheme() {
  return useContext(ThemeUpdatedContext);
}

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdatedContext.Provider value={toggleTheme}>
          {children}
        </ThemeUpdatedContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeProvider;
