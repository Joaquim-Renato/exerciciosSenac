
//toString().slice(-2): Obtém diretamente os dois últimos dígitos do ano.

var anoCadastro = new Date().getFullYear().toString().slice(-2);
// Array p/ armazenar os alunos 
var alunos = [];

// Gerar 15 novas matrículas
for (var contador = 1; contador <= 3; contador++) {

     // entrada do nome do aluno (pode substituir por prompt em um navegador)
     var nome = prompt (`Digite o nome dy Alune ${contador}`);

    // Cria matrícula 
    var matricula = anoCadastro + (contador < 10 ? '0' : '') + contador;


    // Adicionar o aluno ao array
    alunos.push({ nome, matricula });

// Exibir os alunos cadastrados

document.write(`Aluno: ${nome} | Matrícula: ${matricula}<br>`);
}