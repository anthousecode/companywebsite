const onToggleMenu = (isShown, menu) => {
  if (isShown) {
    let top = -250;
    const timer = setInterval(() => {
      if (top >= 250) {
        menu.style.marginTop = "250px";
        clearInterval(timer);
        return;
      }
      top += 20;
      menu.style.marginTop = top + "px";
    }, 10);
  } else {
    let top = 68;
    const timer = setInterval(() => {
      if (top <= -250) {
        menu.style.marginTop = "-250px";
        clearInterval(timer);
        return;
      }
      top -= 20;
      menu.style.marginTop = top + "px";
    }, 10);
  }
};
export default onToggleMenu;
