import ErrorLayout from "../../layouts/ErrorLayout";
import Router from "next/router";
import store from "../../store";
import { onLoadData } from "../actionsPages";
import styles from "./styles.module.scss";

const Error404 = () => {
  const { dispatch } = store;
  const language = store.getState().certainPageData.certainLangPageData
    ? store.getState().certainPageData.certainLangPageData.lang
    : "en";
  const goHomePage = () => {
    dispatch(onLoadData("/", language));
    Router.push("/");
  };
  return (
    <ErrorLayout title="Error">
      <div className={styles.errorblock}>
        <h1 className={styles.errorblock__errornum}>404</h1>
        <p className={styles.errorblock__text}>
          {language === "ru" ? "Страница не найдена" : "Page not found"}
        </p>
        <div className={styles.errorblock__goHome} onClick={goHomePage}>
          {language === "ru"
            ? "Перейти на домашнюю страницу"
            : "Go to home page"}
        </div>
      </div>
    </ErrorLayout>
  );
};
export default Error404;
