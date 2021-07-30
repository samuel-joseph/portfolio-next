import React from "react";
import styles from "../styles/Contact.module.css";
import Link from "next/link";
import {
  AiTwotonePhone,
  AiFillGithub,
  AiFillLinkedin,
  AiTwotoneHome,
} from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
  return (
    <>
      <div className={styles.main}>
        <AiTwotonePhone className={styles.icon} />
        <p className={styles.text}>CONTACT</p>
      </div>
      <div className={styles.base}>
        <div>
          <h4>Samuel Joseph Pinangay</h4>
          <h5>Phone number: 646-824-4632</h5>
          <h5>Email Address: pinangaydev@gmail.com</h5>
        </div>
        <div className={styles.logo}>
          <Link href="http://github.com/samuel-joseph">
            <AiFillGithub className={styles.icon1} />
          </Link>
          <Link href="https://www.linkedin.com/in/techjoe/">
            <AiFillLinkedin className={styles.icon1} />
          </Link>
        </div>
      </div>
      <div className={styles.main}>
        <AiTwotoneHome className={styles.icon} />
      </div>
    </>
  );
};

export default Contact;
