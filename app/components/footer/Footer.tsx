"use client";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
      <div>
        <h1 className="logo">Footer</h1>
      </div>
      {/* ------------------ */}
      <div className="footer-links">
        <h4 className="footer-links_heading"> Home</h4>
        <Link href="/"> About Us</Link>
        <Link href="/"> Team</Link>
        <Link href="/"> What we do</Link>
        <Link href="/"> Contact</Link>
      </div>
      {/* ------------------ */}
      <div className="footer-links">
        <h4 className="footer-links_heading"> More</h4>
        <Link href="/"> Projects</Link>
        <Link href="/"> Events</Link>
        <Link href="/"> Donate</Link>
      </div>
      {/* ------------------ */}
      <div className="footer-links">
        <h4 className="footer-links_heading"> Connect</h4>
        <div className="footer-links_socials">
          <Link href="mailto:jplaniran01@gmail.com"> Email</Link>
          <Link href="tel:+2349121169737">Phone</Link>
          <Link href="/"> Events</Link>
          <Link href="/"> Donate</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
