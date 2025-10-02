const api_url = "https://jsonplaceholder.typicode.com/posts";

fetch(api_url)
    .then((response) => response.json())
    .then((data) => fetchData(data))

function fetchData(json) {
    for (let i = 0; i < 100; i++) {
        const posts_container = document.querySelector("div.posts_container")
        const post = json[i]
        const container = document.createElement("div")
        const title = document.createElement("h2")
        title.innerText = post.title
        const body = document.createElement("p")
        body.innerText = post.body
        const delButton = document.createElement("button")
        delButton.innerText = "Delete"
        container.appendChild(title)
        container.appendChild(body)
        container.appendChild(delButton)
        posts_container.appendChild(container)
    }
}

const input_form = document.forms.new_post;

input_form.addEventListener("submit", onSubmit);


function onSubmit(e) {
    e.preventDefault();

    const posts_container = document.querySelector("div.posts_container")
    const formData = new FormData(input_form);
    const title_text = formData.get("title");
    const message_text = formData.get("post");

    const body = document.createElement("div");
    const title = document.createElement("h2");
    const message = document.createElement("p");

    title.innerText = title_text;
    message.innerText = message_text;

    body.appendChild(title);
    body.appendChild(message);
    posts_container.appendChild(body);

    fetch(api_url, {
        method: 'POST',
        body: JSON.stringify({
            title: title_text,
            body: message_text,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}