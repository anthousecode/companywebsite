import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import ProjectSection from "./ProjectSection";
import getDataForCarRender from "../../helpers/getDataForCarRender";
import styles from "./styles.module.scss";

const ProjectsBlock = ({ data }) => {
  const projectsImgPrevRef = React.createRef();
  const projectsImgNextRef = React.createRef();
  const projectsCarouselRef = React.createRef();
  useEffect(() => {
    projectsCarouselRef.current.element.children[1].style.width = 0;
    projectsImgPrevRef.current.style.position = "absolute";
    projectsImgPrevRef.current.style.bottom = "-50px";
    projectsImgPrevRef.current.style.left = "30vw";
    projectsImgPrevRef.current.style.color = "#000";
    projectsImgPrevRef.current.style.display = "block";

    projectsCarouselRef.current.element.children[2].style.width = 0;
    projectsImgNextRef.current.style.position = "absolute";
    projectsImgNextRef.current.style.bottom = "-50px";
    projectsImgNextRef.current.style.right = "30vw";
    projectsImgNextRef.current.style.color = "#000";
    projectsImgNextRef.current.style.display = "block";
  }, []);
  const projectsItemsForRender = getDataForCarRender(data);
  return (
    <div
      className={`${styles.projectscarousel} row d-flex justify-content-center`}
    >
      <div className={`${styles.projectscarouselwapper} col-9`}>
        <Carousel
          ref={projectsCarouselRef}
          indicators={false}
          interval={null}
          prevIcon={
            <img
              src="icons/angleleft.svg"
              alt="angleleft"
              ref={projectsImgPrevRef}
            />
          }
          nextIcon={
            <img
              src="icons/angleright.svg"
              alt="angleright"
              ref={projectsImgNextRef}
            />
          }
        >
          {projectsItemsForRender.map((perpage, index) => {
            return (
              <Carousel.Item key={index}>
                {perpage.map((perrow, ind) => {
                  return (
                    <div className="row" key={ind}>
                      {perrow.map((project, i) => (
                        <ProjectSection key={i} data={project} />
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
  );
};
export default ProjectsBlock;
