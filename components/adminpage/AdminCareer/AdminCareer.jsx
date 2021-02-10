import { useState } from "react";
import careerstorage from "../../../pages/career/careerstorage";
import onStateHandlers from "./onStateHandlers";
import AdminToppanorama from "./AdminToppanorama";
import AdminVacancies from "./AdminVacancies";
import AdminSaveBtn from "../../common/AdminSaveBtn";

const AdminCareer = () => {
  const [formData, setFormData] = useState(
    JSON.parse(JSON.stringify(careerstorage.ru))
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
      <AdminVacancies
        stateHandlers={stateHandlers}
        formData={formData}
        isUpdated={isUpdated}
      />
      <AdminSaveBtn isUpdated={isUpdated} />
    </form>
  );
};
export default AdminCareer;
