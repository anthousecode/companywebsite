import { Accordion, Card } from "react-bootstrap";
import AdminInputText from "../../common/AdminInputText";
import AdminTextarea from "../../common/AdminTextarea";
import AdminPluses from "./AdminPluses";
import AdminRequirements from "./AdminRequirements";
import AdminResp from "./AdminResp";
import AdminCheckBox from "./AdminCheckBox";
import AdminSaveBtn from "../../common/AdminSaveBtn";
import styles from "../styles.module.scss";

const AdminVacanciesList = ({ stateHandlers, formData, isUpdated }) => {
  return (
    <Accordion>
      <h4 className="my-3">Список вакансий:</h4>
      {formData.career.vacancies.map((vac, index) => {
        return (
          <Card key={vac.id}>
            <div className={styles.accordionlist__btn}>
              <Accordion.Toggle variant="link" eventKey={vac.id}>
                {vac.name || "Укажите название вакансии"}
              </Accordion.Toggle>
              <button
                className={styles.accordionlist__btn_delete}
                type="button"
                onClick={() => stateHandlers.onDeleteVac(vac.id)}
              >
                Delete
              </button>
            </div>
            <Accordion.Collapse eventKey={vac.id}>
              <Card.Body>
                <div key={vac.id}>
                  <AdminInputText
                    title="Название"
                    prop="name"
                    handl={stateHandlers.inputVacHandl}
                    value={vac.name}
                    index={index}
                  />
                  <AdminInputText
                    title="Подзаголовок"
                    prop="subtitle"
                    handl={stateHandlers.inputVacHandl}
                    value={vac.subtitle}
                    index={index}
                  />
                  <AdminTextarea
                    title="Описание вакансии"
                    prop="description"
                    handl={stateHandlers.inputVacHandl}
                    value={vac.description}
                    index={index}
                  />
                  <AdminTextarea
                    title="Бонус текст"
                    prop="bonusText"
                    handl={stateHandlers.inputVacHandl}
                    value={vac.bonusText}
                    index={index}
                  />
                  <AdminPluses
                    pluses={vac.nicetohave}
                    stateHandlers={stateHandlers}
                    index={index}
                  />
                  <AdminRequirements
                    requirements={vac.requirements}
                    stateHandlers={stateHandlers}
                    index={index}
                  />
                  <AdminResp
                    responsibilities={vac.responsibilities}
                    stateHandlers={stateHandlers}
                    index={index}
                  />
                  <AdminCheckBox
                    stateHandlers={stateHandlers}
                    index={index}
                    vac={vac}
                  />
                </div>
                <AdminSaveBtn isUpdated={isUpdated} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
};
export default AdminVacanciesList;
