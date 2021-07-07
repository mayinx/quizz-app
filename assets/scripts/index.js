import { createQuestionCardComponent } from "/lib/card.js";
import { data } from "/lib/db.js";

data
  .map((cardData, index) => {
    return createQuestionCardComponent(cardData, index + 1);
  })
  .forEach((cardComponent) => {
    document.querySelector("main").append(cardComponent);
  });
