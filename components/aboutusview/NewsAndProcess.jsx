import SelectBlock from "./SelectBlock";
import styles from "./styles.module.scss";

const NewsAndProcess = ({ data }) => {
  return (
    <div
      className={`${styles.newsandprocess} row d-flex justify-content-center`}
    >
      <div className="col-9">
        <div className="row">
          <aside className="col">
            <section className={styles.newsandprocess__newsblock}>
              <img
                src="images/aboutus/companynewsbgc.png"
                alt="companynewsbgc"
              />
            </section>
          </aside>

          <aside className="col pr-0">
            {data.map((item, index) => (
              <SelectBlock key={index} data={item} />
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
};
export default NewsAndProcess;
