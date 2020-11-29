import React, { useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import VacancyList from "../common/ValancyList";

const CertainVacancy = (props) => {
  const descriptionOfVacancy = React.createRef();
  const router = useRouter();
  const { certainVacancy } = router.query;
  const data = props.stateForVacancy.career.vacancies.find(
    (elem) => elem.id === certainVacancy
  );
  if (!data) {
    Router.push("/404");
    return null;
  }
  useEffect(() => {
    descriptionOfVacancy.current.innerHTML = data.description;
    descriptionOfVacancy.current.children[0].innerHTML = data.getBoldName();
  }, [props.stateForVacancy.lang]);

  return (
    <div className={styles.certainvacancy}>
      <p className={styles.certainvacancy__subtitle}>{data.subtitle}</p>

      <div className={styles.certainvacancy__maintitleblock}>
        <p>{data.name}</p>
        <div></div>
      </div>

      <div className={styles.certainvacancy__datablock}>
        <div className={styles.certainvacancy__datablock_curtitleblock}>
          <p>{data.descriptionTitle}</p>
          <div></div>
        </div>
        <p ref={descriptionOfVacancy}></p>
      </div>

      <VacancyList
        title={data.responsibilitiesTitle}
        list={data.responsibilities}
      />
      <VacancyList title={data.requirementsTitle} list={data.requirements} />
      <VacancyList title={data.nicetohaveTitle} list={data.nicetohave} />

      <div className={styles.certainvacancy__gobackbtn}>
        <Link href="/career">
          <a>Go back</a>
        </Link>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    stateForVacancy: state.certainPageData.certainLangPageData,
  };
};

export default connect(mapState)(CertainVacancy);
