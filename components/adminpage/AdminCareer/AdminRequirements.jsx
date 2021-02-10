import AdminInputText from "../../common/AdminInputText";
import styles from "../styles.module.scss";

const AdminRequirements = ({ stateHandlers, requirements, index }) => {
  return (
    <>
      <h6 className="mt-2">Требования:</h6>
      {requirements.map((req, deepindex) => {
        return (
          <div key={deepindex} className="my-1 position-relative">
            <AdminInputText
              prop={null}
              handl={stateHandlers.inputVacHandlRequirements}
              value={req}
              index={index}
              deepindex={deepindex}
            />
            <span
              className={styles.deleteSignString}
              onClick={() => stateHandlers.deleteReq(index, deepindex)}
            >
              +
            </span>
          </div>
        );
      })}
      <div className="mt-2">
        <span
          className={styles.addBtnString}
          onClick={() => stateHandlers.addReq(index)}
        >
          + добавить требование
        </span>
      </div>
    </>
  );
};
export default AdminRequirements;
