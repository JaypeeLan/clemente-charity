"use client";
import Buttons from "../components/buttons/Buttons";
import Link from "next/link";
import ThemeToggleBtn from "@/context/ThemeToggleBtn";

export default function Home() {
  return (
    <main>
      <ThemeToggleBtn />
      <Buttons />
      <Link href="/home">Home</Link>
    </main>
  );
}
