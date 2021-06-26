/* ".js-accordion dt" ".js-accordion dd"*/
export default class Accordion {
  constructor(listaTitulo, listadescription) {
    this.accordionList = document.querySelectorAll(listaTitulo);
    this.accordionItem = document.querySelectorAll(listadescription);
    console.log(this.accordionList);
    this.accordionList[0].classList.add("ativo");
    this.accordionItem[0].classList.add("ativo");
  }

  activeAccordion(item) {
    item.classList.toggle("ativo");
    item.nextElementSibling.classList.toggle("ativo");
  }

  addLinkEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.activeAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
