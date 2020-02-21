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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-ui.js */ \"./src/project-ui.js\");\n\n\n// title, description, due date, priority in every todo\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project-ui.js":
/*!***************************!*\
  !*** ./src/project-ui.js ***!
  \***************************/
/*! exports provided: projects, sampleProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sampleProject\", function() { return sampleProject; });\n/* harmony import */ var _visibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visibility.js */ \"./src/visibility.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n//to determine how the project part of the screen looks\n\n\n\n\nlet sampleProject = Object(_project_js__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])('Sample Project', 'This is a sample project. It is nice.');\nlet sampleProject2 = Object(_project_js__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])('Sample Projec2', 'This is a sample project. It is nice.');\nlet sampleProject3 = Object(_project_js__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])('Sample Project3', 'This is a sample project. It is nice.');\n\nconsole.log(sampleProject);\n\nlet projects = [sampleProject, sampleProject2, sampleProject3];\n\nconst projectContainer = document.getElementById('project-container');\n\nprojects.forEach((element) => {\n  let projectDiv = document.createElement('div');\n  let projectTitle = document.createElement('p');\n  let projectDescription = document.createElement('p');\n\n  projectDiv.setAttribute('class', 'project-div');\n  projectTitle.setAttribute('class', 'project-title');\n  projectDescription.setAttribute('class', 'project-descr');\n\n  projectTitle.innerHTML = element.title;\n  projectDescription.innerHTML = element.description;\n\n  projectDiv.appendChild(projectTitle);\n  projectDiv.appendChild(projectDescription);\n  projectContainer.appendChild(projectDiv);\n});\n\nconst projectButton = document.getElementById('add-project');\n\nprojectButton.addEventListener('click', () => {\n  Object(_visibility_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleVisibility\"])(form);\n});\n\n\n\n\n//# sourceURL=webpack:///./src/project-ui.js?");

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