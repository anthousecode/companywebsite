import AdminInputText from "../../common/AdminInputText";
import styles from "../styles.module.scss";

const AdminProjectsTecks = ({ tecks, stateHandlers, index, deepindex }) => {
  return (
    <>
      <h6 className="mt-2 mb-n1">Технологии</h6>
      {tecks.map((teck, deeperindex) => {
        return (
          <div className="my-2 position-relative" key={deeperindex}>
            <AdminInputText
              prop={null}
              handl={stateHandlers.inputProjectTecks}
              value={teck}
              index={index}
              deepindex={deepindex}
              deeperindex={deeperindex}
            />
            <span
              className={styles.deleteSignString}
              onClick={() =>
                stateHandlers.deleteTech(index, deepindex, deeperindex)
              }
            >
              +
            </span>
          </div>
        );
      })}
      <span
        className={styles.addBtnString}
        onClick={() => stateHandlers.addTech(index, deepindex)}
      >
        + добавить ссылку
      </span>
    </>
  );
};
export default AdminProjectsTecks;
