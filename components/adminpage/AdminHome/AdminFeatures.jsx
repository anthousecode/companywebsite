import AdminInputText from "../../common/AdminInputText";
import AdminTextarea from "../../common/AdminTextarea";

const AdminFeatures = ({ stateHandlers, formData }) => {
  return (
    <>
      <section className="mb-3">
        <h2>Особенности</h2>
        <AdminInputText
          title="Заголовок"
          prop="title"
          handl={stateHandlers.featuresHandl}
          value={formData.features.title}
        />
        <AdminInputText
          title="Текст под заголовком"
          prop="underTitleText"
          handl={stateHandlers.featuresHandl}
          value={formData.features.underTitleText}
        />
      </section>

      <section className="mb-3">
        <h4>Текст в перечне особенностей</h4>
        {formData.features.first.map((item, index) => {
          return (
            <AdminTextarea
              key={index}
              title={item.title}
              prop={index}
              handl={stateHandlers.featListHandl}
              value={item.text}
            />
          );
        })}
        <hr />
      </section>
    </>
  );
};
export default AdminFeatures;
