import styles from "./styles.module.scss";

const LeftFooterBlock = ({ data }) => {
  return (
    <div className="col-5 pl-0">
      <h3 className={styles.footer__mainbock_title}>{data.titles.cntUs}</h3>
      <div className={styles.footer__mainbock_data}>
        <p className="d-flex align-items-center mb-0 mr-3">
          <span className={styles.footer__mainbock_data_icon}>
            <img src="/images/common/phone.svg" alt="phone" />
          </span>
          <span>{data.phone1}</span>
        </p>
        <p className="d-flex align-items-center mb-0">
          <span className={styles.footer__mainbock_data_icon}>
            <img src="/images/common/phone.svg" alt="phone" />
          </span>
          <span>{data.phone1}</span>
        </p>
      </div>
      <div className={styles.footer__mainbock_data}>
        <p className="d-flex align-items-center mb-0">
          <span className={styles.footer__mainbock_data_icon}>
            <img src="/images/common/envelop.png" alt="envelop" />
          </span>
          <span>{data.email}</span>
        </p>
      </div>
      <div className={styles.footer__mainbock_data}>
        <p className="d-flex align-items-center mb-0">
          <span className={styles.footer__mainbock_data_icon}>
            <img src="/images/common/geomark.svg" alt="geomark" />
          </span>
          <span>{data.place}</span>
        </p>
      </div>
      <div className={`${styles.footer__mainbock_data} mt-4`}>
        <p className="d-flex align-items-center mb-0">
          <span
            className={`${styles.footer__mainbock_data_icon} d-flex align-items-end`}
          >
            <img src="/images/common/facebook.svg" alt="facebook" />
          </span>
          <span className={styles.footer__mainbock_data_icon}>
            <img src="/images/common/skype.svg" alt="skype" />
          </span>
          <span className={styles.footer__mainbock_data_icon}>in</span>
          <span className={styles.footer__mainbock_data_icon}>
            <img src="/images/common/googleplus.png" alt="googleplus" />
          </span>
          <span className={styles.footer__mainbock_data_icon}>
            <img src="/images/common/up.png" alt="up" />
          </span>
        </p>
      </div>
    </div>
  );
};
export default LeftFooterBlock;
