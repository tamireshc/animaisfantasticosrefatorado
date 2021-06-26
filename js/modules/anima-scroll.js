import debounce from "./debounce.js";

export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    // função debounce para que animaScroll não ative muitas vezes

    this.animaScroll = debounce(this.animaScroll.bind(this), 200);
  }

  animaScroll() {
    console.log("teste");
    this.sections.forEach((section) => {
      const sectionTop =
        section.getBoundingClientRect().top - this.windowMetade;

      if (sectionTop < 0) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      window.addEventListener("scroll", this.animaScroll);
    }
    // caso tenha algo na tela já animar ao abrir
    this.animaScroll();
    return this;
  }
}
