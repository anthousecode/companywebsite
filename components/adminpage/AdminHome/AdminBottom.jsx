import AdminInputText from "../../common/AdminInputText";
import AdminTextarea from "../../common/AdminTextarea";

const AdminBottom = ({ stateHandlers, formData }) => {
  return (
    <section className="mb-3">
      <h2>Данные нижнего блока</h2>
      <AdminInputText
        title="Заголовок"
        prop="title"
        handl={stateHandlers.bottomBlckHandl}
        value={formData.bottomData.title}
      />
      <AdminInputText
        title="Текст под заголовком"
        prop="underlineText"
        handl={stateHandlers.bottomBlckHandl}
        value={formData.bottomData.underlineText}
      />
      <AdminTextarea
        title="Текст"
        prop="text"
        handl={stateHandlers.bottomBlckHandl}
        value={formData.bottomData.text}
      />
      <hr />
    </section>
  );
};
export default AdminBottom;
