const loginURL = "http://localhost:3000/auth/jwt/sign"
const tasks_url = "http://localhost:3000/auth/jwt/tasks"

const loginForm = document.forms.login;

loginForm.addEventListener("submit", login);

function login(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    fetch(loginURL, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    })
    .then((res) => res.json())
    .then((data) => {
        fetch(tasks_url, {
            headers: {
                "Authorization": "Bearer " + data["token"]},
        })
    })

    window.location.href = "../index.html";
}

