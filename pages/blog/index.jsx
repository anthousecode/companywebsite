import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import store from "../../store";
import { onLoadData } from "../actions";
import MainLayout from "../../layouts/MainLayout";
import HeaderRow from "../../components/common/HeaderRow";
import BlogSection from "../../components/blogview/BlogSection";
import CarouselBlock from "../../components/common/CarouselBlock";

const Blog = () => {
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
    !store.getState().certainPageData.certainLangPageData.companyblog
  ) {
    return null;
  }
  const topTitleData = store.getState().certainPageData.certainLangPageData;
  const { companyblog } = store.getState().certainPageData.certainLangPageData;
  return (
    <MainLayout title="Blog Page">
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

          <HeaderRow
            title={companyblog.title}
            text={companyblog.underTitleText}
          />

          <CarouselBlock data={companyblog.blogs}>
            <BlogSection />
          </CarouselBlock>
        </div>
      </div>
    </MainLayout>
  );
};
export default Blog;
