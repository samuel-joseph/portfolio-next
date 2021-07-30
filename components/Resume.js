import React from "react";
import Link from "next/link";
import styles from "../styles/Resume.module.css";
import { AiTwotoneFilePpt } from "react-icons/ai";
import Image from "next/image";

import github from "../public/skills/github.png";
import html5 from "../public/skills/html5.png";
import java from "../public/skills/java.png";
import javascript from "../public/skills/javascript.png";
import mysql from "../public/skills/mysql.png";
import nodeJs from "../public/skills/node-js.png";
import reactLogo from "../public/skills/react.png";
import sequelize from "../public/skills/sequelize.png";
import visualStudio from "../public/skills/visualstudio.png";

const Resume = () => {
  return (
    <>
      <div className={styles.main}>
        <Link href="/resume_samuel.docx">
          <AiTwotoneFilePpt className={styles.icon} />
        </Link>
        <p className={styles.text}>RESUME</p>
      </div>
      <div className={styles.containAll}>
        <div className={styles.skillContainer}>
          <Image className={styles.imageContainer} src={html5} />
          <p className={styles.logoText}>HTML5</p>
        </div>
        <div className={styles.skillContainer}>
          <Image className={styles.imageContainer} src={javascript} />
          <p className={styles.logoText}>JAVASCRIPT</p>
        </div>
        <div className={styles.skillContainer}>
          <Image className={styles.imageContainer} src={reactLogo} />
          <p className={styles.logoText}>REACT</p>
        </div>
        <div className={styles.skillContainer}>
          <Image className={styles.imageContainer} src={java} />
          <p className={styles.logoText}>JAVA</p>
        </div>
        <div className={styles.skillContainer}>
          <Image className={styles.imageContainer} src={nodeJs} />
          <p className={styles.logoText}>NODE-JS</p>
        </div>
        <div className={styles.skillContainer}>
          <Image className={styles.imageContainer} src={sequelize} />
          <p className={styles.logoText}>SEQUELIZE</p>
        </div>
        <div className={styles.skillContainer}>
          <Image className={styles.imageContainer} src={mysql} />
          <p className={styles.logoText}>MYSQL</p>
        </div>
        <div className={styles.skillContainer}>
          <Image className={styles.imageContainer} src={github} />
          <p className={styles.logoText}>GITHUB</p>
        </div>
        <div className={styles.skillContainer}>
          <Image className={styles.imageContainer} src={visualStudio} />
          <p className={styles.logoText}>VISUAL STUDIO</p>
        </div>
      </div>
      <div className={styles.base}>
        <p className={styles.text1}>Click the button to download my resume </p>
        <Link href="/resume_samuel.docx">
          <button className={styles.content}>Click</button>
        </Link>
      </div>
    </>
  );
};

export default Resume;
