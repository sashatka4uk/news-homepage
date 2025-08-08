/*************************\
    # mobile nav button
\*************************/
const navOpen = document.querySelector(".header__btn--open");
const navClose = document.querySelector(".header__btn--close");
const mobNav = document.querySelector(".nav");

navOpen.addEventListener("click", function () {
  mobNav.classList.add("nav__open");
});

navClose.addEventListener("click", function () {
  mobNav.classList.remove("nav__open");
});
