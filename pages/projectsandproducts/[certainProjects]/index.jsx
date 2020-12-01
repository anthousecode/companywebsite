import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles.module.scss";
import store from "../../../store";
import { onLoadData } from "../../actions";
import MainLayout from "../../../layouts/MainLayout";
import ProjectSection from "../../../components/projectsview/ProjectSection";
import CarouselBlock from "../../../components/common/CarouselBlock";

const CertainProjects = () => {
  const router = useRouter();

  const { dispatch } = store;
  const [data, setData] = useState(null);
  useEffect(() => {
    const language = store.getState().certainPageData.certainLangPageData
      ? store.getState().certainPageData.certainLangPageData.lang
      : "en";
    dispatch(onLoadData("/projectsandproducts", language));
    setData(language);
  }, [data]);

  if (!router.query.certainProjects) return null;

  const allData = store.getState().certainPageData.certainLangPageData;
  const { certainProjects } = router.query;
  const projects = Object.values(
    store.getState().certainPageData.certainLangPageData.allProjects
  ).find((item) => item.id === certainProjects).projects;
  return (
    <MainLayout title="Projects And Products Page">
      <div className="row">
        <div className="col">
          <div
            className={`${styles.toppanorama} row d-flex justify-content-center align-items-end`}
          >
            <div className="col-9">
              <div className={styles.toppanorama__titleblock}>
                <h2 className={styles.toppanorama__titleblock_title}>
                  {allData.toptitle}
                </h2>
                <div className={styles.toppanorama__titleblock_underline}></div>
              </div>
              <p className={styles.toppanorama__text}>{allData.topdescript}</p>
            </div>
          </div>

          <CarouselBlock data={projects}>
            <ProjectSection />
          </CarouselBlock>

          <div className="row">
            <div className="col">
              <div className={styles.goBackBtn}>
                <Link href="/projectsandproducts">
                  <a>{allData.btnGobackText}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default CertainProjects;
