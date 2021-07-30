import {
  AiTwotoneHome,
  AiTwotoneStar,
  AiTwotoneFilePpt,
  AiTwotonePhone,
} from "react-icons/ai";
import styles from "../styles/Navigation.module.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className={styles.main}>
      <Link
        className={styles.icon}
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
      >
        <AiTwotoneHome className={styles.withinIcon} />
      </Link>
      <Link
        className={styles.icon}
        activeClass="active"
        to="resume"
        spy={true}
        smooth={true}
      >
        <AiTwotoneFilePpt className={styles.withinIcon} />
      </Link>
      <Link
        className={styles.icon}
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
      >
        <AiTwotoneStar className={styles.withinIcon} />
      </Link>
      <Link
        className={styles.icon}
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
      >
        <AiTwotonePhone className={styles.withinIcon} />
      </Link>
    </div>
  );
};

export default NavBar;
