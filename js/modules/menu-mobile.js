/* eslint-disable no-inner-declarations */
import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(botaoMenu, ulList, eventos) {
    this.menuButton = document.querySelector(botaoMenu);
    this.menuList = document.querySelector(ulList);
    this.eventos = eventos;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    //necessário´para previnir quando ocorre toques na tela do touchstart(mobile) tb add o click, se tornando um click duplo
    event.preventDefault();
    this.menuButton.classList.toggle("ativo");
    this.menuList.classList.toggle("ativo");
    outsideClick(this.menuList, ["click", "touchstart"], () => {
      this.menuButton.classList.remove("ativo");
      this.menuList.classList.remove("ativo");
    });
  }
  addLinkEvent() {
    this.eventos.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuList && this.menuButton) {
      this.addLinkEvent();
    }
    return this;
  }
}
