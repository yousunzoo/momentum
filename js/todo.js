const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById('todo-list');

const toDos = [];

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos))
}
const deleteToDo = function(event){
const li = event.target.parentElement;
li.remove();
}

function paintTodo(newTodo){
 const li = document.createElement("li");
 const span = document.createElement("span");
 span.innerText = newTodo;
 const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo)
 li.appendChild(span);
 li.appendChild(button);
 todoList.appendChild(li);
}

function handleToDoSubmit (event){
  event.preventDefault();
  const newTodo = todoInput.value; 
  todoInput.value ="";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit)