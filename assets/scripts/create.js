import { getData, setData, loadSeedData } from "/lib/db.js";

const createOnLoad = () => {
  document.forms.createQuestion.addEventListener("submit", (e) => {
    e.preventDefault();
    // Found that fancy form data constructor - let's play with it
    const formData = new FormData(e.target);
    const question = Object.fromEntries(formData.entries());
    console.log(question);

    // const title = form.title.value;
    // const tags = form.tags.value.split(",");
    // const question = {
    //   title,
    //   tags,
    // };

    // // TODO:
    // // Please please please let me store this - please ;-)
    // //localStorage.setItem("question-" + Date.now(), JSON.stringify(question)); // stringify object and store
    // const questions = JSON.parse(localStorage.getItem("questions")) || [];
    // cards.push(question);

    // try {
    //   localStorage.setItem("question", JSON.stringify(questions));
    // } catch (error) {
    //   alert("There was an error while saving");
    // }

    // cards.push(question);
    setData(question);

    e.target.reset();
  });
};
window.addEventListener("load", createOnLoad, false);
