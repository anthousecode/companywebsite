import Link from "next/link";
import styles from "./styles.module.scss";

const CertainBlog = ({ data }) => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-9">
        <div className={styles.certainblog}>
          <div className={styles.certainblog__title}>
            <h3>{data.title}</h3>
            <div></div>
          </div>

          <img
            className={styles.certainblog__image}
            src={data.img}
            alt="image"
          />

          <p className={styles.certainblog__text}>{data.text}</p>

          {data.videoUrl && (
            <div className={styles.certainblog__video}>
              <iframe
                width="560"
                height="480"
                src={data.videoUrl}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          )}

          <div className={styles.certainblog__gobackbtn}>
            <Link href="/blog">
              <a>{data.btnGobackText}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CertainBlog;
