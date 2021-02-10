import { useState } from "react";
import blogstorage from "../../../pages/blog/blogstorage";
import onStateHandlers from "./onStateHandlers";
import AdminToppanorama from "./AdminToppanorama";
import AdminBlogData from "./AdminBlogData";
import AdminSaveBtn from "../../common/AdminSaveBtn";

const AdminBlog = () => {
  const [formData, setFormData] = useState(
    JSON.parse(JSON.stringify(blogstorage.ru))
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
      <AdminBlogData stateHandlers={stateHandlers} formData={formData} />
      <AdminSaveBtn isUpdated={isUpdated} />
    </form>
  );
};
export default AdminBlog;
