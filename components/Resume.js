import React from "react";
import Link from "next/link";
import styles from "../styles/Resume.module.css";
import { AiTwotoneFilePpt } from "react-icons/ai";

const Resume = () => {
  return (
    <>
      <div className={styles.main}>
        <Link href="/resume_samuel.docx">
          <AiTwotoneFilePpt className={styles.icon} />
        </Link>
        <p className={styles.text}>RESUME</p>
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
