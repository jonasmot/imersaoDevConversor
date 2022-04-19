function Converter() {
    var valorElemento = document.getElementById("valor"); 
    var valor = valorElemento.value;
    
    var valorEmRealNumerico = parseFloat(valor);
    
    var valorEmDolarNumerico = valorEmRealNumerico * 0.20;
    
    
    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = "O resultado em Dólar é U$ " + valorEmDolarNumerico;
    elementoValorConvertido.innerHTML = valorConvertido;
    
    
  }
    
  function Converter2() {
    var valorElemento = document.getElementById("valor"); 
    var valor = valorElemento.value;
    
    var valorEmRealNumerico = parseFloat(valor);
    var valorLibra = valorEmRealNumerico * 0.16;
    
    var elementoOutraConversao = document.getElementById('outraConversao');
    var valorConversao = "O resultado em Libras Esterlinas é 	£ " + valorLibra;
    elementoOutraConversao.innerHTML = valorConversao;
  }