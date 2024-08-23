
var tabela = '<table>';
tabela += '<tr><th>Código</th><th>Produto</th><th>Preço</th></tr>'; // Cabeçalho da tabela
tabela += '<tr><td>100</td><td>Cachorro quente</td><td>R$ 9.80</td></tr>';
tabela += '<tr><td>101</td><td>Bauru Simples</td><td>R$ 5.60</td></tr>';
tabela += '<tr><td>102</td><td>Bauru com ovo</td><td>R$ 7.20</td></tr>';
tabela += '<tr><td>103</td><td>Hamburguer</td><td>R$ 12.30</td></tr>';
tabela += '<tr><td>104</td><td>Cheeseburguer</td><td>R$ 16.90</td></tr>';
tabela += '</table>';

// Exibir a tabela no documento
document.write(tabela);

// document.write("Cardapio <br> 100 - Cachorro quente --> R$9.80 <br> 101 - Bauru Simples --> R$ 5.60 <br> 102 - Bauru com ovo --> R$ 7.20 <br> 103 Hamburguer --> R$ 12.30 <br> 104 - Cheeseburguer --> R$ 16.90");

/*<button id="proseguir">Proseguir com a operação</button>
<div id="resultado"></div>

<script>
// Função para lidar com o clique do botão
document.getElementById("proseguir").onclick = function() {
    document.getElementById("resultado").innerHTML = "Você pode prosseguir com sua operação!"; // Mensagem de confirmação
};
</script>
*/
var codPedido = ["100", "101", "102", "103", "104"]

var item = prompt("Digite o codigo do pedido :")
var qtd = parseInt(prompt("Digite a quantidade desejada:"))



switch (item){
    case codPedido = "100" :
    alert("O total a pagar é R$" + qtd  * 9.80  )
    break; 
    case codPedido = "101":
    alert("O total a pagar é :" + qtd  * 5.60  )
    break; 
    case "102":
    alert("O total a pagar é :" + qtd  * 7.20  )
    break; 
    case "103":
    alert("O total a pagar é :" + qtd  * 12.30  )
    break;  
    case "104":
    alert("O total a pagar é :" + qtd  * 16.90  )
    break; 
    default:
        alert("Escreva novamente ")


}