let btnMenu = document.querySelector(".menu");
let navMenu = document.querySelector(".nav-menu");
let arrowDown = document.querySelectorAll(".accordion");

let headerFixed = document.getElementById("fixed");

function handleShowMenu() {
  btnMenu.addEventListener("click", () => {
    headerFixed.classList.toggle("fixed");
    console.log(headerFixed.classList);
  });
}

function handleClick() {
  arrowDown.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      let list = arrow.nextElementSibling;
      list.style.display = list.classList.contains("visible")
        ? "block"
        : "none";
      list.classList.toggle("visible");
    });
  });
}

if (window.innerWidth < 1024) {
  handleClick();
  handleShowMenu();
}
