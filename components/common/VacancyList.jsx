import styles from "./styles.module.scss";

const VacancyList = ({ title, list }) => {
  return (
    <div className={styles.datablock}>
      <div className={styles.datablock_curtitleblock}>
        <p>{title}</p>
        <div></div>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <span></span>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default VacancyList;
