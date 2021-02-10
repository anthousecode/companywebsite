import { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import Features from "../../components/homepageview/Features";
import OurProjects from "../../components/homepageview/OurProjects";
import BottomPanorama from "../../components/homepageview/BottomPanorama";
import { onLoadData } from "../actionsPages";
import { connect } from "react-redux";
import styles from "./styles.module.scss";

const Home = ({ homeData, onLoadData }) => {
  useEffect(() => {
    if (homeData) {
      onLoadData("/", homeData.lang);
    } else onLoadData("/", "en");
  }, []);
  if (!homeData) return null;
  return (
    <MainLayout title="Home Page">
      <div className="row">
        <div className="col">
          <div
            className={`${styles.toppanorama} row d-flex justify-content-center align-items-end`}
          >
            <div className="col-9">
              <div className={styles.toppanorama__titleblock}>
                <h2 className={styles.toppanorama__titleblock_title}>
                  {homeData.toptitle}
                </h2>
                <div className={styles.toppanorama__titleblock_underline}></div>
              </div>
              <p className={styles.toppanorama__text}>{homeData.topdescript}</p>
            </div>
          </div>
          <Features data={homeData.features} />
          {homeData.ourprojects.carouselImages.length && (
            <OurProjects data={homeData.ourprojects} />
          )}
          <BottomPanorama data={homeData.bottomData} />
        </div>
      </div>
    </MainLayout>
  );
};

const mapState = (state) => {
  return {
    homeData: state.certainPageData.certainLangPageData,
  };
};

const mapDispatch = { onLoadData };

export default connect(mapState, mapDispatch)(Home);
