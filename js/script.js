const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");

container.addEventListener("click", function (e) {
  if (e.target.className === "hamburger") {
    nav.classList.toggle("display");
  }
});

const target = (object) => {
  object.classList.toggle("display-nav");
  if (object.classList.contains("display-nav")) {
    object.parentElement.children[0].firstElementChild.attributes[0].nodeValue =
      "images/icon-arrow-up.svg";
  } else {
    object.parentElement.children[0].firstElementChild.attributes[0].nodeValue =
      "images/icon-arrow-down.svg";
  }
};

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("first-dropdown")) {
    const feature = document.querySelector(".feature-dropdown");
    target(feature);
  } else if (e.target.classList.contains("second-dropdown")) {
    const company = document.querySelector(".company-dropdown");
    target(company);
  } else {
    return;
  }

  if (e.target.classList.contains("arrow")) {
    const feature = document.querySelector(".feature-dropdown");
    target(feature);
  } else if (e.target.classList.contains("arrow")) {
    const company = document.querySelector(".company-dropdown");
    target(company);
  } else {
    return;
  }
});
