import { useState } from "react";
import AdminSaveBtn from "../../common/AdminSaveBtn";
import AdminToppanorama from "./AdminToppanorama";
import AdminDescription from "./AdminDescription";
import AdminLeadership from "./AdminLeadership";
import AdminTeam from './AdminTeam'
import aboutusdata from "../../../pages/aboutus/aboutusstorage";
import onStateHandlers from "./onStateHandlers";

const AdminAboutUs = () => {
  const [formData, setFormData] = useState(
    JSON.parse(JSON.stringify(aboutusdata.ru))
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
      <AdminDescription stateHandlers={stateHandlers} formData={formData} />
      <AdminLeadership stateHandlers={stateHandlers} formData={formData} />
      <AdminTeam stateHandlers={stateHandlers} formData={formData} />
      <AdminSaveBtn isUpdated={isUpdated} />
    </form>
  );
};
export default AdminAboutUs;
