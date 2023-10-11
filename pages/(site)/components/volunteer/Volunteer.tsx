import Buttons from "@/components/buttons/Buttons";
import { motion } from "framer-motion";
import Link from "next/link";
import Chart from "./chart/Chart";

const Volunteer = () => {
  return (
    <motion.div className="volunteer">
      <div className="grid-2 mt-5 mb-5">
        <div className="grid-item1">
          <motion.div
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 20 }}
          >
            <h2 className="chartside">
              How we spend your <br /> donations and where it goes
            </h2>

            <p className="p-5">
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid-item2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 30 }}
        >
          <Chart />
        </motion.div>
      </div>

      <div>
        <motion.div
          className="contribute mt-5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <h2 className="chartside">
            You can contribute by providing support for children with special
            needs!
          </h2>
          <div className="contribute-btns pt-3">
            <Link href="/donate">
              <Buttons className="secondary">Donate</Buttons>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Volunteer;
