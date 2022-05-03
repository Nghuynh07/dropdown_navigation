const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");

container.addEventListener("click", function (e) {
  const lineOne = document.querySelector(".line-1");
  const lineTwo = document.querySelector(".line-2");
  const lineThree = document.querySelector(".line-3");

  if (e.target.className === "hamburger") {
    nav.classList.toggle("display");
  }

  if (nav.classList.contains("display")) {
    lineOne.style.cssText =
      "transform: rotate(-45deg) translateX(-0.55rem) translateY(-0.3rem);transform-origin: right";
    lineTwo.style.cssText =
      "transform: translateX(100%); opacity: 0;visibility: hidden";
    lineThree.style.cssText =
      "transform: rotate(45deg)  translateX(-0.6rem) translateY(0.35rem);transform-origin: bottom right";
  } else {
    lineOne.style.cssText = "transform: rotate(0)";
    lineTwo.style.cssText = "opacity: 1; visibility: visible";
    lineThree.style.cssText = "transform: rotate(0)";
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
