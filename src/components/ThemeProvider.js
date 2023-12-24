import React, { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeClass = theme === "light" ? "light" : "dark";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`container bg-${themeClass}`}>{props.children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
