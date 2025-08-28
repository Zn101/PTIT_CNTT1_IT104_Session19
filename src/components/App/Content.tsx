import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <p>Day la phan noi dung chinh cua ung dung.</p>
      <p>Theme hien tai: <strong>{theme}</strong></p>
    </main>
  );
}
