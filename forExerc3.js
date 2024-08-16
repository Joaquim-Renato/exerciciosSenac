//var numero = parseInt(prompt('Digite um numero:'))

var maiorQue50 = 0

for (var contador = 1; contador <= 10; contador++) {
    var numero = parseInt(prompt(`Digite o número ${contador}:`));

if (numero > 50){
    maiorQue50++
}

else {
    
}
}
 document.write(`A quantidade de numero maior que 50 é : ${maiorQue50}`)

