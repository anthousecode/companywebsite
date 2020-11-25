import HeaderRow from "../common/HeaderRow";
import styles from "./styles.module.scss";

const BottomPanorama = ({ data }) => {
  return (
    <div className={`${styles.bottompanorama} row`}>
      <div className="col d-flex justify-content-center">
        <div className={styles.insideblock}>
          <section className={styles.titlerow}>
            <div className={styles.titlerow__line}></div>
            <div className={styles.titlerow__titleblock}>
              <h2 className={styles.titlerow__titleblock_title}>
                {data.title}
              </h2>
              <p className={styles.titlerow__titleblock_underlinetext}>
                {data.underlineText}
              </p>
            </div>
            <div className={styles.titlerow__line}></div>
          </section>
          <p className={styles.textrow}>{data.text}</p>
          <div className={styles.btn}>
            <span>{data.btnText}</span>
            <img src="/icons/arrowright.png" alt="arrowright" />
          </div>
        </div>
        <div className={styles.bottompanorama__wrappone}>
          <div className={styles.bottompanorama__wrapptwo}></div>
        </div>
      </div>
    </div>
  );
};
export default BottomPanorama;
