const oneTask = "http://localhost:3000/auth/jwt/task/"
const allTasks = "http://localhost:3000/auth/jwt/tasks"
const verifyURL = "http://localhost:3000/auth/jwt/verify"

const params = new URLSearchParams(window.location.search);
const token = params.get("token");

function checkAuthentication() {
    
    fetch(verifyURL, {
        headers: {
            "Authorization": token
        },
    })
    .then((res) => {
        if (res.status != 200) {
            window.location.href = "login/index.html";
        }
    })
}

const allTasksBtn = document.getElementById("allTasks");
allTasksBtn.addEventListener("click", getAllTasks);

function getAllTasks() {
    fetch(allTasks, {
        headers: {
            "Authorization": token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            const tasksContainer = document.querySelector("div#tasksContainer");
            const task = data[i];
            const container = document.createElement("div");
            container.classList.add("task-card");
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

const addTaskForm = document.forms.newTask;

addTaskForm.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();

    const formData = new FormData(addTaskForm);
    const task = formData.get("task");

    fetch(allTasks, {
        method: 'POST',
        body: JSON.stringify({
            id: 0,
            title: task,
            completed: false,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            "Authorization": token
        },
    })

    document.forms.newTask.classList.toggle("visible")
}

const delButton = document.getElementById("delTask");

delButton.addEventListener("click", deleteTask);

function deleteTask() {
    const delId = document.getElementById("id").value;
    fetch(oneTask + delId, {
        method: 'DELETE',
        headers: {
            "Authorization": token
        },
    })
}

const updTaskForm = document.forms.updateTask;

updTaskForm.addEventListener("submit", updateTask);

function updateTask(e) {
    e.preventDefault();

    const formData = new FormData(updTaskForm);
    const id = formData.get("upd_task_id");
    const task = formData.get("upd_task");
    const status = formData.get("status");

    fetch(allTasks, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: task,
            completed: status,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            "Authorization": token
        },
    })

    document.forms.updateTask.classList.toggle("visible");
}

const addBtn = document.getElementById("addTask");

addBtn.addEventListener("click", showAddForm);

function showAddForm() {
    document.forms.newTask.classList.toggle("visible");
}

const editBtn = document.getElementById("editTask");

editBtn.addEventListener("click", showEditForm);

function showEditForm() {
    document.forms.updateTask.classList.toggle("visible");
}