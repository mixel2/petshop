//NAVBAR DESAPARECER
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

//HAMBURGUER MENU

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("fa-x");
  navlist.classList.toggle("open");
};

//CURSOR CUSTOMIZADO

const innerCursor = document.querySelector(".inner-cursor");
const outerCursor = document.querySelector(".outer-cursor");
document.addEventListener("mousemove", (e) => {
  innerCursor.style.left = e.pageX + "px";
  innerCursor.style.top = e.pageY + "px";

  outerCursor.style.left = e.pageX + "px";
  outerCursor.style.top = e.pageY + "px";
});

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});
