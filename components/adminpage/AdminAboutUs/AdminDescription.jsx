import AdminInputText from "../../common/AdminInputText";
import AdminTextarea from "../../common/AdminTextarea";

const AdminDescription = ({ stateHandlers, formData }) => {
  return (
    <section className="mb-3">
      <h2>Описание</h2>
      <AdminInputText
        title="Заголовок"
        prop="title"
        handl={stateHandlers.descrHandl}
        value={formData.description.title}
      />
      <AdminInputText
        title="Текст под заголовком"
        prop="underTitleText"
        handl={stateHandlers.descrHandl}
        value={formData.description.underTitleText}
      />
      <AdminTextarea
        title="Текст с описанием"
        prop="text"
        handl={stateHandlers.descrHandl}
        value={formData.description.text}
      />
      <hr />
    </section>
  );
};
export default AdminDescription;
