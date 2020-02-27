/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom-elements.js":
/*!*****************************!*\
  !*** ./src/dom-elements.js ***!
  \*****************************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dom\", function() { return dom; });\n\nfunction getDom() {\n  const projectForm = document.getElementById('project-form');\n  const taskForm = document.getElementById('task-form');\n  const projectEditForm = document.getElementById('project-edit-form');\n  const taskEditForm = document.getElementById('task-edit-form');\n\n  const projName = document.getElementById('project-name');\n  const projDescription = document.getElementById('project-description');\n  const projectContainer = document.getElementById('project-container');\n  const newProjectButton = document.getElementById('create-project');\n  const projectCancelButton = document.getElementById('proj-cancel');\n\n  const projEditName = document.getElementById('project-edit-name');\n  const projEditDescription = document.getElementById('project-edit-description');\n\n  const taskName = document.getElementById('task-name');\n  const taskDescription = document.getElementById('task-description');\n  const taskContainer = document.getElementById('task-container');\n  const newTaskButton = document.getElementById('create-task');\n  const taskCancelButton = document.getElementById('task-cancel');\n  const taskDeadline = document.getElementById('deadline');\n  const urgency = document.getElementById('urgency');\n  const projectSelection = document.getElementById('assign-project');\n\n  const projectButton = document.getElementById('add-project');\n  const taskButton = document.getElementById('add-task');\n\n  return { projectForm, taskForm, projectEditForm, taskEditForm, projName,\n    projDescription, projectContainer, newProjectButton, projectCancelButton,\n    projEditName, projEditDescription, taskName, taskDescription, taskContainer,\n    newTaskButton, taskCancelButton, taskDeadline, urgency, projectSelection,\n    projectButton, taskButton, };\n};\n\nlet dom = getDom();\n\n\n\n\n//# sourceURL=webpack:///./src/dom-elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-ui.js */ \"./src/project-ui.js\");\n/* harmony import */ var _task_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-ui.js */ \"./src/task-ui.js\");\n// title, description, due date, priority in every todo\n\n\n\nObject(_project_ui_js__WEBPACK_IMPORTED_MODULE_0__[\"renderProjects\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project-ui.js":
/*!***************************!*\
  !*** ./src/project-ui.js ***!
  \***************************/
