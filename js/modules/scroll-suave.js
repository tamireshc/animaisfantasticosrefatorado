/* eslint-disable no-inner-declarations */
export default function scrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  console.log(linksInternos);

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      //const topo = section.offsetTop;

      //forma alternativa
      //   window.scrollTo({
      //     top: topo,
      //     behavior: "smooth",
      //   });

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((item) => {
      item.addEventListener("click", scrollToSection);
    });
  }
}
