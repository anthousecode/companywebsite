import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const LeftFooterBlock = ({ data }) => {
  const routeLength = Object.keys(useRouter().query).length;
  const folder = !routeLength
    ? "icons"
    : routeLength === 1
    ? "../icons"
    : "../../icons";
  return (
    <div className="col-md-5 pl-0">
      <h3 className={styles.footer__mainbock_title}>{data.titles.cntUs}</h3>
      <div className={styles.footer__mainbock_data}>
        <p className="d-flex align-items-center mb-0 mr-3">
          <span className={styles.footer__mainbock_data_icon}>
            <img src={`${folder}/phone.svg`} alt="phone" />
          </span>
          <span>{data.phone1}</span>
        </p>
        <p className="d-flex align-items-center mb-0">
          <span className={styles.footer__mainbock_data_icon}>
            <img src={`${folder}/phone.svg`} alt="phone" />
          </span>
          <span>{data.phone1}</span>
        </p>
      </div>
      <div className={styles.footer__mainbock_data}>
        <p className="d-flex align-items-center mb-0">
          <span className={styles.footer__mainbock_data_icon}>
            <img src={`${folder}/envelop.png`} alt="envelop" />
          </span>
          <span>{data.email}</span>
        </p>
      </div>
      <div className={styles.footer__mainbock_data}>
        <p className="d-flex align-items-center mb-0">
          <span className={styles.footer__mainbock_data_icon}>
            <img src={`${folder}/geomark.svg`} alt="geomark" />
          </span>
          <span>{data.place}</span>
        </p>
      </div>
      <div className={`${styles.footer__mainbock_data} mt-4`}>
        <p className="d-flex align-items-center mb-0">
          <span
            className={`${styles.footer__mainbock_data_icon} d-flex align-items-end`}
          >
            <img src={`${folder}/facebook.svg`} alt="facebook" />
          </span>
          <span className={styles.footer__mainbock_data_icon}>
            <img src={`${folder}/skype.svg`} alt="skype" />
          </span>
          <span className={styles.footer__mainbock_data_icon}>in</span>
          <span className={styles.footer__mainbock_data_icon}>
            <img src={`${folder}/googleplus.png`} alt="googleplus" />
          </span>
          <span className={styles.footer__mainbock_data_icon}>
            <img src={`${folder}/up.png`} alt="up" />
          </span>
        </p>
      </div>
    </div>
  );
};
export default LeftFooterBlock;
