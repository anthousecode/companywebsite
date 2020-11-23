import FeatureLinkBlock from "./FetureLinkBlock";
import HeaderRow from "./HeaderRow";

const Features = ({ data }) => {
  return (
    <div className="row">
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />

        <div className="row featuresblock d-flex justify-content-center">
          <div className="col-9">
            <div className="row py-4">
              {data.optionsRows.first.map((item, index) => (
                <FeatureLinkBlock key={index} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="row featuresblock d-flex justify-content-center">
          <div className="col-9">
            <div className="row py-4 d-flex justify-content-center">
              {data.optionsRows.second.map((item, index) => (
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