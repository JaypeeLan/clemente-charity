import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="what-we-do p-3">
        <div className="what-we-do-hero">
          <div>
            <h6 className="">WHAT WE DO</h6>
            <h3 className="">
              We are working <br /> cross country
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="team-photograph">
            <Image
              src="/assets/home-hero-bg.jpg"
              width={500}
              height={300}
              alt="team photo"
            />
          </div>
        </div>
      </div>

      
      <article className="special">
        <div className="sub-header pt-7 pb-2">
          <h3>What we do for our kids with special needs</h3>
        </div>
        <div className="grid3 pb-7">
          <div className="grid-items">
            <h5>Family support</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="grid-items">
            <h5>Health benefits</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="grid-items">
            <h5>Education</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="grid-items">
            <h5>Basic amenities</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="grid-items">
            <h5>Therapy</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="grid-items">
            <h5>Public outreach</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </article>

      <section className="projects">
        <div className="projects-sub">
          <h6 className="p-5">Projects we have done</h6>
          <h3 className="pb-5">
            We are creating a place <br /> where children with special <br />{" "}
            needs can thrivey
          </h3>
        </div>
        <div className="grid3">
        <div className="grid-items">
            <Image
              src="/assets/home-hero-bg.jpg"
              width={500}
              height={300}
              alt="team photo"
            />
          </div>
        <div className="grid-items">
            <Image
              src="/assets/home-hero-bg.jpg"
              width={500}
              height={300}
              alt="team photo"
            />
          </div>
        <div className="grid-items">
            <Image
              src="/assets/home-hero-bg.jpg"
              width={500}
              height={300}
              alt="team photo"
            />
          </div>
        </div>
      </section>

      section
    </div>
  );
};

export default page;
