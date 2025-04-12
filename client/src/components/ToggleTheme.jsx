import React from "react";

const ToggleTheme = ({ theme, setTheme }) => {
  return (
    <div className="toggle-theme">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <style jsx>{`
        .toggle-theme {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        button {
          padding: 10px 20px;
          font-size: 1rem;
          background-color: ${theme === "light" ? "#333" : "#fff"};
          color: ${theme === "light" ? "#fff" : "#333"};
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default ToggleTheme;
