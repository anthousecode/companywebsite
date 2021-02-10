import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const ProjectSection = ({ data }) => {
  const router = useRouter();
  const { certainProjects } = router.query;
  const arrowPath = certainProjects
    ? "../icons/arrowrightgreen.png"
    : "icons/arrowrightgreen.png";
  const linkPath = certainProjects
    ? `/projectsandproducts/${certainProjects}/${data.id}`
    : `/projectsandproducts/${data.id}`;
  return (
    <section className={`${styles.projectsection} col-md-6`}>
      <p className={styles.projectsection__subtitle}>{data.subtitle}</p>
      <div className={styles.projectsection__title}>
        <p>{data.title}</p>
        <div></div>
        {data.title.length > 52 && <span>{data.title}</span>}
      </div>
      <div className={styles.projectsection__imgblock}>
        <img src={data.img} alt="image" />
      </div>
      <Link href={linkPath}>
        <div className={styles.projectsection__btn}>
          <p>{data.btnText}</p>
          <img src={arrowPath} alt="arrowrightgreen" />
        </div>
      </Link>
    </section>
  );
};
export default ProjectSection;
