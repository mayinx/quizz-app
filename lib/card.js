/* <section class="question card">
  <i class="fas fa-bookmark bookmark-icon"></i>
  <h2>Question 1</h2>
  <h3>
    What is the answer to the Ultimate Question of Life, the Universe, and
    Everything?
  </h3>
  <div class="answer-wrapper">
    <div class="answer">
      <button class="toggle-answer" type="button">
        <i class="fas fa-times"></i>
      </button>

      <p>
        <span>(Deep Thought)</span>
        <span>That is as clear as the horrible German Kloßbrühe: 42</span>
      </p>
    </div>
    <div class="answer-overlay">
      <button class="toggle-answer btn rounded blue">
        Show <strong>Deep Thought's</strong> Answer
      </button>
    </div>
  </div>
  <div class="tag-list w-100 p-1 justify-content-evenly">
    <span class="tag small blue">Depp Thought</span>
    <span class="tag small blue">The Answer</span>
    <span class="tag small blue">The Question</span>
    <span class="tag small blue">Depp Thought</span>
    <span class="tag small blue">The Answer</span>
    <span class="tag small blue">The Question</span>
  </div>
</section>; */

export function createQuestionCardComponent(cardData, index) {
  const parent = document.createElement("section");
  parent.className = cardData.isBookmarked
    ? "question card bookmarked"
    : "question card";
  parent.innerHTML = `<i class="fas fa-bookmark bookmark-icon"></i>
    <h2>Question ${index}</h2>
    <h3>${cardData.question}</h3>
    <div class="answer-wrapper">
      <div class="answer">
        <button class="toggle-answer" type="button"><i class="fas fa-times"></i></button>
        <p>
          <span>(Deep Thought)</span>
          <span>That is as clear as the horrible German Kloßbrühe:<br><br>\"${htmlSafe(
            cardData.answer
          )}\"
          </span>
        </p>
      </div>
      <div class="answer-overlay">
        <button class="toggle-answer btn rounded blue">Show<br><strong>Deep Thought\'s</strong><br>Answer</button>
      </div>
    </div>
    <div class="tag-list w-100 p-1 justify-content-evenly">${compileTagList(
      cardData
    )}
    </div>`;

  return parent;
}
const compileTagList = (cardData) => {
  let renderedTags = "";

  let dataTags = !Array.isArray(cardData.tags)
    ? cardData.tags.split(",")
    : cardData.tags;

  dataTags.forEach((tag) => {
    renderedTags += `<span class="tag small blue">${tag}</span>`;
  });
  return renderedTags;
};

const htmlSafe = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/>/g, "&gt;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
};
