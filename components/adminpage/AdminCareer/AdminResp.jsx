import AdminInputText from "../../common/AdminInputText";
import styles from "../styles.module.scss";

const AdminResp = ({ stateHandlers, responsibilities, index }) => {
  return (
    <>
      <h6 className="mt-2">Обязанности:</h6>
      {responsibilities.map((res, deepindex) => {
        return (
          <div key={deepindex} className="my-1 position-relative">
            <AdminInputText
              prop={null}
              handl={stateHandlers.inputVacHandlResp}
              value={res}
              index={index}
              deepindex={deepindex}
            />
            <span
              className={styles.deleteSignString}
              onClick={() => stateHandlers.deleteRes(index, deepindex)}
            >
              +
            </span>
          </div>
        );
      })}
      <div className="mt-2">
        <span
          className={styles.addBtnString}
          onClick={() => stateHandlers.addRes(index)}
        >
          + добавить обязанность
        </span>
      </div>
    </>
  );
};
export default AdminResp;
