import React from "react";

const ToggleTheme = ({ theme, setTheme }) => {
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> 
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ToggleTheme;
