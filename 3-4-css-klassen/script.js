document.querySelector('#choose').addEventListener("click", choose);

function choose() {
    document.querySelectorAll("li").forEach((li) => {
        li.classList.remove("marked")
    })    
    let num = Math.floor((Math.random() * 194) + 1);
    let selected = document.querySelectorAll("li")[num];
    selected.classList.add("marked");
}