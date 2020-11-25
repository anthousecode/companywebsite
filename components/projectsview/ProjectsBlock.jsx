import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import ProjectSection from "./ProjectSection";
import styles from "./styles.module.scss";

const ProjectsBlock = ({ data }) => {
  useEffect(() => {
    document.querySelector(".carousel-control-prev").style.width = 0;
    document.querySelector(".spanprev").style.position = "absolute";
    document.querySelector(".spanprev").style.bottom = "-50px";
    document.querySelector(".spanprev").style.left = "30vw";
    document.querySelector(".spanprev").style.color = "#000";
    document.querySelector(".spanprev").style.display = "block";

    document.querySelector(".carousel-control-next").style.width = 0;
    document.querySelector(".spannext").style.position = "absolute";
    document.querySelector(".spannext").style.bottom = "-50px";
    document.querySelector(".spannext").style.right = "30vw";
    document.querySelector(".spannext").style.color = "#000";
    document.querySelector(".spannext").style.display = "block";
  }, []);

  return (
    <div
      className={`${styles.projectscarousel} row d-flex justify-content-center`}
    >
      <div className={`${styles.projectscarouselwapper} col-9`}>
        <Carousel
          indicators={false}
          interval={null}
          prevIcon={
            <img
              src="icons/angleleft.svg"
              alt="angleleft"
              className="spanprev"
            />
          }
          nextIcon={
            <img
              src="icons/angleright.svg"
              alt="angleright"
              className="spannext"
            />
          }
        >
          {data.map((arrofprojects, index) => {
            return (
              <Carousel.Item key={index}>
                {arrofprojects.map((project, ind) => (
                  <ProjectSection key={ind} data={project} />
                ))}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default ProjectsBlock;
