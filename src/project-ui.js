//to determine how the project part of the screen looks

import { toggleVisibility, projectForm } from './visibility.js';
import { projectFactory } from './project.js';
import { renderTasks } from './task-ui.js';
import { taskFactory, taskForm } from './task.js';
import { resetValue } from './reset.js';

let sampleProject = projectFactory('Inbox',
                      'This project contains all tasks that have not been assigned elsewhere.');

let projects;

if (!JSON.parse(localStorage.getItem('projects'))) {
  projects = [sampleProject];
} else {
  let storedProjects = JSON.parse(localStorage.getItem('projects'));  // FROM LOCAL STORAGE
  projects = storedProjects;
}

let sampleTask = taskFactory('Test Task', 'This is a short description',
                          '2020-01-01', 'Unassigned', 3);

sampleProject.tasks.push(sampleTask);

const projectContainer = document.getElementById('project-container');
const newProjectButton = document.getElementById('create-project');
const projectCancelButton = document.getElementById('proj-cancel');

let projName = document.getElementById('project-name');
let projDescription = document.getElementById('project-description');

newProjectButton.addEventListener('click', () => {
  if (projName.value === '') {
    ;
  } else {
    projects.push(projectFactory(projName.value, projDescription.value));
    localStorage.setItem('projects', JSON.stringify(projects));
    toggleVisibility(projectForm);
    renderProjects();
    resetValue(projName);
    resetValue(projDescription);
  }
});

projectCancelButton.addEventListener('click', () => {
  toggleVisibility(projectForm);
  resetValue(projName);
  resetValue(projDescription);
});

function renderProjects() {
  let taskAssignment = document.getElementById('assign-project');
  taskAssignment.innerHTML = '';
  projectContainer.innerHTML = '';

  projects.forEach((element) => {
    let projectDiv = document.createElement('div');
    let projectTitle = document.createElement('p');
    let projectDescription = document.createElement('p');
    let option = document.createElement('option');

    if (element === projects[0]) {
      projectDiv.setAttribute('autofocus', '');

      //add that the first project, i.e., inbox, is not deletable as well
    }

    option.innerHTML = element.title;
    taskAssignment.appendChild(option);

    projectDiv.setAttribute('class', 'project-div');
    projectTitle.setAttribute('class', 'project-title');
    projectDescription.setAttribute('class', 'project-descr');

    projectDiv.setAttribute('tabindex', '1');

    projectTitle.innerHTML = element.title;
    projectDescription.innerHTML = element.description;

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDescription);
    projectContainer.appendChild(projectDiv);

    projectDiv.addEventListener('click', () => {
      renderTasks(element);
    });
  });
}

const projectButton = document.getElementById('add-project');

projectButton.addEventListener('click', () => {
  toggleVisibility(projectForm);
});

export { projects, sampleProject, renderProjects };
