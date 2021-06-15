import outsideClick from "./outsideclick.js";

export default function dropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  console.log(dropdownMenus);

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((item) => {
      menu.addEventListener(item, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }
}
