import styles from "./styles.module.scss";

const BlogSection = ({ data }) => {
  return (
    <div className="col">
      <div className={styles.blogcarousel__blogblock}>
        <div className={styles.blogcarousel__blogblock_title}>
          <p>{data.title}</p>
          <div></div>
        </div>
        <p className={styles.blogcarousel__blogblock_text}>{data.text}</p>
        <div className={styles.blogcarousel__blogblock_btn}>
          <p>{data.btnText}</p>
          <img src="icons/arrowrightgreen.png" alt="arrowrightgreen" />
        </div>
      </div>
    </div>
  );
};
export default BlogSection;
