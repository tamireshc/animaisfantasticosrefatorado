export default class Funcionamento {
  constructor(diasFuncionamento, horarioFuncionamento) {
    this.diasfuncionamento = document.querySelector(diasFuncionamento);
    this.diasFuncionametoData = this.diasfuncionamento.dataset.semana
      .split(",")
      .map(Number);

    this.horaFuncionamento = document.querySelector(horarioFuncionamento);
    this.horaFuncionementoData = this.horaFuncionamento.dataset.horario
      .split(",")
      .map(Number);

    console.log(this.diasFuncionametoData, this.horaFuncionementoData);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
    return this.horarioAgora && this.diaAgora && this.dataAgora;
  }

  isOpen() {
    this.semanaAberto = this.diasFuncionametoData.includes(this.diaAgora);
    this.horarioAberto =
      this.horarioAgora >= this.horaFuncionementoData[0] &&
      this.horarioAgora < this.horaFuncionementoData[1];

    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.isOpen()) {
      this.diasfuncionamento.classList.add("aberto");
    } else {
      this.diasfuncionamento.classList.remove("aberto");
    }
  }

  init() {
    this.dadosAgora();
    this.ativaAberto();

    console.log(this.dadosAgora());
    console.log(this.isOpen());
    return this;
  }
}
