import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import store from "../../store";
import { onLoadData } from "../actionsPages";

const UserPage = () => {
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
  const { text } = store.getState().certainPageData.certainLangPageData;
  return (
    <MainLayout title="User Page">
      <div className="row justify-content-center py-5">
        <div className="col-lg-9">
          <p>{text}</p>
        </div>
      </div>
    </MainLayout>
  );
};
export default UserPage;
