"use client";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
      <div className="logo-main">
        <h1 className="logo pb-15">Christamelon Foundation</h1>
      </div>
      {/* ------------------ */}
      <div className="footer-links mb-4">
        <h4 className="footer-links_heading"> Home</h4>
        <Link href="/about"> About Us</Link>
        <Link href="/">Team</Link>
        <Link href="/what-we-do"> What we do</Link>
        <Link href="/contact"> Contact</Link>
      </div>
      {/* ------------------ */}
      <div className="footer-links mb-4">
        <h4 className="footer-links_heading"> More</h4>
        <Link href="/"> Projects</Link>
        <Link href="/">Events</Link>
        <Link href="/">Donate</Link>
        <Link href="/">Blog</Link>
      </div>

      {/* ------------------ */}
      <div className="footer-links mb-2">
        <h4 className="footer-links_heading"> Connect</h4>
        <div className="footer-links">
          <Link href="mailto:jplaniran01@gmail.com"> Email</Link>
          <Link href="tel:+2349121169737">Phone</Link>
          <Link href="/"> Facebook</Link>
          <Link href="/">Linkedin</Link>
        </div>
      </div>

      {/* ------------------ */}
      <div className="footer-links mb-7">
        <h3 className="footer-links_heading">Subscribe to get latest <br /> updates</h3>
        <div className="footer-links">
          <label>
            <input type="text" placeholder="Your Email" />
            <button className="btnx">Subscribe</button>
          </label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
