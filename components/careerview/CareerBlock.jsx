import Link from "next/link";
import HeaderRow from "../common/HeaderRow";
import styles from "./styles.module.scss";

const CareerBlock = ({ data }) => {
  return (
    <div className="row">
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />
        <div className="row d-flex justify-content-center">
          <div className="col-9">
            <ul className={styles.vacancylist}>
              {data.vacancies.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={`/career/${item.id}`}>
                      <a href="#">{item.name}</a>
                    </Link>
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
