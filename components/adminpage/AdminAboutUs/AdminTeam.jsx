import AdminInputText from "../../common/AdminInputText";
import AdminTextarea from "../../common/AdminTextarea";
import styles from "../styles.module.scss";

const AdminTeam = ({ stateHandlers, formData }) => {
  return (
    <>
      <section className="mb-3">
        <h2>Наша команда</h2>
        <AdminInputText
          title="Заголовок"
          prop="title"
          handl={stateHandlers.ourTeamHandl}
          value={formData.ourteam.title}
        />
        <AdminInputText
          title="Текст под заголовком"
          prop="underTitleText"
          handl={stateHandlers.ourTeamHandl}
          value={formData.ourteam.underTitleText}
        />
      </section>
      <section className="mb-3">
        <h4>Текст в перечне участников команды</h4>
        {formData.ourteam.developers.map((item, index) => {
          return (
            <div key={index} className="my-3">
              <div className="d-flex mb-n4">
                <h5 className="mr-3 w-50">Участник</h5>
                <button
                  type="button"
                  className={styles.deleteBtn}
                  onClick={() => stateHandlers.onDeleteWorker(index)}
                >
                  Удалить
                </button>
              </div>
              <AdminInputText
                title="Имя"
                prop="name"
                index={index}
                handl={stateHandlers.personDataHandl}
                value={item.name}
              />
              <AdminInputText
                title="Должность"
                prop="ocupation"
                index={index}
                handl={stateHandlers.personDataHandl}
                value={item.ocupation}
              />
              <AdminInputText
                title="Фото"
                prop="photo"
                index={index}
                handl={stateHandlers.personDataHandl}
                value={item.photo}
              />
              <AdminTextarea
                title="Информация о сотруднике"
                prop="persondata"
                handl={stateHandlers.personDataHandl}
                value={item.persondata}
                index={index}
              />
            </div>
          );
        })}
        <button
          type="button"
          className={styles.addBtn}
          onClick={stateHandlers.onAddWorker}
        >
          Добавить участника команды
        </button>
        <hr />
      </section>
    </>
  );
};
export default AdminTeam;
