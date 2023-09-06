"use client";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const Buttons = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  const { isDarkMode } = useTheme();
  return (
    <button
      className={`btn ${isDarkMode ? "dark" : "light"} ${
        className === "primary" ? "primary" : "secondary"
      }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
