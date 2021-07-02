window.onload = function () {
  "use strict";

  // for easy scoping of our js if necessary
  const pageId = document.body.id;

  if (pageId === "start" || pageId === "bookmark") {
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
  }

  if (pageId === "create") {
    document.forms.createQuestion.addEventListener("submit", (e) => {
      e.preventDefault();
      // Found that fancy form data constructor - let's play with it
      const formData = new FormData(e.target);
      const question = Object.fromEntries(formData.entries());
      console.log(question);
      // TODO:
      // Please please please let me store this - please ;-)
      //localStorage.setItem("question-" + Date.now(), JSON.stringify(question)); // stringify object and store
      e.target.reset();
    });
  }

  // TODO: Display localStorage content om start + bookmark page
  // if (pageId === "start" || pageId === "bookmark") {
  //   let questionObj = JSON.parse(localStorage.getItem("question")); //retrieve the object
  //   ["question", "answer", "tags"].forEach((questionAttr) => {
  //     document.querySelector(".question-" + questionAttr).textContent = questionObj
  //       ? questionObj[questionAttr]
  //       : "---";
  //   });

  if (pageId === "profile") {
    document.querySelector(".dark-mode-btn").addEventListener("click", (e) => {
      console.log("Toggle Dark Mode");
      if (e.target.classList.toggle("dark-mode-btn--toggled")) {
        e.target.textContent = "Disable Dark Mode!";
      } else {
        e.target.textContent = "Enable Dark Mode!";
      }
    });
  }
};
