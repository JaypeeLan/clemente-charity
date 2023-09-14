import Image from "next/image";

const Services = () => {
  const services = [{}];
  return (
    <div className="services grid2 pt-7">
      <div grid-items>
        <Image
          src="/assets/girl.jpg"
          alt="little children"
          width={500}
          height={600}
        />
      </div>
      <div className="grid-items">
        <h5 className="pb-2">WHAT WE DO</h5>
        <h3>
          Some services we <br /> provide for our girls
        </h3>
        <br />
        <p>
          To provide a safe and nurturing environment for abandoned children and
          to facilitate the reintegration of abandoned children into loving and
          stable families.
        </p>
        <br />
        <>
          <div className="services-details pb-2">
            <div className="services-details__content">
              <h5 className="services-details__content-title">
                Comprehensiv Care Services
              </h5>
              <p className="services-details__content-item">
                Funds are allocated towards providing comprehensive care
                services, including education, healthcare, counseling, and
                recreational activities, to meet the unique needs of abandoned
                children.
              </p>
            </div>
            <div className="services-details__img">
              <img src="" alt="icon" />
            </div>
          </div>
          <div className="services-details pb-2">
            <div className="services-details__content">
              <h5 className="services-details__content-title">
                Medical Support
              </h5>
              <p className="services-details__content-item">
                Donations are utilized to collaborate with local hospitals,
                clinics, and healthcare providers to ensure that abandoned
                children receive necessary medical attention, vaccinations, and
                ongoing healthcare support.
              </p>
            </div>
            <div className="services-details__img">
              <img src="" alt="icon" />
            </div>
          </div>
          <div className="services-details pb-2">
            <div className="services-details__content">
              <h5 className="services-details__content-title">
                Adoption and Foster Care
              </h5>
              <p className="services-details__content-item">
                Contributions are used to facilitate the adoption or foster care
                placement of abandoned children into suitable families, ensuring
                they find loving and stable homes.
              </p>
            </div>
            <div className="services-details__img">
              <img src="" alt="icon" />
            </div>
          </div>
          <div className="services-details ">
            <div className="services-details__content">
              <h5 className="services-details__content-title">
                Sustainable livelihoods
              </h5>
              <p className="services-details__content-item">
                A portion of the donations is allocated towards conducting
                awareness campaigns and educational programs to inform the
                public about the consequences of child abandonment and advocate
                for policy changes.
              </p>
            </div>
            <div className="services-details__img">
              <img src="" alt="icon" />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Services;
