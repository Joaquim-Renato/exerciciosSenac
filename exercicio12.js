
var moedas = prompt("Digite qual a moeda você gostaria de converter pelo real, (Euro ou Dolar):") 
var real = parseFloat(prompt("Digite quantos reais você tem para o cambio:"))
var dolar = real * 5.51
var euro = real * 6.02 

if (moedas == 'dolar'){
    alert(`O valor revertido de reais para dolar será de ${dolar.toFixed(2)}`)
}
else if (moedas == 'euro'){
    alert(`O valor revertido de reais para euros será de ${euro.toFixed(2)}`)
}