/*! exports provided: projects, sampleProject, renderProjects, inbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sampleProject\", function() { return sampleProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inbox\", function() { return inbox; });\n/* harmony import */ var _visibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visibility.js */ \"./src/visibility.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-ui.js */ \"./src/task-ui.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _reset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset.js */ \"./src/reset.js\");\n/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-elements.js */ \"./src/dom-elements.js\");\n//to determine how the project part of the screen looks\n\n\n\n\n\n\n\n\nlet sampleProject = Object(_project_js__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])('Inbox',\n                      'This project contains all tasks that have not been assigned elsewhere.');\n\nlet sampleTask = Object(_task_js__WEBPACK_IMPORTED_MODULE_3__[\"taskFactory\"])('Test Task', 'This is a short description',\n                          '2020-01-01', 3);\n\nsampleProject.tasks.push(sampleTask);\n\nlet projects;\nlet deleteButton;\nlet editButton;\nlet inbox;\n\n_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].newProjectButton.addEventListener('click', () => {\n  if (_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projName.value === '') {\n    alert('Please, at least give the project a name');\n  } else {\n    projects.push(Object(_project_js__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projName.value, _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projDescription.value));\n    localStorage.setItem('projects', JSON.stringify(projects, Object(_task_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"getCircularReplacer\"])()));\n    Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectForm);\n    renderProjects();\n    Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projName);\n    Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projDescription);\n  }\n});\n\n_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectCancelButton.addEventListener('click', () => {\n  Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectForm);\n  Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projName);\n  Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projDescription);\n});\n\nfunction renderProjects() {\n  let taskAssignment = document.getElementById('assign-project');\n  taskAssignment.innerHTML = '';\n  _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectContainer.innerHTML = '';\n  Object(_task_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"renderTasks\"])(projects[0]);\n\n  projects.forEach((element) => {\n    let projectDiv = document.createElement('div');\n    let projectTitle = document.createElement('p');\n    let projectDescription = document.createElement('p');\n    let option = document.createElement('option');\n\n    deleteButton = document.createElement('img');\n    deleteButton.setAttribute('src', './assets/delete.svg');\n    deleteButton.setAttribute('class', 'delete');\n\n    editButton = document.createElement('img');\n    editButton.setAttribute('src', './assets/edit.svg');\n    editButton.setAttribute('class', 'edit');\n\n    inbox = document.getElementById('inbox');\n\n    if (element === projects[0]) {\n      projectDiv.setAttribute('id', 'inbox');\n\n      //add that the first project, i.e., inbox, is not deletable as well\n    } else {\n      inbox.focus();\n      projectDiv.appendChild(deleteButton);\n      projectDiv.appendChild(editButton);\n    }\n\n    option.innerHTML = element.title;\n    taskAssignment.appendChild(option);\n\n    projectDiv.setAttribute('class', 'project-div');\n    projectTitle.setAttribute('class', 'project-title');\n    projectDescription.setAttribute('class', 'project-descr');\n\n    projectDiv.setAttribute('tabindex', '1');\n\n    projectTitle.innerHTML = element.title;\n    projectDescription.innerHTML = element.description;\n\n    projectDiv.appendChild(projectTitle);\n    projectDiv.appendChild(projectDescription);\n    _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectContainer.appendChild(projectDiv);\n\n    projectDiv.addEventListener('click', (e) => {\n      let arr = Array.prototype.slice.call(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectContainer.childNodes);\n      if (e.target === deleteButton) {\n        _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectContainer.removeChild(projectDiv);\n        projects.splice(arr.indexOf(projectDiv), 1);\n        localStorage.setItem('projects', JSON.stringify(projects, Object(_task_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"getCircularReplacer\"])()));\n        inbox.focus();\n        Object(_task_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"renderTasks\"])(projects[0]);\n      } else if (e.target === editButton) {\n        Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectEditForm);\n        _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectContainer.removeChild(e.path[1]);\n        projects.splice(arr.indexOf(projectDiv), 1);\n        localStorage.setItem('projects', JSON.stringify(projects, Object(_task_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"getCircularReplacer\"])()));\n        _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projEditName.value = e.path[1].childNodes[2].innerHTML;\n        _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projEditDescription.value = e.path[1].lastChild.innerHTML;\n      } else {\n        Object(_task_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"renderTasks\"])(element);\n      }\n    });\n\n  });\n}\n\n_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectButton.addEventListener('click', () => {\n  Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectForm);\n});\n\nif (!JSON.parse(localStorage.getItem('projects'))) {\n  projects = [sampleProject];\n} else {\n  let storedProjects = JSON.parse(localStorage.getItem('projects'));\n  projects = storedProjects;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/project-ui.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: projectFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectFactory\", function() { return projectFactory; });\nlet projectFactory = (title, description) => {\n  let tasks = [];\n  return { title, description, tasks };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/reset.js":
/*!**********************!*\
  !*** ./src/reset.js ***!
  \**********************/
/*! exports provided: resetValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetValue\", function() { return resetValue; });\nfunction resetValue(element) {\n  element.value = '';\n};\n\n\n\n\n//# sourceURL=webpack:///./src/reset.js?");

/***/ }),

/***/ "./src/task-ui.js":
/*!************************!*\
  !*** ./src/task-ui.js ***!
  \************************/
