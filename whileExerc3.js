// Sistema para caixa eletronico 

var clientes = 0;
var maiorSaque = parseFloat(0);
var menorSaque = parseFloat(Infinity);

//var saqueTotal = saqueUnit * clientes;

while (clientes < 3) {
    var saqueUnit = parseFloat(prompt("Digite o valor que você deseja sacar: "));
    var saqueTotal = (clientes * saqueUnit);
    clientes += 1;


    if (saqueUnit > maiorSaque) {
        var maiorSaque = saqueUnit
        //document.write(`Saque de R$${saqueUnit.toFixed(2)} realizado com sucesso!`);
    }
    if (saqueUnit < menorSaque) {

        var menorSaque = saqueUnit

    }

    // if (clientes === 3 && saqueTotal === 3) {
    //     var mediaSaques = (saqueTotal / clientes);
    // }

}

document.write(`O maior valor sacado foi de R$ ${maiorSaque}<br>`)
document.write(`O menor valor sacado foi de R$ ${menorSaque}<br>`)
document.write(`A média dos valores sacados é de R$ ${(saqueTotal / clientes)}<br>`)
document.write(`O Total sacado no dia foi R$ ${saqueTotal}<br>`)

