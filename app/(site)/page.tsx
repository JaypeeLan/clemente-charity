"use client";
import Buttons from "../components/buttons/Buttons";
import About from "./components/about/About";
import Volunteer from "./components/volunteer/Volunteer";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();
  return (
    <>
      <section id="home" className="homepage">
        <h1 className={`homepage-title ${isDarkMode ? "dark" : "light"}`}>
          Inclusive care for girls <br /> with special needs in <br /> all of Zimbabwe
        </h1>
        <Buttons className="secondary">What we do</Buttons>
        <h1></h1>
      </section>
      <About />
      <Volunteer />
    </>
  );
}
