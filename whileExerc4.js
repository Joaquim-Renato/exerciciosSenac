var totalVacinas = 30;
var somaDias = 0;

for (var contador = 1; contador <= totalVacinas; contador++) {
    var diasNasc = parseInt(prompt(`Digite quantos dias de nascimento tem o bebê ${contador}:`));


    if (!isNaN(diasNasc)) {
        somaDias += diasNasc;
    } else {
        alert("Por  favor insira uma valor valido!!");
        i--;
    }
}

var mediaDias = somaDias / totalVacinas;

alert(`A média de dias de nascimento dos bebês vacinados é: ${mediaDias.toFixed(2)}`);