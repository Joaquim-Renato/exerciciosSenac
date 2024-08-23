var cont = 1 
var soma = 0 

while(cont <=5){
    var numero = parseInt(prompt("Digite um numero: "))
    soma = soma + numero 
    cont+=1
}
document.write(`O resultado da soma é ${soma}`)