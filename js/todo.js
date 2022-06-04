// JSON.stringify = 변수 등을 문자열로 바꿈
// JSON.parse => 문자를 살아있는 객체로 바꿀 수 있음
const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById('todo-list');

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}
const deleteToDo = function(event){
const li = event.target.parentElement;
li.remove();
toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
saveToDos();
}

function paintTodo(newTodo){
 const li = document.createElement("li");
 li.id = newTodo.id;
 const span = document.createElement("span");
 span.innerText = newTodo.text;
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
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
  console.log("this is turn of", item)
}
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}



// filter 안에 들어가는 함수는 true를 호출해야 새 배열에 포함됨. false이면 배열에 제외됨