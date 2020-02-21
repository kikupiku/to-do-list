//to determine the functionality of creating tasks

let taskFactory = (title, description, deadline, project, urgency) => {
  
  return { title, description, deadline, project, urgency };
};

export { taskFactory };
