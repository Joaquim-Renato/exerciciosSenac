
var moedas = prompt("Digite qual a moeda você tem (Euro, Dolar ou Real):") 
var cambio = prompt("Digite para qual você gostaria de converter (Euro, Dolar ou Real ):  ")
var possui = parseFloat(prompt("Digite a quantidade de dinheirinhos que você tem para o cambio:"))

 
var realParaDolar = possui * 5.51
var realParaEuro = possui * 6.02 
var dolarParaReal = possui * 0.18
var euroParaReal = possui * 6.02
var euroParaDolar = possui * 1.09
var dolarParaEuro = possui * 0.92 

if (moedas == 'real' && cambio == 'dolar'){
    alert(`O valor revertido de reais para dolar será de ${realParaDolar}`)
}
else if (moedas == 'real' && cambio == 'euro'){
    alert(`O valor revertido de reais para euros será de ${realParaEuro}`)
}
else if (moedas == 'dolar' && cambio == 'real'){
    alert(`O valor revertido de dolares para reais será de ${dolarParaReal}`)
}
else if (moedas == 'euro' && cambio == 'real'){
    alert(`O valor revertido de euros para reais será de ${euroParaReal}`)
}
else if (moedas == 'euro' && cambio == 'dolar'){
    alert(`O valor revertido de euros para dolares será de ${euroParaDolar}`)
}
else if (moedas == 'dolar' && cambio == 'euro'){
    alert(`O valor revertido de dolares para euros será de ${dolarParaEuro}`)
}


//dolares para euros será de 21.7391304347826