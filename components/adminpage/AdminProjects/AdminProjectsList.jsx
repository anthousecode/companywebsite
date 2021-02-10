import { Accordion, Card } from "react-bootstrap";
import AdminSaveBtn from "../../common/AdminSaveBtn";
import AdminInputText from "../../common/AdminInputText";
import AdminCertainProjects from "./AdminCertainProjects";
import styles from "../styles.module.scss";

const AdminProjectsList = ({
  stateHandlers,
  allProjects,
  isUpdated,
}) => {
  return (
    <section className={styles.accordionlist}>
      <h2>Проекты</h2>
      <Accordion>
        {allProjects.map((projects, index) => {
          return (
            <Card key={projects.id}>
              <div className={styles.accordionlist__btn}>
                <Accordion.Toggle variant="link" eventKey={projects.id}>
                  {projects.subtitle || "Укажите тип проектов"}
                </Accordion.Toggle>
                <button
                  className={styles.accordionlist__btn_delete}
                  type="button"
                  onClick={() => stateHandlers.onDeleteProjects(projects.id)}
                >
                  Delete
                </button>
              </div>
              <Accordion.Collapse eventKey={projects.id}>
                <Card.Body>
                  <h4 className="mb-n2">Тип проектов</h4>
                  <AdminInputText
                    title="Заголовок типа проектов"
                    prop="title"
                    handl={stateHandlers.inputProjectTopLevel}
                    value={projects.title}
                    index={index}
                  />
                  <AdminInputText
                    title="Субзаголовок типа проектов"
                    prop="subtitle"
                    handl={stateHandlers.inputProjectTopLevel}
                    value={projects.subtitle}
                    index={index}
                  />
                  <AdminInputText
                    title="Ресурс картинки"
                    prop="img"
                    handl={stateHandlers.inputProjectTopLevel}
                    value={projects.img}
                    index={index}
                  />
                  <AdminCertainProjects
                    index={index}
                    stateHandlers={stateHandlers}
                    projects={projects.projects}
                  />
                  <AdminSaveBtn isUpdated={isUpdated} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </section>
  );
};
export default AdminProjectsList;
