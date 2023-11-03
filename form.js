/* Listen the form's submit event
Prevent the default submit behavior to handle everything within JavaScript
Read all entered data from the input fields (question, answer, tags)
Generate all DOM element for a card with createElement()
Insert the form's data as text into the DOM elements
Append the card to the page, directly below the form
*/

// Was will ich machen?

// 1. Wenn auf den Submit Button geklickt wird, soll ein createElement erzeugt werden
// 2. Die Inhalte des createElements sollen aus den textcontent von Form stammen
// 3. das Form soll sich nach dem submitten zurückstellen und question fokussieren

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target.elements;

  const question = formElement.question.value;
  const answer = formElement.answer.value;
  const tag = formElement.tag.value;

  const newQuestion = document.createElement("li");
  newQuestion.innerHTML = `
<li class="app__question">
<button
  class="button-bookmark"
  role="button"
  aria-label="bookmark"
  onclick="toggleBookmark()"
  type="button"
  data-js="button-bookmark"
>
  <img
    class="bookmark"
    src="images/bookmark-icon-unmarked.png"
    alt="marked bookmark"
    data-js="bookmark-icon-unmarked"
  />
</button>
<div class="question-box">
  <p class="question">
    ${question}
  </p>
  <button
    class="button-answer"
    role="button"
    aria-label="show answer"
    type="button"
    data-js="button-answer"
    onclick="toggleAnswer"
  >
    Show Answer
  </button>
  <p class="answer" data-js="answer" hidden>${answer}
  </p>
</div>
<ul class="tag-box">
${tag}
  </li>
</ul>
</li>
`;

  document.body.append(newQuestion);

  event.target.reset();
  event.target.elements["question"].focus();
});
