// title, description, due date, priority in every todo
import { projects, sampleProject, renderProjects, renderForm } from './project-ui.js';
import { renderTasks } from './task-ui.js';

renderProjects();

renderTasks(sampleProject);
