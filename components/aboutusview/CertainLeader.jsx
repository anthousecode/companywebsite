import styles from "./styles.module.scss";

const CertainLeader = ({ data }) => {
  return (
    <section className={styles.leadership__leaderdata}>
      <div className={styles.leadership__leaderdata_avatar}>
        <img src="images/aboutus/avatarplace.png" alt="avatarplace" />
      </div>
      <div className={styles.leadership__leaderdata_data}>
        <h3 className={styles.leadership__leaderdata_data_name}>{data.name}</h3>
        <p className={styles.leadership__leaderdata_data_ocupation}>
          {data.ocupation}
        </p>
        <p className={styles.leadership__leaderdata_data_text}>
          {data.description}
        </p>

        <div className={styles.leadership__leaderdata_data_bottom}>
          <div className="w-50 d-flex justify-content-between">
            <p className="d-flex align-items-center mb-0">
              <span className={styles.icon}>
                <img src="icons/phonewhite.svg" alt="phonewhite" />
              </span>
              <span>{data.phone}</span>
            </p>
            <p className="d-flex align-items-center mb-0">
              <span className={styles.icon}>
                <img src="icons/envelopblack.png" alt="envelop" />
              </span>
              <span>{data.email}</span>
            </p>
          </div>
          <div className="w-50 d-flex justify-content-end">
            <span className={styles.iconleftfacebook}>
              <img src="icons/facebookwhite.svg" alt="facebookwhite" />
            </span>
            <span className={styles.iconleft}>
              <img src="icons/skypewhite.svg" alt="skypewhite" />
            </span>
            <span className={styles.iconleftin}>in</span>
            <span className={styles.iconleft}>
              <img src="icons/googlepluswhite.png" alt="googlepluswhite" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CertainLeader;
