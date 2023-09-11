"use client";
import React, { useState } from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import Buttons from "../components/buttons/Buttons";

const InputFormFields = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (e: any) => void;
}) => {
  return (
    <div className="input-field">
      <label htmlFor="firstName">{label}</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
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

      <section className="contact-section">
        <form action="" onSubmit={handleSubmit}>
          <div className="contact-form">
            <div className="contact-form__left">
              <InputFormFields
                label="First Name"
                setValue={(e: any) => setFirstName(e.target.value)}
                value={firstName}
              />
              <InputFormFields
                label="Email"
                setValue={(e: any) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div className="contact-form__right">
              <InputFormFields
                label="Last Name"
                setValue={(e: any) => setLastName(e.target.value)}
                value={lastName}
              />
              <InputFormFields
                label="Subject"
                setValue={(e: any) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>
          <div className="input-field__message">
            <label htmlFor="message">Message</label>
            <textarea
              cols={30}
              rows={10}
              name="message"
              id="message"
              placeholder="Enter message"
            />
          </div>
          <Buttons className="secondary" type="submit">
            Submit
          </Buttons>
        </form>
      </section>
    </div>
  );
};

export default Contact;
