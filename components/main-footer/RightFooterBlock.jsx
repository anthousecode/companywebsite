import styles from "./styles.module.scss";

const RightFooterBlock = ({ data }) => {
  return (
    <div className="col-7 pl-0">
      <h3 className={styles.footer__mainbock_title}>{data.titles.abUs}</h3>
      <p className={styles.footer__mainbock_text}>{data.mainText}</p>
      <p className={styles.footer__mainbock_text}>
        &#169; 2017, ANT HOUSE, Inc. {data.protectText}
      </p>
    </div>
  );
};
export default RightFooterBlock;
