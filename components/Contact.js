import React from "react";
import styles from "../styles/Contact.module.css";
import NavBar from "./NavBar";
import {
  AiTwotonePhone,
  AiFillGithub,
  AiFillLinkedin,
  AiTwotoneHome,
} from "react-icons/ai";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <>
      <div id="contact" className={styles.main}>
        <AiTwotonePhone className={styles.icon} />
        <p className={styles.text}>CONTACT</p>
        <NavBar />
      </div>
      <div className={styles.base}>
        <div>
          <h4>Samuel Joseph Pinangay</h4>
          <h5>Phone number: 646-824-4632</h5>
          <h5>Email Address: pinangaydev@gmail.com</h5>
        </div>
        <div className={styles.logo}>
          <a href="http://github.com/samuel-joseph">
            <AiFillGithub className={styles.icon1} />
          </a>
          <a href="https://www.linkedin.com/in/techjoe/">
            <AiFillLinkedin className={styles.icon1} />
          </a>
        </div>
      </div>
      <Link
        className={styles.main}
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
      >
        <AiTwotoneHome className={styles.icon} />
      </Link>
    </>
  );
};

export default Contact;
