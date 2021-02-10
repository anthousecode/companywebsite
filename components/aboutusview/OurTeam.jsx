import { useState, useEffect } from "react";
import HeaderRow from "../common/HeaderRow";
import DevsRow from "./DevsRow";
import styles from "./styles.module.scss";

const OurTeam = ({ data }) => {
  if (!data) return null;
  const [teamArrays, setTeamArrays] = useState([]);
  useEffect(() => {
    const updetedTeam = [];
    const arr = JSON.parse(JSON.stringify(data.developers));
    const getDevRows = () => {
      if (!arr.length) return;
      const devRow = arr.splice(0, 4);
      updetedTeam.push(devRow);
      getDevRows();
    };
    getDevRows();
    setTeamArrays(updetedTeam);
  }, [data]);
  return (
    <div className={`${styles.ourteam} row d-flex justify-content-center`}>
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9">
            <div className="row">
              <div className="col">
                {teamArrays.map((item, index) => (
                  <DevsRow key={index} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
