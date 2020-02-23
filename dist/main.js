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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-ui.js */ \"./src/project-ui.js\");\n/* harmony import */ var _task_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-ui.js */ \"./src/task-ui.js\");\n\n\n// title, description, due date, priority in every todo\n\n\n\nObject(_project_ui_js__WEBPACK_IMPORTED_MODULE_0__[\"renderProjects\"])();\n\nObject(_task_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"renderTasks\"])(_project_ui_js__WEBPACK_IMPORTED_MODULE_0__[\"sampleProject\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project-ui.js":
/*!***************************!*\
  !*** ./src/project-ui.js ***!
  \***************************/
/*! exports provided: projects, sampleProject, sampleProject2, renderProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sampleProject\", function() { return sampleProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sampleProject2\", function() { return sampleProject2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony import */ var _visibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visibility.js */ \"./src/visibility.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-ui.js */ \"./src/task-ui.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _reset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset.js */ \"./src/reset.js\");\n//to determine how the project part of the screen looks\n\n\n\n\n\n\n\nlet sampleProject = Object(_project_js__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])('Inbox',\n                      'This project contains all tasks that have not been assigned elsewhere.');\nlet sampleProject2 = Object(_project_js__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])('Sample Project2', 'This is a sample project. It is nice.');\nlet sampleProject3 = Object(_project_js__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])('Sample Project3', 'This is a sample project. It is nice.');\n\nlet projects = [sampleProject, sampleProject2, sampleProject3];\n\nlet sampleTask = Object(_task_js__WEBPACK_IMPORTED_MODULE_3__[\"taskFactory\"])('Test Task', 'This is a short description',\n                          '2020-06-03', 'Unassigned', 3);\nlet sampleTask2 = Object(_task_js__WEBPACK_IMPORTED_MODULE_3__[\"taskFactory\"])('Not so Urgent Task', 'Can be postponed, it\\'s fine.',\n                          '2020-08-03', 'Unassigned', 2);\n\nsampleProject.tasks.push(sampleTask);\nsampleProject2.tasks.push(sampleTask2);\n\nconst projectContainer = document.getElementById('project-container');\nconst newProjectButton = document.getElementById('create-project');\nconst projectCancelButton = document.getElementById('proj-cancel');\n\nlet projName = document.getElementById('project-name');\nlet projDescription = document.getElementById('project-description');\n\nnewProjectButton.addEventListener('click', () => {\n  if (projName.value === '') {\n    ;\n  } else {\n    projects.push(Object(_project_js__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])(projName.value, projDescription.value));\n    Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"projectForm\"]);\n    renderProjects();\n    Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(projName);\n    Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(projDescription);\n  }\n});\n\nprojectCancelButton.addEventListener('click', () => {\n  Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"projectForm\"]);\n  Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(projName);\n  Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(projDescription);\n});\n\nfunction renderProjects() {\n  projectContainer.innerHTML = '';\n  projects.forEach((element) => {\n    let projectDiv = document.createElement('div');\n    let projectTitle = document.createElement('p');\n    let projectDescription = document.createElement('p');\n    let option = document.createElement('option');\n    let taskAssignment = document.getElementById('assign-project');\n\n    if (element === projects[0]) {\n      projectDiv.setAttribute('autofocus', '');\n\n      //add that the first project, i.e., inbox, is not deletable as well\n    }\n\n    option.innerHTML = element.title;\n    taskAssignment.appendChild(option);\n\n    projectDiv.setAttribute('class', 'project-div');\n    projectTitle.setAttribute('class', 'project-title');\n    projectDescription.setAttribute('class', 'project-descr');\n\n    projectDiv.setAttribute('tabindex', '1');\n\n    projectTitle.innerHTML = element.title;\n    projectDescription.innerHTML = element.description;\n\n    projectDiv.appendChild(projectTitle);\n    projectDiv.appendChild(projectDescription);\n    projectContainer.appendChild(projectDiv);\n\n    projectDiv.addEventListener('click', () => {\n      Object(_task_ui_js__WEBPACK_IMPORTED_MODULE_2__[\"renderTasks\"])(element);\n    });\n  });\n}\n\nconst projectButton = document.getElementById('add-project');\n\nprojectButton.addEventListener('click', () => {\n  Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"projectForm\"]);\n});\n\n\n\n\n//# sourceURL=webpack:///./src/project-ui.js?");

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
/*! exports provided: renderTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTasks\", function() { return renderTasks; });\n/* harmony import */ var _visibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visibility.js */ \"./src/visibility.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _project_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-ui.js */ \"./src/project-ui.js\");\n/* harmony import */ var _reset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset.js */ \"./src/reset.js\");\n\n\n\n\n\n\nconst taskContainer = document.getElementById('task-container');\nconst newTaskButton = document.getElementById('create-task');\nconst taskCancelButton = document.getElementById('task-cancel');\nconst projectSelection = document.getElementById('assign-project');\n\nlet taskName = document.getElementById('task-name');\nlet taskDescription = document.getElementById('task-description');\nlet taskDeadline = document.getElementById('deadline');\nlet urgency = document.getElementById('urgency');\n\nnewTaskButton.addEventListener('click', () => {\n  let selectedProject;\n  if (taskName.value === '') {\n    ;\n  } else {\n    selectedProject = _project_ui_js__WEBPACK_IMPORTED_MODULE_3__[\"projects\"][projectSelection.selectedIndex];\n    let newT = Object(_task_js__WEBPACK_IMPORTED_MODULE_1__[\"taskFactory\"])(taskName.value, taskDescription.value,\n      taskDeadline.value, selectedProject, urgency.value);\n    selectedProject.tasks.push(newT);\n    console.log(selectedProject);\n    renderTasks(selectedProject);\n    Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"taskForm\"]);\n    Object(_project_ui_js__WEBPACK_IMPORTED_MODULE_3__[\"renderProjects\"])();\n    Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(taskName);\n    Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(taskDescription);\n    urgency.value = '1';\n  }\n});\n\ntaskCancelButton.addEventListener('click', () => {\n  Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"taskForm\"]);\n  Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(taskName);\n  Object(_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"resetValue\"])(taskDescription);\n  urgency.value = '1';\n});\n\nfunction renderTasks(proj) {\n  taskContainer.innerHTML = '';\n\n  proj.tasks.forEach((element) => {\n    let taskDiv = document.createElement('div');\n    let taskTitle = document.createElement('p');\n    let taskDescription = document.createElement('p');\n    let taskDeadline = document.createElement('p');\n\n    taskDiv.setAttribute('class', 'task-div');\n    taskTitle.setAttribute('class', 'task-title');\n    taskDescription.setAttribute('class', 'task-descr');\n    taskDeadline.setAttribute('class', 'task-deadline');\n\n    taskTitle.innerHTML = element.title;\n    taskDescription.innerHTML = element.description;\n    taskDeadline.innerHTML = 'Deadline: ' + element.deadline;\n\n    taskDiv.appendChild(taskDeadline);\n    taskDiv.appendChild(taskTitle);\n    taskDiv.appendChild(taskDescription);\n    taskContainer.appendChild(taskDiv);\n\n    if (element.urgency === 1) {\n      taskDiv.style.border = '2px solid rgb(127,149,117)';\n    } else if (element.urgency === 2) {\n      taskDiv.style.border = '2px solid rgba(255,185,78,1)';\n    } else if (element.urgency === 3) {\n      taskDiv.style.border = '2px solid rgb(205,80,87)';\n    }\n  });\n}\n\nconst taskButton = document.getElementById('add-task');\n\ntaskButton.addEventListener('click', () => {\n  Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"taskForm\"]);\n});\n\n\n\n// TODO: add deadline and urgency to rendering tasks,\n// research local storage\n// update and destroy\n\n\n//# sourceURL=webpack:///./src/task-ui.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: taskFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskFactory\", function() { return taskFactory; });\n//to determine the functionality of creating tasks\n\nlet taskFactory = (title, description, deadline, project, urgency) => {\n  urgency = Number(urgency);\n  return { title, description, deadline, project, urgency };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/visibility.js":
/*!***************************!*\
  !*** ./src/visibility.js ***!
  \***************************/
/*! exports provided: toggleVisibility, projectForm, taskForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleVisibility\", function() { return toggleVisibility; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectForm\", function() { return projectForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskForm\", function() { return taskForm; });\n//toggle visibility of forms\n\nlet projectForm = document.getElementById('project-form');\nlet taskForm = document.getElementById('task-form');\n\nconst toggleVisibility = (element) => {\n  if (element.style.display === 'block') {\n    element.style.display = 'none';\n  } else {\n    element.style.display = 'block';\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/visibility.js?");

/***/ })

/******/ });