import { toggleVisibility, projectForm, projectEditForm } from './visibility.js';
import { projectFactory } from './project.js';
import { renderTasks, getCircularReplacer } from './task-ui.js';
import { taskFactory } from './task.js';
import { resetValue, resetText } from './rese.js';
import { dom } from './dom-elements.js';

let inboxProject = projectFactory('Inbox',
                      'This project contains all tasks that have not been assigned elsewhere.');
let exampleProject = projectFactory('Example project',
                      'Unlike the inbox, you can edit or delete this project. Click it to see if it has any tasks');

let sampleTask = taskFactory('Example Task (click me)',
      'Welcome to "TO GET DONE"! This task is here to show you how this page works. It belongs to the inbox, which is currently active. Check out the example project to see the tasks it contains. Feel free to edit this task, or get rid of it by marking it as done (do to that tick the checkbox on the left).',
                          '2020-01-01', 3);

let sampleTask2 = taskFactory('Not so urgent task', 'This task exists to show you how it looks when you assign tasks to different projects', '2020-06-05', 2);

inboxProject.tasks.push(sampleTask);
exampleProject.tasks.push(sampleTask2);

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

  resetText(dom.editProjectSelection);
  resetText(dom.projectContainer);
  renderTasks(projects[0]);

  projects.forEach((element) => {
    let projectDiv = document.createElement('div');
    let projectTitle = document.createElement('p');
    let projectDescription = document.createElement('p');
    let option = document.createElement('option');
    let optionForEdit = document.createElement('option');

    let deleteButton = document.createElement('img');
    deleteButton.setAttribute('src', './assets/delete.svg');
    deleteButton.setAttribute('class', 'delete');

    let editButton = document.createElement('img');
    editButton.setAttribute('src', './assets/edit.svg');
    editButton.setAttribute('class', 'edit edit-project');

    inbox = document.getElementById('inbox');

    if (element === projects[0]) {
      projectDiv.setAttribute('id', 'inbox');
    } else {
      toggleActiveProject(projects[0], dom.projectContainer.childNodes[0]);
      projectDiv.appendChild(deleteButton);
      projectDiv.appendChild(editButton);
    }

    option.textContent = element.title;
    optionForEdit.textContent = element.title;
    dom.projectSelection.appendChild(option);
    dom.editProjectSelection.appendChild(optionForEdit);

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
      if (e.target === deleteButton) {
        projects.splice(projects.indexOf(element), 1);
        localStorage.setItem('projects', JSON.stringify(projects, getCircularReplacer()));
        renderProjects();
      } else if (e.target === editButton) {
        toggleVisibility(dom.projectEditForm);
        dom.projEditName.value = e.path[1].childNodes[2].innerHTML;
        dom.projEditDescription.value = e.path[1].lastChild.innerHTML;
        dom.projectEditForm.setAttribute('data-projectindex', projects.indexOf(element));
      } else {
        toggleActiveProject(element, projectDiv);
      }
    });
  });
}

dom.projUpdate.addEventListener('click', () => {
  if (dom.projEditName.value === '') {
    alert('Please, at least let the project keep a name');
  } else {
    toggleVisibility(dom.projectEditForm);
    let projIndex = dom.projectEditForm.getAttribute('data-projectindex');
    let project = projects[projIndex];
    project.title = dom.projEditName.value;
    project.description = dom.projEditDescription.value;
    localStorage.setItem('projects', JSON.stringify(projects, getCircularReplacer()));
    renderProjects();
  }
});

dom.projUpdateCancel.addEventListener('click', () => {
  toggleVisibility(dom.projectEditForm);
});

dom.projectButton.addEventListener('click', () => {
  toggleVisibility(dom.projectForm);
});

function toggleActiveProject(project, projectDiv) {
  renderTasks(project);
  dom.projectContainer.childNodes.forEach((projectDiv) => {
    projectDiv.style.background = 'rgb(117,137,149)';
  });
  projectDiv.style.background = 'rgba(117,137,149,.7)';
}

if (!JSON.parse(localStorage.getItem('projects'))) {
  projects = [inboxProject, exampleProject];
} else {
  let storedProjects = JSON.parse(localStorage.getItem('projects'));
  projects = storedProjects;
}

export { projects, inboxProject, exampleProject, renderProjects, inbox, toggleActiveProject };
