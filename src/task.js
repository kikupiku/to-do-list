//to determine the functionality of creating tasks

let taskFactory = (title, description, deadline, urgency) => {
  urgency = Number(urgency);

  return { title, description, deadline, urgency };
};

export { taskFactory };
