import HeaderRow from "../common/HeaderRow";
import styles from "./styles.module.scss";

const CareerFormBlock = ({ data }) => {
  return (
    <div className="row">
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />
        <div className="row d-flex justify-content-center">
          <div className="col-md-9">
            <form className={styles.vacancyform}>
              <section className={styles.vacancyform__name}>
                <label htmlFor="vacancydetails">
                  {data.formTexts.lableinputname}
                </label>
                <input
                  type="text"
                  id="vacancydetails"
                  placeholder={data.formTexts.placeholderinputname}
                />
              </section>
              <section className={styles.vacancyform__contactways}>
                <input
                  type="text"
                  placeholder={data.formTexts.placeholderinputemail}
                />
                <input
                  type="text"
                  placeholder={data.formTexts.placeholderinputphone}
                />
              </section>
              <section className={styles.vacancyform__forchoicefile}>
                <label htmlFor="choiceresumefile">
                  {data.formTexts.labelinputchoiceresumefile}
                  <input type="file" id="choiceresumefile" />
                </label>
              </section>
              <div className={styles.vacancyform__submit}>
                <button type="submit">
                  <span>{data.formTexts.btnText}</span>
                  <img src="icons/arrowright.png" alt="v" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CareerFormBlock;
