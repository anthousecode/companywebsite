import Link from "next/link";
import styles from "./styles.module.scss";

const BlogSection = ({ data }) => {
  return (
    <div className="col">
      <div className={styles.blogcarousel__blogblock}>
        <div className={styles.blogcarousel__blogblock_title}>
          <p>{data.title}</p>
          <div></div>
        </div>
        <div className={styles.blogcarousel__blogblock_imageplace}>
          <img src={data.img} alt="image" />
        </div>

        <Link href={`/blog/${data.id}`}>
          <div className={styles.blogcarousel__blogblock_btn}>
            <p>{data.btnText}</p>
            <img src="icons/arrowrightgreen.png" alt="arrowrightgreen" />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default BlogSection;
