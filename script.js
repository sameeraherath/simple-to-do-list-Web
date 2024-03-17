//Function to add a task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList"); // corrected variable name

    const listItem = document.createElement("li"); // corrected variable name
    listItem.textContent = taskText;

    // Add a checkbox to mark tasks as completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        listItem.style.textDecoration = "line-through";
      } else {
        listItem.style.textDecoration = "none";
      }
    });

    // Add a button to remove tasks
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
  }
}
