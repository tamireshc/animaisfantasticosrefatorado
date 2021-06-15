export default function tooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);

    this.addEventListener("mousemove", onMouseMove);

    this.addEventListener("mouseleave", onMouseLeave);

    console.log(event);

    function onMouseLeave() {
      tooltipBox.remove();
      this.removeEventListener("mouseleave", onMouseLeave);
      this.removeEventListener("mousemove", onMouseMove);
    }

    function onMouseMove() {
      tooltipBox.style.top = event.pageY + 20 + "px";
      tooltipBox.style.left = event.pageX + 20 + "px";
    }
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
