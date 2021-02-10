import AdminInputText from "../../common/AdminInputText";

const AdminFormData = ({ stateHandlers, formData }) => {
  return (
    <section className="mb-3">
      <h2>Данные, связанные с формой</h2>
      <AdminInputText
        title="Заголовок"
        prop="title"
        handl={stateHandlers.inputVacHandl}
        value={formData.contactusData.title}
      />
      <AdminInputText
        title="Описание под заголовком"
        prop="underTitleText"
        handl={stateHandlers.inputVacHandl}
        value={formData.contactusData.underTitleText}
      />
      <hr />
    </section>
  );
};
export default AdminFormData;
