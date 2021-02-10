import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import CareerBlock from "../../components/careerview/CareerBlock";
import CareerFormBlock from "../../components/careerview/CareerFormBlock";
import { onLoadData } from "../actionsPages";
import styles from "./styles.module.scss";
import store from "../../store";

const Career = () => {
  const { route } = useRouter();
  const { dispatch } = store;
  const [data, setData] = useState(null);

  useEffect(() => {
    const language = store.getState().certainPageData.certainLangPageData
      ? store.getState().certainPageData.certainLangPageData.lang
      : "en";
    dispatch(onLoadData(route, language));
    setData(language);
  }, [data]);

  if (
    !store.getState().certainPageData.certainLangPageData 
    || !store.getState().certainPageData.certainLangPageData.career
  ) {
    return null;
  }
  const topTitleData = store.getState().certainPageData.certainLangPageData;
  const { career } = store.getState().certainPageData.certainLangPageData;
  const { vacancyForm } = store.getState().certainPageData.certainLangPageData;
  return (
    <MainLayout title="Career Page">
      <div className="row">
        <div className="col">
          <div
            className={`${styles.toppanorama} row d-flex justify-content-center align-items-end`}
          >
            <div className="col-9">
              <div className={styles.toppanorama__titleblock}>
                <h2 className={styles.toppanorama__titleblock_title}>
                  {topTitleData.toptitle}
                </h2>
                <div className={styles.toppanorama__titleblock_underline}></div>
              </div>
              <p className={styles.toppanorama__text}>
                {topTitleData.topdescript}
              </p>
            </div>
          </div>
          <CareerBlock data={career} />
          <CareerFormBlock data={vacancyForm} />
        </div>
      </div>
    </MainLayout>
  );
};
export default Career;
