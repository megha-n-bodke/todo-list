import "./index.css";
import { addTask, taskName, clearBtn } from "./modules/addTask.js";
import display from "./modules/display.js";

const inputTask = document.getElementById("inputTask");

document.addEventListener("DOMContentLoaded", () => {
  display();
});

inputTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
