var nome = prompt ("Digite o nome do cliente aqui: ")

var valorTotal = parseInt(prompt ("Digite o valor do produto aqui : "))


var desconto = valorTotal * 0.09;

var valorComDesconto = valorTotal - desconto; 


alert(`O valor com desconto de 9% é ${valorComDesconto} reais e você teve um desconto de ${desconto} reais`)

document.write(`O valor com desconto de 9% é ${valorComDesconto} reais e você teve um desconto de ${desconto} reais`)
