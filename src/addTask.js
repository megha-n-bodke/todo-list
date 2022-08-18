import Todoobject from "./objectTemplate";
export const taskName = document.getElementById("inputTask");
export const clearBtn = document.getElementById("clearBtn");

export const addTask = () => {
  let tasks = [];
  let task = taskName.value;

  /* Object creation */
  const todoObject = new Todoobject(1, task, false);

  /* storing tasks in local storage */
  if (localStorage.getItem("TaskList") === null) {
    alert("in if block");
    localStorage.setItem("TaskList", JSON.stringify(todoObject));
    tasks.push(todoObject);
  } else {
    alert("in else block");
    tasks = JSON.parse(localStorage.getItem("TaskList"));
    tasks.push(todoObject);
    localStorage.setItem("TaskList", JSON.stringify(tasks));
  }
};
