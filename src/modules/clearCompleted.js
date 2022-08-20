import display from './display.js';

const clearCompleted = () => {
  const containerDiv = document.getElementById('todoDiv');

  let checkedTasks = [];
  checkedTasks = JSON.parse(localStorage.getItem('TaskList'));
  for (let i = checkedTasks.length - 1; i >= 0; i -= 1) {
    if (checkedTasks[i].completed === true) {
      checkedTasks.splice(i, 1);
    }
  }

  /* checking indexes with the local storage array object index */
  const updateIndex = checkedTasks.filter((singleItem, index) => {
    if (singleItem.index !== index) {
      singleItem.index = index;
    }
    return singleItem;
  });

  localStorage.setItem('TaskList', JSON.stringify(updateIndex));
  const contentDiv = '';
  containerDiv.innerHTML = contentDiv;
  display();
};

export default clearCompleted;
