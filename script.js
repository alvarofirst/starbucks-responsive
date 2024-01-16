let btnMenu = document.querySelector(".menu");
let arrowDown = document.querySelectorAll(".accordion");

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
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      handleClick();
    }
  });
}
