import styles from "./styles.module.scss";

const AdminInputText = ({
  title,
  prop,
  handl,
  value,
  index,
  deepindex,
  deeperindex,
}) => {
  return (
    <div className={styles.admininputtext}>
      {title && <label htmlFor={index + prop}>{title}</label>}
      <input
        type="text"
        name={prop}
        id={index + prop}
        value={value}
        onInput={(e) =>
          handl(e.target.value, prop, index, deepindex, deeperindex)
        }
      />
    </div>
  );
};

export default AdminInputText;
