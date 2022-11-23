const $toDoForm = document.getElementById("todo_form");
const $toDoInput = $toDoForm.querySelector("input");
const $toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todosKey"

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //클릭한 li.id와 다른 toDo 남겨두기 (parseInt:문자열을 숫자로 변환)
  saveToDos();
}


function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  $toDoList.appendChild(li);
}

function handleToDoSubmit(event){
	event.preventDefault();
	const newTodo = $toDoInput.value;
	$toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now()
    }
    toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}

$toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}