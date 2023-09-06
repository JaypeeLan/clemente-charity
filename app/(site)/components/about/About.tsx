import children from "../../../../public/assets/home-hero-bg.jpg";
import Image from "next/image";
import Services from "../services/Services";
import Buttons from "@/app/components/buttons/Buttons";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-left">
          <h2>Know About Us</h2>
          <h3>We provide empowerment, support and care to the girl child</h3>
          <p>
            It is a foundation to support and care for the girl child also
            Advocating for laws that are fair they should be made to enforce
            respect and protection for girls. We work to prevent social ills
            against girls - eg prostitution, child abuse, rape, early marriage,
            drug addiction, and all forms of discrimination.
          </p>
          <Buttons className="secondary">Learn more</Buttons>
        </div>

        <Image src={children} alt="little children" width={350} height={350} />
      </section>
      <Services />
    </>
  );
};

export default About;
