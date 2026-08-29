let taskInput = document.querySelector(`#taskInput`);
let addButton = document.querySelector(`#addButton`);
let taskContainer = document.querySelector(`#taskContainer`);

let tasks = JSON.parse(localStorage.getItem(`tasks`)) || [];
addButton.addEventListener(`click`, function () {
  tasks.push(taskInput.value);
  localStorage.setItem(`tasks`, JSON.stringify(tasks));
  location.reload();
});

function displayTask() {
  let content = ``;
  tasks.forEach((task, index) => {
    content += `
      <div class="d-flex justify-content-between px-4">
        <span>${task}</span>
        <div>
          <button type="button" class="btn-close del btn-danger" aria-label="Close"></button>
        </div>
      </div>
      <hr class="mx-4" />
    `;
  });

  taskContainer.innerHTML = content;
  let delButtons = document.querySelectorAll(".del");
  delButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTask();
    });
  });
}
displayTask();
