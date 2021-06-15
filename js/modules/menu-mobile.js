/* eslint-disable no-inner-declarations */
import outsideClick from "./outsideclick.js";

export default function menuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ["click", "touchstart"];

  if (menuList && menuButton) {
    function openMenu() {
      menuButton.classList.toggle("ativo");
      menuList.classList.toggle("ativo");
      outsideClick(menuList, ["click", "touchstart"], () => {
        menuButton.classList.remove("ativo");
        menuList.classList.remove("ativo");
      });
    }
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
