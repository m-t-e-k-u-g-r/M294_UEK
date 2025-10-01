const d = new Date();
let hour = d.getHours();
function submitName() {
    let input = prompt(
        "Please enter your name",
        "John Doe"
    );
    if (5 < hour && hour <= 11) {
        alert("Guten Morgen " + input)
    };
    if (11 < hour && hour <= 17) {
        alert("Guten Tag " + input)
    };
    if (17 < hour && hour <= 21) {
        alert("Guten Abend " + input)
    };
    if (21 < hour || hour <= 5) {
        alert ("Gute Nacht " + input)
    }
}