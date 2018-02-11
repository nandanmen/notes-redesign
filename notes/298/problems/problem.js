(function main() {
  const btn = document.querySelector(".problem__show");
  btn.addEventListener("click", () => {
    const problems = document.querySelector(".problems");
    if (btn.textContent == "Show Solution") {
      problems.classList.add("solutions");
      toggleSolution();
      btn.textContent = "Hide Solution";
    } else {
      problems.classList.remove("solutions");
      toggleSolution();
      btn.textContent = "Show Solution";
    }
  })
}());

function toggleSolution() {
  const question = document.querySelector(".problem__info");
  const solution = document.querySelector(".problem__solution");
  if (question.style.opacity === "0") {
    solution.style.opacity = 0;
    question.style.opacity = 1;
  } else {
    question.style.opacity = 0;
    solution.style.opacity = 1;
  }
}