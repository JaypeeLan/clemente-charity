import React from "react";
import LandingPage from "./(site)";
import Layout from "@/components/layout/Layout";
import About from "./about";
import Media from "./media";
import Contact from "./contact";
import Donate from "./donate";

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <Media />
      <Contact />
      <Donate />
    </>
  );
}
