
var pilotos = [];
var voltaMaisRapida = 0;
var voltaMaisLenta = 0;


while (true){
var nomePiloto = prompt("Informe o nome do piloto ou digite 0 (ZERO) para finalizar o programa: ");
var velocidade = parseFloat(prompt("Informe a veocidade "));


if ( nomePiloto == '0'){
    break;
}

if (velocidade > voltaMaisRapida){
    voltaMaisRapida = velocidade;
}

if (velocidade < voltaMaisLenta){
    voltaMaisLenta = velocidade;
}

pilotos.push({nomePiloto, velocidade});

}

var media = (velocidade / pilotos); 

document.write(`O piloto mais rapido foi ${nomePiloto} atingindo uma velocidade de ${voltaMaisRapida}<br>`);
document.write(`O piloto mais lento foi ${nomePiloto} com uma velocidade de ${voltaMaisLenta}<br>`);
document.write(`A velocidade média dos pilotos foi de ${media}<br>`)