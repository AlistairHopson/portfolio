import "./Contact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [emailStatus, setEmailStatus] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uecoji7",
        "contact_form",
        form.current,
        "vGtTp_wvLRFnkGyHD"
      )
      .then(
        (result) => {
          setEmailStatus(
            "Email sent. If you have not heard back from me within 48 hours, please contact me via LinkedIn. Thank you!"
          );
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          setEmailStatus(error.text);
          console.log(error.text);
          form.reset();
        }
      );
  };

  return (
    <div className="container contact-page">
      <h1 className="contact-title">CONTACT</h1>
      <div className="form-intro">
        <p>
          If you'd like to get in touch, feel free to contact me via the contact
          form. Alternatively, you can connect with me via
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/alistair-hopson/"
          >
            LinkedIn.
          </a>
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" placeholder="your name" required />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="your email"
          required
        />
        <label>Message</label>
        <textarea name="message" placeholder="your message" required />
        <div
          class="g-recaptcha"
          data-sitekey="6LeMD9chAAAAANIxy0WvoDiQ5m-Nz5e4NxpLYyac"
        ></div>
        <br />
        <input type="submit" value="Send" />
      </form>
      <p>
        <strong>{!emailStatus ? "" : emailStatus}</strong>
      </p>
      <div className="social-icons">
        <a
          className="contact-link"
          href="https://github.com/AlistairHopson?tab=repositories"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          className="contact-link"
          href="https://www.linkedin.com/in/alistair-hopson/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
