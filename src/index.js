import "./index.css";
import { addTask } from "./modules/addTask.js";
import clearCompleted from "./modules/clearCompleted";
import display from "./modules/display.js";

const inputTask = document.getElementById("inputTask");
const checkbox = document.getElementById("index");
const clearBtn = document.getElementById("clearBtn");

document.addEventListener("DOMContentLoaded", () => {
  display();
});

inputTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
    inputTask.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  let selectedItems = [];
  console.log(
    document.querySelectorAll('input[type="checkbox"]:checked').length
  );
  selectedItems.push(
    document.querySelectorAll('input[type="checkbox"]:checked')
  );
  selectedItems.map((item) => {
    // console.log(item[0].getAttribute("id"));
    for (let i = 0; i < item.length; i++) {
      console.log(item[i].getAttribute("id"));
      clearCompleted(item[i].getAttribute("id"));
    }
  });
});
