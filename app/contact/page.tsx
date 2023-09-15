"use client";
import React, { useState } from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
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
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="contact-page">
      <div className="contact">
        <div className="contact-hero">
          <>
            <div className="cont">
              <h5 className="">CONTACT</h5>
              <h2 >We&#039;d love to hear from you</h2>
              <p className="rogue">
                Have any question in mind or want to enquire? Please feel free
                to contact us through the form or the following details.
              </p>
            </div>
            <div className="">
              <div>
                <h4 className="">Let us talk</h4>
                <p className="">
                +447825611810, +234 9095347896 <br />
                <span>clementecharityfoundation23@gmail.com</span>{" "}
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

              <div className="spc">
                <Link id="insta" href="https://instagram.com/clemente_charity_foundation?igshid=MzRlODBiNWFlZA==">
                <FiFacebook /></Link>
                <Link id="insta" href="https://instagram.com/clemente_charity_foundation?igshid=MzRlODBiNWFlZA==">
                <FiLinkedin /></Link>
                <Link id="insta" href="https://instagram.com/clemente_charity_foundation?igshid=MzRlODBiNWFlZA==">
                <FiInstagram />
                </Link>
                
                
                
              </div>
              {/* ------------------- */}
            </div>
          </>
        </div>
      </div>

      <div className="contact-section p-7">
        <form action="" onSubmit={handleSubmit}>

          <div className="contact-form grid4">

            <div className="contact-form grid-item">
              <InputFormFields
                label="FirstName"
                setValue={(e: any) => setFirstName(e.target.value)}
                value={firstName}
              />
              <InputFormFields
                label="Email"
                setValue={(e: any) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="contact-form  grid-item">
              <InputFormFields
                label="Last Name"
                setValue={(e: any) => setLastName(e.target.value)}
                value={lastName}
              />
              <InputFormFields
                label="Subject"
                setValue={(e: any) => setSubject(e.target.value)}
                value={subject}
              />
            </div>
            
          </div>

          <div className="contact-form__message">
            <div className="send">
            <textarea
              cols={80}
              rows={10}
              name="message"
              id="message"
              placeholder="Type your Message"
            />
            <br />
            <Buttons className="secondary" type="submit">
            Send Message
          </Buttons>
          </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
