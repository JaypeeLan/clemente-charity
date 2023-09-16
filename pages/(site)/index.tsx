import Buttons from "../../components/buttons/Buttons";
import About from "./components/about/About";
import Link from "next/link";
import Volunteer from "./components/volunteer/Volunteer";
import { useTheme } from "@/context/ThemeContext";

export default function LandingPage() {
  const { isDarkMode } = useTheme();
  return (
    <>
      <section id="home" className="homepage">
        <h1 className={`homepage-title ${isDarkMode ? "dark" : "light"}`}>
          Clemente Charity Foundation <br /> Empowering Lives, Inspiring Hope,
          and Building a Better World
        </h1>
        <div className="bn">
          <Link href="/media">
            <Buttons className="secondary mv">What we do</Buttons>
          </Link>
          <div className="grid-3">
        <div className="grid-itms"><p>230 children under our care</p></div>
        <div className="grid-itms mb"><hr /></div>
        <div className="grid-itms"><p>58 Donations collected</p></div>
      </div>
        </div>
      </section>
      <About />
      <Volunteer />
    </>
  );
}
