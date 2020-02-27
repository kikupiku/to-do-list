import { toggleVisibility, projectForm, projectEditForm } from './visibility.js';
import { projectFactory } from './project.js';
import { renderTasks, getCircularReplacer } from './task-ui.js';
import { taskFactory, taskForm } from './task.js';
import { resetValue, resetText } from './reset.js';
import { dom } from './dom-elements.js';

let sampleProject = projectFactory('Inbox',
                      'This project contains all tasks that have not been assigned elsewhere.');

let sampleTask = taskFactory('Test Task', 'This is a short description',
                          '2020-01-01', 3);

sampleProject.tasks.push(sampleTask);

let projects;
let inbox;

dom.newProjectButton.addEventListener('click', () => {
  if (dom.projName.value === '') {
    alert('Please, at least give the project a name');
  } else {
    projects.push(projectFactory(dom.projName.value, dom.projDescription.value));
    localStorage.setItem('projects', JSON.stringify(projects, getCircularReplacer()));
    toggleVisibility(dom.projectForm);
    renderProjects();
    resetValue(dom.projName);
    resetValue(dom.projDescription);
  }
});

dom.projectCancelButton.addEventListener('click', () => {
  toggleVisibility(dom.projectForm);
  resetValue(dom.projName);
  resetValue(dom.projDescription);
});

function renderProjects() {
  resetText(dom.projectSelection);
  resetText(dom.projectContainer);
  renderTasks(projects[0]);

  projects.forEach((element) => {
    let projectDiv = document.createElement('div');
    let projectTitle = document.createElement('p');
    let projectDescription = document.createElement('p');
    let option = document.createElement('option');

    let deleteButton = document.createElement('img');
    deleteButton.setAttribute('src', './assets/delete.svg');
    deleteButton.setAttribute('class', 'delete');

    let editButton = document.createElement('img');
    editButton.setAttribute('src', './assets/edit.svg');
    editButton.setAttribute('class', 'edit');

    inbox = document.getElementById('inbox');

    if (element === projects[0]) {
      projectDiv.setAttribute('id', 'inbox');
    } else {
      inbox.focus();
      projectDiv.appendChild(deleteButton);
      projectDiv.appendChild(editButton);
    }

    option.innerHTML = element.title;
    dom.projectSelection.appendChild(option);

    projectDiv.setAttribute('class', 'project-div');
    projectTitle.setAttribute('class', 'project-title');
    projectDescription.setAttribute('class', 'project-descr');

    projectDiv.setAttribute('tabindex', '1');

    projectTitle.innerHTML = element.title;
    projectDescription.innerHTML = element.description;

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDescription);
    dom.projectContainer.appendChild(projectDiv);

    projectDiv.addEventListener('click', (e) => {
      let arr = Array.prototype.slice.call(dom.projectContainer.childNodes);
      if (e.target === deleteButton) {
        dom.projectContainer.removeChild(projectDiv);
        projects.splice(arr.indexOf(projectDiv), 1);
        localStorage.setItem('projects', JSON.stringify(projects, getCircularReplacer()));
        inbox.focus();
        dom.projectSelection.removeChild(option);
        renderTasks(projects[0]);
      } else if (e.target === editButton) {
        toggleVisibility(dom.projectEditForm);
        console.log(projectDiv);
        dom.projEditName.value = e.path[1].childNodes[2].innerHTML;
        dom.projEditDescription.value = e.path[1].lastChild.innerHTML;

        dom.projUpdate.addEventListener('click', () => {
          toggleVisibility(dom.projectEditForm);
          projectDiv.childNodes[2].innerHTML = dom.projEditName.value;
          projectDiv.childNodes[3].innerHTML = dom.projEditDescription.value;
          localStorage.setItem('projects', JSON.stringify(projects, getCircularReplacer()));
        });

        dom.projUpdateCancel.addEventListener('click', () => {
          toggleVisibility(dom.projectEditForm);
          resetValue(projectDiv.childNodes[2]);
          resetValue(projectDiv.childNodes[3]);
        });
      } else {
        renderTasks(element);
      }
    });

  });
}

dom.projectButton.addEventListener('click', () => {
  toggleVisibility(dom.projectForm);
});

if (!JSON.parse(localStorage.getItem('projects'))) {
  projects = [sampleProject];
} else {
  let storedProjects = JSON.parse(localStorage.getItem('projects'));
  projects = storedProjects;
}

export { projects, sampleProject, renderProjects, inbox };
