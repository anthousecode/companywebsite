import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import store from "../../store";
import { onLoadData } from "../actions";
import CertainBlog from "../../components/blogview/CertainBlog";

const certainBlog = () => {
  const { dispatch } = store;
  const [data, setData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const language = store.getState().certainPageData.certainLangPageData
      ? store.getState().certainPageData.certainLangPageData.lang
      : "en";
    dispatch(onLoadData("/blog", language));
    setData(language);
  }, [data]);
  const { certainBlog } = router.query;
  if (
    !store.getState().certainPageData.certainLangPageData ||
    !store.getState().certainPageData.certainLangPageData.companyblog ||
    !certainBlog
  ) {
    return null;
  }
  const certainData = store
    .getState()
    .certainPageData.certainLangPageData.companyblog.blogs.find(
      (elem) => elem.id === certainBlog
    );
  return (
    <MainLayout title="Certain Project/Product Page">
      <CertainBlog data={certainData} />
    </MainLayout>
  );
};
export default certainBlog;
