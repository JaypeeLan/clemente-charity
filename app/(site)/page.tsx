"use client";
import Buttons from "../components/buttons/Buttons";
import About from "./components/about/About";
import Link from "next/link";
import Volunteer from "./components/volunteer/Volunteer";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();
  return (
    <>
      <section id="home" className="homepage">
        <h1 className={`homepage-title ${isDarkMode ? "dark" : "light"}`}>
          Inclusive care for girls with  <br />special needs in all of Zimbabwe
        </h1>
        <div className="bn">
        <Link href="/media"><Buttons className="secondary mv">What we do</Buttons></Link>
        </div>
      </section>
      <About />
      <Volunteer />
    </>
  );
}
