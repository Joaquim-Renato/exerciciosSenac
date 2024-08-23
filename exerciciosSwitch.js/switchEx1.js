var escolhaOperacao = prompt("Qual operação voce deseja realizar? (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO ou DIVISÃO)")

var n1 = parseInt(prompt("Digite um numero:"))
var n2 = parseInt(prompt("Digite mais um numero:"))

var mutiplicacao = n1 * n2
var soma = n1 + n2 
var subtacao = n1 - n2
var divisao = n1 / n2 

switch (escolhaOperacao){
    case "Soma":
    document.write(`O resultado da sua soma é ${soma}`)
        break;
    case "Subtração":
        document.write(`O resultado da sua subtração é ${subtacao}`)
        break;
        case "Multiplicação":
    document.write(`O resultado da sua multiplicação é ${mutiplicacao}`)
    break;
    case "Divisão":
        document.write(`O resultado da sua divisão é ${divisao}`)
        break;
        default:
            document.write("Escreva novamente ")
    
}