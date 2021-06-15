export default function modal() {}

const botaoAbrir = document.querySelector("[data-modal='abrir']");
const botaoFechar = document.querySelector("[data-modal='fechar']");
const containerModal = document.querySelector("[data-modal='container']");

function abrirModal(event) {
  event.preventDefault();
  containerModal.classList.add("ativo");
}

botaoAbrir.addEventListener("click", abrirModal);

function fecharModal(event) {
  event.preventDefault();
  containerModal.classList.remove("ativo");
}
botaoFechar.addEventListener("click", fecharModal);

function cliqueForaModal(event) {
  //this = containerModal, tudo que esta por fora
  if (event.target === this) {
    fecharModal(event);
  }
}

containerModal.addEventListener("click", cliqueForaModal);
