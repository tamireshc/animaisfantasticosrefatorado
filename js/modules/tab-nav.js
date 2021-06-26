/* ".js-tabmenu li" ".js-tabcontent section"*/
export default class tabNav {
  constructor(tabImage, tabSection) {
    this.tabMenu = document.querySelectorAll(tabImage);
    this.tabContent = document.querySelectorAll(tabSection);
    this.tabContent[0].classList.add("ativo");
    console.log(this.tabMenu, this.tabContent);
  }

  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove("ativo");
    });
    this.tabContent[index].classList.add("ativo");
  }
  addLinkEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
