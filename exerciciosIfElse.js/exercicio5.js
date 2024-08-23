


var textoPadrao = "Sabemos que o valor de um salario minimo é de R$1.320,00 "
alert(textoPadrao)

var valorPorKilo = salarioMinimo / 7 / 100;

var valorTotal = valorPorKilo * consumo;

var desconto = valorTotal * 0.1;
var valorComDesconto = valorTotal - desconto;

var consumo = parseInt(prompt("Digite o consumo medio aqui:"));

var salarioMinimo = 1320;

alert(`O valor pago em reais por quilowatts é de ${valorPorKilo} reais`);
alert(`O valor pago em reais a ser pago é de ${valorTotal} reais`);
alert(`O valor com desconto de 10% é ${valorComDesconto} reais e você teve um desconto de ${desconto} reais`);