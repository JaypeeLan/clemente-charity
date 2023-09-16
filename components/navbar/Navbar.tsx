"use client";

import Link from "next/link";
import Image from "next/image"
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggleBtn from "@/context/ThemeToggleBtn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleCloseNavbar = () => {
    setIsOpen(false);
  };

  // Add an event listener to track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Media", href: "/media" },
    { text: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="logo">
            <Link href="/">
            <Image id="logoo"
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="team photo"
          />
            </Link>
          </div>
          <ul className={`menu ${isOpen ? "open" : ""}`}>
            {menuItems.map((item, index) => (
              <li key={index} onClick={handleCloseNavbar}>
                <Link href={item.href}>
                  <>{item.text}</>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-donate-container">
            <div className="donate">
              <Link href="/donate">
                <>Donate</>
              </Link>
            </div>
            <button
              className="mobile-menu-icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            {/* <ThemeToggleBtn /> */}
          </div>
        </div>
      </nav>
    </>
  );
}
