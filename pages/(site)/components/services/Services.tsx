/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Services = () => {
  const services = [{}];
  return (
    <div className="services grid2 pt-7">
      <div grid-items>
        <Image
          id="team"
          src="/assets/girl.jpg"
          alt="little children"
          width={500}
          height={600}
        />
      </div>
      <div className="grid-items">
        <div className="txt-cnt">
          <h4 className="pb-2">WHAT WE DO</h4>
          <h3>Some services we provide</h3>
        </div>
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
              <h4 className="services-details__content-title">
                Commitment to the Less Privileged
              </h4>
              <p className="services-details__content-item">
                At the heart of the Clemente Charity Foundation lies an
                unwavering commitment to the less privileged. With compassion as
                their guiding force, the foundation has strived to bridge the
                gap, providing essential resources and opportunities to those in
                need. From food and shelter to education and healthcare, the
                foundation's initiatives cover a wide spectrum of support,
                ensuring a holistic approach to improving lives.
              </p>
            </div>
          </div>
          <div className="services-details pb-2">
            <div className="services-details__content">
              <h4 className="services-details__content-title">
                Addressing Challenges
              </h4>
              <p className="services-details__content-item">
                The foundation recognizes the challenges faced by marginalized
                communities and strives to alleviate their burdens. By focusing
                on areas like the Makoko slum, the foundation has tackled issues
                such as inadequate access to decent needs, lack of access to
                nutritious meals, and limited educational opportunities. Through
                collaborative efforts with local communities and volunteers,
                Clemente Charity Foundation has been able to bring positive
                change and uplift spirits.
              </p>
            </div>
          </div>
          <div className="services-details pb-2">
            <div className="services-details__content">
              <h4 className="services-details__content-title">
                Education for a Brighter Future
              </h4>
              <p className="services-details__content-item">
                Education is a cornerstone of the foundation's work.
                Understanding the transformative power of knowledge, the
                foundation has taken significant strides to provide quality
                educational resources, empowering children with the tools to
                build a brighter future and breaking the cycle of poverty.
              </p>
            </div>
          </div>
          <div className="services-details ">
            <div className="services-details__content">
              <h4 className="services-details__content-title">
                Community Engagement
              </h4>
              <p className="services-details__content-item">
                The success of the Clemente Charity Foundation is deeply rooted
                in community engagement. The foundation actively involves local
                communities, and understanding their unique needs has helped in
                achieving so much heights.
              </p>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Services;
