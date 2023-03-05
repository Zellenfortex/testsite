window.addEventListener("scroll", function () {
  const navColor = document.querySelector("nav");
  const paddingTop = document.querySelector("ul");
  const logo = document.querySelector(".logo__size");
  const before = document.querySelector(".active");
  const hamburgerResize = document.querySelector(".hamburger");

  // toggle classes
  navColor.classList.toggle("nav__color", window.scrollY > 0);
  paddingTop.classList.toggle("padding__topUl", window.scrollY > 0);
  logo.classList.toggle("logoImg", window.scrollY > 0);
  before.classList.toggle("lineActive", window.scrollY > 0);
  hamburgerResize.classList.toggle("resizeToggleMobile", window.scrollY > 0);
});

const underLineScrollY = document.querySelectorAll(".underline");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    underLineScrollY.forEach((underLineScrollY) => {
      underLineScrollY.classList.remove("underline");
      underLineScrollY.classList.add("underLineBoldWhenScroll");
    });
    // underLineScrollY.classList.remove("underline"));
  } else {
    // underLineScrollY.classList.add('underline');
    underLineScrollY.forEach((underLineScrollY) => {
      underLineScrollY.classList.add("underline");
      underLineScrollY.classList.remove("underLineBoldWhenScroll");
    });

    // underLineScrollY.classList.add("underline"));
  }
});


const hamburger = document.querySelector(".hamburger");
const layers = document.querySelectorAll(".hamburger span");

hamburger.addEventListener("click", (e) => {
  console.log(layers)
  layers.forEach((layers) => layers.classList.toggle("activeHamburger"));
});

