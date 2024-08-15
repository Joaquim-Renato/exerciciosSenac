
document.write("Cardapio <br> 100 - Cachorro quente --> R$9.80 <br> 101 - Bauru Simples --> R$ 5.60 <br> 102 - Bauru com ovo --> R$ 7.20 <br> 103 Hamburguer --> R$ 12.30 <br> 104 - Cheeseburguer --> R$ 16.90");

var codPedido = ["100", "101", "102", "103", "104"]

var item = prompt("Digite o codigo do pedido :")
var qtd = parseInt(prompt("Digite a quantidade desejada:"))

var totalPagar = item * qtd 


switch (item){
    case codPedido = "100" :
    alert("O total a pagar é :" + qtd  * 9.80  )
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