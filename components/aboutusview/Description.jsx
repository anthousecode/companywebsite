import HeaderRow from "../common/HeaderRow";
import styles from "./styles.module.scss";

const Description = ({ data }) => {
  if (!data) return null;
  return (
    <div
      className={`${styles.newsandprocess} row d-flex justify-content-center`}
    >
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />
        <div className="row d-flex justify-content-center">
          <section className="col-9">
            <p>{data.text}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Description;
