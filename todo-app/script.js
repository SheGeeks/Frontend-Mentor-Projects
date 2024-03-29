const todoListContainer = document.querySelector("#todo-list");
const newTaskInput = document.querySelector("#new_task");
const todoTemplate = document.querySelector("#todo-list .todo-item");
const checkmark = document.querySelectorAll("input[type=checkbox]");
const deleteTask = document.querySelector(".delete");
const clearTasks = document.querySelector("#clear");
const todoCounter = document.querySelector("#todo-count");
const sortOptions = document.querySelector("#todo-sort");
const schemeToggle = document.querySelector("#scheme-toggle");
let counterIndex;

function updateCounter() {
  let todos = document.querySelectorAll(
    ".todo-item:not(#todo-item_new) .todo-contents"
  );
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
}

function switchSortView(style, style2) {
  let allTasks = [...todoListContainer.querySelectorAll(".todo-item")];

  allTasks.forEach((task) => {
    if (task.childNodes[1].classList.contains("strike")) {
      task.style.display = style;
    } else {
      task.style.display = style2;
    }
  });
}

updateCounter();

// Create new todo
newTaskInput.addEventListener("keydown", (e) => {
  if (e.which == 13 || e.key == "Enter") {
    if (!newTaskInput.value || newTaskInput.value[0] == " ") {
      return;
    }

    // Create new task and add to end of list
    const clonedToDo = todoTemplate.cloneNode(true);
    todoListContainer.appendChild(clonedToDo);

    // Change task text to user input
    const newToDo = document.getElementById("todo-list").lastChild;
    newToDo.childNodes[1].childNodes[0].textContent = newTaskInput.value;
    newTaskInput.value = "";

    // Remove check and strike from cloned task template
    newToDo.childNodes[1].classList.remove("strike");
    newToDo.querySelector("input[type=checkbox]").checked = false;

    if (
      document.querySelector(".sort-btn.selected").innerHTML === "Completed"
    ) {
      newToDo.style.display = "none";
    } else {
      newToDo.style.display = "flex";
    }

    // Update todo counter
    updateCounter();
  }
});

// Strike Tasks When Checked
todoListContainer.addEventListener("click", (e) => {
  //   e.stopPropagation();

  let sortBtns = document.querySelector(".sort-btn.selected");
  let todoItem = e.target.closest(".todo-item");

  if (e.target.matches("input[type=checkbox]")) {
    let todoContents = e.target.closest(".todo-contents");
    if (todoContents.classList.contains("strike")) {
      todoContents.classList.remove("strike");

      // //Hide or Show based on sort view
      if (sortBtns === "Completed") {
        switchSortView("flex", "none");
      }
    } else {
      todoContents.classList.add("strike");

      // //Hide or Show based on sort view
      if (sortBtns === "Active") {
        todoItem.style.display = "none";
      }
    }
  }

  // Update todo counter
  updateCounter();

  // Delete Tasks
  if (
    e.target.matches("button") ||
    e.target.matches("svg") ||
    e.target.matches("path")
  ) {
    // e.currentTarget.childNodes
    e.target.closest(".todo-item").classList.add("picked");
    setTimeout(function () {
      e.target.closest(".todo-item").remove();
      updateCounter();
    }, 550);
  }
});

// Clear completed tasks
clearTasks.addEventListener("click", (e) => {
  let tasksComplete = document.querySelectorAll(".todo-contents.strike");
  tasksComplete.forEach((task) => {
    task.closest(".todo-item").remove();
  });
});

// Sort List View
sortOptions.addEventListener("click", (e) => {
  switch (e.target.innerHTML) {
    case "All":
      switchSortOptions(e);
      switchSortView("flex", "flex");
      break;
    case "Active":
      switchSortOptions(e);
      switchSortView("none", "flex");
      break;
    case "Completed":
      switchSortOptions(e);
      switchSortView("flex", "none");
      break;
  }
});

// Theme  Toggle

const STORAGE_KEY = "user-color-scheme";
const COLOR_MODE_KEY = "--color-mode";

const getCSSCustomProp = (propKey) => {
  let response = getComputedStyle(document.documentElement).getPropertyValue(
    propKey
  );

  if (response.length) {
    response = response.replace(/\"/g, "").trim();
  }

  return response;
};

const applySetting = (passedSetting) => {
  let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

  if (currentSetting) {
    document.documentElement.setAttribute(
      "data-user-color-scheme",
      currentSetting
    );
  }
};

const toggleSetting = () => {
  let currentSetting = localStorage.getItem(STORAGE_KEY);

  switch (currentSetting) {
    case null:
      currentSetting =
        getCSSCustomProp(COLOR_MODE_KEY) === "dark" ? "light" : "dark";
      break;
    case "light":
      currentSetting = "dark";
      document.querySelector("main").classList.add("dark");
      break;
    case "dark":
      currentSetting = "light";
      document.querySelector("main").classList.remove("dark");
      break;
  }

  localStorage.setItem(STORAGE_KEY, currentSetting);

  return currentSetting;
};

schemeToggle.addEventListener("click", (e) => {
  e.preventDefault();
  applySetting(toggleSetting());
});

applySetting();

// Sorting script by Sortable
new Sortable(todoListContainer, {
  animation: 300,
  delay: 400,
  delayOnTouchOnly: true,
});
