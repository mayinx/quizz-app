import { createQuestionCardComponent } from "/lib/card.js";
import { getData, loadSeedData } from "/lib/db.js";

export const renderQuestions = (data) => {
  Array.isArray(data) && data.length
    ? renderQuestionCards(data)
    : renderNoDataNotification();
};

const renderNoDataNotification = () => {
  console.log("renderNoDataNotification");
  document.querySelector("main").innerHTML = `
    <div class="ta-center">
      <h1>Sorry, mate - nothing to show here!</h1>
      <h3 class="mb-1">Looks like you didn't create any questions yet...</h3>
      <button onclick="location.href='pages/create.html';" class="btn green">Create question!</button>
      <button class="btn blue load-seed-data-btn">Load Seed Data</button>
    </div>
  `;
};

const renderFailedToLoadSeedDataNotification = () => {
  console.log("renderFailedToLoadSeedDataNotification");
  document.querySelector(
    "main"
  ).innerHTML = `<div class="ta-center"><h1>Failed to load seed data!</h1></div>`;
};

const renderQuestionCards = (data) => {
  console.log("renderQuestionCards");
  document.querySelector("main").innerHTML = "";
  data
    // .filter((cardData) => {
    //   return cardData.isBookmarked;
    // })
    .map((cardData, index) => {
      return createQuestionCardComponent(cardData, index + 1);
    })
    .forEach((cardComponent) => {
      document.querySelector("main").append(cardComponent);
    });
};

const indexBookmarksOnLoad = () => {
  const toggleAnswerBtns = document.querySelectorAll(".toggle-answer");

  toggleAnswerBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
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

  const seedDataBtn = document.querySelector(".load-seed-data-btn");
  if (seedDataBtn) {
    seedDataBtn.addEventListener("click", (e) => {
      // Array.isArray(data) && data.length
      //   ? renderQuestionCards(data)
      //   : renderNoDataNotification();
      const data = loadSeedData();
      Array.isArray(data) && data.length
        ? renderQuestionCards(data)
        : renderFailedToLoadSeedDataNotification();
    });
  }
};
window.addEventListener("load", indexBookmarksOnLoad, false);
