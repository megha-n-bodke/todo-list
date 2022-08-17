class Display {
  display = () => {
    /* tasks list */
    const tasks = [
      {
        index: 1,
        description: 'structure todo list',
        completed: 'false',
      },
      {
        index: 2,
        description: 'add task todo list',
        completed: 'false',
      },
      {
        index: 3,
        description: 'remove todo list',
        completed: 'false',
      },
    ];

    const todoDiv = document.getElementById('todoDiv');
    const caption = document.createElement('p');
    caption.innerText = "Today Todod's";
    /*  todoDiv.appendChild(caption); */
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
