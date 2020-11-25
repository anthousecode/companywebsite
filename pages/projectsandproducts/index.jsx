import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import styles from "./styles.module.scss";
import store from "../../store";
import { onLoadData } from "../actions";
import ProjectsBlock from "../../components/projectsview/ProjectsBlock";

const ProjectsAndProducts = () => {
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
    !store.getState().certainPageData.certainLangPageData.projects
  ) {
    return null;
  }
  const topTileData = store.getState().certainPageData.certainLangPageData;
  const { projects } = store.getState().certainPageData.certainLangPageData;
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
                  {topTileData.toptitle}
                </h2>
                <div className={styles.toppanorama__titleblock_underline}></div>
              </div>
              <p className={styles.toppanorama__text}>
                {topTileData.topdescript}
              </p>
            </div>
          </div>
          <ProjectsBlock data={projects} />
        </div>
      </div>
    </MainLayout>
  );
};
export default ProjectsAndProducts;
