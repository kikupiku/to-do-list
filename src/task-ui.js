import { toggleVisibility, taskForm } from './visibility.js';
import { taskFactory } from './task.js';
import { projectFactory } from './project.js';
import { projects, sampleProject, sampleProject2, renderProjects } from './project-ui.js';
import { resetValue } from './reset.js';

const taskContainer = document.getElementById('task-container');
const newTaskButton = document.getElementById('create-task');
const taskCancelButton = document.getElementById('task-cancel');
const projectSelection = document.getElementById('assign-project');

let taskName = document.getElementById('task-name');
let taskDescription = document.getElementById('task-description');
let taskDeadline = document.getElementById('deadline');
let urgency = document.getElementById('urgency');

newTaskButton.addEventListener('click', () => {
  let selectedProject;
  if (taskName.value === '') {
    ;
  } else {
    selectedProject = projects[projectSelection.selectedIndex];
    let newT = taskFactory(taskName.value, taskDescription.value,
      taskDeadline.value, selectedProject, urgency.value);
    selectedProject.tasks.push(newT);
    renderTasks(selectedProject);
    toggleVisibility(taskForm);
    renderProjects();
    resetValue(taskName);
    resetValue(taskDescription);
    urgency.value = '1';
  }
});

taskCancelButton.addEventListener('click', () => {
  toggleVisibility(taskForm);
  resetValue(taskName);
  resetValue(taskDescription);
  urgency.value = '1';
});

function renderTasks(proj) {
  taskContainer.innerHTML = '';

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

    (function () {
      let today = new Date();
      let tDeadline = new Date(element.deadline);
      if (tDeadline.getTime() < today.getTime()) {
        console.log('overdue!');
        let overdueDiv = document.createElement('div');
        overdueDiv.setAttribute('class', 'overdue');
        overdueDiv.innerHTML = 'OVERDUE!';
        taskDiv.appendChild(overdueDiv);
      }
    })();

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
}

const taskButton = document.getElementById('add-task');

taskButton.addEventListener('click', () => {
  toggleVisibility(taskForm);
});

export { renderTasks };

// TODO: add deadline and urgency to rendering tasks,
// research local storage
// update and destroy
