window.onload = function () {
  "use strict";

  // Load theme from local storage or set to the default light theme
  let theme = localStorage.getItem("data-theme");
  console.log("Theme: " + theme);
  document.documentElement.setAttribute("data-theme", theme ? theme : "light");

  // for easy scoping of our js if necessary
  const pageId = document.body.id;

  if (pageId === "start" || pageId === "bookmarks") {
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
    const enableDarkModeBtnCaption = "Enable Dark Mode!";
    const disableDarkModeBtnCaption = "Disable Dark Mode!";

    const initializeDarkModeToggleBtn = (btn, theme = "light") => {
      btn.textContent =
        theme && theme === "dark"
          ? disableDarkModeBtnCaption
          : enableDarkModeBtnCaption;
      if (btn.textContent == disableDarkModeBtnCaption)
        btn.classList.add("dark-mode-btn--toggled");
    };

    const darkModeToggleBtn = document.querySelector(".dark-mode-btn");
    initializeDarkModeToggleBtn(darkModeToggleBtn, theme);

    darkModeToggleBtn.addEventListener("click", (e) => {
      if (e.target.classList.toggle("dark-mode-btn--toggled")) {
        theme = "dark";
        e.target.textContent = disableDarkModeBtnCaption;
      } else {
        theme = "light";
        e.target.textContent = enableDarkModeBtnCaption;
      }
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("data-theme", theme);
    });
  }
};
