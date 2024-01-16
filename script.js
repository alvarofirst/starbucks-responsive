let btnMenu = document.querySelector(".menu");
let arrowDown = document.querySelectorAll(".accordion");
let width = screen.width;

arrowDown.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    let list = arrow.nextElementSibling;
    let containClass = arrow.nextElementSibling.classList.contains("visible");
    if (containClass && width < 1024) {
      list.classList.remove("visible");
      list.style.display = "block";
      return;
    } else if (!containClass && width < 1024) {
      list.classList.add("visible");
      list.style.display = "none";
    }
  });
});
