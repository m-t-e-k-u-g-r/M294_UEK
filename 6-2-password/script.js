const password = document.getElementById("password");
const password_confirmation = document.getElementById("repeatPassword")

password_confirmation.addEventListener("input", () => {
    if (password.value != password_confirmation.value) {
        password_confirmation.setCustomValidity("Passwords need to match")
    } else {
        password_confirmation.setCustomValidity("");
    }
});

const email = document.getElementById("email");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an email address!");
    } else {
        email.setCustomValidity("");
    }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
})