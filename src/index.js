import "./index.css";
import Display from "./display.js";
import { addTask, taskName, clearBtn } from "./addTask.js";

document.addEventListener("DOMContentLoaded", () => {
  const todoDisplay = new Display();
  todoDisplay.display();
});

clearBtn.addEventListener("click", () => {
  addTask();
  alert("function called");
});
