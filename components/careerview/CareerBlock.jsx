import Link from "next/link";
import HeaderRow from "../common/HeaderRow";
import styles from "./styles.module.scss";

const CareerBlock = ({ data }) => {
  return (
    <div className="row">
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />
        <div className="row d-flex justify-content-center">
          <div className="col-sm-9">
            <ul className={styles.vacancylist}>
              {data.vacancies.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={`/career/${item.id}`}>
                      <a href="#">{item.name}</a>
                    </Link>
                    {item.hotVacancy && (
                      <img
                        className={styles.vacancylist__fire}
                        src="icons/fire.svg"
                        alt="fire"
                      />
                    )}
                    {item.isThereBonus && (
                      <span className={styles.vacancylist__coins}>
                        <img src="icons/coins.svg" alt="coins" />
                        <span>{item.bonusText}</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CareerBlock;
