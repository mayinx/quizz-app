import { getData } from "/lib/db.js";
import { renderQuestions } from "/assets/scripts/index_bookmarks.js";

function bookmarkedQuestions() {
  return getData().filter((question) => {
    return question.isBookmarked;
  });
}

renderQuestions(bookmarkedQuestions());
