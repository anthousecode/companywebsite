import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import styles from "./styles.module.scss";
import store from "../../store";
import { onLoadData } from "../actions";
import CompanyBlog from "../../components/blogview/CompanyBlog";

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

  if (!store.getState().certainPageData.certainLangPageData) {
    return null;
  }
  const { companyblog } = store.getState().certainPageData.certainLangPageData;
  return (
    <MainLayout title="Blog Page">
      <CompanyBlog data={companyblog} />
    </MainLayout>
  );
};
export default Blog;
