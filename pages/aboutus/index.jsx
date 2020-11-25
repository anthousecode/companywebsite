import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import TopAboutUsPanorama from "../../components/aboutusview/TopPanorama";
import NewsAndProcess from "../../components/aboutusview/NewsAndProcess";
import Leadership from "../../components/aboutusview/Leadership";
import OurTeam from "../../components/aboutusview/OurTeam";
import { onLoadData } from "../actions";
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

  if (
    !store.getState().certainPageData.certainLangPageData ||
    !store.getState().certainPageData.certainLangPageData.proсesses
  ) {
    return null;
  }
  const { proсesses } = store.getState().certainPageData.certainLangPageData;
  const { ourteam } = store.getState().certainPageData.certainLangPageData;
  return (
    <MainLayout title="About Us Page">
      <div className="row">
        <div className="col">
          <TopAboutUsPanorama />
          <NewsAndProcess data={proсesses} />
          <Leadership />
          <OurTeam data={ourteam} />
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
