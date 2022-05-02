const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");

container.addEventListener("click", function (e) {
  if (e.target.className === "hamburger") {
    nav.classList.toggle("display");
  }
});

const mouseover = (e) => {
  if (e.target.classList.contains("feature")) {
    e.target.children[1].style.display = "block";
    e.target.children[1].style.transition = "all .3s";
  }
  if (e.target.classList.contains("company")) {
    e.target.children[1].style.display = "block";
    e.target.children[1].style.transition = "all .3s";
  }
};

nav.addEventListener("mouseover", mouseover);
