import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import ContactUsBlock from "../../components/contactus/ContactUsBlock";
import styles from "./styles.module.scss";
import store from "../../store";
import { onLoadData } from "../actions";

const ContuctUs = () => {
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
    !store.getState().certainPageData.certainLangPageData ||
    !store.getState().certainPageData.certainLangPageData.contactusData
  ) {
    return null;
  }
  const topTitleData = store.getState().certainPageData.certainLangPageData;
  const {
    contactusData,
  } = store.getState().certainPageData.certainLangPageData;
  return (
    <MainLayout title="Contact Us Page">
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
                <span className={styles.toppanorama__text_geoblock}>
                  <img src="icons/geomark.svg" alt="geomark" />
                </span>
              </p>
            </div>
          </div>
          <ContactUsBlock data={contactusData} />
        </div>
      </div>
    </MainLayout>
  );
};
export default ContuctUs;
