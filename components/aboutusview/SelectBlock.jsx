import React, { useState } from "react";
import styles from "./styles.module.scss";

const SelectBlock = ({ data }) => {
  const [text, setText] = useState(false);
  const arrow = React.createRef();
  const underline = React.createRef();
  const onShowText = () => {
    setText(!text);
    if (text) {
      arrow.current.style.transform = "rotate(0deg)";
      underline.current.style.width = "fit-content";
    } else {
      arrow.current.style.transform = "rotate(180deg)";
      underline.current.style.width = "100%";
    }
  };
  return (
    <section className={styles.newsandprocess__processblock}>
      <div
        className={styles.newsandprocess__processblock_lebelwrapp}
        ref={underline}
      >
        <div
          className={styles.newsandprocess__processblock_lebel}
          onClick={onShowText}
        >
          <p className={styles.newsandprocess__processblock_lebel_text}>
            {data.title}
          </p>
          <img
            className={styles.newsandprocess__processblock_lebel_arrow}
            src="images/aboutus/selectarrow.png"
            alt="selectarrow"
            ref={arrow}
          />
        </div>
        <div className={styles.newsandprocess__processblock_underline}></div>
      </div>
      {text && (
        <div className={styles.newsandprocess__processblock_openedblock}>
          {data.text}
        </div>
      )}
    </section>
  );
};
export default SelectBlock;
