var textoIntro = "Olá, vamos iniciar um programinha para calcular o seu IMC!!!"
alert(textoIntro)
var nome = prompt ("Por favor me informe o seu nome: ")
var peso = parseFloat(prompt("Digite o seu peso aqui:"))
var altura = parseFloat(prompt("Digite a sua altura : "))
var imc = peso / (altura * altura) 


if (imc < 18.5){
    alert(`${nome} seu IMC é de : ${imc.toFixed(2)} Você está abaixo do peso ideal`)
}
else if (imc >= 18.5 && imc <= 24.90){
    alert(`${nome} Seu IMC é de : ${imc.toFixed(2)} Parabéns, você está em seu peso normal!!`) 
}
else if (imc >= 25.9 && imc <= 29.9){
    alert(`${nome} Seu IMC é de : ${imc.toFixed(2)} Você esta com sobrepeso !`)
}
else if (imc >= 30 && imc <= 34.90 ) {
    alert(`${nome} Seu IMC é de : ${imc.toFixed(2)} Obesidade grau I`)
}

else if (imc >= 35 &&  imc <= 39.9 ){
    alert(`${nome} Seu IMC é de : ${imc.toFixed(2)} Obesidade grau II`)
}
else if(imc >= 40) {
    alert(`${nome} Seu IMC é de : ${imc.toFixed(2)} Obesidade grau III`)
}

