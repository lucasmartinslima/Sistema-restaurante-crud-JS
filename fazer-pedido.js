var filtroListener = document.getElementById('filtro');
filtroListener.addEventListener('mouseout', addNaTela, false)

function inicializar(){
	addNaTela();
}

// Mostra todas os alimentos
function addNaTela(){
        
        var table = document.getElementById('exibirComidas')
        var comidas = JSON.parse(localStorage.getItem('comida'));
   
		var filtro = document.getElementById('filtro').value;
	
	    console.log('Função chamada addNaTela()' + filtro)
	
        table.innerHTML = '<tr class="cabecalho" id="cabecalhoTable"><th>Tipo</th><th>Comida</th><th>Preço</th><th>Add ao pedido</th></tr> ';

    for (var i =  0; i < comidas.length ; i++) {
            var nome = comidas[i].nome;
            var preco = comidas[i].preco;
            var tipo = comidas[i].tipo;
			
		// Se a comida for igual ao filtro escolhido mostrará ela
		if(comidas[i].tipo == filtro){
			table.innerHTML += '<tr><td> <img class="icone-comida" src="icones-comida/'+tipo + '.png"/> </td><td>'  + nome + '</td><td>' + preco + '</td><td> <img class="icone-funcional" src="icones-funcionais/add-alimento.png" onclick="addAlimento('+i+')"/>    </td></tr>';
		//se o filtro for pra mostrar tudo ele executa o codigo de baixo
		}else if(filtro == 'tudo'){
				table.innerHTML += '<tr class="test"><td> <img class="icone-comida" src="icones-comida/'+tipo + '.png"/> </td><td>'  + nome + '</td><td>' + preco + '</td><td> <img class="icone-funcional" src="icones-funcionais/add-alimento.png" onclick="addAlimento('+i+')"/>    </td></tr>';
		}
    }
}





// ADICIONAR ITEM AO PEDIDO E TIRAR O ITEM
var precoTotal = 0.0;
var pedidos = []

function addAlimento(id){
	
var comidas = JSON.parse(localStorage.getItem('comida'))
var tablePedido = document.getElementById('pedidoTable')	
var divPrecoTotal = document.getElementById('divTotal')	

console.log("alimento: " +  id + "  " + comidas[id].nome + "  " + comidas[id].preco)
	
var nome = comidas[id].nome;
var tipo = comidas[id].tipo;
	
var precoComida = parseFloat(comidas[id].preco)
	
this.precoTotal += precoComida;
console.log(this.precoTotal)
	
	
var pedido = {
	nome_alimento : nome,
	preco_alimento : precoComida,
	tipo_alimento : tipo
}

this.pedidos.push(pedido)
	
console.log(pedidos)	
	divPrecoTotal.innerHTML = '<h2>TOTAL: ' + this.precoTotal.toFixed(2) + ' </h2>';

tablePedido.innerHTML  = '';
	
for(i = 0; i < this.pedidos.length; i++){
			
tablePedido.innerHTML += '<tr><td> <img class="icone-comida" src="icones-comida/'+ this.pedidos[i].tipo_alimento + '.png"/> </td><td>'  + this.pedidos[i].nome_alimento + '</td><td>' +  this.pedidos[i].preco_alimento + '</td><td> <img class="icone-funcional" src="icones-funcionais/remover.png" onclick="removerItemPedido('+i+')"/>    </td></tr>';

		
	}


}
// Ao clicar no icone vermelho de remover ele executara esse código
function removerItemPedido(preco){
	
	var tablePedido = document.getElementById('pedidoTable')
	var divPrecoTotal = document.getElementById('divTotal')	

	this.precoTotal -=  this.pedidos[preco].preco_alimento;
	
	this.pedidos.splice(preco, 1) //excluir item 
	
	tablePedido.innerHTML  = ''; 
	divPrecoTotal.innerHTML = '<h2>TOTAL: ' + this.precoTotal.toFixed(2) + ' </h2>';
	
for(i = 0; i < this.pedidos.length; i++){	
	tablePedido.innerHTML += '<tr><td> <img class="icone-comida" src="icones-comida/'+ this.pedidos[i].tipo_alimento + '.png"/> </td><td>'  + this.pedidos[i].nome_alimento + '</td><td>' +  this.pedidos[i].preco_alimento + '</td><td> <img class="icone-funcional" src="icones-funcionais/remover.png" onclick="removerItemPedido('+i+')"/>    </td></tr>';
	
	}
}


//REGISTRAR PEDIDOS FEITOS NO NAVEGADOR
// salvar pedido com nome do cliente no local storage
var regPedido = document.getElementById('btnRegPedido');
regPedido.addEventListener('click', salvarPedido ,false)
function salvarPedido(){
	
var data = new Date();
var dia     = data.getDate();           // 1-31
var mes     = data.getMonth();          // 0-11 (zero=janeiro)     
var ano4    = data.getFullYear();       // 4 dígitos
	
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59

var nomeCliente = document.getElementById('nomeCliente').value;
var dinheiroCliente = document.getElementById('dinheiroCliente').value;	
	
	var PedidoSalvar = {
		nomeCliente : nomeCliente.toUpperCase(),
		dia : dia,
		mes : mes + 1,
		ano : ano4,
		hora : hora,
		minutos : min,
		dinheiroCliente: dinheiroCliente,
		comida : pedidos	
	}
	
if(nomeCliente && calcularTroco() >= 0){	
	
	 if(localStorage.getItem('PedidoCliente') == null){
            var PedidosFeitos = [];
            PedidosFeitos.push(PedidoSalvar);
            localStorage.setItem('PedidoCliente', JSON.stringify(PedidosFeitos));
        }else{
            var PedidosFeitos = JSON.parse(localStorage.getItem('PedidoCliente'));
            PedidosFeitos.push(PedidoSalvar);
            localStorage.setItem('PedidoCliente', JSON.stringify(PedidosFeitos));
    }
	console.log('Executado Salvar pedido')
	alert('PEDIDO SALVO COM SUCESSO!')
	window.location.href = 'fazer-pedido.html';
}else{
	alert('Confira se o troco está certo ou se o campo nome do cliente está vazio!')
}

	
	
	
	
}

// limpar dados do salvos no local storage 
function limparPedidos(){
  localStorage.setItem('PedidoCliente', JSON.stringify([]));
}



// Função que vai calcular o troco
setInterval(calcularTroco, 100)
var precoTroco;
function calcularTroco(){
	
var dinheiroCliente = document.getElementById('dinheiroCliente').value;
var troco = document.getElementById('troco');
	
if(dinheiroCliente > 0){
	this.precoTroco = dinheiroCliente - this.precoTotal  ;
	troco.innerHTML = ' <p> Troco para o cliente: ' + precoTroco.toFixed(2)  + '</p> ';
		return this.precoTroco;
	}else{		
troco.innerHTML = ' <p> Esperando dinheiro do cliente para calcular troco..</p> ';
	}

	
}









function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
} 

