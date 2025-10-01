const empty_path = "img/star_empty.jpg"
const filled_path = "img/star_filled.jpg"

for (let i = 1; i <= 5; i++) {
    const new_star = document.createElement("img");
    new_star.src = empty_path;
    new_star.classList.add("star-" + i); 
    new_star.addEventListener("click", rate);
    document.querySelector(".star_menu").appendChild(new_star);
}

function rate(star) {
    const Class = this.className;
    const number = parseInt(Class.split("-")[1]);
    for (let i = 1; i <= 5; i++) {
        const selected_stars = document.querySelector(".star-" + i);
        if(i <= number){
            selected_stars.src = filled_path;
        }else{
            selected_stars.src = empty_path;
        }
    }
}