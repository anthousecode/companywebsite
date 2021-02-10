import AdminInputText from "../../common/AdminInputText";
import AdminTextarea from "../../common/AdminTextarea";
import AdminProjectLinks from "./AdminProjectLinks";
import AdminProjectsTecks from "./AdminProjectsTecks";
import styles from "../styles.module.scss";

const AdminCertainProjects = ({ projects, index, stateHandlers }) => {
  return (
    <div className="my-2">
      <h5 className="mt-5">Список проектов:</h5>
      {projects.map((pr, ind) => {
        return (
          <div key={pr.id} className="my-5">
            <div className="d-flex mb-n4">
              <h5 className="mr-3 w-50">Проект</h5>
              <button
                type="button"
                className={styles.deleteBtn}
                onClick={() => stateHandlers.onDeleteProject(pr.id, index)}
              >
                Удалить
              </button>
            </div>
            <AdminInputText
              title="Заголовок проекта"
              prop="title"
              handl={stateHandlers.inputProject}
              value={pr.title}
              index={index}
              deepindex={ind}
            />
            <AdminInputText
              title="Субзаголовок проекта"
              prop="subtitle"
              handl={stateHandlers.inputProject}
              value={pr.subtitle}
              index={index}
              deepindex={ind}
            />
            <AdminInputText
              title="Адрес картинки"
              prop="img"
              handl={stateHandlers.inputProject}
              value={pr.img}
              index={index}
              deepindex={ind}
            />
            <AdminProjectLinks
              links={pr.activelinks.links}
              stateHandlers={stateHandlers}
              index={index}
              deepindex={ind}
            />
            <AdminProjectsTecks
              tecks={pr.technologies.techs}
              stateHandlers={stateHandlers}
              index={index}
              deepindex={ind}
            />
            <AdminTextarea
              title="Текст описания"
              prop="text"
              handl={stateHandlers.inputProject}
              value={pr.text}
              index={index}
              deepindex={ind}
            />
          </div>
        );
      })}
      <button
        type="button"
        className={styles.addBtn}
        onClick={() => stateHandlers.onAddProject(index)}
      >
        Добавить проект
      </button>
    </div>
  );
};
export default AdminCertainProjects;
