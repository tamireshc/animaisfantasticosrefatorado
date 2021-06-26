import outsideClick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(menu) {
    this.dropdownMenus = document.querySelectorAll(menu);
    console.log(this.dropdownMenus);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle("ativo");
    console.log(element);
    outsideClick(element, ["touchstart", "click"], () => {
      element.classList.remove("ativo");
    });
  }

  addLinkEvent() {
    this.dropdownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((item) => {
        menu.addEventListener(item, this.handleClick);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
