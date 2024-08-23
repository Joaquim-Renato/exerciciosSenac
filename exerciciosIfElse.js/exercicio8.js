var textoIntro = "Olá vamos iniciar um programinha para consultar sua linha de credito?! LET'S BORA!!!"
alert(textoIntro)


var salario = parseInt(prompt("Digite o valor do seu salario: "))

var parcela = parseInt(prompt("Digite o valor da parcela: "))

var limiteParcela = salario * 0.3; 


if (parcela > limiteParcela ){
    document.write(`O valor da sua prestação ultrapassa os 30% você não pode ultilizar nossa linha de creditos`);
}
else  
{
    document.write(`O valor da prestação sta dentro dos 30%, Credito liberado !!`)
}



