import remove from './removeTask';
import updateTask from './updateTask';

const display = () => {
  let tasks = [];

  if (localStorage.getItem('TaskList') === null) {
    localStorage.setItem('TaskList', JSON.stringify(tasks));
  } else {
    tasks = JSON.parse(localStorage.getItem('TaskList'));
  }

  const containerDiv = document.getElementById('todoDiv');
  tasks.map((singleTask) => {
    const { index, description } = singleTask;

    const innerDiv = document.createElement('div');
    innerDiv.className = 'list-container';
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const editIcon = document.createElement('i');
    editIcon.className = 'fa fa-ellipsis-v';
    const deletetIcon = document.createElement('i');
    deletetIcon.className = 'fa fa-trash';
    deletetIcon.style.display = 'none';
    checkBox.type = 'checkbox';
    checkBox.setAttribute('id', index);
    label.innerText = description;

    const editInput = document.createElement('input');
    editInput.value = description;
    editInput.style.display = 'none';
    editInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        updateTask(index, editInput.value);
        editIcon.style.display = 'block';
        deletetIcon.style.display = 'none';
        editInput.style.display = 'none';
        checkBox.style.display = 'block';
        label.style.display = 'block';
      }
    });
    editIcon.addEventListener('click', () => {
      editIcon.style.display = 'none';
      deletetIcon.style.display = 'block';
      editInput.style.display = 'block';
      checkBox.style.display = 'none';
      label.style.display = 'none';
    });

    deletetIcon.addEventListener('click', () => {
      remove(index);
    });

    containerDiv.appendChild(innerDiv);
    innerDiv.appendChild(checkBox);
    innerDiv.appendChild(label);
    innerDiv.appendChild(editInput);
    innerDiv.appendChild(editIcon);
    innerDiv.appendChild(deletetIcon);
    return singleTask;
  });
};

export default display;
