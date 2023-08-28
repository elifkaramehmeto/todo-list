const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList  = document.querySelector(".todo-list");


todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click' , doneDelete);
todoList.addEventListener('click' , editTodo);

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoList.appendChild(todoDiv);

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editButton.classList.add('edit-btn');
    todoDiv.appendChild(editButton);

    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add("done-btn");
    todoDiv.appendChild(doneButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv);
    todoInput.value = " ";

}
function doneDelete(event) {
    const item = event.target;
    
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    if( item.classList[0] === "done-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("done");
    }
    if (item.classList[0] === "edit-btn") {
        const todo = item.parentElement;
        editTodo(todo);
    }
}


function editTodo(todo) {
    const todoItem = todo.querySelector(".todo-item");
    const todoText = todoItem.innerText;

    const editInput = document.createElement("input");
    editInput.value = todoText;
    editInput.classList.add("edit-input");

    todoItem.innerHTML = '';
    todoItem.appendChild(editInput);
    editInput.focus();

    editInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            todoItem.innerHTML = editInput.value;
        }
    });
}

