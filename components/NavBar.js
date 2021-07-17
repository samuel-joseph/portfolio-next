import {
  AiTwotoneHome,
  AiTwotoneStar,
  AiTwotoneFilePpt,
  AiTwotonePhone,
} from "react-icons/ai";
import styles from "../styles/Navigation.module.css";

const NavBar = () => {
  return (
    <div className={styles.main}>
      <AiTwotoneHome className={styles.icon} />
      <AiTwotoneFilePpt className={styles.icon} />
      <AiTwotoneStar className={styles.icon} />
      <AiTwotonePhone className={styles.icon} />
    </div>
  );
};

export default NavBar;
