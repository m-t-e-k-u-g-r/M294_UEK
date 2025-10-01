const input_numbers = []

const form = document.forms.form;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const number = formData.get("number");
    input_numbers.push(Number(number));
    console.log(input_numbers);
});

document.getElementById("calculate").addEventListener("click", calculate);

function calculate() {
    const summ = input_numbers.reduce((acc, val) => acc + val, 0);
    document.getElementById("result").innerText = summ;
}