

var numero = parseInt(prompt("Digite o numero para ver a tabuada:"))

for (var contador = 1; contador <= 10; contador ++ ){
    var multiplicacao = numero * contador;

    document.write(`${numero} x ${contador} = ${multiplicacao}<br>`);
}


