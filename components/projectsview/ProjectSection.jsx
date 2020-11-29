import Link from "next/link";
import styles from "./styles.module.scss";

const ProjectSection = ({ data }) => {
  return (
    <section className={`${styles.projectsection} col`}>
      <p className={styles.projectsection__subtitle}>{data.subtitle}</p>
      <div className={styles.projectsection__title}>
        <p>{data.title}</p>
        <div></div>
      </div>
      <div className={styles.projectsection__imgblock}>
        <img src={data.img} alt="image" />
      </div>
      <Link href={`/projectsandproducts/${data.id}`}>
        <div className={styles.projectsection__btn}>
          <p>{data.btnText}</p>
          <img src="icons/arrowrightgreen.png" alt="arrowrightgreen" />
        </div>
      </Link>
    </section>
  );
};
export default ProjectSection;
