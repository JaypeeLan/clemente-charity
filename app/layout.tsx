// import "./globals.css";

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import "../styles//main.scss";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/footer/Footer";
// import {} from "next-page-transitions";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clemente foundation",
  description:
    "Donate to our NGO charity organization in Lagos, Nigeria and help make a difference.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
