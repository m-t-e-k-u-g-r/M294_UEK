document.querySelector(".menu button:first-of-type").addEventListener("click", addThree);
const image_div = document.querySelector(".gallery-grid");
function addThree() {
    const now = new Date();
    for (let i = 1; i <= 3; i++) {
        const picture = document.createElement("img");
        picture.src="https://picsum.photos/200/200?random=" + now.getTime() + i;
        image_div.append(picture)
    }
}

document.querySelector(".menu button:last-of-type").addEventListener("click", removeThree);
function removeThree() {
    for (let i = 1; i <= 3; i++) {
        const image_to_be_removed = document.querySelector(".gallery-grid img:first-child");
        image_to_be_removed.remove();
    }
}