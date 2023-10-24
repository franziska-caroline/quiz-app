function toggleBookmark() {
    const image = document.getElementById('bookmark-image');
    const currentImageSrc = image.getAttribute('src');
  
    if (currentImageSrc === 'images/bookmark-icon-unmarked.png') {
      image.setAttribute('src', 'images/bookmark-icon-marked.png');
    } else {
      image.setAttribute('src', 'images/bookmark-icon-unmarked.png');
    }
  }