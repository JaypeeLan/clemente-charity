"use client";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const Buttons = ({
  children,
  className,
  type,
}: {
  children: string;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  const { isDarkMode } = useTheme();
  return (
    <button
      type={type}
      className={`btn ${isDarkMode ? "dark" : "light"} ${
        className === "primary" ? "primary" : "secondary"
      }`}
    >
      {children}
    </button>
  );
};

export default Buttons;
