var nome = prompt ("Digite o nome do Alune aqui: ")

var nota1 = parseInt(prompt ("Digite a nota do primeiro bimestre : "))
var nota2 = parseInt(prompt ("Digite a nota do segundo bimestre : "))
var nota3 = parseInt(prompt ("Digite a nota do terceiro bimestre : "))
var nota4 = parseInt(prompt ("Digite a nota do quarto bimestre : "))


var media = (nota1 + nota2 + nota3 + nota4) / 4 

alert(`A nota final do alune ${nome} é: ${media}`)
