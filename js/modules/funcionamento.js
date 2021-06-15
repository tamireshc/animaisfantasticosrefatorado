export default function funcionamento() {}

const diasfuncionamento = document.querySelector("[data-semana]");
const diasFuncionametoData = diasfuncionamento.dataset.semana
  .split(",")
  .map(Number);

const horaFuncionamento = document.querySelector("[data-horario]");
const horaFuncionementoData = horaFuncionamento.dataset.horario
  .split(",")
  .map(Number);

console.log(diasFuncionametoData, horaFuncionementoData);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const semanaAberto = diasFuncionametoData.includes(diaAgora);

const horarioAberto =
  horarioAgora >= horaFuncionementoData[0] &&
  horarioAgora < horaFuncionementoData[1];
console.log(semanaAberto, horarioAberto);

if (semanaAberto && horarioAberto) {
  diasfuncionamento.classList.add("aberto");
} else {
  diasfuncionamento.classList.remove("aberto");
}
