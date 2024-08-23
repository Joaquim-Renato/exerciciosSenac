var numeros = parseFloat(0);
var somaDosNumeros = parseFloat(0);
var totalNumeros = parseFloat(0);


while (true){
    var numeros = parseFloat(prompt("Digite o numero: "));

    if (somaDosNumeros <= 100){
        ++numeros;
    }

    totalNumeros++;
    somaDosNumeros += numeros;

    if (somaDosNumeros >= 100){
        break;
    }
}

document.write(`forma necessarios ${totalNumeros} números para alcançar uma soma igual a 100`);