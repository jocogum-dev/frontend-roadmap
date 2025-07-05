// variables
const taskInput = document.querySelector(".tracker__input input");
const taskButton = document.querySelector(".tracker__input button");
const lists = document.querySelector(".lists");
let tasks = [];

// event listeners
window.addEventListener('DOMContentLoaded', renderTasks);
taskInput.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        taskButton.click();
    }
});
taskButton.addEventListener("click", addTask);


// functions
function addTask() {
    const newTask = {description: taskInput.value, status: "not complete" };
    taskInput.value = "";
    tasks.push(newTask);

    renderTasks();
}
function deleteTask() {
    const itemElement = event.target.parentElement;
    const itemDescription = itemElement.querySelector("span");
    const index = tasks.findIndex(task => task.description === itemDescription.innerText);
    if (index !== -1) {
        tasks.splice(index, 1);
    }

    renderTasks();
}
function taskComplete() {
    const itemElement = event.target.parentElement;
    const itemDescription = itemElement.querySelector("span");
    const itemCheckbox = itemElement.querySelector("input");

    const index = tasks.findIndex(task => task.description === itemDescription.innerText);
    if (index !== -1) {
        if(tasks[index].status === "complete") {
            tasks[index].status = "not complete";
        }
        else {
            tasks[index].status = "complete";
        }

    }
    renderTasks();
}

function renderTasks() {
    // clear list
    while (lists.firstChild) {
        lists.removeChild(lists.firstChild);
    }

    console.log("tasks", tasks);
    // loop through array
    // render all not complete list
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].status === "complete"){
            continue;
        }
        // create a list item
        const newList = document.createElement("li");
        const newCheckbox = document.createElement("input");
        const newSpan = document.createElement("span");
        const newButton = document.createElement("button");

        newList.setAttribute("class", "list__item");
        newCheckbox.setAttribute("type", "checkbox");
        newSpan.textContent = tasks[i].description;
        newButton.textContent = "delete";

        newList.appendChild(newCheckbox);
        newList.appendChild(newSpan);
        newList.appendChild(newButton);

        lists.appendChild(newList);
    }
    // render all complete list
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].status === "not complete"){
            continue;
        }
        // create a list item
        const newList = document.createElement("li");
        const newCheckbox = document.createElement("input");
        const newSpan = document.createElement("span");
        const newButton = document.createElement("button");

        newList.setAttribute("class", "list__item complete");
        newCheckbox.setAttribute("type", "checkbox");
        newSpan.textContent = tasks[i].description;
        newButton.textContent = "delete";

        newList.appendChild(newCheckbox);
        newList.appendChild(newSpan);
        newList.appendChild(newButton);

        lists.appendChild(newList);
    }
    const listButton = document.querySelectorAll(".list__item button");
    const listCheckbox = document.querySelectorAll(".list__item input");
    listButton.forEach(button => {
        button.addEventListener('click', deleteTask);
    });
    listCheckbox.forEach(checkbox => {
        checkbox.addEventListener('change', taskComplete);
    });
}