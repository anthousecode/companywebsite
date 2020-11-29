import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import HeaderRow from "../common/HeaderRow";
import BlogSection from "./BlogSection";
import getDataForCarRender from "../../helpers/getDataForCarRender";
import styles from "./styles.module.scss";

const CompanyBlog = ({ data }) => {
  if (!data || !data.blogs) return null;
  useEffect(() => {
    document.querySelector(".carousel-control-prev").style.width = 0;
    document.querySelector(".blogspanprev").style.position = "absolute";
    document.querySelector(".blogspanprev").style.bottom = "-40px";
    document.querySelector(".blogspanprev").style.left = "30vw";
    document.querySelector(".blogspanprev").style.color = "#000";
    document.querySelector(".blogspanprev").style.display = "block";

    document.querySelector(".carousel-control-next").style.width = 0;
    document.querySelector(".blogspannext").style.position = "absolute";
    document.querySelector(".blogspannext").style.bottom = "-40px";
    document.querySelector(".blogspannext").style.right = "30vw";
    document.querySelector(".blogspannext").style.color = "#000";
    document.querySelector(".blogspannext").style.display = "block";
  }, []);
  const blogsItems = getDataForCarRender(data.blogs);
  return (
    <div className="row">
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />

        <div
          className={`${styles.blogcarousel} row d-flex justify-content-center`}
        >
          <div className="col-9">
            <Carousel
              indicators={false}
              interval={null}
              prevIcon={
                <img
                  src="icons/angleleft.svg"
                  alt="angleleft"
                  className="blogspanprev"
                />
              }
              nextIcon={
                <img
                  src="icons/angleright.svg"
                  alt="angleright"
                  className="blogspannext"
                />
              }
            >
              {blogsItems.map((blogsperpage, index) => {
                return (
                  <Carousel.Item key={index}>
                    {blogsperpage.map((blogsperrow, ind) => {
                      return (
                        <div className="row" key={ind}>
                          {blogsperrow.map((blog, i) => (
                            <BlogSection key={i} data={blog} />
                          ))}
                        </div>
                      );
                    })}
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyBlog;
