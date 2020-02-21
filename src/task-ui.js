import { toggleVisibility } from './visibility.js';
import { taskFactory } from './task.js';
import { projectFactory } from './project.js';
import { projects, sampleProject, renderProjects } from './project-ui.js';

let sampleTask = taskFactory('Test Task', 'This is a short description',
                          '06/03/2020', 'Unassigned', 3);

sampleProject.tasks.push(sampleTask);
console.log(sampleProject);
console.log(projects);

const taskContainer = document.getElementById('task-container');

function renderTasks() {
  projects.forEach((proj) => {
    proj.tasks.forEach((element) => {
      let taskDiv = document.createElement('div');
      let taskTitle = document.createElement('p');
      let taskDescription = document.createElement('p');
      let taskDeadline = document.createElement('p');

      taskDiv.setAttribute('class', 'task-div');
      taskTitle.setAttribute('class', 'task-title');
      taskDescription.setAttribute('class', 'task-descr');

      taskTitle.innerHTML = element.title;
      taskDescription.innerHTML = element.description;

      taskDiv.appendChild(taskTitle);
      taskDiv.appendChild(taskDescription);
      taskContainer.appendChild(taskDiv);
    });
  });
}

let taskColor = () => {
  
}

export { renderTasks };
