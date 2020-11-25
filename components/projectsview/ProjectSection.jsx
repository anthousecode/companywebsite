import styles from "./styles.module.scss";

const ProjectSection = ({ data }) => {
  return (
    <section className={`${styles.projectsection} row`}>
      <div className="col-4">
        <div className={styles.projectscarousel__imgblock}>
          <img src={data.img} alt="image" />
        </div>
      </div>
      <div className="col-8">
        <div className={styles.projectscarousel__descriptblock}>
          <p className={styles.projectscarousel__descriptblock_subtitle}>
            {data.subtitle}
          </p>
          <div className={styles.projectscarousel__descriptblock_title}>
            <p>{data.title}</p>
            <div></div>
          </div>
          <p className={styles.projectscarousel__descriptblock_text}>
            {data.text}
          </p>
          <div className={styles.projectscarousel__descriptblock_btn}>
            <p>{data.btnText}</p>
            <img src="icons/arrowrightgreen.png" alt="arrowrightgreen" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
