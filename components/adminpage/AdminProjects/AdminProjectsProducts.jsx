import { useState } from "react";
import projectsdata from "../../../pages/projectsandproducts/projectsstorage";
import onStateHandlers from "./onStateHandlers";
import AdminToppanorama from "./AdminToppanorama";
import AdminProjectsList from "./AdminProjectsList";
import AdminSaveBtn from "../../common/AdminSaveBtn";
import styles from "../styles.module.scss";

const AdminProjectsProducts = () => {
  const [formData, setFormData] = useState(
    JSON.parse(JSON.stringify(projectsdata.ru))
  );
  const [isUpdated, setIsUpdated] = useState(false);
  const stateHandlers = onStateHandlers(formData, setFormData);
  function onSaveData(e) {
    e.preventDefault();
    setIsUpdated(true);
    setTimeout(() => setIsUpdated(false), 2000);
  }
  return (
    <form onSubmit={onSaveData}>
      <AdminToppanorama stateHandlers={stateHandlers} formData={formData} />
      <AdminProjectsList
        stateHandlers={stateHandlers}
        allProjects={formData.allProjects}
        isUpdated={isUpdated}
      />
      <button
        className={styles.addBtn}
        type="button"
        onClick={stateHandlers.onAddProjectsType}
      >
        Добьавить тип проектов
      </button>
      <hr />
      <AdminSaveBtn isUpdated={isUpdated} />
    </form>
  );
};
export default AdminProjectsProducts;
