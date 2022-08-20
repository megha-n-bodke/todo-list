import "./index.css";
import { addTask } from "./modules/addTask.js";
import checkStatus from "./modules/checkStatus";
import display from "./modules/display.js";

const inputTask = document.getElementById("inputTask");
const checkbox = document.getElementById("index");

document.addEventListener("DOMContentLoaded", () => {
  display();
});

inputTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
    inputTask.value = "";
  }
});

/* checkbox.addEventListener("change", () => {
  checkStatus();
}); */
