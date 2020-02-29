import { toggleVisibility } from './visibility.js';
import { taskFactory } from './task.js';
import { projectFactory } from './project.js';
import { projects, toggleActiveProject } from './project-ui.js';
import { resetValue, resetText } from './reset.js';
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
  console.log(dom.taskName);
  let indexNo;
  let selectedProject;

  if (dom.taskName.value === '') {
    alert('Please at least give your task a name');
  } else {
    indexNo = dom.projectSelection.selectedIndex;
    console.log(indexNo);
    selectedProject = projects[indexNo];
    console.log(selectedProject);
    let newT = taskFactory(dom.taskName.value, dom.taskDescription.value,
      dom.taskDeadline.value, dom.urgency.value);
    selectedProject.tasks.push(newT);
    toggleVisibility(dom.taskForm);
    let projectForThisTask = document.getElementsByClassName('project-div')[indexNo];
    toggleActiveProject(selectedProject, dom.projectContainer.childNodes[indexNo]);
    renderTasks(selectedProject);
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
  resetText(dom.taskContainer);

  proj.tasks.forEach((element) => {
    let taskDiv = document.createElement('div');
    let taskTitle = document.createElement('p');
    let taskDescription = document.createElement('p');
    let taskDeadline = document.createElement('p');

    taskDiv.setAttribute('class', 'task-div');
    taskTitle.setAttribute('class', 'task-title');
    taskDescription.setAttribute('class', 'task-descr');
    taskDeadline.setAttribute('class', 'task-deadline');

    let editButton = document.createElement('img');
    editButton.setAttribute('src', './assets/edit.svg');
    editButton.setAttribute('class', 'edit edit-task');

    let checkBoxContainer = document.createElement('div');
    checkBoxContainer.setAttribute('class', 'checkbox-container');

    let checkBox = document.createElement('img');
    checkBox.setAttribute('src', './assets/checkbox.png');
    checkBox.setAttribute('class', 'checkbox');

    taskTitle.innerHTML = element.title;
    taskDescription.innerHTML = element.description;

    if (element.deadline === '') {
      taskDeadline.innerHTML = 'Deadline not determined';
    } else {
      taskDeadline.innerHTML = 'Deadline: ' + element.deadline;
    }

    taskDiv.appendChild(taskDeadline);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(editButton);
    taskDiv.appendChild(taskDescription);
    checkBoxContainer.appendChild(checkBox);
    taskDiv.appendChild(checkBoxContainer);

    dom.taskContainer.appendChild(taskDiv);

    checkIfOverdue(element, taskDeadline);

    if (element.urgency === 1) {
      taskDiv.style.border = '2px solid rgb(127,149,117)';
    } else if (element.urgency === 2) {
      taskDiv.style.border = '2px solid rgba(255,185,78,1)';
    } else if (element.urgency === 3) {
      taskDiv.style.border = '2px solid rgb(205,80,87)';
    }

    editButton.addEventListener('click', (e) => {
      toggleVisibility(dom.taskEditForm);
      dom.taskEditName.value = element.title;
      dom.taskEditDescription.value = element.description;
      dom.taskEditDeadline.value = element.deadline;
      dom.editUrgency.value = element.urgency;
      let whichProjBeforeEdit = proj;
      dom.editProjectSelection.value = whichProjBeforeEdit.title;
      console.log(whichProjBeforeEdit);
      dom.taskEditForm.setAttribute('data-taskindex', proj.tasks.indexOf(element));
      dom.taskEditForm.setAttribute('data-projectindex', projects.indexOf(whichProjBeforeEdit));
    });

    checkBoxContainer.addEventListener('click', () => {
      checkBox.style.transform = 'translateY(0)';
      let taskIndex = proj.tasks.indexOf(element);
      proj.tasks.splice(taskIndex, 1);
      let fadeEffect = setInterval(() => {
        if (!taskDiv.style.opacity) {
          taskDiv.style.opacity = 1;
        }

        if (taskDiv.style.opacity > 0) {
          taskDiv.style.opacity -= 0.1;
        } else {
          renderTasks(proj);
          clearInterval(fadeEffect);
        }

        localStorage.setItem('projects', JSON.stringify(projects, getCircularReplacer()));
      }, 60);

    });

    taskTitle.addEventListener('click', () => {

      toggleVisibility(taskDescription);
      addOverdueDiv(element, taskDiv);
    });
  });
}

function checkIfOverdue(task, deadlineDiv) {
  let today = new Date();
  let tDeadline = new Date(task.deadline);
  if (tDeadline.getTime() < today.getTime()) {
    deadlineDiv.style.color = 'rgb(205,80,87)';
  }
};

function addOverdueDiv(task, div) {
  let today = new Date();
  let tDeadline = new Date(task.deadline);
  if (div.contains(document.getElementsByClassName('overdue')[0])) {
    div.removeChild(document.getElementsByClassName('overdue')[0]);
  } else {
    let overdueDiv = document.createElement('div');
    div.appendChild(overdueDiv);
    overdueDiv.setAttribute('class', 'overdue');
    if (tDeadline.getTime() < today.getTime()) {
      overdueDiv.innerHTML = 'OVERDUE';
    }
  }
}

dom.taskUpdate.addEventListener('click', () => {
  let newProjectIndexNo = dom.editProjectSelection.selectedIndex;
  let newlyAssignedProject = projects[newProjectIndexNo];
  let oldProjectIndexNo = Number(dom.taskEditForm.getAttribute('data-projectindex'));
  let oldProject = projects[oldProjectIndexNo];
  if (dom.taskEditName.value === '') {
    alert('Please at least let your task keep a name');
  } else {
    toggleVisibility(dom.taskEditForm);
    let taskIndexInOldProject = Number(dom.taskEditForm.getAttribute('data-taskindex'));
    let task = oldProject.tasks[taskIndexInOldProject];

    task.title = dom.taskEditName.value;
    task.description = dom.taskEditDescription.value;

    if (dom.taskEditDeadline.value === '') {
      task.deadline = 'Deadline not determined';
    } else {
      task.deadline = dom.taskEditDeadline.value;
    }

    task.urgency = Number(dom.editUrgency.value);

    if (newlyAssignedProject !== oldProject) {
      oldProject.tasks.splice(taskIndexInOldProject, 1);
      newlyAssignedProject.tasks.push(task);
    }

    toggleActiveProject(newlyAssignedProject, dom.projectContainer.childNodes[newProjectIndexNo]);
    localStorage.setItem('projects', JSON.stringify(projects, getCircularReplacer()));
  }
});

dom.taskButton.addEventListener('click', () => {
  toggleVisibility(dom.taskForm);
});

dom.taskUpdateCancel.addEventListener('click', () => {
  toggleVisibility(dom.taskEditForm);
});

export { renderTasks, getCircularReplacer };
