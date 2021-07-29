import styles from "../styles/Layout.module.css";
import NavBar from "./NavBar";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import {
  AiOutlineHome,
  // GiGamepad,
  // VscFilePdf,
  // MdPermContactCalendar,
} from "react-icons/ai";

const Layout = ({ children }) => {
  return (
    <div className={styles.body}>
      <NavBar />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
