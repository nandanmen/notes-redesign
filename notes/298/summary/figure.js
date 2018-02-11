'use strict'

function isElementPastMiddle(el) {
  let winHeight = window.innerHeight;
  let winWidth = window.innerWidth;
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.top <= winHeight / 2 &&
    rect.left >= 0 &&
    rect.bottom <= winHeight &&
    rect.right <= winWidth
  );
}

let figures = document.querySelectorAll(".figure__item");
let titles = document.querySelectorAll(".content__subtitle");

window.addEventListener("scroll", () => {
  for (let i = 0; i < figures.length; i++) {
    const title = titles[i];
    const figure = figures[i];
    if (isElementPastMiddle(title)) {
      figure.classList.add("figure--active");
    } else if (figure.classList.contains("figure--active")) {
      figure.classList.remove("figure--active");
    }
  }
})
