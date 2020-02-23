//toggle visibility of forms

let projectForm = document.getElementById('project-form');
let taskForm = document.getElementById('task-form');

const toggleVisibility = (element) => {
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
};

export { toggleVisibility, projectForm, taskForm };
