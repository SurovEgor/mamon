const buttonMenu = document.querySelector(".menu-toggle"),
      menu = document.querySelector(".header__right");

buttonMenu.addEventListener("click", () => {
    buttonMenu.classList.toggle("is-active");
    menu.classList.toggle("open");
});