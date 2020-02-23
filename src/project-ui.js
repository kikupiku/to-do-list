//to determine how the project part of the screen looks

import { toggleVisibility, projectForm } from './visibility.js';
import { projectFactory } from './project.js';
import { renderTasks } from './task-ui.js';
import { taskFactory } from './task.js';

let sampleProject = projectFactory('Inbox',
                      'This project contains all tasks that have not been assigned elsewhere.');
let sampleProject2 = projectFactory('Sample Project2', 'This is a sample project. It is nice.');
let sampleProject3 = projectFactory('Sample Project3', 'This is a sample project. It is nice.');

let projects = [sampleProject, sampleProject2, sampleProject3];

let sampleTask = taskFactory('Test Task', 'This is a short description',
                          '06/03/2020', 'Unassigned', 3);
let sampleTask2 = taskFactory('Not so Urgent Task', 'Can be postponed, it\'s fine.',
                          '08/03/2020', 'Unassigned', 2);

sampleProject.tasks.push(sampleTask);
sampleProject2.tasks.push(sampleTask2);

const projectContainer = document.getElementById('project-container');

function renderProjects() {
  projectContainer.innerHTML = '';
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

    projectDiv.addEventListener('click', () => {
      renderTasks(element);
    });
  });
}

const projectButton = document.getElementById('add-project');

projectButton.addEventListener('click', () => {
  toggleVisibility(projectForm);
});

export { projects, sampleProject, sampleProject2, renderProjects };
