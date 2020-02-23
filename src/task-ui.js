import { toggleVisibility, taskForm } from './visibility.js';
import { taskFactory } from './task.js';
import { projectFactory } from './project.js';
import { projects, sampleProject, sampleProject2, renderProjects } from './project-ui.js';

const taskContainer = document.getElementById('task-container');

function renderTasks(proj) {
  taskContainer.innerHTML = '';

  // projects.forEach((proj) => {

  proj.tasks.forEach((element) => {
    let taskDiv = document.createElement('div');
    let taskTitle = document.createElement('p');
    let taskDescription = document.createElement('p');
    let taskDeadline = document.createElement('p');

    taskDiv.setAttribute('class', 'task-div');
    taskTitle.setAttribute('class', 'task-title');
    taskDescription.setAttribute('class', 'task-descr');
    taskDeadline.setAttribute('class', 'task-deadline');

    taskTitle.innerHTML = element.title;
    taskDescription.innerHTML = element.description;
    taskDeadline.innerHTML = 'Deadline: ' + element.deadline;

    taskDiv.appendChild(taskDeadline);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDescription);
    taskContainer.appendChild(taskDiv);

    if (element.urgency === 1) {
      taskDiv.style.border = '2px solid rgb(127,149,117)';
    } else if (element.urgency === 2) {
      taskDiv.style.border = '2px solid rgba(255,185,78,1)';
    } else if (element.urgency === 3) {
      taskDiv.style.border = '2px solid rgb(205,80,87)';
    }
  });

  // });
}

const taskButton = document.getElementById('add-task');

taskButton.addEventListener('click', () => {
  toggleVisibility(taskForm);
});

export { renderTasks };
