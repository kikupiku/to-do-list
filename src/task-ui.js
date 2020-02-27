import { toggleVisibility, taskForm } from './visibility.js';
import { taskFactory } from './task.js';
import { projectFactory, tasks } from './project.js';
import { projects, renderProjects, inbox } from './project-ui.js';
import { resetValue } from './reset.js';
import { dom } from './dom-elements.js';

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

dom.newTaskButton.addEventListener('click', () => {
  let selectedProject;
  let projectForThisTask;

  if (dom.taskName.value === '') {
    alert('Please at least give your task a name');
  } else {
    let indexNo = dom.projectSelection.selectedIndex;
    selectedProject = projects[indexNo];
    let newT = taskFactory(dom.taskName.value, dom.taskDescription.value,
      dom.taskDeadline.value, dom.urgency.value);
    selectedProject.tasks.push(newT);
    toggleVisibility(dom.taskForm);
    renderProjects();
    projectForThisTask = document.getElementsByClassName('project-div')[indexNo];
    projectForThisTask.focus();
    renderTasks(dom.selectedProject);
    localStorage.setItem('projects', JSON.stringify(projects, getCircularReplacer()));
    resetValue(dom.taskName);
    resetValue(dom.taskDescription);
    dom.urgency.value = '1';
  }

});

dom.taskCancelButton.addEventListener('click', () => {
  toggleVisibility(dom.taskForm);
  resetValue(dom.taskName);
  resetValue(dom.taskDescription);
  dom.urgency.value = '1';
});

function renderTasks(proj) {
  dom.taskContainer.innerHTML = '';

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
    dom.taskContainer.appendChild(taskDiv);

    if (element.urgency === 1) {
      taskDiv.style.border = '2px solid rgb(127,149,117)';
    } else if (element.urgency === 2) {
      taskDiv.style.border = '2px solid rgba(255,185,78,1)';
    } else if (element.urgency === 3) {
      taskDiv.style.border = '2px solid rgb(205,80,87)';
    }
  });
}

dom.taskButton.addEventListener('click', () => {
  toggleVisibility(dom.taskForm);
});

export { renderTasks, getCircularReplacer };

// TODO:
// update (edit) INTO A NEW EDIT FORM
//add tick box for when tasks are done
