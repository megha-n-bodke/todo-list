const checkStatus = (index, desc, completed) => {
  const tasks = JSON.parse(localStorage.getItem("TaskList"));

  const updateList = tasks.filter((singleTask) => {
    if (singleTask.index === index) {
      singleTask.completed = true;
    }
    return singleTask;
  });
  localStorage.setItem("TaskList", JSON.stringify(updateList));
};

export default checkStatus;
