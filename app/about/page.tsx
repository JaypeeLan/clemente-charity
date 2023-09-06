import Image from "next/image";

const Page = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <div className="header-section">
          <div>
            <div>
              <h3 className="header-title">Know about us</h3>
              <h1 className="sub-title">
                We are a non-governmental organization
              </h1>
            </div>
            <div className="paragraphs">
              <p className="paragraph">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
              </p>
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

        <div className="team-photograph">
          <Image
            src="/assets/home-hero-bg.jpg"
            width={500}
            height={300}
            alt="team photo"
          />
        </div>
      </section>
      <section className="mission">
        <h3>Aims and Objectives</h3>
        <div className="aims">
          <div className="aims-objectives">
            <h4>
              We make sure to provide inclusive care for children with special
              needs
            </h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="aims-objectives">
            <h4>
              We make sure to provide inclusive care for children with special
              needs
            </h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </section>

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
