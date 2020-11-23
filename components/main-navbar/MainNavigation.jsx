import Link from "next/link";
import styles from "./styles.module.scss";

const MainNavigation = ({ navlinks }) => {
  return (
    <div
      className={`${styles.mainnavbarblock__bottomblock} d-flex justify-content-center align-items-center bg-light row`}
    >
      <nav className="d-flex justify-content-between align-items-center col-9">
        <Link href="/">
          <div
            className={`${styles.mainnavbarblock__bottomblock_logotitle} d-flex justify-content-center`}
          >
            <span>Ant</span>
            <div
              className={styles.mainnavbarblock__bottomblock_logotitle_vertline}
            >
              <span className="w-50 h-100"></span>
              <span className="w-50 h-100"></span>
            </div>
            <span>House</span>
          </div>
        </Link>
        <ul
          className={`${styles.mainnavbarblock__bottomblock_navlinkslist} d-flex justify-content-center m-0 p-0`}
        >
          {navlinks.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default MainNavigation;
