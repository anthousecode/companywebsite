let isMovedPicture = true;

const onMoveCarousel = (direction, block, projectscarouselwrap) => {
  if (!isMovedPicture) return;
  isMovedPicture = false;
  setTimeout(() => {
    isMovedPicture = true;
  }, 500);
  const wrapperWidth = parseFloat(window.getComputedStyle(block.current).width);
  const wrapperRight = parseFloat(window.getComputedStyle(block.current).right);
  const updatedWidth = parseFloat(
    window.getComputedStyle(projectscarouselwrap.current).width
  );
  const blockWidth = updatedWidth * 0.35;
  const maxRight = wrapperWidth - blockWidth * 3;
  if (!direction) {
    block.current.style.right = 0 + "px";
  } else if (direction === "arrowleftcarousel" && wrapperRight <= blockWidth) {
    return;
  } else if (direction === "arrowrightcarousel" && maxRight <= wrapperRight) {
    return;
  } else if (direction === "arrowleftcarousel") {
    const updatedRight = wrapperRight - blockWidth;
    block.current.style.right = updatedRight + "px";
  } else if (direction === "arrowrightcarousel") {
    const updatedRight = (wrapperRight || 0) + blockWidth;
    block.current.style.right = updatedRight + "px";
  }
};
export default onMoveCarousel;
