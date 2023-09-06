// import Image from "next/image";
import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const page = () => {
  return (
    <div className="contact-page">
      <section className="contact">
        <div className="contact-hero">
          <>
            <div>
              <p className="">Contact us</p>
              <h2 className="">We&#039;d love to hear from you</h2>
              <p>
                Have any question in mind or want to enquire? Please feel free
                to contact us through the form or the following details.
              </p>
            </div>
            <div className="">
              <div>
                <h4 className="">Let us talk</h4>
                <p className="">
                  +234 09012346514 <span>hello@largerthani.com</span>{" "}
                </p>
              </div>
              {/* ------------------ */}
              <div>
                <h4 className="">Headoffice </h4>
                <p className="">
                  8 Brewery Drive, Lagos, <br />
                  Nigeria.
                </p>
              </div>

              {/* ------------------ */}
              <div>
                <h4 className="">Branch office</h4>
                <p className="">
                  Opp Opolo round about, Yenagoa, Bayelsa,
                  <br />
                  Nigeria
                </p>
              </div>

              <div>
                <FiLinkedin />
                <FiFacebook />

                <FiInstagram />
              </div>
              {/* ------------------- */}
            </div>
          </>
        </div>
      </section>
    </div>
  );
};

export default page;
