import Buttons from "@/components/buttons/Buttons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Services from "../services/Services";
const About = () => {
  return (
    <>
      <motion.section className="about">
        <div className="grid2">
          <motion.div
            className="grid-items pt-5"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 20 }}
          >
            <h4>Know About Us</h4>
            <h3 className="pt-3">
              Clemente Charity Foundation empowers and inspires hope in
              underserved communities through education, support, and community
              engagement.
            </h3>

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
          </motion.div>

          <motion.div
            className="grid-items text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            <Image
              id="team"
              src="/assets/upclose.jpg"
              width={400}
              height={400}
              alt="team photo"
            />
          </motion.div>
        </div>
      </motion.section>
      <Services />
    </>
  );
};

export default About;
