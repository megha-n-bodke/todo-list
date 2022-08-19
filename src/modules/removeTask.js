import display from './display.js';

const remove = (id) => {
  const containerDiv = document.getElementById('todoDiv');
  let books = [];
  let contentDiv = '';
  books = JSON.parse(localStorage.getItem('TaskList'));
  books.splice(id, 1);
  /* setting indexes */
  const updateIndex = books.filter((singleItem, index) => {
    if (singleItem.index !== index) {
      singleItem.index = index;
    }
    return singleItem;
  });
  localStorage.setItem('TaskList', JSON.stringify(updateIndex));
  contentDiv = '';
  containerDiv.innerHTML = contentDiv;
  display();
};

export default remove;
