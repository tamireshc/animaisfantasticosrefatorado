export default function animaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");
  console.log(numeros);

  function animaNumbers() {
    numeros.forEach((numero) => {
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
    });
  }

  function handleMutation(mutation) {
    //console.log(mutation[0]);
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumbers();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
