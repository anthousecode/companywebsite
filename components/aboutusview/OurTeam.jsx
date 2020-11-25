import HeaderRow from "../common/HeaderRow";
import DevsRow from "./DevsRow";
import styles from "./styles.module.scss";

const OurTeam = ({ data }) => {
  if (!data) return null;
  return (
    <div className={`${styles.ourteam} row d-flex justify-content-center`}>
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />
        <div className="row d-flex justify-content-center">
          <div className="col-9">
            <div className="row">
              <div className="col">
                <DevsRow data={data.developers1} />
                <DevsRow data={data.developers2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
