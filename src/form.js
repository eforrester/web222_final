const orderNumberInput = document.querySelector("#orderNo");

const orderQuestionInput = document.querySelector("#orderQuestion");
const orderCommentInput = document.querySelector("#orderComment");
const orderProblemInput = document.querySelector("#orderProblem");

orderProblemInput.addEventListener("click", () => {
  if (orderNumberInput.classList.contains("isHidden")) {
    orderNumberInput.classList.remove("isHidden");
  } else {
    orderNumberInput.classList.add("isHidden");
  }
  orderQuestionInput.checked = false;
  orderCommentInput.checked = false;
});

orderQuestionInput.addEventListener("click", () => {
  orderNumberInput.classList.add("isHidden");

  orderCommentInput.checked = false;
  orderProblemInput.checked = false;
});

orderCommentInput.addEventListener("click", () => {
  orderNumberInput.classList.add("isHidden");
  orderQuestionInput.checked = false;
  orderProblemInput.checked = false;
});
