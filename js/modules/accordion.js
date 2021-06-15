/* eslint-disable no-inner-declarations */
export default function accordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    const accordionItem = document.querySelectorAll(".js-accordion dd");
    console.log(accordionList);
    accordionList[0].classList.add("ativo");
    accordionItem[0].classList.add("ativo");

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
  }
}
