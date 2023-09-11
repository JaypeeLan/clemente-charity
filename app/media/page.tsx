import React from "react";
import Image from "next/image"

const page = () => {
  return <div>
      <div className="media p-3">
          <div class="adj">
            <h6 className="">TOP NEWS</h6>
            <h3 className="pt-2">Our goal is to <br /> provide inclusive <br /> care for children <br /> with special needs
          </h3>
            <p className="pt-5">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
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

      <div className="media">
        <div className="grid2">
          <aside className="grid-items">
          <div className="temp2">
            <div>
            <h2>13</h2>
            <h5>APR</h5>
            </div>
            <div>
              <p>NEXT EVENTS</p>
              <h5 className="pt-2">A day with our wonderful <br /> children </h5>
            </div>
          </div>
          </aside>
        </div>
      </div>
    </div>;
};

export default page;
