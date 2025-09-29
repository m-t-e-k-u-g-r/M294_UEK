function buttonClick() {
    document.body.style.backgroundColor = "red";

    document.getElementsByTagName("h1")[0].innerText = "Matteo Krüger";

    const p = document.querySelector("p");
    p.classList.add("large")

    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const liText = document.createTextNode("Text");
    li.append(liText);
    ul.append(li);

    document.querySelectorAll("li")[1].remove();
    
    const h1 = document.querySelector("h1");
    const img = document.createElement("img");
    img.src = "images/image_1.jpg"
    h1.after(img)
}