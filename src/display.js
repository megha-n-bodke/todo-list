class Display {
  display = () => {
    /* tasks list */
    const tasks = [];

    const todoDiv = document.getElementById("todoDiv");
    const caption = document.createElement("p");
    caption.innerText = "Today Todod's";

    /* loop through tasks */
    let str = "   Todays todo's";
    tasks.map((singleTask) => {
      str += `
      <ul class="todolistItem">
      <li><i class="icon-check-empty"></i>${singleTask.index}</li>
      <li>${singleTask.description}</li>
      <li>${singleTask.completed}</li>
      </ul>
      `;
      return str;
    });
    todoDiv.innerHTML = str;
  };
}

export default Display;
