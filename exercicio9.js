
function calcularIPVA() {
    // Solicita os dados do veículo ao usuário
    const valorVeiculo = parseInt(prompt("Digite o valor do veículo:"));
    const combustivel = prompt("Digite o tipo de combustível do veículo (gasolina, etanol, eletricidade, gás ou flex):");
    const tipoVeiculo = prompt("Digite o tipo do veículo (carro, moto, caminhonete, ônibus, micro-onibus, ):");
  
   
    // Define as alíquotas de acordo com o combustível e tipo de veículo
    var aliquota;

    if (combustivel == 'gasolina' || combustivel == 'flex') {
      aliquota = 0.04;
    } else if (combustivel == 'etanol' || combustivel == 'eletricidade' || combustivel == 'gás') {
      aliquota = 0.03;
    } else if (tipoVeiculo == 'moto' || tipoVeiculo == 'caminhonete' || tipoVeiculo == 'ônibus') {
      if (tipoVeiculo == 'caminhonete') {
        aliquota = 0.02;
      } else {
        aliquota = 0.015;
      }
    } else {
      alert("Combustível ou tipo de veículo inválido.");
      return;
    }
  
    // Calcula o valor do IPVA
    const ipva = valorVeiculo * aliquota;
  
    // Exibe o resultado
    alert(`O valor do IPVA é: R$ ${ipva}`);
}

calcularIPVA();
