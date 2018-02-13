(function main() {
  const btn = document.querySelector(".problem__show");
  setBtnHover(btn);
  btn.addEventListener("click", () => {
    const header = document.querySelector(".problem__header");
    const solution = document.querySelector(".solution__container");
    const data = document.querySelector(".problem__data");
    if (btn.textContent == "Show Solution") {
      solution.classList.add("solution--active");
      data.style.transform = "translateX(2vw)";
      setTimeout(() => {
        header.classList.add("problem__header--act");
        btn.classList.add("problem__hide");
      }, 400);
      btn.textContent = "Hide Solution";
    } else {
      header.classList.remove("problem__header--act");
      data.style.transform = "translateX(0)";
      solution.classList.remove("solution--active");
      btn.classList.remove("problem__hide");
      btn.textContent = "Show Solution";
    }
    toggleSolution();
  });
}());

function setBtnHover(el) {
  const solution = document.querySelector(".solution__container");
  el.addEventListener("mouseover", () => {
    const isActive = solution.classList.contains("solution--active");
    if (!isActive) {
      solution.style.transform = "translateY(97vh)";
    }
  });
  el.addEventListener("mouseout", () => {
    const isActive = solution.classList.contains("solution--active");
    if (!isActive) {
      solution.style.transform = "translateY(100vh)";
    }
  });
}

function toggleSolution() {
  const question = document.querySelector(".problem__info");
  const solution = document.querySelector(".solution__container");
  if (question.style.opacity === "0") {
    solution.style.transform = "translateY(100vh)";
    question.style.opacity = 1;
  } else {
    setTimeout(() => {
      question.style.opacity = 0;
    }, 400);
    solution.style.transform = "translateY(0)";
  }
}