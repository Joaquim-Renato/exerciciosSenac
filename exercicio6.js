/*
var idade = parseInt(prompt("Digite sua idade: "))
// maior que 18 anos + considerar maior 

if (idade >= 18){
    document.write(`Você já é considerado maior de idade!!`)
} else {
    document.write(`Voê é considerado menor de idade!!`)
}
*/

var nome = prompt ("Digite o nome do alune:")

var nota1 = parseInt(prompt ("Digite a primeira nota : "))
var nota2 = parseInt(prompt ("Digite a segunda nota : "))



var media = (nota1 + nota2 ) / 2

alert(`A nota final do alune ${nome} é: ${media}`)

if (media >= 6 ){
    document.write(`Alune ${nome} esta APROVADE!!!`)
}

else {
    document.write(`Alune ${nome} REPROVADE!!!`)
}
