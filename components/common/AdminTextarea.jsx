import styles from "./styles.module.scss";

const AdminTextarea = ({
  title,
  prop,
  handl,
  value,
  index,
  deepindex,
  deeperindex,
}) => {
  return (
    <div className={styles.admintextarea}>
      {title && <label htmlFor={index + prop}>{title}</label>}
      <textarea
        name={prop}
        id={index + prop}
        value={value}
        onInput={(e) =>
          handl(e.target.value, prop, index, deepindex, deeperindex)
        }
      ></textarea>
    </div>
  );
};
export default AdminTextarea;
