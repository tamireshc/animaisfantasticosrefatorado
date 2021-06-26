export default class Modal {
  constructor(buttonAbrir, buttonFechar, modalContainer) {
    this.botaoAbrir = document.querySelector(buttonAbrir);
    this.botaoFechar = document.querySelector(buttonFechar);
    this.containerModal = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    //this = containerModal, tudo que esta por fora
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addLinkEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addLinkEvent();
    }

    return this;
  }
}
