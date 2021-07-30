import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Projects.module.css";
import { AiTwotoneStar } from "react-icons/ai";
import inbetween from "../public/inbetween.jpg";

const Projects = () => {
  return (
    <>
      <div className={styles.main}>
        <AiTwotoneStar className={styles.icon} />
        <p className={styles.textTitle}>PROJECTS</p>
      </div>
      <div className={styles.base}>
        <Link className={styles.photo} href="https://inbetween.surge.sh/">
          <Image src={inbetween} alt="Card game" />
        </Link>
        <div className={styles.textContainer}>
          <h2>INBETWEEN</h2>
          <p className={styles.text}>
            This is a betting card game that is popular in the Philippines
            wherein a player have to guess if the folded cards value is in
            between the faced up cards.
          </p>
          <h3>TOOLS</h3>
          <p className={styles.text}>HTML, CSS, Javascript</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
