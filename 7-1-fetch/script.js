const api_url = "https://jsonplaceholder.typicode.com/posts";

fetch(api_url)
    .then((response) => response.json())
    .then((data) => fetchData(data))

function fetchData(json) {
    for (let i = 0; i < 100; i++) {
        const h1 = document.querySelector("h1")
        const post = json[i]
        const container = document.createElement("div")
        const title = document.createElement("h2")
        title.innerText = post.title
        const body = document.createElement("p")
        body.innerText = post.body
        container.appendChild(title)
        container.appendChild(body)
        h1.after(container)
    }
}
