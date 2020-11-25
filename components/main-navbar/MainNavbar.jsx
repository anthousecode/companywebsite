import { useState } from "react";
import Router, { useRouter } from 'next/router'
import MainNavigation from "./MainNavigation";
import { connect } from "react-redux";
import { onLoadData } from "../../pages/actions";
import styles from "./styles.module.scss";

const MainNavbar = ({ layoutData, onLoadData }) => {
  const { route } = useRouter();
  const [lang, setLang] = useState(layoutData.lang);
  const onChoiceLang = (e) => {
    if (!e.target.dataset.lang) return;
    onLoadData(route, e.target.dataset.lang);
    setLang(e.target.dataset.lang);
    Router.push(route);
  };
  return (
    <header className={`${styles.mainnavbarblock} row mx-0`}>
      <div className="col px-0">
        <div className="row mx-0">
          <section
            className={`${styles.mainnavbarblock__topblock} d-flex justify-content-end align-items-center text-light pr-5 col pl-0`}
          >
            <div
              className={`${styles.mainnavbarblock__topblock_lang} mr-4`}
              onClick={onChoiceLang}
            >
              <span
                className={`${
                  layoutData.lang === "ua" &&
                  styles.mainnavbarblock__topblock_lang_chosen
                } d-inline-block mx-1`}
                data-lang="ua"
              >
                Укр
              </span>
              <img src="/images/common/glob.svg" alt="glob" />
              <span
                className={`${
                  layoutData.lang === "ru" &&
                  styles.mainnavbarblock__topblock_lang_chosen
                } d-inline-block mx-1`}
                data-lang="ru"
              >
                Рус
              </span>
              <img src="/images/common/glob.svg" alt="glob" />
              <span
                className={`${
                  layoutData.lang === "en" &&
                  styles.mainnavbarblock__topblock_lang_chosen
                } d-inline-block mx-1`}
                data-lang="en"
              >
                Eng
              </span>
            </div>
            <div className={styles.mainnavbarblock__topblock_forsign}>
              <span>{layoutData.singin}</span>
            </div>
          </section>
        </div>
        <MainNavigation navlinks={layoutData.navlinks} lang={lang} />
      </div>
    </header>
  );
};

const mapState = (state) => {
  return {
    layoutData: state.certainPageData.certainLayoutLangTextData,
  };
};

const mapDispatch = { onLoadData };

export default connect(mapState, mapDispatch)(MainNavbar);
