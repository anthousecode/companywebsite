import { useState } from "react";
import AdminSaveBtn from "../../common/AdminSaveBtn";
import AdminToppanorama from "./AdminToppanorama";
import AdminFeatures from "./AdminFeatures";
import AdminProjects from "./AdminProjects";
import AdminBottom from "./AdminBottom";
import homedata from "../../../pages/home/homestorage";
import onStateHandlers from "./onStateHandlers";

const AdminHome = () => {
  const [formData, setFormData] = useState(
    JSON.parse(JSON.stringify(homedata.ru))
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
      <AdminFeatures stateHandlers={stateHandlers} formData={formData} />
      <AdminProjects stateHandlers={stateHandlers} formData={formData} />
      <AdminBottom stateHandlers={stateHandlers} formData={formData} />
      <AdminSaveBtn isUpdated={isUpdated} />
    </form>
  );
};
export default AdminHome;
