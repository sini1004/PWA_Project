const toDoForm = document.getElementById('todo_form');
const toDoInput = document.querySelector('#todo_form input');
const toDoList = document.getElementById('todo_list');

const toDos = [];

function saveTodos()
{
  localStorage.setItem('todos', toDos);
}
function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
}

function painToDo(newTodo) {
  const todoli = document.createElement('li');

  const todospan = document.createElement('span');
  todospan.innerText = newTodo;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);

  todoli.appendChild(todospan);
  todoli.appendChild(button);
  toDoList.appendChild(todoli);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  toDos.push(newTodo);
  painToDo(newTodo);
  saveTodos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);