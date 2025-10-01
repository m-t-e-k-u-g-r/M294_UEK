const canton = [
  "ag", "ai", "ar", "be", "bl", "bs", "fr", "ge", "gl",
  "gr", "ju", "lu", "ne", "nw", "ow", "sg", "sh", "so",
  "sz", "tg", "ti", "ur", "vd", "vs", "zg", "zh"
];

const shuffledCantons = canton.sort( () => Math.random()-0.5 );
const limitedShuffeldCantons = shuffledCantons.slice(0,10);

const allXX = [...limitedShuffeldCantons,...limitedShuffeldCantons].sort( () => Math.random()-0.5 );

function getImagePath(canton) {
    return `img/${canton}.png`;
}

allXX.forEach((shuffledCantons) => {
    const new_img = document.createElement("img");
    new_img.src = getImagePath(shuffledCantons);
    new_img.classList.add("hidden");
    new_img.addEventListener("click", () => turn(new_img));
    document.querySelector(".grid").appendChild(new_img);
});

let counter = 0;

function turn(card) {
    counter++;
    card.classList.replace("hidden","turned");
    if ((counter % 2) == 0) {
        setTimeout(()=>checkTry(),1);
        return;
    }
    return;
}

let tries = 0;

function checkTry() {
    const turnedCards = document.querySelectorAll("img.turned");
    const img1 = turnedCards[0].getAttribute("src");
    const img2 = turnedCards[1].getAttribute("src");

    if (img1 === img2) {
        turnedCards.forEach((t)=> t.classList.replace("turned","found"));
        if (document.querySelectorAll("img.hidden").length==0) {
            alert("Congratulations! You've won!")
        }
    } else {
        tries++;
        document.getElementById("tries").innerText = "Try: "+tries;
        alert("You have not found it yet.... Tried: "+tries);       
        document.querySelectorAll("img.turned").forEach((x) => x.classList.replace("turned","hidden"));
    }
}