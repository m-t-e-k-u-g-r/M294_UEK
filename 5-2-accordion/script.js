const allAccordions = document.querySelectorAll(".accordion");
const allPanels = document.querySelectorAll(".panel");

allAccordions.forEach((a) => a.addEventListener("click", openPanel));

function openPanel(event) {
    event.target.nextElementSibling.classList.toggle("active");
}