const oneTask = "http://localhost:3000/task/"
const allTasks = "http://localhost:3000/tasks"

const allTasksBtn = document.getElementById("allTasks");
allTasksBtn.addEventListener("click", getAllTasks);

function getAllTasks() {
    fetch(allTasks)
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i <= data.length; i++) {
            const tasksContainer = document.querySelector("div#tasksContainer");
            const task = data[i];
            const container = document.createElement("div");
            const title = document.createElement("h3");
            title.innerText = task.title;
            const completed = document.createElement("p");
            completed.innerText = "Completed: " + task.completed.toString();
            container.appendChild(title);
            container.appendChild(completed);
            tasksContainer.appendChild(container);
        }
    })
}