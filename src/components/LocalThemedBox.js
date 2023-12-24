import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
      className={`bg-${theme}`}
    >
      <p id="local-themed-text-container" className={`txt-${theme}`}>
        Hi......
      </p>
      <button
        id="local-theme-toggler"
        className={`btn btn-${theme} txt-${theme}`}
        onClick={toggleTheme}
      >
        {theme === "light"
          ? "Toggle local theme to dark"
          : "Toggle local theme to light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };
