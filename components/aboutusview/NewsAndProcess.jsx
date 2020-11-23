import styles from "./styles.module.scss";

const NewsAndProcess = () => {
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
              <section className={styles.newsandprocess__processblock}>
                <div>
                    <p>How we work</p>
                    <img src="images/aboutus/selectarrow.png" alt="selectarrow"/>
                </div>
                <div></div>
                <div></div>
              </section>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default NewsAndProcess;
