 var idade = parseInt(prompt("Digite sua idade: "))
 var prova = prompt("Você foi aprovade na avaliação ??")

 // Tabela da verdade (&&) (||) 

 if (idade >= 18 && prova=="sim") {
    document.write("você esta apto a cursas ")
 } else {
    document.write("Você não esta apto a cursar!!")
 }