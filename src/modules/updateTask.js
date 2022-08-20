import display from './display.js';

const updateTask = (index, description) => {
  let tasks = [];
  const containerDiv = document.getElementById('todoDiv');

  tasks = JSON.parse(localStorage.getItem('TaskList'));

  const updateList = tasks.filter((singleTask) => {
    if (singleTask.index === index) {
      singleTask.description = description;
    }
    return singleTask;
  });
  localStorage.setItem('TaskList', JSON.stringify(updateList));
  const contentDiv = '';
  containerDiv.innerHTML = contentDiv;
  display();
};

export default updateTask;
