
function getDom() {
  const projectForm = document.getElementById('project-form');
  const taskForm = document.getElementById('task-form');
  const projectEditForm = document.getElementById('project-edit-form');
  const taskEditForm = document.getElementById('task-edit-form');

  const projName = document.getElementById('project-name');
  const projDescription = document.getElementById('project-description');
  const projectContainer = document.getElementById('project-container');
  const newProjectButton = document.getElementById('create-project');
  const projectCancelButton = document.getElementById('proj-cancel');

  const projEditName = document.getElementById('project-edit-name');
  const projEditDescription = document.getElementById('project-edit-description');
  const projUpdate = document.getElementById('update-project');
  const projUpdateCancel = document.getElementById('proj-edit-cancel');

  const taskName = document.getElementById('task-name');
  const taskDescription = document.getElementById('task-description');
  const taskContainer = document.getElementById('task-container');
  const newTaskButton = document.getElementById('create-task');
  const taskCancelButton = document.getElementById('task-cancel');
  const taskDeadline = document.getElementById('deadline');
  const urgency = document.getElementById('urgency');
  const projectSelection = document.getElementById('assign-project');

  const taskEditName = document.getElementById('task-edit-name');
  const taskEditDescription = document.getElementById('task-edit-description');
  const taskEditDeadline = document.getElementById('edit-deadline');
  const editProjectSelection = document.getElementById('edit-assign-project');
  const editUrgency = document.getElementById('edit-urgency');
  const taskUpdate = document.getElementById('update-task');
  const taskUpdateCancel = document.getElementById('task-edit-cancel');

  const projectButton = document.getElementById('add-project');
  const taskButton = document.getElementById('add-task');

  return { projectForm, taskForm, projectEditForm, taskEditForm, projName,
    projDescription, projectContainer, newProjectButton, projectCancelButton,
    projEditName, projEditDescription, projUpdate, projUpdateCancel, taskName,
    taskDescription, taskContainer, newTaskButton, taskCancelButton, taskDeadline,
    urgency, projectSelection, taskEditName, taskEditDescription, taskEditDeadline,
    editProjectSelection, editUrgency, taskUpdate, taskUpdateCancel, projectButton, taskButton, };
};

let dom = getDom();

export { dom };
