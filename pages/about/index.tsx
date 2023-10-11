import Image from "next/image";

const About = () => {
  return (
    <div className="about-page">
      <div className="grid2 pt-7 sect">
        <div className="grid-items">
          <h4 className="header-title">Know about us</h4>
          <h3 className="sub-title p-5 ">
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
            We ensure that they have access to basic healthcare and nutrition.
            Additionally, we raise awareness about child wellness and support
            it. We strive to make a positive impact in the lives of abandoned
            children. With your support, we can continue to provide the love,
            care, and opportunities they deserve.
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

      <div className="p-5 text-center">
        <div>
          <Image
            id="team"
            src="/assets/mama.jpeg"
            width={900}
            height={100}
            alt="team photo"
          />
        </div>
        <div style={{ marginTop: "50px" }}>
          <Image
            id="team"
            src="/assets/bee.jpeg"
            width={900}
            height={100}
            alt="team photo"
          />
        </div>
      </div>

      <article className="special">
        <div className="sub-header pt-7 pb-2 projects-sub">
          <h3>Aims and Objectives</h3>
        </div>
        <div className="grid3 pb-7">
          <div className="grid-items">
            <h4>Shelter</h4>
            <p>
              To provide a safe and nurturing environment for less privileged
              children and to facilitate the reintegration of these children
              into loving and stable families.
            </p>
          </div>
          <div className="grid-items">
            <h4>Healthcare</h4>
            <p>
              To promote the physical, emotional, and cognitive development of
              less privileged children, while ensuring they have access to basic
              healthcare and nutrition.
            </p>
          </div>
          <div className="grid-items">
            <h4>Education</h4>
            <p>
              To meet the unique needs of less privileged children, while
              developing and implementing programs that promote early childhood
              education,.
            </p>
          </div>
          <div className="grid-items">
            <h4>Basic amenities</h4>
            <p>
              Providing primary needs, food, clothings, and other basic
              utilities for the development of the child.
            </p>
          </div>
          <div className="grid-items">
            <h4>Medicals</h4>
            <p>
              Collaborate with local hospitals, clinics, and healthcare
              providers to ensure abandoned children receive necessary medical
              attention and vaccinations. Provide comprehensive care and support
              services, including education, healthcare, and counseling.
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
            <h4>Conduct Research and Outreaches</h4>
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

export default About;
