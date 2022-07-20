const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const inputText = toDoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "toDos";

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function DeleteList(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => parseInt(li.id) !== toDo.id);
  saveToDo();
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", DeleteList);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  li.id = newTodo.id;
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = inputText.value;
  inputText.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDo();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);
console.log(savedToDo);
if (savedToDo) {
  const parsedToDos = JSON.parse(savedToDo);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
