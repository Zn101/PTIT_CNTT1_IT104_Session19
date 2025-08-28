import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import Header from "./Header";
import Content from "./Content";
import "./ThemeApp.css";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}
