//to determine how the project part of the screen looks

import { toggleVisibility } from './visibility.js';
import { projectFactory } from './project.js';

let sampleProject = projectFactory('Unassigned',
                      'This project contains all tasks that have not been assigned elsewhere.');
let sampleProject2 = projectFactory('Sample Projec2', 'This is a sample project. It is nice.');
let sampleProject3 = projectFactory('Sample Project3', 'This is a sample project. It is nice.');

let projects = [sampleProject, sampleProject2, sampleProject3];

const projectContainer = document.getElementById('project-container');

function renderProjects() {
  projects.forEach((element) => {
    let projectDiv = document.createElement('div');
    let projectTitle = document.createElement('p');
    let projectDescription = document.createElement('p');

    projectDiv.setAttribute('class', 'project-div');
    projectTitle.setAttribute('class', 'project-title');
    projectDescription.setAttribute('class', 'project-descr');

    projectTitle.innerHTML = element.title;
    projectDescription.innerHTML = element.description;

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDescription);
    projectContainer.appendChild(projectDiv);
  });
}

const projectButton = document.getElementById('add-project');

projectButton.addEventListener('click', () => {
  toggleVisibility(form);
});

export { projects, sampleProject, renderProjects };
