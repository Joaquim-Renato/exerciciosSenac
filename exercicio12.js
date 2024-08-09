
var moedas = prompt("Digite qual a moeda você tem (Euro, Dolar ou Real):") 
var cambio = prompt("Digite para qual você gostaria de converter (Euro, Dolar ou Euro ):  ")
var possui = parseFloat(prompt("Digite a quantidade de dinheirinhos que você tem para o cambio:"))

var real = 1 
var dolar = 1
var euro = 1
var realParaDolar = real * 5.51
var realParaEuro = real * 6.02 
var dolarParaReal = real * 0.18
var euroParaReal = real * 0.17
var euroParaDolar = euro * 1.09
var dolarParaEuro = dolar * 0.92 

if (moedas == 'real' && cambio == 'dolar'){
    alert(`O valor revertido de reais para dolar será de ${realParaDolar.toFixed(2)}`)
}
else if (moedas == 'real' && cambio == 'euro'){
    alert(`O valor revertido de reais para euros será de ${realParaEuro.toFixed(2)}`)
}
else if (moedas == 'dolar' && cambio == 'real'){
    alert(`O valor revertido de dolares para reais será de ${dolarParaReal.toFixed(2)}`)
}
else if (moedas == 'euro' && cambio == 'real'){
    alert(`O valor revertido de euros para reais será de ${euroParaReal.toFixed(2)}`)
}
else if (moedas == 'euro' && cambio == 'dolar'){
    alert(`O valor revertido de euros para dolares será de ${euroParaDolar.toFixed(2)}`)
}
else if (moedas == 'dolar' && cambio == 'euro'){
    alert(`O valor revertido de dolares para euros será de ${dolarParaEuro.toFixed(2)}`)
}