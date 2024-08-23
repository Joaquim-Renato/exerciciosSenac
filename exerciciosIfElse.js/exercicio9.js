

    // Solicita os dados do veículo ao usuário
    var valorVeiculo = parseFloat(prompt("Digite o valor do veículo:"));
    var combustivel = prompt("Digite o tipo de combustível do veículo (gasolina, etanol, eletricidade, gás ou flex):");
    var tipoVeiculo = prompt("Digite o tipo do veículo (carro, moto, caminhonete, ônibus, micro-onibus, ):");
  
   
    // Define as alíquotas de acordo com o combustível e tipo de veículo
    var aliquota;

    if ((combustivel == 'gasolina' || combustivel == 'flex') && tipoVeiculo == 'carro') {
      aliquota = 0.04;
    } else if (combustivel == 'etanol' || combustivel == 'eletricidade' || combustivel == 'gás') {
      aliquota = 0.03;
    } else if (tipoVeiculo == 'moto' || tipoVeiculo == 'caminhonete' || tipoVeiculo == 'ônibus') {
        aliquota = 0.02;
      } else if  (tipoVeiculo == 'caminhão'){
        aliquota = 0.015;
      }
       
      else {
      alert("Combustível ou tipo de veículo inválido.");
    
    }
  
    // Calcula o valor do IPVA
    var ipva = valorVeiculo * aliquota;
  
    // Exibe o resultado
    alert(`O valor do IPVA é: R$ ${ipva}`);
