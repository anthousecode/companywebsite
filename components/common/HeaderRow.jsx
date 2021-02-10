import styles from "./styles.module.scss";

const HeaderRow = ({ title, text }) => {
  return (
    <div className={`${styles.headerrow} row m-0 d-flex justify-content-center`}>
      <div className="col-lg-9 d-flex flex-column align-items-center">
        <div className="w-100 d-flex justify-content-center">
          <div className={styles.headerrow__headerline}></div>
            <h2 className={styles.headerrow__headertitle}>{title}</h2>
          <div className={styles.headerrow__headerline}></div>
        </div>
        <p className={styles.headerrow__headertext}>{text}</p>
      </div>
    </div>
  );
};
export default HeaderRow;
