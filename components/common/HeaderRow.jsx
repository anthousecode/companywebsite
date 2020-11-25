import styles from "./styles.module.scss";

const HeaderRow = ({ title, text }) => {
  return (
    <div className={`${styles.headerrow} row d-flex justify-content-center`}>
      <div className="col-9 d-flex flex-column align-items-center">
        <div className="row w-100 justify-content-center">
          <div className={`${styles.headerrow__headerline} col-4`}></div>
          <div className="mx-2 d-flex flex-column align-items-center col-3 p-0">
            <h2 className={styles.headerrow__headertitle}>{title}</h2>
            {/* <p className={styles.headerrow__headertext}>{text}</p> */}
          </div>
          <div className={`${styles.headerrow__headerline} col-4`}></div>
        </div>
        <p className={styles.headerrow__headertext}>{text}</p>
      </div>
    </div>
  );
};
export default HeaderRow;
