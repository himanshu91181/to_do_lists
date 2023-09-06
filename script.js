const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.innerText = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
