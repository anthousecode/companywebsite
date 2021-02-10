import AdminInputText from "../../common/AdminInputText";

const AdminProjects = ({ stateHandlers, formData }) => {
  return (
    <section className="mb-3">
      <h2>Раздел нашиx проектов (с каруселью)</h2>
      <AdminInputText
        title="Заголовок"
        prop="title"
        handl={stateHandlers.projectsHandl}
        value={formData.ourprojects.title}
      />
      <AdminInputText
        title="Текст под заголовком"
        prop="underTitleText"
        handl={stateHandlers.projectsHandl}
        value={formData.ourprojects.underTitleText}
      />
      {formData.ourprojects.carouselImages.map((item, index) => {
        return (
          <AdminInputText
            key={item.id}
            title="Url aдрес картинки"
            prop={index}
            handl={stateHandlers.prUrlsHandl}
            value={item.src}
          />
        );
      })}
      <hr />
    </section>
  );
};
export default AdminProjects;
