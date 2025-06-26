
const burger = document.getElementById("burger");
const nav = document.querySelector("header nav ul");

burger.addEventListener("click", () => {
burger.classList.toggle("active");
nav.classList.toggle("open");
burger.setAttribute(
    "aria-expanded",
    burger.classList.contains("active") ? "true" : "false"
    );
});
