import ScrollSuave from "./modules/scroll-suave.js";
const scrollSuave = new ScrollSuave(".js-menu a[href^='#']");
scrollSuave.init();

import TabNav from "./modules/tab-nav.js";
const tabNav = new TabNav(".js-tabmenu li", ".js-tabcontent section");
tabNav.init();

import Accordion from "./modules/accordion.js";
const accordion = new Accordion(".js-accordion dt", ".js-accordion dd");
accordion.init();

import AnimaScroll from "./modules/anima-scroll.js";
const animaScroll = new AnimaScroll(".js-scroll");
animaScroll.init();

import Modal from "./modules/modal.js";
const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']"
);
modal.init();

import Tooltip from "./modules/tooltip.js";
const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

import DropDownMenu from "./modules/dropdown-menu.js";
const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

import MenuMobile from "./modules/menu-mobile.js";
const menuMobile = new MenuMobile(
  "[data-menu='button']",
  "[data-menu='list']",
  ["click", "touchstart"]
);
menuMobile.init();
