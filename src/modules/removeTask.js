import display from "./display.js";

const remove = (id) => {
  const containerDiv = document.getElementById("todoDiv");
  let books = [];
  let contentDiv = "";
  books = JSON.parse(localStorage.getItem("TaskList"));
  books.splice(id, 1);
  localStorage.setItem("TaskList", JSON.stringify(books));
  contentDiv = "";
  containerDiv.innerHTML = contentDiv;
  display();
};

export default remove;
