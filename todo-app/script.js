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
const sortOptions = document.querySelector("#todo-sort");
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

function switchSortOptions(e) {
  let options = [...document.querySelectorAll(".sort-btn")];
  options.forEach((option) => {
    option.classList.remove("selected");
    e.target.classList.add("selected");
  });

  console.log(options);
}

function switchSortView(style, style2) {
  let allTasks = [...todoListContainer.querySelectorAll(".todo-item")];

  allTasks.forEach((task) => {
    if (task.classList.contains("strike")) {
      task.style.display = style;
    } else {
      task.style.display = style2;
    }
  });
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

// Strike Tasks When Checked
todoListContainer.addEventListener("click", (e) => {
  //   e.stopPropagation();
  let sortBtns = document.querySelector(".sort-btn.selected").innerHTML;

  if (e.target.matches("input[type=checkbox]")) {
    let todoItem = e.target.closest(".todo-item");
    if (todoItem.classList.contains("strike")) {
      todoItem.classList.remove("strike");

      // //Hide or Show based on sort view
      if (sortBtns === "Completed") {
        todoItem.style.display = "none";
      }
    } else {
      todoItem.classList.add("strike");

      // //Hide or Show based on sort view
      if (sortBtns === "Active") {
        todoItem.style.display = "none";
      }
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

// Sort List View
sortOptions.addEventListener("click", (e) => {
  switch (e.target.innerHTML) {
    case "All":
      console.log("All");
      switchSortOptions(e);
      switchSortView("flex", "flex");
      break;
    case "Active":
      console.log("Active");
      switchSortOptions(e);
      switchSortView("none", "flex");
      break;
    case "Completed":
      console.log("Completed");
      switchSortOptions(e);
      switchSortView("flex", "none");
      break;
  }
});
