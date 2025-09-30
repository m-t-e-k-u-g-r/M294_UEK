let counter1 = 0;
let counter2 = 0;
document.getElementById("counter1").addEventListener("click", onClick1);
document.getElementById("counter2").addEventListener("click", onClick2);
function onClick1() {
    alert("Hallo Welt");
    counter1 += 1;
    document.getElementById("counter1").innerText = counter1;
}
function onClick2() {
    counter2 += 1;
    document.getElementById("counter2").innerText = counter2;
}