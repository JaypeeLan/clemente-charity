import React from "react";
import Image from "next/image";
import Buttons from "../../components/buttons/Buttons";
import Link from "next/link";

const Donate = () => {
  return (
    <div>
      <div className="grid2 bg-gray">

        <div className="grid-items">
          <h3>DONATE</h3>
          <h4 className="pt-5">Make a donation for our children.</h4>
          <p className="pt-5">
            We Collaborate with other organizations, both locally and
            internationally, to share best practices and resources in supporting
            abandoned children and their welfare.
          </p>

          <Link href={"/contact"}>
            <Buttons className="secondary">Send Message</Buttons>
          </Link>
        </div>

        <div className="grid-items text-center">
          <Image
            id="team"
            src="/assets/handout.jpg"
            width={450}
            height={300}
            alt="team photo"
          />
        </div>
      </div>

      <div className="grid2 p-7">
        <div className="grid-items">
          <h4 className="pb-5">
            How you can contribute to <br />
            caring for our kids
          </h4>

          <p>
            Monetary Donations: Individuals can make monetary donations, either
            one-time or on a regular basis, to support the organizations
            programs and services for abandoned children. Donors can contribute
            in-kind donations such as clothing, toys, school supplies, and other
            essential items for the children.
          </p>
        </div>
        <div className="grid-items">
          <p className="pb-2">
            Volunteer Opportunities: People can contribute their time and skills
            by volunteering at our residential homes or supporting our events
            and campaigns. Many companies offer matching gift programs where
            they match their employees’ donations. Donors can check if their
            employer has such a program and maximize their impact.
          </p>
          <p>
            Corporate Partnerships: Businesses can contribute through corporate
            sponsorships, cause-related marketing campaigns, or by implementing
            employee giving programs to support our organizations work.
            Individuals can organize their own fundraising events or participate
            in our organized events to raise funds and spread awareness about
            the cause
          </p>
        </div>
      </div>

      <div className="grid3 p-5">
        <div className="grid-item">
          <h1 className="">Accounts to donate to</h1>
        </div>
        <div className="grid-item">
          <h2>5401982809 (NGN) Providus bank</h2>
          <br />
          <br />
          <br />
          <br />
          <h2>5401982809 (GBP) Providus bank</h2>
        </div>
      </div>
    </div>
  );
};

export default Donate;
