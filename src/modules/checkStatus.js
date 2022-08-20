const checkStatus = (index, desc, completed, checkbox) => {
  const tasks = JSON.parse(localStorage.getItem("TaskList"));

  if (checkbox.checked === true) {
    const updateList = tasks.filter((singleTask) => {
      if (singleTask.index === index) {
        singleTask.completed = true;
      }
      return singleTask;
    });
    localStorage.setItem("TaskList", JSON.stringify(updateList));
  } else if (checkbox.checked === false) {
    const updateList = tasks.filter((singleTask) => {
      if (singleTask.index === index) {
        singleTask.completed = false;
      }
      return singleTask;
    });
    localStorage.setItem("TaskList", JSON.stringify(updateList));
  }
};

export default checkStatus;
