const reduceBtn = document.getElementById("minus1");
const addBtn = document.getElementById("plus1");
const count = document.getElementById("counter");

reduceBtn.addEventListener("click", decrease);
addBtn.addEventListener("click", increase);

let counter = 0;
count.innerText = counter;

const baseURL = 'http://localhost:3000/%5C8-1-browser-history/';
let newURL = baseURL + counter;

const searchParams = new URLSearchParams(window.location.search);
count.innerText = Number(searchParams.get("counter"));

function decrease() {
    counter--;
    count.innerText = counter;
    history.pushState({ page: counter }, "title", "?counter=" + counter);
}

function increase() {
    counter++;
    count.innerText = counter;
    history.pushState({ page: counter }, "title", "?counter=" + counter);
}