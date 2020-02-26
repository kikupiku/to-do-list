import { toggleVisibility, taskForm } from './visibility.js';
import { taskFactory } from './task.js';
import { projectFactory, tasks } from './project.js';
import { projects, renderProjects, inbox } from './project-ui.js';
import { resetValue } from './reset.js';

const taskContainer = document.getElementById('task-container');
const newTaskButton = document.getElementById('create-task');
const taskCancelButton = document.getElementById('task-cancel');
const projectSelection = document.getElementById('assign-project');

let taskName = document.getElementById('task-name');
let taskDescription = document.getElementById('task-description');
let taskDeadline = document.getElementById('deadline');
let urgency = document.getElementById('urgency');

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }

      seen.add(value);
    }

    return value;
  };
};

newTaskButton.addEventListener('click', () => {
  let selectedProject;
  let projectForThisTask;

  if (taskName.value === '') {
    alert('Please at least give your task a name');
  } else {
    let indexNo = projectSelection.selectedIndex;
    selectedProject = projects[indexNo];
    let newT = taskFactory(taskName.value, taskDescription.value,
      taskDeadline.value, urgency.value);
    selectedProject.tasks.push(newT);
    toggleVisibility(taskForm);
    renderProjects();
    projectForThisTask = document.getElementsByClassName('project-div')[indexNo];
    projectForThisTask.focus();
    renderTasks(selectedProject);
    localStorage.setItem('projects', JSON.stringify(projects, getCircularReplacer()));
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
    if (element.deadline === '') {
      taskDeadline.innerHTML = 'Deadline not determined';
    } else {
      taskDeadline.innerHTML = 'Deadline: ' + element.deadline;
    }

    (function () {
      let today = new Date();
      let tDeadline = new Date(element.deadline);
      if (tDeadline.getTime() < today.getTime()) {
        let overdueDiv = document.createElement('div');
        overdueDiv.setAttribute('class', 'overdue');
        overdueDiv.innerHTML = 'OVERDUE';
        taskDiv.appendChild(overdueDiv);
        taskDeadline.style.color = 'rgb(205,80,87)';
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

export { renderTasks, getCircularReplacer };

// TODO:
// update (edit) INTO A NEW EDIT FORM
//add tick box for when tasks are done
