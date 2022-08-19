import display from "./display.js";

export const taskName = document.getElementById("inputTask");
export const clearBtn = document.getElementById("clearBtn");

export const addTask = () => {
  let tasks = [];
  let task = taskName.value;
  let contentDiv = "";
  let index;
  const containerDiv = document.getElementById("todoDiv");
  const newArr = JSON.parse(localStorage.getItem("TaskList"));
  index = newArr.length;

  /* storing tasks in local storage */
  if (localStorage.getItem("TaskList") === null) {
    tasks.push({ index: index, description: task, completed: false });
    localStorage.setItem("TaskList", JSON.stringify(tasks));
  } else {
    tasks = JSON.parse(localStorage.getItem("TaskList"));
    tasks.push({ index: index, description: task, completed: false });
    localStorage.setItem("TaskList", JSON.stringify(tasks));
  }

  contentDiv = "";
  containerDiv.innerHTML = contentDiv;
  display();
};
