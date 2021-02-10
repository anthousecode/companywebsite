import { useState } from "react";
import contactusstorage from "../../../pages/contactus/contactusstorage";
import onStateHandlers from "./onStateHandlers";
import AdminToppanorama from "./AdminToppanorama";
import AdminFormData from "./AdminFormData";
import AdminSaveBtn from "../../common/AdminSaveBtn";

const AdminContactUs = () => {
  const [formData, setFormData] = useState(
    JSON.parse(JSON.stringify(contactusstorage.ru))
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
      <AdminFormData stateHandlers={stateHandlers} formData={formData} />
      <AdminSaveBtn isUpdated={isUpdated} />
    </form>
  );
};
export default AdminContactUs;
