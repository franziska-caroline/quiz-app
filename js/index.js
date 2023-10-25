function toggleBookmark(event) {
  const button = document.querySelector('[data-js="button-bookmark"]');
  const image = button.querySelector('[data-js="bookmark-icon-unmarked"]');

  if (image.src.endsWith('bookmark-icon-unmarked.png')) {
    image.src = 'images/bookmark-icon-marked.png';
  } else {
    image.src = 'images/bookmark-icon-unmarked.png';
  }
}