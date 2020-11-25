import HeaderRow from "../common/HeaderRow";
import CertainLeader from "./CertainLeader";
import styles from "./styles.module.scss";
import { onChangeShownLead } from "../../pages/actions";
import { connect } from "react-redux";

const Leadership = ({ leadership, onChangeShownLead }) => {
  if (!leadership) return null;
  const certainLeader = leadership.leaders.find((leader) => leader.isShown);
  return (
    <div className={`${styles.leadership} row d-flex justify-content-center`}>
      <div className="col">
        <HeaderRow title={leadership.title} text={leadership.underTitleText} />
        <div className="row d-flex justify-content-center">
          <div className="col-9">
            <section className={styles.leadership__leadersblock}>
              {leadership.leaders.map((leader, index) => {
                return (
                  <div
                    key={index}
                    className={styles.leadership__leadersblock_leader}
                    onClick={() => onChangeShownLead(leader.name)}
                  >
                    {leader.isShown && <span></span>}
                    <h3>{leader.name}</h3>
                    <p>{leader.ocupation}</p>
                  </div>
                );
              })}
            </section>
            <CertainLeader data={certainLeader} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    leadership: state.certainPageData.certainLangPageData.leadership,
  };
};
const mapDispatch = { onChangeShownLead };

export default connect(mapState, mapDispatch)(Leadership);
