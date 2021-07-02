window.onload = function () {
  "use strict";

  const toggleAnswerBtns = document.querySelectorAll(".toggle-answer");

  toggleAnswerBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      console.log("CalickCalack");
      /** @type {HTMLDivElement} */
      let answerWrapper = event.target.closest(".answer-wrapper");
      answerWrapper.classList.toggle("toggled");
    })
  );

  const toggleBookmarkIcons = document.querySelectorAll(".bookmark-icon");
  toggleBookmarkIcons.forEach((bmIcon) => {
    bmIcon.addEventListener("click", (e) => {
      let questionCard = e.target.closest(".question");
      questionCard.classList.toggle("bookmarked");
    });
  });
};
