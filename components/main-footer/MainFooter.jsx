import LeftFooterBlock from "./LeftFooterBlock";
import RightFooterBlock from "./RightFooterBlock";
import { connect } from "react-redux";
import styles from "./styles.module.scss";

const MainFooter = ({ layoutData }) => {
  if (!layoutData) return null;
  return (
    <footer className={`${styles.footer} row`}>
      <div className="col">
        <div className="row">
          <section className={`${styles.footer__topline} col`}></section>
        </div>

        <div
          className={`${styles.footer__mainbock} row d-flex justify-content-center`}
        >
          <section className="col-lg-9 text-light">
            <div className="row mx-0">
              <LeftFooterBlock data={layoutData} />
              <RightFooterBlock data={layoutData} />
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

const mapState = (state) => {
  return {
    layoutData: state.certainPageData.certainLayoutLangTextData,
  };
};

export default connect(mapState)(MainFooter);
