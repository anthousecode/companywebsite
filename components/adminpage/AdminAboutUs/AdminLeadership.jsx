import AdminInputText from "../../common/AdminInputText";
import AdminTextarea from "../../common/AdminTextarea";
import styles from "../styles.module.scss";

const AdminLeadership = ({ stateHandlers, formData }) => {
  return (
    <section className="mb-3">
      <h2>Руководство</h2>
      <AdminInputText
        title="Заголовок"
        prop="title"
        handl={stateHandlers.rulersHandl}
        value={formData.leadership.title}
      />
      <AdminInputText
        title="Текст под заголовком"
        prop="underTitleText"
        handl={stateHandlers.rulersHandl}
        value={formData.leadership.underTitleText}
      />
      {formData.leadership.leaders.map((leader, index) => (
        <div key={index} className="my-3">
          <div className="d-flex mb-n4">
            <h5 className="w-50 mr-3">Руководитель</h5>
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={() => stateHandlers.onDeleteRuller(index)}
            >
              Удалить
            </button>
          </div>

          <AdminInputText
            title="Имя"
            prop="name"
            handl={stateHandlers.rulersDataHandl}
            value={leader.name}
            index={index}
          />
          <AdminInputText
            title="Должность"
            prop="ocupation"
            handl={stateHandlers.rulersDataHandl}
            value={leader.ocupation}
            index={index}
          />
          <AdminInputText
            title="Телефон"
            prop="phone"
            handl={stateHandlers.rulersDataHandl}
            value={leader.phone}
            index={index}
          />
          <AdminInputText
            title="Телефон"
            prop="email"
            handl={stateHandlers.rulersDataHandl}
            value={leader.email}
            index={index}
          />
          <AdminTextarea
            title="Информация о руководителе (от руководителя)"
            prop="description"
            handl={stateHandlers.rulersDataHandl}
            value={leader.description}
            index={index}
          />
        </div>
      ))}
      <button
        type="button"
        className={styles.addBtn}
        onClick={stateHandlers.onAddRuller}
      >
        Добавить руководителя
      </button>
      <hr />
    </section>
  );
};
export default AdminLeadership;
