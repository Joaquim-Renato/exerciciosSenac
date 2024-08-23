// radar de velocidade. 

var totalVeiculos = 0;
var multaVelocidade = parseFloat(0);
var somaVelocidades = parseFloat(0);

while (true) {
    var velocidade = parseFloat(prompt("Digite a velocidade do veiculo em km/h ou digite 0 (ZERO) para encerrar o programa:"))

    if (velocidade === 0) {
        break;
    }

    totalVeiculos++;
    somaVelocidades += velocidade;

    if (velocidade > 120) {
        multaVelocidade++;
    }


}

var velocidadeMedia = totalVeiculos > 0 ? (somaVelocidades / totalVeiculos).toFixed(2) : 0;


document.write(`A quantidade total de veiculos foi: ${totalVeiculos}<br>`);
document.write(`A velocidade média foi : ${velocidadeMedia} km/h <br>`);
document.write(`Quantidade de veículos multados foi : ${multaVelocidade}<br>`);


