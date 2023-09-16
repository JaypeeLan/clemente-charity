import React from "react";
import Chart from "./chart/Chart";
import Link from "next/link";
import Buttons from "@/components/buttons/Buttons";

const Volunteer = () => {
  return (
    <div className="volunteer">
      <div className="grid-2 mt-5 mb-5">
        <div className="grid-item1">
          <div className="cntr">
            <h2 className="chartside">
              How we spend your <br /> donations and where it goes
            </h2>

            <p className="p-5">
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </p>
          </div>
        </div>

        <div className="grid-item2">
          <Chart />
        </div>
      </div>

      <div>
        <div className="contribute mt-5">
          <h2 className="chartside">
            You can contribute to provide a place for children with special
            needs!
          </h2>
          <div className="contribute-btns pt-3">
            <Link href="/donate">
              <Buttons className="secondary">Donate</Buttons>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
