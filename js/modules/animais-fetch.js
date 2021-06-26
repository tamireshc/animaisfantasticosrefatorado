import AnimaNumeros from "./anima-numeros.js";

export default function animaisFetch() {
  const url = "http://127.0.0.1:5500/animaisApi.json";

  function createAnimal(animal) {
    const novaDiv = document.createElement("div");
    novaDiv.classList.add("numero-animal");
    novaDiv.innerHTML = `<h3>${animal.especie}</h3> <span class="data-numero">${animal.quantidade}</span>`;
    return novaDiv;
  }

  const numerosGrid = document.querySelector(".numeros-grid");
  console.log(numerosGrid);

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisDados = await fetch(url);
      const animaisDadosJson = await animaisDados.json();
      console.log(animaisDadosJson);

      animaisDadosJson.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarAnimais();
}
