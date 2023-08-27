const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList  = document.querySelector(".todo-list");

todoButton.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = 'test'
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoList.appendChild(todoDiv); 

    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add("done-btn");
    todoDiv.appendChild(doneButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv);
}