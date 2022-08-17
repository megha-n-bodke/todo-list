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
    /* loop through tasks */
    let str = '';
    tasks.map((singleTask) => {
      str += `
      <ul class="todolist">
      <li>${singleTask.index}</li>
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
