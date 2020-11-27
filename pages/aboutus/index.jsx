import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import Description from "../../components/aboutusview/Description";
import Leadership from "../../components/aboutusview/Leadership";
import OurTeam from "../../components/aboutusview/OurTeam";
import { onLoadData } from "../actions";
import styles from "./styles.module.scss";
import store from "../../store";

const AboutUs = () => {
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

  if (!store.getState().certainPageData.certainLangPageData) {
    return null;
  }
  const topTitleData = store.getState().certainPageData.certainLangPageData;
  const { description } = store.getState().certainPageData.certainLangPageData;
  const { ourteam } = store.getState().certainPageData.certainLangPageData;
  return (
    <MainLayout title="About Us Page">
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
          <Description data={description} />
          <Leadership />
          <OurTeam data={ourteam} />
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
