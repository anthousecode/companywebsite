import { useEffect } from 'react'
import MainLayout from "../../layouts/MainLayout";
import TopPanorama from "../../components/homepageview/TopPanorama";
import Features from "../../components/homepageview/Features";
import OurProjects from "../../components/homepageview/OurProjects";
import BottomPanorama from "../../components/homepageview/BottomPanorama";
import { onLoadData } from "../actions";
import { connect } from "react-redux";

const Home = ({ homeData, onLoadData }) => {
  useEffect(() => {
    if (homeData) {
      onLoadData('/', homeData.lang);
    } else onLoadData('/', 'en');
  }, [])
  if (!homeData) return null;
  return (
    <MainLayout title="Home Page">
      <div className="row">
        <div className="col">
          <TopPanorama />
          <Features data={homeData.features} />
          {homeData.ourprojects.carouselImages.length && (
            <OurProjects data={homeData.ourprojects} />
          )}
          <BottomPanorama />
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
