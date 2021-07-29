import React from "react";
import styles from "../styles/Contact.module.css";
import { AiTwotonePhone } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    console.log("TEST!");
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_iq6mal4",
        e.target,
        "user_uhOFWfKi1KHKe4V5omtIb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className={styles.main}>
        <AiTwotonePhone className={styles.icon} />
        <p className={styles.text}>CONTACT</p>
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="subject" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" onClick={sendEmail} />
      </form>
    </>
  );
};

export default Contact;
