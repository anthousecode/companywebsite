import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import store from "../../store";
import { onLoadData } from "../actions";
import CertainVacancy from "../../components/careerview/CertainVacancy";

const certainVacancy = () => {
  const router = useRouter();
  const { dispatch } = store;
  const [data, setData] = useState(null);
  useEffect(() => {
    const language = store.getState().certainPageData.certainLangPageData
      ? store.getState().certainPageData.certainLangPageData.lang
      : "en";
    dispatch(onLoadData("/career", language));
    setData(language);
  }, [data]);
  const { certainVacancy } = router.query;
  if (
    !store.getState().certainPageData.certainLangPageData ||
    !store.getState().certainPageData.certainLangPageData.career ||
    !certainVacancy
  ) {
    return null;
  }
  return (
    <MainLayout title="Blog Page">
      <div className="row d-flex justify-content-center">
        <div className="col-9 p-0">
          <CertainVacancy />
        </div>
      </div>
    </MainLayout>
  );
};
export default certainVacancy;
