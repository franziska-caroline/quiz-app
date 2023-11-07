/* BOOKMARK BUTTON */

// So bekomme ich alle Elememte mit dem Attribut data-js="button-bookmark"
const bookmarkButtons = document.querySelectorAll(
  '[data-js="button-bookmark"]'
);

// So füge ich ein click event listener zu jedem einzelnen Button
bookmarkButtons.forEach((button) => {
  button.addEventListener("click", toggleBookmark);
});

function toggleBookmark(event) {
  const button = event.currentTarget; // <= Der angeklickte Button
  const image = button.querySelector('[data-js="bookmark-icon-unmarked"]');

  if (image.src.endsWith("bookmark-icon-unmarked.png")) {
    image.src = "images/bookmark-icon-marked.png";
  } else {
    image.src = "images/bookmark-icon-unmarked.png";
  }
}

/* ANSWER BUTTON */

// 1. ich muss dem Butto aus dem HTML bekommen => const
// 2. ich muss dem Button ein click event zu weisen
// 3. ich brauche das HTML Element dass modifiziert wird (answer)
// 4. Was muss dann passieren?
// 5. Wenn ich auf den Button klicke soll das Attribut "hidden" getoggelt werden(da oder weg sein)
// 6. Der Text des Buttons soll ausgetauscht werden (Hide/Show)

const answerButtons = document.querySelectorAll('[data-js="button-answer"]');
const answers = document.querySelectorAll('[data-js="answer"]');

answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    answers[index].toggleAttribute("hidden");
    if (answers[index].hasAttribute("hidden")) {
      button.textContent = "Show Answer";
    } else {
      button.textContent = "Hide Answer";
    }
  });
});
