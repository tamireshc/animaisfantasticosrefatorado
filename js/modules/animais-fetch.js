import animaNumeros from "./anima-numeros.js";

export default function animaisFetch() {}

const numerosGrid = document.querySelector(".numeros-grid");
console.log(numerosGrid);

const url = "http://127.0.0.1:5500/animaisApi.json";

async function animaisFetchs(url) {
  try {
    const animaisDados = await fetch(url);
    const animaisDadosJson = await animaisDados.json();
    console.log(animaisDadosJson);
    createDivs(animaisDadosJson);
  } catch (erro) {
    console.log(Error(erro));
  }
}

function createDivs(numeros) {
  numeros.map((dado) => {
    console.log(dado);
    const novaDiv = document.createElement("div");
    novaDiv.classList.add("numero-animal");
    novaDiv.innerHTML = `<h3>${dado.especie}</h3> <span class="data-numero">${dado.quantidade}</span>`;
    numerosGrid.appendChild(novaDiv);
    animaNumeros();
  });
}

animaisFetchs(url);
