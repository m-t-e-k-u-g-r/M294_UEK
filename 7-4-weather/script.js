const form = document.forms.plz;

const api_url = 'https://corsproxy.io/?url=https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz='

const outputEl = document.querySelector("p");

form.addEventListener("submit", onSubmit);

let data;

function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const plz = formData.get("plz");

    const api = api_url + plz + "00";

    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            outputEl.innerText = data["currentWeather"].temperature;
        })
}