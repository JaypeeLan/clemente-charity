import Image from "next/image";

const Page = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <div className="header-section">
          <div>
            <div className="start">
              <h4 className="header-title">Know about us</h4>
              <h3 className="sub-title pt-5">
                We are a non- <br /> governmental organization
              </h3>
            </div>
            <div className="paragraphs mb-5">
              <h4 className="paragraph">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
              </h4>
              <br />
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Suspendisse varius enim
                elementum tristique.
              </p>
            </div>
          </div>
        </div>
        <div className="team-photograph pt-3">
          <Image
            src="/assets/home-hero-bg.jpg"
            width={1200}
            height={400}
            alt="team photo"
          />
        </div>
      </section>

      <div className="mission">
        <div className="aims">
        <h4>OUR MISSION</h4>
          <div className="aims-objectives">
            <h4>
            We make sure to provide inclusive care for children with special needs
            </h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
        <div className="aims">
        <h4>OUR VISION</h4>
          <div className="aims-objectives">
            <h4>
            Provide more inclusive care to children around the world
            </h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere..
            </p>
          </div>
        </div>
      </div>

      <section className="team">
        <h2>Aims and Objectives</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </h3>

        <div className="team-group">
          <div className="team-group_member">
            <div>
              <Image
                src="/assets/home-hero-bg.jpg"
                width={500}
                height={300}
                alt="team photo"
              />
            </div>
            <p>Ore olofo</p>
          </div>
          <div className="team-group_member">
            <div>
              <Image
                src="/assets/home-hero-bg.jpg"
                width={500}
                height={300}
                alt="team photo"
              />
            </div>
            <p>Ore olofo</p>
          </div>
          <div className="team-group_member">
            <div>
              <Image
                src="/assets/home-hero-bg.jpg"
                width={500}
                height={300}
                alt="team photo"
              />
            </div>
            <p>Ore olofo</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
