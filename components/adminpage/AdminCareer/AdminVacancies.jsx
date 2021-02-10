import AdminInputText from "../../common/AdminInputText";
import AdminVacanciesList from "./AdminVacanciesList";
import styles from "../styles.module.scss";

const AdminVacancies = ({ stateHandlers, formData, isUpdated }) => {
  return (
    <section className="mb-3">
      <h2>Вакансии</h2>
      <AdminInputText
        title="Заголовок"
        prop="toptitle"
        handl={stateHandlers.inputHandl}
        value={formData.career.title}
      />
      <AdminInputText
        title="Описание под заголовком"
        prop="underTitleText"
        handl={stateHandlers.inputHandl}
        value={formData.career.underTitleText}
      />
      <AdminVacanciesList
        stateHandlers={stateHandlers}
        formData={formData}
        isUpdated={isUpdated}
      />
      <button
        className={styles.addBtn}
        type="button"
        onClick={stateHandlers.addVacancy}
      >
        Добавить вакансию
      </button>
      <hr />
    </section>
  );
};
export default AdminVacancies;
