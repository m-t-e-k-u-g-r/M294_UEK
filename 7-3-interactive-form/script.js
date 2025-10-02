plz = document.querySelector("#postalCode");
plz.addEventListener("blur", searchPlace)

function searchPlace() {
    fetch('places.json')
    .then((res) => res.json())
    .then((data) => {
        const enteredZipcode = document.getElementById("postalCode");
        let zips = Array.from(data);
        for (let i=0; i < zips.length; i++) {
            if (enteredZipcode.value == zips[i].zipcode) {
                const location = document.getElementById("location")
                location.value = zips[i].place;
                break
            }
        }
    })
}