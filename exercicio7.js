var textoIntro = "Olá vamos iniciar um programinha de matemático?! LET'S BORA!!!"
alert(textoIntro)

var n1 = parseInt(prompt ("Digite um numero: "))
var n2 = parseInt(prompt ("Digite mais um numero: "))

var adicao = n1 + n2
var maior = adicao + 20
var menor = adicao - 5

if (adicao >= 20 ){
    document.write(`o resultado final é : ${maior} ` )
} else { (adicao <= 20)
    document.write(`o resultado final é : ${menor}`)
}
