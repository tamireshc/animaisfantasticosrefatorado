import Funcionamento from "./modules/funcionamento.js";
const funcionamento = new Funcionamento("[data-semana]", "[data-horario]");
funcionamento.init();

import animaisFetch from "./modules/animais-fetch.js";
animaisFetch();

import fecthBitcoin from "./modules/fetch-bitcoin.js";
fecthBitcoin();

import { SlideNav, Slide } from "./modules/slide.js";
const slide = new Slide(".slide", ".slide-wrapper");
slide.init();
slide.changeSlide(2);
slide.activePrevSlide();

const slideNav = new SlideNav(".slide", ".slide-wrapper");
slideNav.init();
//slideNav.addArrow(".prev", ".next");
console.log(slideNav);

slideNav.addControl(".custom-controls");
