import AdminInputText from "../../common/AdminInputText";

const AdminToppanorama = ({ stateHandlers, formData }) => {
  return (
    <section className="mb-3">
      <h2>Заглавный текст на пaнораме</h2>
      <AdminInputText
        title="Заголовок"
        prop="toptitle"
        handl={stateHandlers.inputHandl} 
        value={formData.toptitle}
      />
      <AdminInputText
        title="Описание под заголовком"
        prop="topdescript"
        handl={stateHandlers.inputHandl}
        value={formData.topdescript}
      />
      <hr />
    </section>
  );
};
export default AdminToppanorama;
