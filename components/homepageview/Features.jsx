import FeatureLinkBlock from "./FetureLinkBlock";
import HeaderRow from "../common/HeaderRow";

const Features = ({ data }) => {
  return (
    <div className="row">
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />

        <div className="row featuresblock d-flex justify-content-center">
          <div className="col-9">
            <div className="row py-4">
              {data.first.map((item, index) => (
                <FeatureLinkBlock key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
