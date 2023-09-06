import React from "react";
import { Chart } from "./chart/Chart";
import Buttons from "@/app/components/buttons/Buttons";

const Volunteer = () => {
  return (
    <section className="volunteer">
      <div className="accountability">
        <div className="accountability-text">
          <h1>How we spend your donations and where it goes</h1>
          <p>
            We understand that when you make a  donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
        </div>
        <div className="accountability-chart">
          <Chart />
        </div>
      </div>

      <div>
        <div className="contribute">
          <h2>
            You can contribute to provide a place for children with special
            needs!
          </h2>
          <div className="contribute-btns">
            <Buttons className="secondary">Join as a Volunteer</Buttons>
            <Buttons className="primary">Donate</Buttons>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
