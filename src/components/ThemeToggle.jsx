import React from "react";
import { useGlobalContext } from "../context/Context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { toggleTheme, dark } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {dark ? (
          <BsFillSunFill
            className="toggle-icon"
            style={{ background: "white" }}
          />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
