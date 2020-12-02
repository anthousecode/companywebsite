import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { onLoadData } from "../../pages/actions";

const MainNavigation = (props) => {
  const { navlinks, lang, onLoadData } = props;
  const { route } = useRouter();
  const routeParts = route.split("/");
  const clearNavRoute = "/" + routeParts[1];
  return (
    <div
      className={`${styles.mainnavbarblock__bottomblock} d-flex justify-content-center align-items-center bg-light row mx-0`}
    >
      <nav className="d-flex justify-content-between align-items-center col-9">
        <Link href="/">
          <div
            className={`${styles.mainnavbarblock__bottomblock_logotitle} d-flex justify-content-center`}
            onClick={() => onLoadData("/", lang)}
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
              <Link href={item.path}>
                <div
                  className={
                    styles.mainnavbarblock__bottomblock_navlinkslist_link
                  }
                >
                  <a>{item.title}</a>
                  {item.path === clearNavRoute && <span></span>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const mapDispatch = { onLoadData };

export default connect(null, mapDispatch)(MainNavigation);
