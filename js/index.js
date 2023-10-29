// So bekomme ich alle Elememte mit dem Attribut data-js="button-bookmark"
const buttons = document.querySelectorAll('[data-js="button-bookmark"]');

// So füge ich ein click event listener zu jedem einzelnen Button
buttons.forEach((button) => {
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