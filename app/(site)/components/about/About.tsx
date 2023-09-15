import Image from "next/image";
import Link from "next/link";
import Services from "../services/Services";
import Buttons from "@/app/components/buttons/Buttons";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="grid2">
        <div className="grid-items left">
          <div className="subz"><h4>Know About Us</h4>
          <h3 className="pt-3">We provide empowerment, <br /> support and care to the girl child</h3>
          </div>
          <p className="pt-3">
            It is a foundation to support and care for the girl child also one that advocates for laws that are fair and should be made to enforce the
            respect and protection for girls.
            <br /> <br />
            We work to prevent social ills
            against girls - eg prostitution, child abuse, rape, early marriage,
            drug addiction, and all forms of discrimination.
          </p>
          <Link href="/about"><Buttons className="secondary">Learn more
              </Buttons></Link>
        </div>
        <div className="grid-items text-center">
          <Image id="team"
            src="/assets/upclose.jpg"
            width={400}
            height={400}
            alt="team photo"
          />
        </div>
        </div>
        
      </section>
      <Services />
    </>
  );
};

export default About;
