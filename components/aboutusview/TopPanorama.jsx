import styles from "./styles.module.scss";

const TopAboutUsPanorama = () => {
  return (
    <div className="row toppanorama">
      <div className="col">
        <img
          className={styles.toppanorama__img}
          src="images/aboutus/topaboutuspanorama.png"
          alt="topaboutuspanorama"
        />
      </div>
    </div>
  );
};
export default TopAboutUsPanorama;
