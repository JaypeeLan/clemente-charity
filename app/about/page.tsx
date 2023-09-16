import Image from "next/image";

const Page = () => {
  return (
    <div className="about-page">
      <div className="grid2 pt-7 sect">
        <div className="grid-items">
          <h4 className="header-title">Know about us</h4>
          <h3 className="sub-title pt-5">
            We are a non- <br /> governmental organization
          </h3>
        </div>

        <div className="grid-items">
          <h4 className="paragraph">
            We are a dedicated organization founded to support abandoned
            children and their welfare. Our primary aim is to provide a safe and
            nurturing environment for these children, promoting their physical,
            emotional, and cognitive development.
          </h4>
          <br />
          <p className="paragraph">
            We ensure that they have access to basic healthcare and nutrition,
            and work towards reintegrating them into loving and stable families.
            Additionally, we raise awareness about child abandonment and
            advocate for policy changes to prevent it. Through our residential
            homes, comprehensive care services, educational programs, and
            collaborations with healthcare providers and adoption agencies, we
            strive to make a positive impact in the lives of abandoned children.
            With your support, we can continue to provide the love, care, and
            opportunities they deserve.
          </p>
        </div>
      </div>

      <div className="p-5 text-center">
        <Image
          id="team"
          src="/assets/group.jpg"
          width={900}
          height={450}
          alt="team photo"
        />
      </div>

      {/* <div className=" grid2">
        <div className=" grid-items">
          <h4>OUR MISSION</h4>
          <div className="aims-objectives">
            <h4>
            To facilitate the reintegration of abandoned children into loving and stable families.
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
        <div className=" grid-items">
          <h4>OUR VISION</h4>
          <div className="aims-objectives">
            <h4>To raise enough awareness Provide more inclusive care to children around the world</h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere..
            </p>
          </div>
        </div>
      </div> */}

      <article className="special">
        <div className="sub-header pt-7 pb-2 projects-sub">
          <h3>Aims and Objectives</h3>
        </div>
        <div className="grid3 pb-7">
          <div className="grid-items">
            <h4>Shelter</h4>
            <p>
              To provide a safe and nurturing environment for abandoned children
              and to facilitate the reintegration of abandoned children into
              loving and stable families.
            </p>
          </div>
          <div className="grid-items">
            <h4>Healthcare</h4>
            <p>
              To promote the physical, emotional, and cognitive development of
              abandoned children. To ensure that abandoned children have access
              to basic healthcare and nutrition.
            </p>
          </div>
          <div className="grid-items">
            <h4>Education</h4>
            <p>
              To meet the unique needs of abandoned children, Develop and
              implement programs that promote the physical, emotional, and
              cognitive development of abandoned children, such as early
              childhood education, recreational activities, and therapy.
            </p>
          </div>
          <div className="grid-items">
            <h4>Basic amenities</h4>
            <p>
              Establish and operate residential homes for abandoned children,
              providing them with a secure and loving environment with provision
              for food, clothings and other basic amenities in any favourable
              foundation for child development
            </p>
          </div>
          <div className="grid-items">
            <h4>Medicals</h4>
            <p>
              Collaborate with local hospitals, clinics, and healthcare
              providers to ensure abandoned children receive necessary medical
              attention and vaccinations. Provide comprehensive care and support
              services, including education, healthcare, and counseling,
            </p>
          </div>
          <div className="grid-items">
            <h4>Public outreach</h4>
            <p>
              Conduct awareness campaigns and educational programs to inform the
              public about the consequences of child abandonment and the
              importance of providing support to abandoned children. Advocate
              for policy changes and reforms that address the root causes of
              child abandonment and improve the welfare system for abandoned
              children.
            </p>
          </div>
          <div className="grid-items">
            <h4>Seek your Support</h4>
            <p>
              Fundraise and seek financial support from individuals,
              corporations, and grant-making organizations to sustain and expand
              the organizations services for abandoned children.
            </p>
          </div>
          <div className="grid-items">
            <h4>Conduct Researchs and Outreachs</h4>
            <p>
              Conduct research and collect data on child abandonment to better
              understand the issue and inform evidence-based interventions and
              programs.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Page;
