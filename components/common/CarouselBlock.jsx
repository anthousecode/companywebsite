import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import getDataForCarRender from "../../helpers/getDataForCarRender";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const CarouselBlock = ({ data, children }) => {
  if (!data) return null;
  const RenderBlock = children.type;
  const prevIcon = React.createRef();
  const nextIcon = React.createRef();
  const carouselBlocRef = React.createRef();
  const routerLength = Object.keys(useRouter().query).length;
  const leftPath = !routerLength
    ? "icons/angleleft.svg"
    : "../icons/angleleft.svg";
  const rightPath = !routerLength
    ? "icons/angleright.svg"
    : "../icons/angleright.svg";
  useEffect(() => {
    if (data.length <= 4) {
      carouselBlocRef.current.element.children[1].style.display = "none";
      carouselBlocRef.current.element.children[2].style.display = "none";
    }

    carouselBlocRef.current.element.children[1].style.width = 0;
    prevIcon.current.style.position = "absolute";
    prevIcon.current.style.bottom = "-40px";
    prevIcon.current.style.left = "30vw";
    prevIcon.current.style.color = "#000";
    prevIcon.current.style.display = "block";

    carouselBlocRef.current.element.children[2].style.width = 0;
    nextIcon.current.style.position = "absolute";
    nextIcon.current.style.bottom = "-40px";
    nextIcon.current.style.right = "30vw";
    nextIcon.current.style.color = "#000";
    nextIcon.current.style.display = "block";
  }, []);
  const items = getDataForCarRender(data);
  return (
    <div className={`${styles.carouseblock} row d-flex justify-content-center`}>
      <div className="col-9">
        <Carousel
          indicators={false}
          interval={null}
          prevIcon={<img src={leftPath} alt="left" ref={prevIcon} />}
          nextIcon={<img src={rightPath} alt="right" ref={nextIcon} />}
          ref={carouselBlocRef}
        >
          {items.map((itemperpage, index) => {
            return (
              <Carousel.Item key={index}>
                {itemperpage.map((itemperrow, ind) => {
                  return (
                    <div className="row" key={ind}>
                      {itemperrow.map((item, i) => (
                        <RenderBlock key={i} data={item} />
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
export default CarouselBlock;
