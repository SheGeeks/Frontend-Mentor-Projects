const todoListContainer = document.querySelector("#todo-list");
const newTaskInput = document.querySelector("#new_task");
const todoTemplate = document.querySelector(
  "#todo-list .todo-item:not(.strike)"
);
const checkmark = document.querySelectorAll("input[type=checkbox]");
const todoText = document.querySelector("#todo-task");
const deleteTask = document.querySelector(".delete");
const clearTasks = document.querySelector("#clear");
const todoCounter = document.querySelector("#todo-count");
let counterIndex;

function updateCounter() {
  let todos = document.querySelectorAll(".todo-item:not(#todo-item_new)");
  counterIndex = todos.length;

  todos.forEach((todo) => {
    if (todo.classList.contains("strike")) {
      counterIndex--;
    }
  });

  counterIndex > 1 || counterIndex === 0
    ? (todoCounter.textContent = `${counterIndex} items left`)
    : (todoCounter.textContent = `${counterIndex} item left`);
}

updateCounter();

// Create new todo
newTaskInput.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    // Create new task and add to end of list
    const clonedToDo = todoTemplate.cloneNode(true);
    todoListContainer.appendChild(clonedToDo);

    // Change task text to user input
    const newToDo = document.getElementById("todo-list").lastChild;
    newToDo.childNodes[1].childNodes[1].textContent = newTaskInput.value;
    newTaskInput.value = "";

    // Remove check and strike from cloned task template
    if (newToDo.classList.contains("strike")) {
      newToDo.classList.remove("strike");
      newToDo.querySelector("input[type=checkbox]").checked = false;
    }

    // Update todo counter
    updateCounter();
  }
});

todoListContainer.addEventListener("click", (e) => {
  //   e.stopPropagation();
  console.log(e.target);

  // Strike Tasks When Checked
  if (e.target.matches("input[type=checkbox]")) {
    let todoItem = e.target.closest(".todo-item");
    if (todoItem.classList.contains("strike")) {
      todoItem.classList.remove("strike");
    } else {
      todoItem.classList.add("strike");
    }
  }

  // Delete Tasks
  if (
    e.target.matches("button") ||
    e.target.matches("svg") ||
    e.target.matches("path")
  ) {
    // e.currentTarget.childNodes
    e.target.closest(".todo-item").remove();
  }

  // Update todo counter
  updateCounter();
});

// Clear completed tasks
clearTasks.addEventListener("click", (e) => {
  let tasksComplete = document.querySelectorAll(".todo-item.strike");
  tasksComplete.forEach((task) => {
    task.closest(".todo-item").remove();
  });
});
