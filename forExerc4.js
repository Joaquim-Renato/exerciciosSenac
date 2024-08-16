var notas = [];

var maiorNota = -Infinity;
var menorNota = Infinity;
var numAlunes = 25;
var somaNotas = 0;

for (var contador = 0; contador <=24; contador++)  {
    var nota = parseFloat(prompt("Digite a nota do aluno aqui : "))

 if (nota >= 0 && nota <= 10){
    notas.push(nota);
 
 if (nota > maiorNota){
    maiorNota = nota;
 }
 if (nota < menorNota){
    menorNota = nota;
 }

somaNotas += nota
}else {
    alert("Nota invalida. Por favor digite uma nota entre 0 e 10.");
    contador--;
}
var mediaNotas = somaNotas / numAlunes

}

document.write(`A Maior nota é ${maiorNota}` + "<br>" + `A menor nota é ${menorNota}` + "<br>" + `A Media das notas é ${mediaNotas.toFixed(2)}` );