//toggle visibility of forms

const toggleVisibility = (element) => {
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
};

export { toggleVisibility };
