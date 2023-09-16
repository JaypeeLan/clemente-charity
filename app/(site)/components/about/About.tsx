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
            <div className="subz">
              <h4>Know About Us</h4>
              <h3 className="pt-3">
                Clemente Charity Foundation empowers and inspires hope in
                underserved communities through education, support, and
                community engagement.
              </h3>
            </div>
            <p className="pt-3">
              In a world filled with challenges and inequalities, there are
              organizations that shine as beacons of hope, dedicated to
              uplifting the lives of the less privileged.
            </p>
            <br />
            <br />
            <p>
              The Clemente Charity Foundation is a beacon of hope and
              transformation, dedicated to empowering the less privileged
              through comprehensive support, education, and community
              engagement, making a positive impact in Nigeria, and beyond.
            </p>
            <Link href="/about">
              <Buttons className="secondary">Learn more</Buttons>
            </Link>
          </div>
          <div className="grid-items text-center">
            <Image
              id="team"
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
