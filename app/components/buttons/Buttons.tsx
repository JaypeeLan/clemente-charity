"use client";
import { useTheme } from "@/context/ThemeContext";
// import React from "react";

interface ButtonProps {
  children: string;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  loading?: boolean;
}

const Buttons = ({
  children,
  className,
  type,
  disabled = false,
  loading = false,
}: ButtonProps) => {
  const { isDarkMode } = useTheme();

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`btn ${isDarkMode ? "dark" : "light"} ${
        className === "primary" ? "primary" : "secondary"
      }`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Buttons;
