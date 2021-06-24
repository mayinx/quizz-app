window.onload = function () {
  "use strict";

  const toggleAnswerBtns = document.querySelectorAll(".toggle-answer");

  toggleAnswerBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      console.log("CalickCalack");

      /** @type {HTMLDivElement} */
      var answerWrapper = event.target.closest(".answer-wrapper");
      // console.log(answerWrapper.classList.value);
      answerWrapper.classList.toggle("toggled");

      // console.log(event.target.getAttribute("data-el"));
    })
  );
};
