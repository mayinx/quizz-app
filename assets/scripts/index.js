// import { createQuestionCardComponent } from "/lib/card.js";
import { getData } from "/lib/db.js";
import { renderQuestions } from "/assets/scripts/index_bookmarks.js";

// TODO: Filter attribute
renderQuestions(getData());

// getData()
//   .map((question, index) => {
//     return createQuestionCardComponent(question, index + 1);
//   })
//   .forEach((questionCardComponent) => {
//     document.querySelector("main").append(questionCardComponent);
//   }) ||
//   (document.querySelector("main").innerHTML = `
//     <div class="ta-center">
//       <h1>Sorry, mate - nothing to show here!</h1>
//       <h3 class="mb-1">Looks like you didn't create any questions yet...</h3>
//       <button onclick="location.href='pages/create.html';" class="btn green">Create question!</button>
//       <button class="btn blue load-seed-data-btn">Load Seed Data</button>
//     </div>
//   `);
