var numero = parseInt(prompt("Digite um numero para ver a sua tabuada: "))
var cont = 0
var multiplicacao = 0 


while(cont < 11){
    multiplicacao = numero * cont 
   
    document.write(`${numero} x ${cont} = ${multiplicacao}<br>`)
    cont+=1
}
