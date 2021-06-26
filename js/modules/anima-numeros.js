export default class AnimaNumeros {
  constructor(animaisData, observerTarget) {
    this.numeros = document.querySelectorAll(animaisData);
    console.log(this.numeros);
    this.observerTarget = document.querySelector(observerTarget);

    this.handleMutation = this.handleMutation.bind(this);
  }
  //

  static incrementarNumero(numero) {
    const total = +numero.innerText;
    //console.log(total);
    const incremento = total / 100;
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = parseInt(start);
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  handleMutation(mutation) {
    //console.log(mutation[0]);
    if (mutation[0].target.classList.contains("ativo")) {
      this.observer.disconnect();
      this.animaNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
