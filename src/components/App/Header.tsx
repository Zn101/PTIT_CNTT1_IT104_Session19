import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>My Themed App</h1>
      <button onClick={toggleTheme}> Toggle Theme </button>
    </header>
  );
}
