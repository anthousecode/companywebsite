import styles from "./styles.module.scss";

const AdminSaveBtn = ({ isUpdated }) => {
  return (
    <div className={styles.adminsavebtn}>
      <button type="submit">Сохранить</button>
      {isUpdated && <span>Изменения сохранены</span>}
    </div>
  );
};

export default AdminSaveBtn;
