import Link from "next/link";
import styles from "./styles.module.scss";

const BlogSection = ({ data }) => {
  return (
    <section className={`${styles.blogblock} col`}>
      <div className={styles.blogblock__title}>
        <p>{data.title}</p>
        <div></div>
        {data.title.length > 52 && <span>{data.title}</span>}
      </div>
      <div className={styles.blogblock__imageplace}>
        <img src={data.img} alt="image" />
      </div>

      <Link href={`/blog/${data.id}`}>
        <div className={styles.blogblock__btn}>
          <p>{data.btnText}</p>
          <img src="icons/arrowrightgreen.png" alt="arrowrightgreen" />
        </div>
      </Link>
    </section>
  );
};
export default BlogSection;
