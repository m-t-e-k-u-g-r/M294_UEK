// First task
const list_new_releases = document.querySelector('.games');
for (let new_release of list_new_releases.childNodes) {
    if (new_release.nodeType === 1) {
        console.log(new_release.textContent)
    }
}

// Second task
const list_top_sellers = document.querySelectorAll('.games')[1]
console.log(list_top_sellers.childNodes[3].textContent)

// Third task
document.querySelector(".games:nth-of-type(3) li:last-of-type");

//
document.querySelectorAll(".games:nth-of-type(2) li");

//
document.querySelector("h1");

//
document.getElementById("game-of-the-day");
document.querySelector("#game-of-the-day")

//
document.getElementByClassName("sale");
document.querySelectorAll(".sale");