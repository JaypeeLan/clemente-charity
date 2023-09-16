"use client";
import React, { useEffect, useState } from "react";
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
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        name={label}
        id={label}
        value={value}
        onChange={setValue}
        required
      />
    </div>
  );
};

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isValidEmail = (email: string) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const { firstName, lastName, email, subject, message } = formValues;
    if (firstName && lastName && isValidEmail(email) && subject && message) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formValues]);

  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Replace with your actual API call
      // await axios.post('/api/contact', formValues);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact">
        <div className="contact-hero">
          <>
            <div className="cont">
              <h3>CONTACT</h3>
              <h2>We&#039;d love to hear from you</h2>
              <p className="rogue">
                Have any question in mind or want to enquire? Please feel free
                to contact us through the form or the following details.
              </p>
            </div>
            <div>
              <div>
                <h4>Let us talk</h4>
                <p>+447825611810, +2349095347896 </p>
                <br />
                <p>clementecharityfoundation23@gmail.com</p>
              </div>
              {/* ------------------ */}
              <div>
                <h4>Headoffice </h4>
                <p>Flat 3, Jakande Estate, Lagos, Nigeria</p>
              </div>

              {/* ------------------ */}
              <div>
                <h4>Branch office</h4>
                <p>
                  67, Yorkshire Road, Mitcham Surrey, CR41PQ, <br />
                  UK Block 313
                </p>
              </div>

              <div className="spc">
                <Link
                  id="insta"
                  href="https://instagram.com/clemente_charity_foundation?igshid=MzRlODBiNWFlZA=="
                >
                  <FiFacebook />
                </Link>
                <Link
                  id="insta"
                  href="https://instagram.com/clemente_charity_foundation?igshid=MzRlODBiNWFlZA=="
                >
                  <FiLinkedin />
                </Link>
                <Link
                  id="insta"
                  href="https://instagram.com/clemente_charity_foundation?igshid=MzRlODBiNWFlZA=="
                >
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
                label="firstName"
                setValue={handleChange}
                value={formValues.firstName}
              />
              <InputFormFields
                label="email"
                setValue={handleChange}
                value={formValues.email}
              />
            </div>

            <div className="contact-form  grid-item">
              <InputFormFields
                label="lastName"
                setValue={handleChange}
                value={formValues.lastName}
              />
              <InputFormFields
                label="subject"
                setValue={handleChange}
                value={formValues.subject}
              />
            </div>
          </div>

          <div className="contact-form__message">
            <div className="send">
              <textarea
                name="message"
                id="message"
                placeholder="Type your Message"
                value={formValues.message}
                onChange={handleChange}
                required
              />
              <br />
              <Buttons
                className="secondary"
                type="submit"
                disabled={!isValid || isSubmitting}
              >
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
