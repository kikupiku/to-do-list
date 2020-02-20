import { toggleVisibility } from './visibility.js';

const projectContainer = document.getElementById('project-container');
const projectButton = document.getElementById('add-project');

projectButton.addEventListener('click', () => {
  toggleVisibility(form);
});