/*! exports provided: renderTasks, getCircularReplacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTasks\", function() { return renderTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCircularReplacer\", function() { return getCircularReplacer; });\n/* harmony import */ var _visibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visibility.js */ \"./src/visibility.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _project_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-ui.js */ \"./src/project-ui.js\");\n/* harmony import */ var _reset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset.js */ \"./src/reset.js\");\n/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-elements.js */ \"./src/dom-elements.js\");\n\n\n\n\n\n\n\nconst getCircularReplacer = () => {\n  const seen = new WeakSet();\n  return (key, value) => {\n    if (typeof value === 'object' && value !== null) {\n      if (seen.has(value)) {\n        return;\n      }\n\n      seen.add(value);\n    }\n\n    return value;\n  };\n};\n\n_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].newTaskButton.addEventListener('click', () => {\n  let selectedProject;\n  let projectForThisTask;\n\n  if (_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskName.value === '') {\n    alert('Please at least give your task a name');\n  } else {\n    let indexNo = _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].projectSelection.selectedIndex;\n    selectedProject = _project_ui_js__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][indexNo];\n    let newT = Object(_task_js__WEBPACK_IMPORTED_MODULE_1__[\"taskFactory\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskName.value, _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskDescription.value,\n      _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskDeadline.value, _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].urgency.value);\n    selectedProject.tasks.push(newT);\n    Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskForm);\n    Object(_project_ui_js__WEBPACK_IMPORTED_MODULE_3__[\"renderProjects\"])();\n    projectForThisTask = document.getElementsByClassName('project-div')[indexNo];\n    projectForThisTask.focus();\n    renderTasks(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].selectedProject);\n    localStorage.setItem('projects', JSON.stringify(_project_ui_js__WEBPACK_IMPORTED_MODULE_3__[\"projects\"], getCircularReplacer()));\n    Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskName);\n    Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskDescription);\n    _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].urgency.value = '1';\n  }\n\n});\n\n_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskCancelButton.addEventListener('click', () => {\n  Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskForm);\n  Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskName);\n  Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskDescription);\n  _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].urgency.value = '1';\n});\n\nfunction renderTasks(proj) {\n  _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskContainer.innerHTML = '';\n\n  proj.tasks.forEach((element) => {\n    let taskDiv = document.createElement('div');\n    let taskTitle = document.createElement('p');\n    let taskDescription = document.createElement('p');\n    let taskDeadline = document.createElement('p');\n\n    taskDiv.setAttribute('class', 'task-div');\n    taskTitle.setAttribute('class', 'task-title');\n    taskDescription.setAttribute('class', 'task-descr');\n    taskDeadline.setAttribute('class', 'task-deadline');\n\n    taskTitle.innerHTML = element.title;\n    taskDescription.innerHTML = element.description;\n    if (element.deadline === '') {\n      taskDeadline.innerHTML = 'Deadline not determined';\n    } else {\n      taskDeadline.innerHTML = 'Deadline: ' + element.deadline;\n    }\n\n    (function () {\n      let today = new Date();\n      let tDeadline = new Date(element.deadline);\n      if (tDeadline.getTime() < today.getTime()) {\n        let overdueDiv = document.createElement('div');\n        overdueDiv.setAttribute('class', 'overdue');\n        overdueDiv.innerHTML = 'OVERDUE';\n        taskDiv.appendChild(overdueDiv);\n        taskDeadline.style.color = 'rgb(205,80,87)';\n      }\n    })();\n\n    taskDiv.appendChild(taskDeadline);\n    taskDiv.appendChild(taskTitle);\n    taskDiv.appendChild(taskDescription);\n    _dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskContainer.appendChild(taskDiv);\n\n    if (element.urgency === 1) {\n      taskDiv.style.border = '2px solid rgb(127,149,117)';\n    } else if (element.urgency === 2) {\n      taskDiv.style.border = '2px solid rgba(255,185,78,1)';\n    } else if (element.urgency === 3) {\n      taskDiv.style.border = '2px solid rgb(205,80,87)';\n    }\n  });\n}\n\n_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskButton.addEventListener('click', () => {\n  Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_dom_elements_js__WEBPACK_IMPORTED_MODULE_5__[\"dom\"].taskForm);\n});\n\n\n\n// TODO:\n// update (edit) INTO A NEW EDIT FORM\n//add tick box for when tasks are done\n\n\n//# sourceURL=webpack:///./src/task-ui.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: taskFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskFactory\", function() { return taskFactory; });\n//to determine the functionality of creating tasks\n\nlet taskFactory = (title, description, deadline, urgency) => {\n  urgency = Number(urgency);\n\n  return { title, description, deadline, urgency };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/visibility.js":
/*!***************************!*\
  !*** ./src/visibility.js ***!
  \***************************/
/*! exports provided: toggleVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleVisibility\", function() { return toggleVisibility; });\n//toggle visibility of forms\n\nconst toggleVisibility = (element) => {\n  if (element.style.display === 'block') {\n    element.style.display = 'none';\n  } else {\n    element.style.display = 'block';\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/visibility.js?");

/***/ })

/******/ });