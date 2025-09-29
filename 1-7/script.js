let number = Math.floor(Math.random() * 100)
function guess() {
    let input = prompt(
        "Type a number between 1 and 100",
        " "
    );
    if (input == number) {
        alert("Congratulations! The correct number is " + number + "!")
    }
    if (input < number) {
        alert("The searched number is higher than " + input)
    };
    if (input > number) {
        alert("The searched number is lower than " + input)
    };
}