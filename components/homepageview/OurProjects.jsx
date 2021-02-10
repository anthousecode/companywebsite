import React, { useEffect } from "react";
import HeaderRow from "../common/HeaderRow";
import styles from "./styles.module.scss";
import onMoveCarousel from "../../helpers/onMoveCarousel";
import getImagesWidths from "../../helpers/getImagesWidths";

const OurProjects = ({ data }) => {
  const pictureswrappers = React.createRef();
  const projectscarouselwrap = React.createRef();
  const getCarouselWidth = () => {
    getImagesWidths(pictureswrappers, projectscarouselwrap);
    onMoveCarousel(null, pictureswrappers, projectscarouselwrap);
  };
  useEffect(() => {
    getCarouselWidth();
    window.addEventListener("resize", getCarouselWidth);
    return () => {
      removeEventListener("resize", getCarouselWidth);
    };
  }, [projectscarouselwrap]);
  const { carouselImages } = data;
  return (
    <div className="row">
      <div className="col">
        <HeaderRow title={data.title} text={data.underTitleText} />
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9">
            <section
              className={styles.projectscarousel}
              ref={projectscarouselwrap}
            >
              {carouselImages.length > 3 && (
                <div
                  onClick={() =>
                    onMoveCarousel(
                      "arrowleftcarousel",
                      pictureswrappers,
                      projectscarouselwrap
                    )
                  }
                  className={styles.projectscarousel__arrowleftblock}
                >
                  <img src="images/home/arrowleftcarousel.svg" alt="arrowleft" />
                </div>
              )}

              <div
                className={styles.projectscarousel__pictureswrappers}
                ref={pictureswrappers}
              >
                {carouselImages.map((img) => (
                  <div
                    className={
                      styles.projectscarousel__pictureswrappers_pictureblock
                    }
                    key={img.src}
                  >
                    <img src={img.src} />
                  </div>
                ))}
              </div>

              {carouselImages.length > 3 && (
                <div
                  onClick={() =>
                    onMoveCarousel(
                      "arrowrightcarousel",
                      pictureswrappers,
                      projectscarouselwrap
                    )
                  }
                  className={styles.projectscarousel__arrowrightblock}
                >
                  <img src="images/home/arrowrightcarousel.svg" alt="arrowright" />
                </div>
              )}
            </section>

            <div className={styles.projectscarouseldots}>
              {carouselImages.length > 3 && (
                <>
                  <span
                    onClick={() =>
                      onMoveCarousel(
                        "arrowleftcarousel",
                        pictureswrappers,
                        projectscarouselwrap
                      )
                    }
                    className={styles.projectscarouseldots__dot}
                  ></span>
                  <span
                    onClick={() =>
                      onMoveCarousel(
                        "arrowrightcarousel",
                        pictureswrappers,
                        projectscarouselwrap
                      )
                    }
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
