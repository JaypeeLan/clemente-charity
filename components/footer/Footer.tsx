"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
      <div className="logo-main">
        <Link href="/">
          <h1 className="logo ">Christamelon Foundation</h1>
          <Image
            src="/assets/logo.png"
            width={300}
            height={150}
            alt="team photo"
          />
        </Link>
      </div>

      {/* ------------------ */}
      <div className="footer-links mb-4">
        <h4 className="footer-links_heading">
          {" "}
          <Link href="/"> Home</Link>
        </h4>
        <Link href="/about"> About Us</Link>
        <Link href="/media">Media</Link>
        <Link href="/contact"> Contact</Link>
        <Link href="/donate"> Donate</Link>
      </div>
      {/* ------------------ */}

      <div className="footer-links mb-4">
        <h4 className="footer-links_heading"> More</h4>
        <Link href="/"> Projects</Link>
        <Link href="/">Events</Link>
        <Link href="/donate">Donate</Link>
        <Link href="/">Blog</Link>
      </div>

      {/* ------------------ */}
      <div className="footer-links mb-2">
        <h4 className="footer-links_heading"> Connect</h4>
        <div className="footer-links">
          <Link href="clementecharityfoundation23@gmail.com">Email</Link>
          <Link href="tel:+447825611810,">Global line</Link>
          <Link href="+234 9095347896">Local line</Link>
          <Link href="https://instagram.com/clemente_charity_foundation?igshid=MzRlODBiNWFlZA==">
            Instagram
          </Link>
        </div>
      </div>

      {/* ------------------ */}
      {/* <div className="footer-links mb-7">
        <h3 className="footer-links_heading">
          Subscribe to get latest <br /> updates
        </h3>
        <div className="footer-links">
          <div>
            <input type="text" placeholder="Your Email" />
            <button className="btnx">Subscribe</button>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
