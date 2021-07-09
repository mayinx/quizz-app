import { bookmarkedQuestions } from "/lib/db.js";
import { renderQuestions } from "/assets/scripts/index_bookmarks.js";

renderQuestions(bookmarkedQuestions());
