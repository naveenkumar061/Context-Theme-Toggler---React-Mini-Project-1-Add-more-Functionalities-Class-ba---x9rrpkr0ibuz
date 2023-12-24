import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(theme);

  const toggleLocalTheme = () => {
    setLocalTheme((prevLocalTheme) =>
      prevLocalTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
      className={`bg-${localTheme}`}
    >
      <p id="local-themed-text-container" className={`txt-${localTheme}`}>
        Hi......
      </p>
      <button
        id="local-theme-toggler"
        className={`btn btn-${localTheme} txt-${localTheme}`}
        onClick={toggleLocalTheme}
      >
        {localTheme === "light"
          ? "Toggle local theme to dark"
          : "Toggle local theme to light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };
