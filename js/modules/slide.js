import debounce from "./debounce.js";
export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);

    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);

    this.changeEvent = new Event("changeEvent");

    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
  }

  transition(active) {
    this.slide.style.transition = active ? "transform .3s" : "";
  }

  moveSlide(distX) {
    this.dist.movePositionInitial = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }
  onStart(event) {
    let movetype;
    if (event.type === "mousedown") {
      event.preventDefault();
      this.dist.startX = event.clientX;
      console.log(this.dist.startX);
      movetype = "mousemove";
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      console.log(this.dist.startX);
      movetype = "touchmove";
    }

    this.wrapper.addEventListener(movetype, this.onMove);
    this.transition(false);
  }

  onMove(event) {
    //console.log("moveu");
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    //console.log("acabou");
    const movetype = event.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(movetype, this.onMove);
    this.dist.finalPosition = this.dist.movePositionInitial;
    this.transition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      console.log(this.dist.movement);
      this.activeNextSlide();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }

  //slides config

  slidePosition(slide) {
    // tamanho da tela - tamanho do slide /2
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    //console.log(this.wrapper.offsetWidth, slide.offsetWidth);
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        position,
        element,
      };
    });
  }

  slidesIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();
    console.log(this.index);
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  changeActiveClass() {
    this.slideArray.forEach((item) => item.element.classList.remove("active"));
    this.slideArray[this.index.active].element.classList.add("active");
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);
  }

  activeNextSlide() {
    if (this.index.next !== undefined) this.changeSlide(this.index.next);
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener("resize", this.onResize);
  }

  init() {
    this.transition(true);
    this.addSlideEvents();
    this.slidesConfig();
    this.onResize();
    // este ativação é para que os valores de prev active e next sejam cadastrados
    this.changeSlide(0);

    return this;
  }
}

export class SlideNav extends Slide {
  //como é uma classe extendida o novo contrutor é o super dentro do contructor antigo
  constructor(slide, wrapper) {
    super(slide, wrapper);
    this.bindControlEvents();
  }
  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }

  addArrowEvent() {
    this.prevElement.addEventListener("click", this.activePrevSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }

  createControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    //console.log(control);

    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index}</a></li>`;

      this.wrapper.appendChild(control);
    });
    return control;
  }

  eventControl(item, index) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener("changeEvent", this.activeControlItem);
  }

  activeControlItem() {
    this.controlArray.forEach((item) => item.classList.remove("active"));
    this.controlArray[this.index.active].classList.add("active");
  }

  addControl(customControls) {
    this.control =
      document.querySelector(customControls) || this.createControl();
    console.log(this.control);
    this.controlArray = [...this.control.children];
    console.log(this.controlArray);
    this.activeControlItem();
    this.controlArray.forEach((item, index) => {
      this.eventControl(item, index);
    });
  }
}
