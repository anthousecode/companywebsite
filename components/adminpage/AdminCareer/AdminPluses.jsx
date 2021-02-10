import AdminInputText from "../../common/AdminInputText";
import styles from "../styles.module.scss";

const AdminPluses = ({ stateHandlers, pluses, index }) => {
  return (
    <>
      <h6 className="mt-2">Будет плюсом:</h6>
      {pluses.map((plus, deepindex) => {
        return (
          <div key={deepindex} className="my-1 position-relative">
            <AdminInputText
              prop={null}
              handl={stateHandlers.inputVacHandlPluses}
              value={plus}
              index={index}
              deepindex={deepindex}
            />
            <span
              className={styles.deleteSignString}
              onClick={() => stateHandlers.deletePlus(index, deepindex)}
            >
              +
            </span>
          </div>
        );
      })}
      <div className="mt-2">
        <span
          className={styles.addBtnString}
          onClick={() => stateHandlers.addPlus(index)}
        >
          + добавить плюс
        </span>
      </div>
    </>
  );
};
export default AdminPluses;
