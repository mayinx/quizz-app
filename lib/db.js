console.log("oh my");
import { seedData } from "/lib/seedData.js";
console.log("oh my o wei");

// read db
export function getData() {
  return JSON.parse(localStorage.getItem("questions")) || [];
}

// update db
export function setData(newData) {
  let data = getData();
  newData["id"] = Date.now();
  newData["isBookmarked"] = false;
  data.push(newData);

  try {
    localStorage.setItem("questions", JSON.stringify(data));
  } catch (error) {
    alert(
      "There was an error while saving. Did you exceed your local storage quota?"
    );
  }
}

export function bookmarkedQuestions() {
  return getData().filter((question) => {
    return question.isBookmarked;
  });
}

export function loadSeedData() {
  try {
    localStorage.setItem("questions", JSON.stringify(seedData));
    return getData();
  } catch (error) {
    alert(
      "There was an error while saving seed data. Either you exceeded your local storage quota or you didn't provide any seed data at all in lib/seedData.js..."
    );
    return [];
  }
}
