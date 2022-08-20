const clearCompleted = (index) => {
  console.log(index);
  let checkedTasks = [];
  checkedTasks = JSON.parse(localStorage.getItem('TaskList'));
  checkedTasks.splice(index, 1);
  localStorage.setItem('TaskList', JSON.stringify(checkedTasks));

  // displayBook.display();

  /*  let checkboxCollection = [];
  console.log("btn clicked"); */
  /* const check = document.getElementById("index"); */
  /*   checkboxCollection = checkboxCollection.push(index);
  checkboxCollection.map((i) => {
    console.log(i);
  }); */
};

export default clearCompleted;
