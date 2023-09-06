import Image from "next/image";

const Services = () => {
  const services = [{}];
  return (
    <section className="services">
      <div>
        <h2>Know About Us</h2>
        <h3>Some services we provide for our girls</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>

        <>
          <div className="services-details">
            <div className="services-details__content">
              <p className="services-details__content-title">Advocacy</p>
              <p className="services-details__content-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="services-details__img">
              <img src="" alt="icon" />
            </div>
          </div>
          <div className="services-details">
            <div className="services-details__content">
              <p className="services-details__content-title">Advocacy</p>
              <p className="services-details__content-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="services-details__img">
              <img src="" alt="icon" />
            </div>
          </div>
        </>
      </div>
      <div>
        <Image
          src="/assets/home-hero-bg.jpg"
          alt="little children"
          width={350}
          height={350}
        />
      </div>
    </section>
  );
};

export default Services;
