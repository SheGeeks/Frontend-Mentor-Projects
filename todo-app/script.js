const todoListContainer = document.querySelector("#todo-list");
const newTaskInput = document.querySelector("#new_task");
const todoTemplate = document.querySelector(
  "#todo-list .todo-item:not(.strike)"
);
const checkmark = document.querySelectorAll("input[type=checkbox]");
const todoText = document.querySelector("#todo-task");
const todoCounter = document.querySelector("#todo-count");
let counterIndex = 4;

function updateCounter() {
  let todos = document.querySelectorAll(".todo-item:not(#todo-item_new)");
  counterIndex = todos.length;

  todos.forEach((todo) => {
    if (todo.classList.contains("strike")) {
      counterIndex--;
    }
  });

  if (counterIndex > 1 || counterIndex === 0) {
    todoCounter.textContent = `${counterIndex} items left`;
  } else {
    todoCounter.textContent = `${counterIndex} item left`;
  }
}

// Create new todo
newTaskInput.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    let newTask = newTaskInput.value;

    const newToDoItem = todoTemplate.cloneNode(true);
    document.getElementById("todo-list").appendChild(newToDoItem);

    const newItem =
      document.getElementById("todo-list").lastChild.childNodes[1]
        .childNodes[1];
    newItem.textContent = newTask;
    newTaskInput.value = "";

    // Update todo counter
    updateCounter();
  }
});

// Strike Items When Checked
todoListContainer.addEventListener("click", (e) => {
  //   e.stopPropagation();

  if (e.target.matches("input[type=checkbox]")) {
    let todoItem = e.target.closest(".todo-item");
    if (todoItem.classList.contains("strike")) {
      todoItem.classList.remove("strike");
    } else {
      todoItem.classList.add("strike");
    }
    // Update todo counter
    updateCounter();
  }
});
