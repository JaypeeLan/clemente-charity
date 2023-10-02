"use client";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRef, useState } from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // console.log(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);

  const handleSubmit = async (e: any) => {
    //  console.log("hello");
    e.preventDefault();
    // Basic form validation
    if (form.current) {
      const formData = new FormData(form.current);
      if (
        !formData.get("user_name") ||
        !formData.get("user_email") ||
        !formData.get("message")
      ) {
        setErrorMessage("Please fill in all fields.");
        return;
      }
    }

    setIsLoading(true);
    setErrorMessage(null);

    emailjs;
    if (
      process.env.NEXT_PUBLIC_YOUR_SERVICE_ID &&
      process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID &&
      form.current &&
      process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
          process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccessMessage("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            setErrorMessage("An error occurred. Please try again later.");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact">
        <div className="grid2">
          <div className="grid-items">
            <h4 className="pb-7">CONTACT</h4>
            <h2 className="pb-7">We&#039;d love to hear from you</h2>
            <p className="rogue">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>
          <div className="grid-items nb">
            <div>
              <h4>Let us talk</h4>
              <p>+447825611810, +2349095347896 </p>
              <br />
              <p>clementecharityfoundation23@gmail.com</p>
            </div>
            {/* ------------------ */}
            <div className="pt-5">
              <h4>Headoffice </h4>
              <p>Flat 3, Jakande Estate, Lagos, Nigeria</p>
            </div>

            {/* ------------------ */}
            <div className="pt-5">
              <h4>Branch office</h4>
              <p>
                67, Yorkshire Road, Mitcham Surrey, CR41PQ, <br />
                UK Block 313
              </p>
            </div>

            <div className="spc pt-5">
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
        </div>
      </div>

      <div className="contact-section p-7">
        <div className="contact-form">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="input-field">
              <label>Name</label>
              <input type="text" required name="user_name" />
            </div>
            <div className="input-field">
              <label>Email</label>
              <input type="email" name="user_email" required />
            </div>
            <div className="input-field contact-form__message">
              <label>Message</label>
              <textarea name="message" required />
            </div>
            <input className="submit" type="submit" value="Send" />
            {isLoading && <p>Loading...</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
