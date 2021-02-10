import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { onLoadData } from "../../pages/actionsPages";
import onToggleMenu from "../../helpers/onToggleMenu";

const MainNavigation = ({
  navlinks,
  lang,
  onLoadData,
  isSigned,
  isUserSigned,
}) => {
  const router = useRouter();
  const routeParts = router.route.split("/");
  const clearNavRoute = "/" + routeParts[1];
  const navListRef = React.createRef();
  const [isShownMenu, setIsShownMenu] = useState(false);
  useEffect(() => {
    onToggleMenu(isShownMenu, navListRef.current);
  }, [isShownMenu]);
  const routeLength = Object.keys(router.query).length;
  const folder = !routeLength
    ? "icons"
    : routeLength === 1
    ? "../icons"
    : "../../icons";
  return (
    <div
      className={`${styles.mainnavbarblock__bottomblock} d-flex justify-content-center align-items-center bg-light row`}
    >
      <nav className={`${styles.navbar} col-lg-10 col-xl-11`}>
        <div className={styles.navbar__logotitle}>
          <Link href="/">
            <div onClick={() => onLoadData("/", lang)}>
              <span>Ant</span>
              <div className={styles.vertline}>
                <span className="w-50 h-100"></span>
                <span className="w-50 h-100"></span>
              </div>
              <span>House</span>
            </div>
          </Link>
          <img
            onClick={() => setIsShownMenu(!isShownMenu)}
            src={`${folder}/bars-solid.svg`}
            alt="menu"
          />
        </div>

        <ul className={styles.navbar__navlinkslist}>
          {navlinks.map((item, index) => {
            if (item.path === "/adminpage" && !isSigned) return null;
            if (item.path === "/userpage" && !isUserSigned) return null;
            return (
              <li key={index}>
                <Link href={item.path}>
                  <div className={styles.navbar__navlinkslist_link}>
                    <a>{item.title}</a>
                    {item.path === clearNavRoute && <span></span>}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className={styles.navbar__navmobilelinkslist} ref={navListRef}>
          {navlinks.map((item, index) => {
            if (item.path === "/adminpage" && !isSigned) return null;
            if (item.path === "/userpage" && !isUserSigned) return null;
            return (
              <li key={index}>
                <Link href={item.path}>
                  <div className={styles.navbar__navlinkslist_link}>
                    <a>{item.title}</a>
                    {item.path === clearNavRoute && <span></span>}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const mapState = (state) => {
  return {
    isSigned: state.certainPageData.isSigned,
    isUserSigned: state.certainPageData.isUserSigned,
  };
};
const mapDispatch = { onLoadData };

export default connect(mapState, mapDispatch)(MainNavigation);
