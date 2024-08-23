var textoIntro = "Olá vamos iniciar um programinha de multiplicação ?! LET'S BORA!!!"
alert(textoIntro)
var num1 = parseInt(prompt ("Digite um numero: "))
var num2 = parseInt(prompt ("Digite mais um numero: "))


var multiplicacao = num1 * num2

alert("O resultado da multiplicacao é: " + multiplicacao) // convencional (, ou +)



document.write(`o resultado da multiplicação é ${multiplicacao}`) // modo concatenado 1
