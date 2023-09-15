import React from "react";
import Image from "next/image";
import Buttons from "../components/buttons/Buttons";

const page = () => {
  return <div>
    <div className="grid2 p-7 sect">
        <div className="grid-items">
          <h6>Donate</h6>
          <h3 className="pt-5">
            Make a donation for <br /> our children.
          </h3>
          <p className="pt-5">
          We Collaborate with other organizations, both locally and internationally, to share best practices and resources in supporting abandoned children and their welfare.

          </p>

          <Buttons className="secondary" type="submit">
            Send Message
          </Buttons>
        </div>
        <div className="grid-items text-center">
          <Image id="team"
            src="/assets/handout.jpg"
            width={450}
            height={300}
            alt="team photo"
          />
        </div>
      </div>

      <div className="grid2 p-7">
        <div className="grid-items">
          <h4 className="pb-5">How you can contribute to <br />caring for our kids</h4>

          <p>
          Monetary Donations: Individuals can make monetary donations, either one-time or on a regular basis, to support the organizations programs and services for abandoned children. Donors can contribute in-kind donations such as clothing, toys, school supplies, and other essential items for the children.
          </p>
        </div>
        <div className="grid-items">
          <p className="pb-2">
            Volunteer Opportunities: People can contribute their time and skills by volunteering at our residential homes or supporting our events and campaigns. Many companies offer matching gift programs where they match their employees’ donations. Donors can check if their employer has such a program and maximize their impact.
          </p>
          <p>
          Corporate Partnerships: Businesses can contribute through corporate sponsorships, cause-related marketing campaigns, or by implementing employee giving programs to support our organizations work. Individuals can organize their own fundraising events or participate in our organized events to raise funds and spread awareness about the cause
          </p>
        </div>
      </div>

      <div className="grid3 p-5">
        <div className="grid-item">
          <h3 className="">
            How we use your <br /> donation
          </h3>
          <br /> <br />
          <p>Residential Homes: Donations are used to establish and operate safe and nurturing residential homes for abandoned children, providing them with shelter, food, and basic amenities.
</p>
        </div>
        <div className="grid-item">
          <p>Comprehensive Care Services: Funds are allocated towards providing comprehensive care services, including education, healthcare, counseling, and recreational activities, to meet the unique needs of abandoned children.
          <br /> <br />
          Awareness Campaigns: A portion of the donations is allocated towards conducting awareness campaigns and educational programs to inform the public about the consequences of child abandonment and advocate for policy changes.
</p>
        </div>
        <div className="grid-item">
          <p>Medical Support: Donations are utilized to collaborate with local hospitals, clinics, and healthcare providers to ensure that abandoned children receive necessary medical attention, vaccinations, and ongoing healthcare support.
            <br /> <br />
            Adoption and Foster Care: Contributions are used to facilitate the adoption or foster care placement of abandoned children into suitable families, ensuring they find loving and stable homes.

</p>
        </div>
      </div>
  </div>;
};

export default page;
