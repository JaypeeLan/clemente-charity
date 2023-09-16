import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="media pt-7 grid2">
        <div className="  grid-items">
          <h4 className="">WHAT WE DO</h4>
          <h3 className="pt-2">
            Our goal is to <br /> provide inclusive <br /> care for children{" "}
            <br /> with special needs
          </h3>
          <p className="pt-5">
            To provide a safe and nurturing environment for abandoned children
            and to facilitate the reintegration of abandoned children into
            loving and stable families.
          </p>
        </div>

        <div className="team-photograph grid-items">
          <Image
            id="team"
            src="/assets/gather.jpg"
            width={500}
            height={300}
            alt="team photo"
          />
        </div>
      </div>

      <article className="special">
        <div className="sub-head pt-7 pb-2">
          <h3>What we do for our kids with special needs</h3>
        </div>
        <div className="grid3 pb-7">
          <div className="grid-items">
            <h4>Comprehensive Care Services</h4>
            <p>
              Funds are allocated towards providing comprehensive care services,
              including education, healthcare, counseling, and recreational
              activities, to meet the unique needs of abandoned children.
            </p>
          </div>
          <div className="grid-items">
            <h4>Medical Support</h4>
            <p>
              Donations are utilized to collaborate with local hospitals,
              clinics, and healthcare providers to ensure that abandoned
              children receive necessary medical attention, vaccinations, and
              ongoing healthcare support.
            </p>
          </div>
          <div className="grid-items">
            <h4>Adoption and Foster Care</h4>
            <p>
              Contributions are used to facilitate the adoption or foster care
              placement of abandoned children into suitable families, ensuring
              they find loving and stable homes.
            </p>
          </div>
          <div className="grid-items">
            <h4>Awareness Campaigns</h4>
            <p>
              A portion of the donations is allocated towards conducting
              awareness campaigns and educational programs to inform the public
              about the consequences of child abandonment and advocate for
              policy changes.
            </p>
          </div>
          <div className="grid-items">
            <h4>Residential Homes</h4>
            <p>
              Donations are used to establish and operate safe and nurturing
              residential homes for abandoned children, providing them with
              shelter, food, and basic amenities.
            </p>
          </div>
          <div className="grid-items">
            <h4>Public outreach</h4>
            <p>
              We organize various fundraising events throughout the year, this
              way individuals can participate, join, support the progam and
              raise funds for our cause.
            </p>
          </div>
        </div>
      </article>

      <div className="projects pb-7">
        <div className="sub-head">
          <h4 className="pt-5">Projects we have done</h4>
          <h3 className="p-3">
            We are creating a place where children <br /> with special needs can
            thrive
          </h3>
        </div>

        <div className="grid3">
          <div className="grid-item">
            <Image
              id="team"
              src="/assets/hall.jpg"
              width={400}
              height={250}
              alt="team photo"
            />
          </div>
          <div className="grid-item">
            <Image
              id="team"
              src="/assets/gather2.jpg"
              width={400}
              height={250}
              alt="team photo"
            />
          </div>
          <div className="grid-item">
            <Image
              id="team"
              src="/assets/handout.jpg"
              width={400}
              height={250}
              alt="team photo"
            />
          </div>
          <div className="grid-item">
            <Image
              id="team"
              src="/assets/children.jpg"
              width={400}
              height={250}
              alt="team photo"
            />
          </div>
          <div className="grid-item">
            <Image
              id="team"
              src="/assets/upclose.jpg"
              width={400}
              height={250}
              alt="team photo"
            />
          </div>
          <div className="grid-item">
            <Image
              id="team"
              src="/assets/upclose2.jpg"
              width={400}
              height={250}
              alt="team photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
