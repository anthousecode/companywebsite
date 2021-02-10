import AdminInputText from "../../common/AdminInputText";
import styles from "../styles.module.scss";

const AdminProjectLinks = ({ links, stateHandlers, index, deepindex }) => {
  return (
    <>
      <h6 className="mt-2 mb-n1">Ссылки на проект</h6>
      {links.map((link, deeperindex) => {
        return (
          <div className="my-2 position-relative" key={deeperindex}>
            <AdminInputText
              prop={null}
              handl={stateHandlers.inputProjectLinks}
              value={link}
              index={index}
              deepindex={deepindex}
              deeperindex={deeperindex}
            />
            <span
              className={styles.deleteSignString}
              onClick={() =>
                stateHandlers.deleteLink(index, deepindex, deeperindex)
              }
            >
              +
            </span>
          </div>
        );
      })}
      <span
        className={styles.addBtnString}
        onClick={() => stateHandlers.addLink(index, deepindex)}
      >
        + добавить ссылку
      </span>
    </>
  );
};
export default AdminProjectLinks;
