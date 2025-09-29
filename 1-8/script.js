const input_numbers = [];

function enterNumber() {
    let input = prompt(
        "Please enter a number",
        ""
    );
    input_numbers.push(Number(input));
    if (input == "") {
        const summ = input_numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        alert(summ)
    };
}