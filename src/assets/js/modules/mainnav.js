const elBody = document.querySelector("body");
const menuTriggers = document.querySelectorAll(".js-menutrigger");
const mobileMenu = document.querySelector(".js-mobilemenu");

function init() {
  menuTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      elBody.classList.toggle("has-menu");
      mobileMenu.classList.toggle("is-active");
    });
  });
}

export { init };
