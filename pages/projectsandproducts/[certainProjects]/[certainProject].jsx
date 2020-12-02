import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../../layouts/MainLayout";
import CertainProject from "../../../components/projectsview/CertainProject";
import store from "../../../store";
import { onLoadData } from "../../actions";

const certainProject = () => {
  const { dispatch } = store;
  const [data, setData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const language = store.getState().certainPageData.certainLangPageData
      ? store.getState().certainPageData.certainLangPageData.lang
      : "en";
    dispatch(onLoadData("/projectsandproducts", language));
    setData(language);
  }, [data]);
  const { certainProjects, certainProject } = router.query;
  if (
    !store.getState().certainPageData.certainLangPageData ||
    !store.getState().certainPageData.certainLangPageData.allProjects ||
    !certainProject
  ) {
    return null;
  }
  const certainProjectsData = Object.values(
    store.getState().certainPageData.certainLangPageData.allProjects
  ).find((elem) => elem.id === certainProjects);
  const certainData = certainProjectsData.projects.find(item => item.id === certainProject);
  return (
    <MainLayout title="Certain Project/Product Page">
      <CertainProject data={certainData} />
    </MainLayout>
  );
};
export default certainProject;
