import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const CertainProject = ({ data }) => {
  const router = useRouter();
  const { certainProjects } = router.query;
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-lg-9">
        <div className={styles.certainproject}>
          <p className={styles.certainproject__subtitle}>{data.subtitle}</p>

          <div className={styles.certainproject__title}>
            <h3>{data.title}</h3>
            <div></div>
          </div>

          <img
            className={styles.certainproject__image}
            src={data.img}
            alt="image"
          />

          <div className={styles.certainproject__technology}>
            <div className={styles.certainproject__technology_title}>
              <p>{data.technologies.title}</p>
              <div></div>
            </div>
            <p className={styles.certainproject__technology_data}>
              {data.technologies.techs.join(" | ")}
            </p>
          </div>

          <div className={styles.certainproject__link}>
            <div className={styles.certainproject__link_title}>
              <p>{data.activelinks.title}</p>
              <div></div>
            </div>
            <p className={styles.certainproject__link_links}>
              {data.activelinks.links.map((link, index) => (
                <a key={index} href={link}>
                  {link}
                </a>
              ))}
            </p>
          </div>

          <p className={styles.certainproject__text}>{data.text}</p>
          <div className={styles.certainproject__gobackbtn}>
            <Link href={`/projectsandproducts/${certainProjects}`}>
              <a>{data.btnGobackText}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CertainProject;
