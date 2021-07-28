import Image from "next/image";
import profilePic from "../public/me.jpg";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.photoContainer}>
          <Image
            className={styles.photo}
            src={profilePic}
            alt="Picture of the author"
          />
        </div>
        <p className={styles.text}>SAMUEL JOSEPH V. PINANGAY</p>
        <p className={styles.text2}>Software Engineer</p>
        <div className={styles.container2}>
          <p className={styles.text3}>
            A passionate web developer and CS graduate, recently trained as test
            automation developer practicing SOLID object-oriented principles,
            user-centered design and experienced working an AGILE environment.
            <br />
            <br />
            Seeking position in the software industry. As a front-end developer,
            I believe that it is my calling to become a developer. With the set
            of skills that I have acquired through self-taught studying,
            education, training combined with my hunger for self betterment I
            know that I will ll be of great asset to any company!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
