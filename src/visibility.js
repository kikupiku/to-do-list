const toggleVisibility = (element) => {
  (element.style.display === 'block') ?
        element.style.display = 'none' : element.style.display = 'block';
};

export { toggleVisibility };
