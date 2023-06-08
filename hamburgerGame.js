const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    main.classList.toggle("top-20");
}
)
