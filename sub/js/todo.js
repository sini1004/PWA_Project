const toDoForm = document.getElementById('todo_form');
const toDoInput = document.querySelector('input');
const toDoList = document.getElementById('todo_list');

const TODOS_KEY = 'todos'
const toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.fill((toDo)=> toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const todospan = document.createElement('span');
  todospan.innerText = newTodo.text;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);

  li.appendChild(todospan);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text : newTodo,
    id : Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach (paintToDo);
}

function sexyFilter(){

}