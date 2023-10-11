/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const services = [{}];
  return (
    <motion.div className="services grid2 pt-7">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 30 }}
      >
        <Image
          id="team"
          src="/assets/group.jpeg"
          alt="little children"
          width={500}
          height={600}
        />
      </motion.div>

      <div className="grid-items pt-5">
        <h4 className="pb-2">WHAT WE DO</h4>
        <h3>Some services we provide</h3>
        <br />
        <p>
          To provide a safe and nurturing environment for less privileged
          children and to facilitate the reintegration of these children into
          loving and stable society.
        </p>
        <br />
        <div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
          >
            <h4>Commitment to the Less Privileged</h4>
            <p className="pb-2">
              At the heart of the Clemente Charity Foundation lies an unwavering
              commitment to the less privileged. With compassion as their
              guiding force, the foundation has strived to bridge the gap,
              providing essential resources and opportunities to those in need.
              From food to education and healthcare, the foundation's
              initiatives cover a wide spectrum of support, ensuring a holistic
              approach to improving lives.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
        >
          <div>
            <h4>Addressing Challenges</h4>
            <p className="pb-2">
              The foundation recognizes the challenges faced by marginalized
              communities and strives to alleviate their burdens. By focusing on
              areas like the Makoko slum, the foundation has tackled issues such
              as inadequate access to decent needs, lack of access to nutritious
              meals, and limited educational opportunities. Through
              collaborative efforts with local communities and volunteers,
              Clemente Charity Foundation has been able to bring positive change
              and uplift spirits.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="pb-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 20 }}
        >
          <div>
            <h4>Education for a Brighter Future</h4>
            <p className="pb-2">
              Education is a cornerstone of the foundation's work. Understanding
              the transformative power of knowledge, the foundation has taken
              significant strides to provide quality educational resources,
              empowering children with the tools to build a brighter future and
              breaking the cycle of poverty.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="pb-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 20 }}
        >
          <div>
            <h4>Community Engagement</h4>
            <p className="pb-2">
              The success of the Clemente Charity Foundation is deeply rooted in
              community engagement. The foundation actively involves local
              communities, and understanding their unique needs has helped in
              achieving so much heights.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
