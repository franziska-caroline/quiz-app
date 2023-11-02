const answerButtons = document.querySelectorAll('[data-js="button-answer"]');

answerButtons.forEach((button) => {
  button.addEventListener("click", toggleAnswer);
});

function answerButtons(event) {
  const answerElement =
    event.target.parentElement.querySelector('[data-js="answer"]');

  if (
    answerElement.style.display === "none" ||
    answerElement.style.display === ""
  ) {
    // If the answer is hidden or not set, make it visible
    answerElement.style.display = "block";
    event.target.textContent = "Hide Answer"; // Update the button text
  } else {
    // If the answer is visible, hide it
    answerElement.style.display = "none";
    event.target.textContent = "Show Answer"; // Update the button text
  }
}
