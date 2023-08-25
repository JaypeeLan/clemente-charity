import { IoSunny, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "./ThemeContext";

const ThemeToggleBtn = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="toggle dark mode"
      className="toggle-btn"
    >
      {isDarkMode ? <IoMoonOutline /> : <IoSunny />}
    </button>
  );
};

export default ThemeToggleBtn;
