import display from "./display";

const updateTask = (index, description) => {
  let tasks = [];
  const containerDiv = document.getElementById("todoDiv");
  let contentDiv;

  tasks = JSON.parse(localStorage.getItem("TaskList"));

  const updateList = tasks.filter((singleTask) => {
    if (singleTask.index === index) {
      singleTask.description = description;
    }
    return singleTask;
  });
  localStorage.setItem("TaskList", JSON.stringify(updateList));
  contentDiv = "";
  containerDiv.innerHTML = contentDiv;
  display();
};

export default updateTask;
