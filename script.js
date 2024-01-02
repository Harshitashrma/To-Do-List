let button = document.querySelector("#btn");
let input = document.querySelector("#input");
let tasks = document.querySelector("#tasks");

button.addEventListener("click", showTasks);

function showTasks() {
    if (input.value.length === 0) {
        alert("Please enter the task");
    } else {
        tasks.innerHTML += 
            `<div class="task">
                <span id="taskname">
                    ${input.value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>`;

        var current_task = document.querySelectorAll(".delete");
        for (let i = 0; i < current_task.length; i++) {
            current_task[i].addEventListener("click", () => {
                current_task[i].parentNode.remove();
            });
        }

        var taskss = document.querySelectorAll(".task");
        for (let i = 0; i < taskss.length; i++) {
            taskss[i].addEventListener("click", () => {
                taskss[i].classList.toggle("completed");
            });
        }

        input.value = "";
    }
}
