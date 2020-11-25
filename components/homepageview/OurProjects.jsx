import React, { useEffect } from "react";
import HeaderRow from "../common/HeaderRow";
import styles from "./styles.module.scss";
import onMoveCarousel from "../../helpers/onMoveCarousel";

const OurProjects = ({ data }) => {
  const pictureswrappers = React.createRef();
  const projectscarouselwrap = React.createRef();
  const getCarouselWidth = () => {
    const updatedWidth = parseFloat(
      window.getComputedStyle(projectscarouselwrap.current).width
    );
    const blockWidth = updatedWidth * 0.32;
    const marginright = blockWidth * 0.08;
    [...pictureswrappers.current.children].forEach((item) => {
      item.style.width = blockWidth + "px";
      item.style.marginRight = marginright + "px";
    });
    onMoveCarousel("", pictureswrappers, projectscarouselwrap);
  };
  useEffect(() => {
    getCarouselWidth();
    window.addEventListener("resize", getCarouselWidth);
    return () => {
      removeEventListener("resize", getCarouselWidth);
    };
  }, []);
  const { carouselImages } = data;
  return (
    <div className="row">
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />
        <div className="row d-flex justify-content-center">
          <div className="col-9 px-0">
            <section
              className={styles.projectscarousel}
              ref={projectscarouselwrap}
            >
              {carouselImages.length > 3 && (
                <div
                  onClick={() => onMoveCarousel("arrowleftcarousel", pictureswrappers, projectscarouselwrap)}
                  className={styles.projectscarousel__arrowleftblock}
                >
                  <img
                    src="images/home/arrowleftcarousel.svg"
                    alt="arrowleftcarousel"
                  />
                </div>
              )}

              <div
                className={styles.projectscarousel__pictureswrappers}
                ref={pictureswrappers}
              >
                {carouselImages.map((img) => (
                  <div
                    className={styles.projectscarousel__pictureswrappers_pictureblock}
                    key={img.src}
                  >
                    <img src={img.src} />
                  </div>
                ))}
              </div>

              {carouselImages.length > 3 && (
                <div
                  onClick={() => onMoveCarousel("arrowrightcarousel", pictureswrappers, projectscarouselwrap)}
                  className={styles.projectscarousel__arrowrightblock}
                >
                  <img src="images/home/arrowrightcarousel.svg" alt="arrowrightcarousel" />
                </div>
              )}
            </section>

            <div className={styles.projectscarouseldots}>
              {carouselImages.length > 3 && (
                <>
                  <span
                    onClick={() => onMoveCarousel("arrowleftcarousel", pictureswrappers, projectscarouselwrap)}
                    className={styles.projectscarouseldots__dot}
                  ></span>
                  <span
                    onClick={() => onMoveCarousel("arrowrightcarousel", pictureswrappers, projectscarouselwrap)}
                    className={styles.projectscarouseldots__dot}
                  ></span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
