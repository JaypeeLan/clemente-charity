import { useTheme } from "@/context/ThemeContext";
import React from "react";

const Buttons = () => {
  const { isDarkMode } = useTheme();
  return <div className={`btn ${isDarkMode ? "dark" : "light"}`}>Buttons</div>;
};

export default Buttons;
