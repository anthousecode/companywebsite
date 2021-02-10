const getImagesWidths = (pictureswrappers, projectscarouselwrap) => {
  const updatedWidth = parseFloat(
    window.getComputedStyle(projectscarouselwrap.current).width
  );
  let blockWidth, marginright;
  if (window.innerWidth > 730) {
    blockWidth = updatedWidth * 0.32;
    marginright = blockWidth * 0.08;
  } else if (window.innerWidth < 730 && window.innerWidth >= 576) {
    blockWidth = updatedWidth * 0.5;
    marginright = blockWidth * 0.08;
  } else if (window.innerWidth < 576) {
    blockWidth = updatedWidth;
    marginright = 0;
  }
  [...pictureswrappers.current.children].forEach((item) => {
    item.style.width = blockWidth + "px";
    item.style.marginRight = marginright + "px";
  });
};
export default getImagesWidths;
